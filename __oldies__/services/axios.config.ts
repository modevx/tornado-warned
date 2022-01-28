// axios instance configs for hitting different APIs
import axios from 'axios';

// NATIONAL WEATHER SERVICE
// API Web Service
// * All Storm-Related Alerts *
export const stormEventConfig = {
  method: 'get',
  url:
    'https://api.weather.gov/alerts/active?event=Storm Watch, Storm Warning, Tornado Watch, Tornado Warning',
  headers: {},
};

// NATIONAL WEATHER SERVICE
// Severe Weather Data Inventory
// * Recent / Historic Toranado Events *
export const tornadoEventConfig = {
  method: 'get',
  url: '',
  headers: {},
};
