import React from "react";
import { AlertItem } from ".";

export const AlertList = ({ activeAlerts, eventType }) => {
	if (activeAlerts.length > 0) {
		return (
			<ul className='p-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{activeAlerts.map(alert => (
					<AlertItem activeAlert={alert} key={alert.id} />
				))}
			</ul>
		);
	}

	return (
		<p className='bg-gradient-to-b from-green-500 to-neutral-500 my-4 p-2 text-2xl text-center shadow-md shadow-stone-900 w-[90vw] mx-auto rounded-md'>
			{`no active ${eventType}${eventType === "Tornado Warning" ? "s" : "es"}!`}
		</p>
	);
};
