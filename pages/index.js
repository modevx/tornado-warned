import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { AlertSection } from "../components/Alerts";
import { useSpcRssFeed } from "../hooks/useSpcRssFeed";
import RSSParser from "rss-parser";
const rss_parser = new RSSParser();

const HomeScreen = () => {
	useSpcRssFeed();

	return (
		<PageWrapper>
			<AlertSection />
		</PageWrapper>
	);
};

export default HomeScreen;
