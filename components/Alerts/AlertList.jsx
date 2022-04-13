import React from "react";
import { AlertItem } from ".";
import { useAllTestAlerts, useAllTornadoAlerts } from "../../hooks";

export const AlertList = ({ activeAlerts }) => {
	if (activeAlerts.length > 1) {
		return (
			<ul className='p-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{activeAlerts.map(alert => (
					<AlertItem activeAlert={alert} key={alert.id} />
				))}
			</ul>
		);
	}
};
