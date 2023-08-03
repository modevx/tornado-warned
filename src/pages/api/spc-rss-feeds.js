import RSSParser from "rss-parser";

import { corsMiddleware, runMiddleware } from "utils";

export default async function handler(req, res) {
	let rss_parser = new RSSParser();

	await runMiddleware(req, res, corsMiddleware);

	await rss_parser.parseURL(req.body.spc_rss_feed_url, (error, feed) => {
		if (error) throw error;
		res.status(200).json(feed.items);
	});
}
