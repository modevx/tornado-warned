# BUILD NOTES

## | FEATURES

### Real-Time Alerts

## | TOOLING

### Deploy to GitHub Pages with Custom Domain

- [`gh-pages`](https://www.npmjs.com/package/gh-pages)

`"deploy": "gh-pages -d src"`

create `build/CNAME` file with `tornadowarned.com` text in it

run `"gh-pages": "gh-pages -d build"`

## | DESIGN SYSTEM

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

## | PROTOTYPING

## | TESTING

### Unit

- [Next.js + React Testing Library](https://nextjs.org/docs/testing#jest-and-react-testing-library)
  - `jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`
  - [Next.js test env vars](https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables)

### Integration

- []()

### E2E

- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) | [repo](https://github.com/cypress-io/github-action)

## | MAP VISUALIZATIONS

### [ Issues ]

#### **_SVG MAPS: creating a [`linear gradient`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient#attributes)_**

- SOLUTION: [`gradientUnits = "userSpaceOneUse"`](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients#linear_gradient)
  - found here: [S.O. thread](https://stackoverflow.com/a/5522370)
    - also: [`<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop#attributes) | [`<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient)

### React Vector Maps

[repo](https://github.com/South-Paw/react-vector-maps) | [site](https://react-vector-maps.netlify.app/)

### React Simple Maps

[repo](https://github.com/zcreativelabs/react-simple-maps) | [site](https://www.react-simple-maps.io/)

module.exports = {
presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
