import React from "react";
import Parser from "rss-parser";

export const useSpcRssFeed = async () => {
	let SpcRssParser = new Parser();
	const CORS_PROXY = "../pages/api/cors/";
	let feed;

	React.useEffect(async () => {
		feed = await SpcRssParser.parseURL(
			CORS_PROXY + "http://www.spc.noaa.gov/products/spcrss.xml",
			(error, feed) => {
				if (error) {
					console.log("RSS-PARSER ERROR >>\n", error);
					return;
				}

				console.log(feed.items);
			}
		);
	});
};
