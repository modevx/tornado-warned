<h1 id="tornadoaction.com">
  <img src="./assets/repo-hero.png" alt="tornado action github repo repo hero banner"/>
</h1>

<!-- #region README NAV -->

<div align='center'>
  <strong><a href="https://www.tornadoaction.com">tornadoaction.com</a></strong> | 
  <strong><a href="https://www.github.com/ephcoding">repos</a></strong> | 
  <strong><a href="https://www.ephcoding.com">ephcoding.com</a></strong> | 
  <strong><a href="https://www.linkedin.com/in/ephraimjsmith">linkedin</a></strong> 
</div>

<br>

## **_`README NAV`_**

1. [Overview](#overview)
1. [Tech](#tech)
1. [Data](#data)
1. [Lessons Learned](#lessons-learned)
1. [Resources](#resources)

<br>

<!-- #endregion /README NAV -->

<!-- #region OVERVIEW -->

<h2 id="overview">
  <img src="./assets/section-banner__overview.png" alt="tornado action github repo overview section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>--> back to top</a></em></p>

<!-- #endregion /OVERVIEW -->

<!-- #region TECH -->

<h2 id="tech">
  <img src="./assets/section-banner__tech.png" alt="tornado action github repo tech section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>--> back to top</a></em></p>

<!-- #endregion /TECH -->

<!-- #region DATA -->

<h2 id="data">
  <img src="./assets/section-banner__data.png" alt="tornado action github repo data section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>--> back to top</a></em></p>

### _**Severe Weather Data Inventory**_

NCEI web service that provides dynamic NEXRAD access to destructive/severe storm events like tornadoes, hail, storm structures, and lightning strikes

- API [docs](https://www.ncdc.noaa.gov/swdiws/)
- NCEI API services [suite](https://www.ncdc.noaa.gov/data-access)
- NCEI [Severe Weather](https://www.ncdc.noaa.gov/data-access/severe-weather) Data Access

### **_National Weather Service API_**

National Weather Service API Web Service

- API Web Service [docs](https://www.weather.gov/documentation/services-web-api#/default/get_alerts)
- Alerts Web Service [docs](https://www.weather.gov/documentation/services-web-alerts)

### **_Google Maps heatmap layer_**

<!-- #endregion /DATA -->

<!-- #region LESSONS LEARNED -->

<h2 id="lessons-learned">
  <img src="./assets/section-banner__lessons-learned.png" alt="tornado action github repo lessons-learned section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>--> back to top</a></em></p>

<details>
<summary><strong>SWDI data retrieval</strong></summary>

> _the SWDI API limits request date ranges to 31 days to I had to set up concurrent calls to fetch YTD tornado signatures_

- MDN | [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- making concurrent requests with [axios](https://github.com/axios/axios#axios-api)
  - _content referenced is right above 'axios API' title_

</details>

<!-- #endregion /LESSONS LEARNED -->

<!-- #region RESOURCES -->

<h2 id="resources">
  <img src="./assets/section-banner__resources.png" alt="tornado action github repo resources section"/>
</h2>

<p align='right'><em><a href='#readme-nav'>--> back to top</a></em></p>

<!-- #endregion /RESOURCES -->
