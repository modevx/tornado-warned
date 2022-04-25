import React from "react";

export const RSSFeed = ({ rssFeedObjARR }) => {
	const {isLoading, error, data} = rssFeedDisplay;
	let rssFeedDisplay;

	if (error) {
		rssFeedDisplay = <p>ERROR: Storm Prediction Center - RSS feed</p>;
	}

	if (isLoading) {
		rssFeedDisplay = <p>Storm Prediction Center RSS feed loading...</p>;
	}

	if (data) {
		rssFeedDisplay = data.data.map((rssFeed) => (
			<div key={rssFeed.link} className='mb-4 bg-black p-4'>
				{Object.entries(rssFeed).map(([rssFeedKey, value]) => (
					<div key={rssFeedKey}>
						<span className='font-bold italic text-red-400'>
							{rssFeedKey}:{" "}
						</span>
						<span>{value}</span>
						<br />
					</div>
				))}
			</div>
		));

	return (
	{rssFeedDisplay}
	);
};
