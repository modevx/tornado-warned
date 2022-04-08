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

	const warnings =
		tornado_warnings.length > 0 ? (
			<AlertsSection alerts={tornado_warnings} />
		) : (
			<p className='mt-4 text-xl text-green-400'>No Active Tornado Warnings.</p>
		);

	const watches =
		tornado_watches.length > 0 ? (
			<AlertsSection alerts={tornado_watches} />
		) : (
			<p className='mt-4 text-xl text-green-400'>No Active Tornado Watches.</p>
		);

	return (
		<>
			{warnings}
			{watches}
		</>
	);
};
