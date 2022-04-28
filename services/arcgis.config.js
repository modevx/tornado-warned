import axios from "axios";

// ******************************************
// ** HTTP CLIENT (Axios)
// ******************************************
const DEFAULT_TIMEOUT = 5000;

const ARCGIS_HTTP_CLIENT = axios.create({
	baseURL: "https://mapservices.weather.noaa.gov/vector/rest/services",
	timeout: DEFAULT_TIMEOUT,
});

// ******************************************
// ** ENDPOINTS
// ******************************************
const ARCGIS_ENDPOINTS = {};

// ******************************************
// ** QUERY PARAMS
// ******************************************
const ARCGIS_QUERY_PARAMS = {};
