import { ENDPOINTS } from "services/national-weather-service";
import {
	NATIONAL_WEATHER_SERVICE,
	getFromService,
} from "services/http-client.js";

export const fetchActiveTornadoAlerts = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_alerts
	);

	return responseData.features;
};
export const fetchActiveTornadoWarnings = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_warnings
	);

	return responseData.features;
};
export const fetchTornadoWatches = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_watches
	);

	return responseData.features;
};
// ----- used to get PRELIM DAMAGE ASSESSMENTS
export const fetchPublicInformationStatements = async () => {
	const end_date = new Date();
	const start_date = new Date(
		end_date.getFullYear(),
		end_date.getMonth(),
		end_date.getDate() - 14
	);
	const locationsSET = new Set();

	// ***************************************
	// 1. get tornado warnings from last 2 weeks
	// ***************************************
	const res = await getFromService(NATIONAL_WEATHER_SERVICE, "/alerts", {
		params: {
			start: start_date,
			end: end_date,
			message_type: "alert",
			event: "Tornado Warning",
		},
	});

	const warnings = await res.features;

	// ***************************************
	// 2. parse locations (station call signs) from WMOidentifiers
	// ***************************************
	const rawLocations = await warnings.map((warning) => {
		const wmoId = warning.properties.parameters.WMOidentifier[0];

		return parseLocation(wmoId);
	});

	// ***************************************
	// 3. create unique array of locations (station call signs)
	// to get PUBLIC INFORMATION STATEMENT ids for
	// ***************************************
	await rawLocations.forEach((location) => locationsSET.add(location));

	// ***************************************
	// 4. get PNS [id]s (Public Info Statements) for tornado-warned locations
	// ***************************************
	const pnsPromises = await Promise.all(
		Array.from(locationsSET).map((location) => {
			return getFromService(NATIONAL_WEATHER_SERVICE, "/products", {
				params: {
					start: start_date,
					end: end_date,
					type: "PNS",
					location: location,
				},
			});
		})
	);

	const pubInfoStatements = [];

	await pnsPromises.forEach((location) => {
		const locStatements = location["@graph"];

		if (locStatements.length > 0) {
			locStatements.forEach(({ id }) => pubInfoStatements.push(id));
		}
	});

	console.log(pubInfoStatements);
};

const parseLocation = (WMOidentifier) => {
	const splitWmoId = WMOidentifier.split(" ");
	const station = splitWmoId.slice(1, 2)[0];
	return station.slice(1);
};
