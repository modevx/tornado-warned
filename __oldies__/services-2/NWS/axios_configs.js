export const activeAlertsConfig = {
	method: "get",
	baseURL: "https://api.weather.gov",
	url: "/alerts/active?event=Severe Thunderstorm Watch,Severe Thunderstorm Warning,Tornado Watch,Tornado Warning",
	// params: {
	// 	event: [
	// 		`Severe Thunderstorm Watch,Severe Thunderstorm Warning,Tornado Watch,Tornado Warning`,
	// 	],
	// },
};
