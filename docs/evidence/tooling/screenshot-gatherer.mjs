// Lighthouse screenshot-only extension. It restores the requested viewport after
// Lighthouse's lazy-image loading pass so 100svh isn't inflated to page height.
// Audit scores are collected separately with unmodified Lighthouse defaults.
import { pathToFileURL } from 'node:url';
const vendor = process.env.PORTFOLIO_LIGHTHOUSE_ROOT;
if (!vendor) throw new Error('Set PORTFOLIO_LIGHTHOUSE_ROOT to the installed lighthouse package directory.');
const { default: FullPageScreenshot } = await import(pathToFileURL(`${vendor}/core/gather/gatherers/full-page-screenshot.js`));
const emulation = await import(pathToFileURL(`${vendor}/core/lib/emulation.js`));
export default class PortfolioScreenshot extends FullPageScreenshot {
  async _resizeViewport(context, metrics) {
    await super._resizeViewport(context, metrics);
    await emulation.emulate(context.driver.defaultSession, context.settings);
    await context.driver.executionContext.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }, { args: [] });
  }
  async _takeScreenshot(context) {
    const session = context.driver.defaultSession;
    const metrics = await session.sendCommand('Page.getLayoutMetrics');
    const width = context.settings.screenEmulation.width;
    const height = Math.ceil(metrics.cssContentSize.height);
    const { data } = await session.sendCommand('Page.captureScreenshot', {
      format: 'png', captureBeyondViewport: true,
      clip: { x: 0, y: 0, width, height, scale: 1 }
    });
    return { data: `data:image/png;base64,${data}`, width, height };
  }
  async getArtifact(context) {
    const result = await super.getArtifact(context);
    result.layoutEvidence = await context.driver.executionContext.evaluate(() => {
      const rect = element => {
        const r = element.getBoundingClientRect();
        return { x: r.x, y: r.y + scrollY, width: r.width, height: r.height };
      };
      return {
        viewport: { width: innerWidth, height: innerHeight },
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        theme: document.documentElement.dataset.theme,
        menuHidden: document.getElementById('mobile-menu').hidden,
        desktopNavigationDisplay: getComputedStyle(document.querySelector('.nav-links')).display,
        mobileNavigationDisplay: getComputedStyle(document.getElementById('mobile-menu')).display,
        anchorOffsets: [...document.querySelectorAll('section[id],main[id],h1[id],h2[id],h3[id],h4[id]')].map(el => ({ id: el.id, scrollMarginTop: getComputedStyle(el).scrollMarginTop })),
        headings: [...document.querySelectorAll('h1,h2,h3,h4')].map(el => ({ text: el.textContent.trim(), level: el.tagName, ...rect(el) })),
        cards: [...document.querySelectorAll('.project-card')].map(el => ({ title: el.querySelector('h3').textContent, ...rect(el) })),
        fixedElements: [...document.querySelectorAll('body *')].filter(el => getComputedStyle(el).position === 'fixed').map(el => ({ class: el.className, ...rect(el) })),
        images: [...document.images].map(el => ({ src: el.currentSrc, alt: el.alt, loaded: el.complete && el.naturalWidth > 0, ...rect(el) }))
      };
    }, { args: [] });
    return result;
  }
}
