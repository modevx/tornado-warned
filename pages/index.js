import React from "react";
// --
import { Alerts } from "../components/Alerts";
import { FeaturesSection } from "../components/FeaturesSection";
import { Hero } from "../components/Hero/Hero";
import { PageWrapper } from "../components/PageWrapper";
// --
import {
	useTornadoWarnings,
	useTornadoWatches,
	useTestAlerts,
} from "../hooks/nws-alerts";
import FAKE_ALERTS from "../constants/fake-alerts";

const HomeScreen = () => {
	// console.log("Alerts >>\n", tornado_warnings);
	// const { data: tornado_warnings } = useTornadoWarnings();
	// const { data: tornado_watches } = useTornadoWatches();
	const { tornado_warnings, tornado_watches } = FAKE_ALERTS;

	return (
		<PageWrapper>
			{/* <Hero /> */}
			{/* <FeaturesSection /> */}
			<Alerts warnings={tornado_warnings} watches={tornado_watches} />
		</PageWrapper>
	);
};

export default HomeScreen;
