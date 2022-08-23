# BUILD NOTES

## | FEATURES

### National Weather Service Alerts

#### **_Active Tornado Alerts_**

- National Weather Service [API Web Service](https://www.weather.gov/documentation/services-web-api#/)

#### **_Dangerous Situation Marquee_**

- [TailwindCSS marquee](https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/)

### SPC RSS Particularly Dangerous Situation Marquee

**_[SPC Particularly Dangerous Situation RSS Feed](http://www.spc.noaa.gov/products/spcpdswwrss.xml)_**

- Storm Prediction Center [RSS feeds](https://www.spc.noaa.gov/aboutrss.html)

### SPC Convective Outlooks

[gradient map](https://i.pinimg.com/originals/50/af/e2/50afe2af8fa5f2f040d8dea3abb001bd.png)

- [current outlooks](https://www.spc.noaa.gov/products/outlook/)
- SPC weather outlooks [MapServer](https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer)
- [display Esri/ArcGIS Service Features](https://openlayers.org/en/latest/examples/vector-esri.html) with [OpenLayers](https://openlayers.org/)
  - ["How to use OpenLayers maps in React"](https://medium.com/swlh/how-to-incorporate-openlayers-maps-into-react-65b411985744) | [`openlayers-react-map`](https://github.com/mbrown3321/openlayers-react-map)

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

- [Jest]()
  - [3 steps to mock API calls](https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb) | [repo](https://github.com/ZakLaughton/DEMO-simple-api-mocking-with-jest/blob/master/index_mocked.test.js)
- []()

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

### MAPSVG

**_[FREE, DOWNLOADEDABLE SVG MAPS](https://mapsvg.com/maps)_**
