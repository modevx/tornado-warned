import { useQuery } from "react-query";
import { CLIENT, ENDPOINT } from "./config";

export const getNwsAlerts = async (alertType) => {
	const endpoint = {
		// ["Severe Thunderstorm Warning"]: ENDPOINT.stormWarnings,
		// ["Severe Thunderstorm Watch"]: ENDPOINT.stormWatches,
		// ["Tornado Warning"]: ENDPOINT.tornadoWarnings,
		// ["Tornado Watch"]: ENDPOINT.tornadoWatches,
		["Severe Thunderstorm Warning"]: ENDPOINT.testStormWarnings,
		["Severe Thunderstorm Watch"]: ENDPOINT.testStormWatches,
		["Tornado Warning"]: ENDPOINT.testTornadoWarnings,
		["Tornado Watch"]: ENDPOINT.testTornadoWatches,
	};

	try {
		const { data } = await CLIENT.get(endpoint[alertType]);
		console.log(`>> ${alertType}:\n`, data);
		return data.features;
	} catch (error) {
		console.log(
			`>> Error fetching ${alertType.toUpperCase()} from the National Weather Service:\n`,
			error
		);
		// notify user
		// notify this.service
	}
};

export const getPublicInfoStatements = async () => {
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

	// ***************************************
	// 5. get PUBLIC INFO STATEMENTS for
	// tornado-warned locations over last
	// 2 weeks
	// ***************************************
	const tornadoWarnedPNSs = await Promise.all(
		pubInfoStatements.map((pnsId) => {
			return getFromService(NATIONAL_WEATHER_SERVICE, `/products/${pnsId}`);
		})
	);

	const regex = /preliminary damage assessment/i;

	return tornadoWarnedPNSs.filter(({ productText }) => {
		return regex.test(productText);
	});
};
