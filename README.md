<!-- #region INTRO -->

<div align='center'>

![rovercam readme graphic](./public/readme.png)

</div>

<div align='center'>

[Install & Run](#install) | [How To Use](#use) | [Shout-Outs](#shout-outs) | [License](#license) | [Contribute](#contribute) | [Connect](#connect)

</div>

> **_:bangbang: Check out [`BUILD_NOTES.md`](https://github.com/ephraimsmithdev/rovercam/blob/prod/BUILD_NOTES.md) for project roadmap, resources, notes & more! :bangbang:_**

<!-- #endregion /INTRO -->

<!-- #region OVERVIEW -->

<h2 id="overview">
  <img src="./public/section-banner__overview.png" alt="tornado action github repo overview section"/>
</h2>

<!-- #endregion /OVERVIEW -->

<!-- #region TECH -->

<h2 id="tech">
  <img src="./public/section-banner__tech.png" alt="tornado action github repo tech section"/>
</h2>

<!-- #endregion /TECH -->

<!-- #region DATA -->

<h2 id="data">
  <img src="./public/section-banner__data.png" alt="tornado action github repo data section"/>
</h2>

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
  <img src="./public/section-banner__lessons-learned.png" alt="tornado action github repo lessons-learned section"/>
</h2>

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
  <img src="./public/section-banner__resources.png" alt="tornado action github repo resources section"/>
</h2>

<!-- #endregion /RESOURCES -->

<!-- #region CONNECT -->

<h3 id='connect' align='center'>

![rovercam readme graphic](./public/connect.png)

</h3>

<div align='center'>

[Install & Run](#install) | [How To Use](#use) | [Shout-Outs](#shout-outs) | [License](#license) | [Contribute](#contribute) | [Connect](#connect)

</div>

<table align='center'>
  <tr >
    <td style="border: none;"><a alt='icon link to modevx github account' href='https://github.com/modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/github-157-675821.png" width="90"></a></td> 
    <td style="border: none;"><a alt='icon link to modevx twitter account' href='https://twitter.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/twitter-235-675852.png" width="90"></a></td>                      
    <td style="border: none;"><a alt='icon link to modevx email' href='mailto:ephraim@modevx.com' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/email-letter-envelope-message-38065.png" width="90"></a></td>  
    <td style="border: none;"><a alt='icon link to ephraim smiths linkedin account' href='https://linkedin.com/in/ephraimjsmith' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-187-675833.png" width="90"></a></td>
    <td style="border: none;"><a alt='icon link to modevx instagram account' href='https://instagram.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/instagram-2752153-2284970.png" width="90"></a></td>
  </tr>
</table>

<!-- #endregion /CONNECT -->
