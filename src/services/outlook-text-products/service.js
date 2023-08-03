import { useQuery } from "@tanstack/react-query";
import { createHTTPClient } from "services/create-http-client";

const appApiClient = createHTTPClient({
	baseURL: "/api",
});

const DAY_ENDPOINTS = Object.freeze({
	1: "/acus01.kwns.swo.dy1.txt",
	2: "/acus02.kwns.swo.dy2.txt",
	3: "/acus03.kwns.swo.dy3.txt",
	48: "/acus48.kwns.swo.d48.txt",
});

const ERROR_TITLE =
	"/// ERROR: Storm Prediction Center Convective Outlook Text Products Service ///";

const getOutlookTextProductByDay = async (dayNum) => {
	const endpoint = DAY_ENDPOINTS[dayNum];

	try {
		const { data } = await appApiClient.post(
			"/convective-outlook-text-products",
			// -- AXIOS REQUEST BODY
			{
				textProductUrl: `https://tgftp.nws.noaa.gov/data/raw/ac${endpoint}`,
			}
		);

		return data;
	} catch (error) {
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

export const useOutlookTextProductByDayQuery = (dayNum) => {
	return useQuery(["SPC", "Convective Outlooks", "Text Product", dayNum], () =>
		getOutlookTextProductByDay(dayNum)
	);
};
