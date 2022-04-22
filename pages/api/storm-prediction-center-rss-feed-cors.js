import Cors from "cors";
import RSSParser from "rss-parser";
// -----
let SpcRssParser = new RSSParser();

// Initializing the cors middleware
const corsMiddleware = Cors({
	origin: true,
	methods: ["GET", "OPTIONS"],
	preflightContinue: true,
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, middleware) {
	return new Promise((resolve, reject) => {
		middleware(req, res, result => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(req, res) {
	await runMiddleware(req, res, corsMiddleware);

	let feed = await SpcRssParser.parseURL(
		"http://www.spc.noaa.gov/products/spcrss.xml"
	);

	// API logic
	res.status(200).json(feed);
}

// (async () => {
// 	try {
// let feed = await SpcRssParser.parseURL(
// 	"http://www.spc.noaa.gov/products/spcrss.xml"
// );

// 		console.log(feed);
// 		feed.items.forEach(item => {
// 			console.log(item.title + ":" + item.link);
// 		});
// 	} catch (error) {
// 		console.log("************************");
// 		console.log("** SPC RSS FEED ERROR **");
// 		console.log("************************");
// 		console.log(error);
// 		return;
// 	}
// })();
