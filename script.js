'use strict';
const dialog = document.getElementById('figure-dialog');
const image = document.getElementById('dialog-image');
const title = document.getElementById('dialog-title');
let lastFigure;
document.querySelectorAll('.zoomable').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    lastFigure = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    title.textContent = link.dataset.title;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
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
