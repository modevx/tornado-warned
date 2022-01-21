import Axios from "axios";

const returnAxiosInstance = () =>
	// instance.method default: "GET"
	Axios.create({ baseURL: "https://api.weather.gov" });

const getAlertsEndpoint = (url?: string, configs?: any) => {
	const axios = returnAxiosInstance();
	return axios.get(url ? `alerts/${url}` : "alerts", configs);
};

export const getAlerts = () => {
	return getAlertsEndpoint();
};

export const getAlertTypes = () => {
	return getAlertsEndpoint("/types");
};

export const getAlertById = (id: string) => {
	return getAlertsEndpoint(id);
};

export const getActiveAlerts = () => {
	return getAlertsEndpoint("/active");
};

export const getActiveAlertsCount = () => {
	return getAlertsEndpoint("/active/count");
};

export const getActiveAlertsByEvent = (eventType: string) => {
	return getAlertsEndpoint("/active", { params: { event: eventType } });
};

// export const getActiveAlertsCountByEvent = (event: string) => getNWS();

// export const getSevereThunderstormWarnings = () =>
// 	getNWSAlertsByEvent("Severe Thunderstorm Warning");

// export const getTornadoWatches = () => getNWSAlertsByEvent("Tornado Watch");
// export const getTornadoWarnings = () => getNWSAlertsByEvent("Tornado Warning");
