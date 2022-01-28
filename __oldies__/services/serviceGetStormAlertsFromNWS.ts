import axios from 'axios';
import { stormEventConfig } from './axios.config';
import qs from 'qs';

export const serviceGetStormAlertsFromNWS = async () => {
  var config = stormEventConfig;
  let response;
  let stormAlerts;

  try {
    response = await axios(config);
    stormAlerts = await JSON.stringify(response.data);
  } catch (error) {
    console.log('> SERVICE CALL ERROR: ', error);
  }
};
