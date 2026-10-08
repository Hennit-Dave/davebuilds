// Regression check of the actual menu handlers with a minimal DOM/event harness.
// This is not a browser or screen-reader interaction test.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const listeners = new Map();
const document = {
  activeElement: null,
  addEventListener: (name, callback) => listeners.set(name, callback),
};
function element() {
  const events = new Map();
  const attributes = new Map();
  const classes = new Set();
  return {
    hidden: true,
    classList: { add: value => classes.add(value), remove: value => classes.delete(value) },
    setAttribute: (name, value) => attributes.set(name, value),
    getAttribute: name => attributes.get(name),
    addEventListener: (name, callback) => events.set(name, callback),
    trigger: name => events.get(name)(),
    focus() { document.activeElement = this; },
    contains(target) { return target === this; },
  };
}
const button = element(), menu = element(), link = element(), desktopLink = element();
menu.contains = target => target === menu || target === link;
menu.querySelectorAll = () => [link];
document.getElementById = id => id === 'menu-toggle' ? button : menu;
document.querySelector = () => desktopLink;
const desktop = { matches: false, addEventListener: (_, callback) => { desktop.change = callback; } };
runInNewContext(readFileSync(new URL('../../../common.js', import.meta.url), 'utf8') + '\ninitMobileMenu();', {
  document, window: { matchMedia: () => desktop },
});
assert.equal(menu.hidden, true);
button.trigger('click');
assert.equal(menu.hidden, false);
assert.equal(button.getAttribute('aria-expanded'), 'true');
link.focus();
listeners.get('keydown')({ key: 'Escape' });
assert.equal(menu.hidden, true);
assert.equal(document.activeElement, button);
button.trigger('click');
link.focus();
desktop.matches = true;
desktop.change();
assert.equal(menu.hidden, true);
assert.equal(button.getAttribute('aria-expanded'), 'false');
assert.equal(document.activeElement, desktopLink);
desktop.matches = false;
desktop.change();
assert.equal(menu.hidden, true);
button.trigger('click');
link.trigger('click');
assert.equal(menu.hidden, true);
button.trigger('click');
listeners.get('click')({ target: {} });
assert.equal(menu.hidden, true);
console.log('PASS: open/ARIA, Escape/focus return, desktop resize/focus transfer, closed after mobile return, link dismissal, outside dismissal.');
