# BUILD NOTES

## FEATURES

### Real-Time Alerts

## TOOLING

### Deploy to GitHub Pages with Custom Domain

- [`gh-pages`](https://www.npmjs.com/package/gh-pages)

`"deploy": "gh-pages -d src"`

create `build/CNAME` file with `tornadowarned.com` text in it

run `"gh-pages": "gh-pages -d build"`

## DESIGN SYSTEM

### Minimal Customization

**CONSTRAINTS**

- 2 breakpoint max
- standardized semantic colors

### TailwindCSS

- `@layer (base, components, utililities)` directives for reusable styles
- `@apply` lets you access TW classes in style definitions

- `base` defaults, resets applied to HTML elements
- `components` TW-overrideable class-based styles
- `utilities` highest-priority, single-purpose classes

- [TW default theme](https://unpkg.com/browse/tailwindcss@3.0.23/stubs/defaultConfig.stub.js)
  - [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/#what-is-itcss)
