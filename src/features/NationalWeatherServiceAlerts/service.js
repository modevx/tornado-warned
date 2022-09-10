import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HTTP_CLIENT = axios.create({
	baseURL: "https://api.weather.gov",
	timeout: 5000,
});
export const EVENT_NAME = Object.freeze({
	tornadoWarning: "Tornado Warning",
	tornadoWatch: "Tornado Watch",
	severeStormWarning: "Severe Thunderstorm Watch",
	severeStormWatch: "Severe Thunderstorm Warning",
});

export const QUERY_KEY = {
	alerts: ["alerts"],
	tornadoWarning: ["alerts", EVENT_NAME.tornadoWarning],
	tornadoWatch: ["alerts", EVENT_NAME.tornadoWatch],
	severeStormWarning: ["alerts", EVENT_NAME.severeStormWarning],
	severeStormWatch: ["alerts", EVENT_NAME.severeStormWatch],
};

const fetchActiveAlerts = async (eventName) => {
	const res = await HTTP_CLIENT.get(
		`/alerts/active?event=${encodeURIComponent(eventName)}&message_type=alert`
	);
	return res.data;
};
const fetchPrev2WeeksAlerts = async (eventName) => {
	const { start, end } = genPrev2WeekISODateRange();
	console.log(start, end);
	const res = await HTTP_CLIENT.get(
		`/alerts?start=${start}&end=${end}&message_type=alert&event=${eventName}`
	);
	return res.data;
};

export const useActiveAlerts = (eventName) => {
	return useQuery(["alerts", eventName], () => fetchActiveAlerts(eventName));
};
export const usePrev2WeeksAlerts = (eventName) => {
	return useQuery(["alerts", eventName], () =>
		fetchPrev2WeeksAlerts(eventName)
	);
};

// -- UTILS
const genPrev2WeekISODateRange = () => {
	const today = new Date();
	const end = new Date(today).toISOString();
	const start = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - 14
	).toISOString();

	return { start, end };
};

// const ACTIVE_ALERT_PARAMS = {
// 	area: "",
// 	certainty: "",
// 	code: "",
// 	event: "",
// 	limit: "",
// 	message_type: "",
// 	point: "",
// 	region: "",
// 	region_type: "",
// 	severity: "",
// 	status: "",
// 	urgency: "",
// 	zone: "",
// };
