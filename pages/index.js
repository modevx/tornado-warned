import React from "react";
// --
import { AlertSection } from "../components/Alerts";
// import { FeaturesSection } from "../components/FeaturesSection";
// import { Hero } from "../components/Hero/Hero";
import { PageWrapper } from "../components/PageWrapper";
// --
import { useTornadoWarnings, useTornadoWatches, useTestAlerts } from "../hooks";
import NWS_FAKE_ALERTS from "../services/nws-fake-data";

const HomeScreen = () => {
	// console.log("Alerts >>\n", tornado_warnings);

	// const { tornado_warnings, tornado_watches } = NWS_FAKE_ALERTS;

	return (
		<PageWrapper>
			{/* <Hero /> */}
			{/* <FeaturesSection /> */}
			<AlertSection />
		</PageWrapper>
	);
};

export default HomeScreen;
