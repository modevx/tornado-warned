import { AlertList } from "./";
import { useAllTestAlerts, useAllTornadoAlerts } from "../../hooks";

export const AlertSection = () => {
	const { isLoading, error, isSuccess, data } = useAllTornadoAlerts();
	// const { isLoading, error, isSuccess, data } = useAllTestAlerts();
	let warnings, watches;

	if (data) {
		return (
			<section>
				<AlertList
					activeAlerts={data.filter(
						alert => alert.properties.event === "Tornado Warning"
					)}
				/>
				<AlertList
					activeAlerts={data.filter(
						alert => alert.properties.event === "Tornado Watch"
					)}
				/>
			</section>
		);
	}

	return <p>Loading...</p>;
};
