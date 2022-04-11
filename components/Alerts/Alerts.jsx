import React from "react";
import { AlertsSection } from "./AlertsSection";

export const Alerts = ({ warnings, watches }) => {
	const warningAlerts =
		warnings.length > 0 ? (
			<AlertsSection alerts={warnings} />
		) : (
			<p className='mt-4 text-xl text-green-400'>No Active Tornado Warnings.</p>
		);

	const watchAlerts =
		watches.length > 0 ? (
			<AlertsSection alerts={watches} />
		) : (
			<p className='mt-4 text-xl text-green-400'>No Active Tornado Watches.</p>
		);

	return (
		<div id='alerts'>
			{warningAlerts}
			{watchAlerts}
		</div>
	);
};
