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
	// const { data: tornado_warnings } = useTornadoWarnings();
	// const { data: tornado_watches } = useTornadoWatches();
	const { tornado_warnings, tornado_watches } = FAKE_ALERTS;

	return (
		<>
			<AlertsSection alerts={tornado_warnings} />
			<AlertsSection alerts={tornado_watches} />
		</>
	);
};
