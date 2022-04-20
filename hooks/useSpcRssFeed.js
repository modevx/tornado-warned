import Parser from "rss-parser";

export const useSpcRssFeed = async () => {
	let SpcRssParser = new Parser();
	let feed = await SpcRssParser.parseString(
		"http://www.spc.noaa.gov/products/spcrss.xml"
	);

	console.log(feed);
};
