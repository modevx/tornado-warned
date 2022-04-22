import React from "react";

import { PageWrapper } from "../components/PageWrapper";
import { AlertSection } from "../components/Alerts";

import { useSpcRssFeeds } from "../hooks";

const HomeScreen = () => {
	const { data, error, isLoading } = useSpcRssFeeds();
	let rssFeedDisplay;

	if (error) {
		rssFeedDisplay = <p>ERROR: Storm Prediction Center - RSS feed</p>;
	}

	if (isLoading) {
		rssFeedDisplay = <p>Storm Prediction Center RSS feed loading...</p>;
	}

	// if (data) {
	// 	rssFeedDisplay = data.map(item => (
	// 		<div key={item.link} className='mb-4 bg-black p-4'>
	// 			{Object.entries(item).map(([key, value]) => (
	// 				<>
	// 					<span className='font-bold italic text-red-400'>{key}: </span>
	// 					<span>{value}</span>
	// 					<br />
	// 				</>
	// 			))}
	// 		</div>
	// 	));
	// }

	if (data) console.log(data);

	return (
		<PageWrapper>
			<AlertSection />
			{rssFeedDisplay}
		</PageWrapper>
	);
};

export default HomeScreen;
