![Tornado Action repo hero image](./src/assets/images/hero.png)

<div align='center'>
  <strong><a href="https://www.tornadoaction.com">tornadoaction.com</a></strong> |
  <strong><a href="https://www.ephcoding.com">ephcoding.com</a></strong> | 
  <strong><a href="https://www.linkedin.com/in/ephraimjsmith">linkedin</a></strong> |
  <strong><a href="https://www.twitter.com/ephcoding">twitter</a></strong> 
</div>

<br>

# **`INDEX`**

1. [Overview](#overview)
1. [Run It](#run-it)
1. [Features](#features)
1. [Tech](#tech)
1. [APIs & Data](#apis)
1. [Visuals](#visuals)
1. [DevOps](#devops)
1. [Repo Stats](#stats)
1. [Contributing](#contributing)
1. [Issues](#issues)
1. [Resources](#resources)

<br>

<h2 id="overview">
  <img src="./src/assets/images/readme__overview.png" alt="tornado action github repo overview section"/>
</h2>

When I was tossing around side project ideas, I kept my criteria/requirements simple:

1. consume a FREE 3rd-party API data that has higher rate-limits
2. display the data using engaging visuals
3. has to serve a real purpose

NASA and NOAA have huge datasets so I honed in there. I came across the Severe Weather Data Inventory that provides historic severe weather data for the last ~50 years. And Tornadoes are badass. So, here we go..

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="run-it">
  <img src="./src/assets/images/readme__run-it.png" alt="tornado action github repo run it section"/>
</h2>

clone repo:

```
git clone https://github.com/ephcoding/tornado-action.git
```

nav to project

```
cd <your path>/tornado-action
```

install dependencies

```
npm i
```

run project

```
npm run dev
```

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="features">
  <img src="./src/assets/images/readme__features.png" alt="tornado action github repo features section"/>
</h2>

### **CURRENT**

There's obviously not much happening yet.

**_FIRST UP:_**

functionality to fetch SWDI data by year and month. Once I get that working, I'll clean up state management and component composition, add some unit tests, and start to integrate TypeScript.

### **FUTURE**

- interactive visuals of historical tornado events
- display active severe weather alerts for user's current location

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="tech">
  <img src="./src/assets/images/readme__tech.png" alt="tornado action github repo tech section"/>
</h2>

My focus right now is **_learn, apply, repeat._** I would have got lost-in-the-sauce trying to setup my own tooling right out of the gate. So, I went straight for the boilerplates.

### **WEB**

- bare-bones [create-react-app](https://create-react-app.dev/) template

### **MOBILE**

- [Expo](https://docs.expo.dev/get-started/create-a-new-app/) basic TypeScript template

### **STYLES**

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="apis">
  <img src="./src/assets/images/readme__apis-data.png" alt="tornado action github repo tech section"/>
</h2>

### **| Google Maps heatmap layer**

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="visuals">
  <img src="./src/assets/images/readme__visuals.png" alt="tornado action github repo tech section"/>
</h2>

Looking forward to using my new [D3](https://d3js.org/) chops from FreeCodeCamp's [Data Visualization](https://www.freecodecamp.org/ephcoding) certificate to crank out some cool graphics!

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="devops">
  <img src="./src/assets/images/readme__devops.png" alt="tornado action github repo devops section"/>
</h2>

tornadoaction.com is deployed using AWS [Amplify](https://aws.amazon.com/amplify/). I'm toying with the idea of getting the [AWS Solutions Architect](https://aws.amazon.com/certification/certified-solutions-architect-associate/?tag=aboutcom02thebalancecareers-20&ascsubtag=5184658%7Cne8e129d7c6e341d388f7a4f85e32c78e16%7C) Certification.

If any of you guys have it, I'd be interested in hearing if you think it's/was worth it.

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="stats">
  <img src="./src/assets/images/readme__stats.png" alt="tornado action github repo stats section"/>
</h2>

...bahahahhaha...I'll get to this once there's stats to worry about!

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="contributing">
  <img src="./src/assets/images/readme__contributing.png" alt="tornado action github repo contributing section"/>
</h2>

I am wide open to comments, suggestions, pull requests, and general verbal slams. If I was worried about my feelings, I wouldn't be building this bitch in public.

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

<h2 id="issues">
  <img src="./src/assets/images/readme__issues.png" alt="tornado action github repo issues section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>

### **| Sass Import Causes Build To Fail**

- had to replace 'sass' pkg with 'node-sass'

### **| styles not applied in production**

- have to use @import (even tho Sass docs say not to)

### **| form data: under the hood**

- how vanilla html forms work

<details>
<summary><strong>SWDI data retrieval</strong></summary>

> _the SWDI API limits request date ranges to 31 days to I had to set up concurrent calls to fetch YTD tornado signatures_

- MDN | [Promises](https://developer.mozilla.org/en-US/Web/JavaScript/images/Reference/Global_Objects/Promise)
- making concurrent requests with [axios](https://github.com/axios/axios#axios-api)
  - _content referenced is right above 'axios API' title_

</details>

<br>

<h2 id="resources">
  <img src="./src/assets/images/readme__resources.png" alt="tornado action github repo resources section"/>
</h2>

### **EXPO**

- [Expo](https://docs.expo.dev) docs
  - [How Expo works](https://docs.expo.dev/guides/how-expo-works/)

### **REACT**

- [React](https://reactjs.org/) docs

### **REACT NATIVE**

- [React Native](https://reactnative.dev/) docs

### **STYLING**

**[Sass Guidelines](https://sass-guidelin.es/)** | _opinionated Sass styleguide by [Kitty Giraudel](https://kittygiraudel.com/)_

**[Structuring Your Sass Projects](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)** | _article by [@easeoutco](https://twitter.com/easeoutco) about setting up Sass in your projects using the "7-1" architecture_

**[KittyGiraudel/sass-boilerplate](https://github.com/KittyGiraudel/sass-boilerplate)** | _[Kitty's](https://kittygiraudel.com/) boilerplate for using the 7-1 architecture pattern_

**[necolas/normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)** | _get you some cross-browser style consistency thanks to [Nicolas Gallagher](http://nicolasgallagher.com/)_

<p align='right'><em><a href='#readme-nav'>^^ back to top ^^</a></em></p>
