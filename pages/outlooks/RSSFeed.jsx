import React from "react";

export const RSSFeed = ({ rssFeedObjARR, sectionTitle }) => {
	const { isLoading, error, data } = rssFeedObjARR;
	let rssFeedDisplay;

	if (error) {
		rssFeedDisplay = <p>ERROR: Storm Prediction Center - RSS feed</p>;
	}

	if (isLoading) {
		rssFeedDisplay = <p>Storm Prediction Center RSS feed loading...</p>;
	}

	if (data) {
		rssFeedDisplay = (
			<section className='mb-4 p-4'>
				<h2 className='text-xl uppercase font-bold text-blue-500'>
					{sectionTitle}
				</h2>
				{data.data.map((rssFeed) =>
					Object.entries(rssFeed).map(([rssFeedKey, value]) => (
						<div key={rssFeedKey}>
							<span className='font-bold italic text-red-400'>
								{rssFeedKey}:{" "}
							</span>
							<span>{value}</span>
							<br />
						</div>
					))
				)}
			</section>
		);
	}

	return <>{rssFeedDisplay}</>;
};
