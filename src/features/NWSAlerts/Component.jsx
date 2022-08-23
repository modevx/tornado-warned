import { AlertList } from ".";
import { useNwsAlertsQuery } from "hooks";

export const NationalWeatherServiceAlerts = ({ alertType }) => {
	const { data, error } = useNwsAlertsQuery(alertType);

	if (data) return <AlertList activeAlerts={data} />;

	if (error)
		// notify user
		// notify service
		return (
			<div
				className={`flex flex-col items-center justify-center container w-full h-[25vh] shadow-md shadow-stone-900 mb-6 mx-auto border-dashed border-2 border-stone-300 rounded-md p-2`}
			>
				<p className='text-5xl text-stone-300 text-center'>No active alerts.</p>
			</div>
		);
};
