import { pathToFileURL } from 'node:url';
import PortfolioScreenshot from './screenshot-gatherer.mjs';
const { default: standard } = await import(pathToFileURL(`${process.env.PORTFOLIO_LIGHTHOUSE_ROOT}/core/config/default-config.js`));
export default {
  ...standard,
  artifacts: standard.artifacts.map(artifact => artifact.id === 'FullPageScreenshot'
    ? { id: 'FullPageScreenshot', gatherer: new PortfolioScreenshot() } : artifact),
  settings: { ...standard.settings, onlyCategories: ['accessibility'], throttlingMethod: 'provided' }
};
