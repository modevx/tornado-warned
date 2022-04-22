import Cors from "cors";
import RSSParser from "rss-parser";
import { STORM_PREDICTION_CENTER as EPS } from "../../services/constants/endpoints";

export default async function handler(req, res) {
	let Parser = new RSSParser();
	const url = `${EPS.base_url}${EPS.rss_all_feeds}`;

	await runMiddleware(req, res, corsMiddleware);

	await Parser.parseURL(url, (error, feed) => {
		if (error) {
			res.Error("Error fetching SPC RSS Feeds");
		}
		// API logic
		res.status(200).json(feed);
	});
}

const corsMiddleware = Cors({
	origin: true,
	methods: ["GET", "OPTIONS"],
	preflightContinue: true,
});

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
