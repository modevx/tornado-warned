import React from "react";
import Image from "next/image";

import { STATE_NAMES_ABBR } from "constants";
import {
	NwsAlertList,
	useActiveAlerts,
} from "features/NationalWeatherServiceAlerts";
// import { getAreaDescMAP, formatSenderNameSTR } from "utils";

// [alertType] --> use "Watch" or "Warning"
export const NwsAlerts = ({ alertType }) => {
	// const { data, error, isLoading } = useTornadoAlertsQuery(alertType);

	// if (data) {
	// 	return data.length > 0 ? (
	// 		<section className='grow'>
	// 			<NwsAlertList activeAlerts={data} />
	// 		</section>
	// 	) : (
	// 		<div
	// 			className={`flex flex-col items-center justify-center container w-full h-[25vh] shadow-md shadow-stone-900 mb-6 mx-auto border-dashed border-2 border-stone-300 rounded-md p-2`}
	// 		>
	// 			<p className='text-5xl text-stone-300 text-center'>No active alerts.</p>
	// 		</div>
	// 	);
	// }

	// if (error) {
	// 	return (
	// 		<>
	// 			<p>Something went wrong...</p>
	// 			<p>{error.message}</p>
	// 		</>
	// 	);
	// }

	// if (isLoading) return <p>Loading...</p>;
	// return <NwsAlertList activeAlerts={TORNADO_WARNING} />;
	return <div>...supposed to empty. We're cleaning.</div>;
};
