# step-up

A simple, read-only STL viewer for the browser. Open an ASCII or binary `.stl` file by choosing it or dropping it onto the page. Files are processed locally and are not uploaded.

- Drag to orbit, right-drag to pan, and scroll to zoom. On touchscreens, drag with one finger to orbit and use two fingers to pan and pinch to zoom.
- Use the view buttons or double-click to fit. Switch between perspective and orthographic cameras, change the model color, toggle wireframe, grid, axes, or auto rotation, and save the current view as a PNG.
- Dimensions are in the file's native units: STL files don't specify a unit.

## GitHub Pages

In repository **Settings → Pages**, set the source to **GitHub Actions**. The included workflow publishes the site on pushes to `main`. Open `https://briday1.github.io/step-up/` once the deployment completes.

The app is static and uses Three.js from jsDelivr, so an internet connection is needed to load the viewer. To run locally, serve this directory with a static server (for example, `python -m http.server`) and visit `http://localhost:8000`.
