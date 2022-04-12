import React from "react";
// --
// import { AlertSection } from "../components/Alerts";
// import { FeaturesSection } from "../components/FeaturesSection";
// import { Hero } from "../components/Hero/Hero";
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

	// const { tornado_warnings, tornado_watches } = FAKE_ALERTS;

	return (
		<PageWrapper>
			{/* <Hero /> */}
			{/* <FeaturesSection /> */}
			{/* <AlertSection /> */}
		</PageWrapper>
	);
};

export default HomeScreen;
