import React from "react";
import { AlertsSection } from "./AlertsSection";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useTestAlerts,
} from "../../hooks";
import FAKE_ALERTS from "../../constants/fake-alerts";

export const Alerts = () => {
	// console.log("Alerts >>\n", tornado_warnings);
	// const { data: warningFeatures } = useTornadoWarnings();
	// const { data: watchFeatures } = useTornadoWatches();
	const { tornado_warnings, tornado_watches } = FAKE_ALERTS;

	return (
		<>
			<AlertsSection
				alerts={tornado_warnings}
				sectionHeading='Tornado Warnings'
			/>
			<AlertsSection
				alerts={tornado_watches}
				sectionHeading='Tornado Watches'
			/>
		</>
	);
};
