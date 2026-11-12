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
- `style.css`: responsive academic layout and self-hosted Computer Modern typography.
- `script.js`: accessible figure enlargement and citation copying.
- `assets/`: 12 original manuscript figures and the paper PDF. The Section 3.3 flowchart and all supplementary comparisons are shown inline; clicking a figure optionally opens a zoomable view.
- `assets/fonts/`: Computer Modern Unicode webfonts and their SIL Open Font License.

The page includes five tables and extended SurroundOcc, boundary-distance, boundary-map, and Gaussian-overlap results from the supplement. Its centered paper header and figure-first presentation were informed by the [Nerfies](https://nerfies.github.io/) and [Mip-Splatting](https://niujinshuchong.github.io/mip-splatting/) research pages; the HTML, CSS, and JavaScript are original.

The source manuscript used for this page is Overleaf commit `100e050d071f188058fdc3cb74dcce650c5ed433` (checked November 12, 2026). The PDF is the prepared author manuscript and supplement built from that same revision. Numerical results reproduce the manuscript's reported evaluation, not a claim about an independently verified current leaderboard. No conference acceptance or arXiv identifier is asserted.

Figures and manuscript belong to their respective authors. [Computer Modern webfonts](https://github.com/dreampulse/computer-modern-web-font) are distributed under the SIL Open Font License, included in `assets/fonts/OFL.txt`. No third-party website template is used. No analytics, cookies, remotely loaded fonts, or remote runtime scripts are included.
