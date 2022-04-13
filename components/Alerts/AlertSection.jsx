import { AlertList } from "./";
import { useAllTestAlerts, useAllTornadoAlerts } from "../../hooks";

export const AlertSection = () => {
	const { isLoading, error, isSuccess, data } = useAllTornadoAlerts();
	let warnings = [],
		watches = [];

	if (isSuccess) {
		warnings = data.filter(
			alert => alert.properties.event === "Tornado Warning"
		);
		watches = data.filter(alert => alert.properties.event === "Tornado Watch");
	}

	if (warnings.length > 0 || watches.length > 0) {
		return (
			<section className='flex-1'>
				<AlertList activeAlerts={warnings} eventType='Tornado Warning' />
				<AlertList activeAlerts={watches} eventType='Tornado Watch' />
			</section>
		);
	}

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div className='flex-1 flex flex-col items-center justify-center text-center'>
			<p className='text-7xl text-green-400 font-bold'>all clear!</p>
			<p className='text-4xl mb-10'>for now..</p>
			<p>(no active tornado warnings or watches)</p>
		</div>
	);
};
