'use strict';

const dialog = document.getElementById('figure-dialog');
const image = document.getElementById('dialog-image');
const title = document.getElementById('dialog-title');
const zoomLabel = document.getElementById('zoom-level');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
let lastFigure;
let zoom = 1;

function setZoom(value) {
  zoom = Math.min(4, Math.max(1, value));
  image.style.width = `${zoom * 100}%`;
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  zoomIn.disabled = zoom === 4;
  zoomOut.disabled = zoom === 1;
}

document.querySelectorAll('.zoomable').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    lastFigure = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    title.textContent = link.dataset.title;
    setZoom(1);
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector('.dialog-content').scrollTo(0, 0);
  });
});
zoomIn.addEventListener('click', () => setZoom(zoom + .5));
zoomOut.addEventListener('click', () => setZoom(zoom - .5));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastFigure?.focus();
});

document.getElementById('copy-citation').addEventListener('click', async () => {
  const citation = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = 'Citation copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});

// A restrained table of contents tracks the section currently being read.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.contents a')];
  const observer = new IntersectionObserver(entries => {
    const active = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!active) return;
    links.forEach(link => {
      if (link.hash === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-50px 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id], #top').forEach(section => observer.observe(section));
}
