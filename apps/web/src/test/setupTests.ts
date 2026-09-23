import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement the Pointer Events APIs that Radix UI relies on
// (hasPointerCapture / setPointerCapture / scrollIntoView). Without these,
// user-event interactions with Radix components (Tabs, Dialog, etc.) hang.
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}
if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
}
if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

// jsdom doesn't implement ResizeObserver, which @radix-ui/react-use-size
// (used by Checkbox, among others) relies on.
if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
