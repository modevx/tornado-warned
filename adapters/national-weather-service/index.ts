import Axios from "axios";

const returnAxiosInstance = () =>
	// instance.method default: "GET"
	Axios.create({ baseURL: "https://api.weather.gov" });

const getAlertsEndpoint = async (url?: string, axiosConfigs?: any) => {
	const axios = returnAxiosInstance();
	return await axios.get(url ? `alerts/${url}` : "alerts", axiosConfigs);
};

export const getAlerts = async () => {
	return getAlertsEndpoint();
};

export const getAlertTypes = async () => {
	const types = await getAlertsEndpoint("/types");
	return types.data.eventTypes;
};

export const getAlertById = (id: string) => {
	return getAlertsEndpoint(id);
};

export const getActiveAlerts = async () => {
	const activeAlerts = await getAlertsEndpoint("/active");
	return activeAlerts.data.features;
};

export const getActiveAlertsCount = () => {
	return getAlertsEndpoint("/active/count");
};

export const getActiveAlertsByEvent = async (eventType: string) => {
	const alerts = await getAlertsEndpoint("/active", {
		params: { event: eventType },
	});
	return alerts.data.features;
};

// export const getActiveAlertsCountByEvent = (event: string) => getNWS();

// export const getSevereThunderstormWarnings = () =>
// 	getNWSAlertsByEvent("Severe Thunderstorm Warning");

// export const getTornadoWatches = () => getNWSAlertsByEvent("Tornado Watch");
// export const getTornadoWarnings = () => getNWSAlertsByEvent("Tornado Warning");
