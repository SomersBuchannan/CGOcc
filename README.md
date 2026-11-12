# CGOcc

Project page for **CGOcc: Learning Cross-Gaussian Dependencies for 3D Semantic Occupancy Prediction**.

- [Project page](https://SomersBuchannan.github.io/CGOcc/)
- [Paper and supplementary material](assets/CGOcc.pdf)

This repository contains the project website and manuscript. It does not currently contain the training or inference implementation.

## Local preview

No build step or external JavaScript dependencies are required.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## GitHub Pages

Publish from `main`, folder `/ (root)`, under **Settings → Pages**. `.nojekyll` keeps this a plain static site.

## Updating the page

- `index.html`: paper text, authors, benchmark tables, BibTeX.
- `style.css`: responsive styling.
- `script.js`: accessible figure enlargement and citation copying.
- `assets/`: original manuscript figures and the paper PDF.

The source manuscript used for this page is Overleaf commit `100e050d071f188058fdc3cb74dcce650c5ed433` (checked November 12, 2026). The PDF is the prepared author manuscript and supplement built from that same revision. Numerical results reproduce the manuscript's reported evaluation, not a claim about an independently verified current leaderboard. No conference acceptance or arXiv identifier is asserted.

Figures and manuscript belong to their respective authors. No third-party website template is used. No analytics, cookies, external fonts, or remote runtime scripts are included.
