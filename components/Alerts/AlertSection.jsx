import { AlertList } from "./";
import { useAllTestAlerts, useAllTornadoAlerts } from "../../hooks";

export const AlertSection = () => {
	const { isLoading, error, isSuccess, data } = useAllTornadoAlerts();
	// const { isLoading, error, isSuccess, data } = useAllTestAlerts();
	let warnings = [],
		watches = [];

	// checks for successful query and filters warnings
	if (isSuccess) {
		warnings = data.filter(
			alert => alert.properties.event === "Tornado Warning"
		);
		watches = data.filter(alert => alert.properties.event === "Tornado Watch");
	}

	// checks for active alerts & renders if any
	if (warnings.length > 0 || watches.length > 0) {
		return (
			<section className='flex-1'>
				<AlertList activeAlerts={warnings} eventType='Tornado Warning' />
				<AlertList activeAlerts={watches} eventType='Tornado Watch' />
			</section>
		);
	}

	// checks for loading status & errors (overkill)
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	// finally: if query's successfull but no alerts at all, give the all clear
	return (
		<div className='flex-1 flex flex-col items-center justify-center text-center'>
			<p className='text-7xl text-green-400 font-bold'>all clear!</p>
			<p className='text-4xl mb-10'>for now..</p>
			<p>(no active tornado warnings or watches)</p>
		</div>
	);
};
