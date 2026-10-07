// Use normal document navigation because private Next.js routing services were not exported.
document.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.target.closest?.('a[href]');
  if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
  const url = new URL(anchor.href, location.href);
  if (url.origin !== location.origin || url.pathname === location.pathname) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.assign(url.href);
}, true);
