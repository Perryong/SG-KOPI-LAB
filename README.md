# Kopi Lab — Singapore in a glass

An interactive Three.js explanation of 17 Singapore coffee orders, inspired by the user-supplied Naumi Singapore kopi guide.

## Use the page

1. Choose a coffee style from the menu. Milk, Black and Iced filters narrow the choices.
2. Read the amounts in “Inside your glass”. These are illustrative examples, not standardized recipes.
3. Select **Make this kopi** to replay ingredient additions.
4. Pause, adjust playback speed, scrub the timeline, or select an ingredient step.
5. Switch between **Layers** and **Stirred**. Water is blue only in the teaching view; the stirred colour is an approximation.
6. Drag the glass to rotate, scroll or pinch to zoom, and use the reset-view button to return.

## Run locally

Serve this folder with Python:

```bash
python3 -m http.server 8000
```

On Windows, use `py -m http.server 8000`. Open http://localhost:8000. Modules must be served over HTTP, not opened with file://.

## GitHub Pages

Upload the contents of this folder to a repository root. In Settings → Pages, select Deploy from a branch, main, / (root). All assets and imports are relative and Three.js is bundled locally.

## Files

- `index.html`: interface, recipe panel, reference guide, accessibility labels.
- `style.css`: responsive kopitiam-inspired layout.
- `recipes.js`: recipe definitions, ingredient order, amount units and timeline helpers.
- `main.js`: procedural glass, liquid layers, sugar/ice, staged pours, camera and playback.
- `vendor/`: Three.js 0.180.0, OrbitControls and upstream MIT license.
- `assets/reference.png`: user-supplied Naumi Singapore chart, shown with attribution.

## How the 3D illustration works

A lathed profile makes a glass mug; a tube follows a curved handle path. Concentric cylinder meshes represent liquid layers inside the glass. Each positive ingredient creates a preparation stage. A normalized timeline value determines how much of each ingredient is visible. Liquid height follows the illustrative amount; ice contributes a small illustrative displacement. Sugar cubes shrink as liquid is added. A pouring vessel and stream appear during liquid stages; ice drops into the glass during its stage.

Layers mode keeps ingredients apart for explanation. Stirred mode interpolates their colours and ultimately replaces the stack with one cylinder. This is educational animation, not computational fluid dynamics. Colours, cube sizes, ice displacement, sugar quantities and volumes are illustrative. They are not nutrition measurements or physical simulation outputs.

Reduced-motion preference disables ambient steam and ice bobbing and makes colour transitions immediate. Preparation animation only starts after a user action; it can be paused or scrubbed.

## Recipe interpretation

Condensed milk is already sweetened. Kopi C uses evaporated milk; Kopi O has no milk. Siew dai means less sweet, gah dai more sweet, gao stronger, po weaker, peng iced, and di lo no extra water. Coffee here is brewed kopi, not espresso.

The chart’s “Kopi Kosong” is retained as a clearly labelled chart variant with condensed milk and no extra sugar. It remains sweet. Kopi C Kosong and Kopi O Kosong are clearer orders for no added sugar. Some shops add extra sugar to condensed-milk kopi and others do not. This exhibit shows one interpretation and states that shops vary.

Concept reference: supplied Naumi Singapore chart.
Terminology reference: https://www.visitsingapore.com.cn/things-to-do/dining/local-food-and-drinks/order-coffee-like-a-local/

## Verification

JavaScript syntax, recipe completeness, timeline endpoints, glass-capacity assumptions, and local asset/import references were checked. Browser rendering and interaction QA were not performed.

# SG-KOPI-LAB
