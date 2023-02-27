import { NwsAlertListItem } from "./NwsAlertListItem";

export const NwsAlertList = ({ activeAlerts }) => {
	return (
		<>
			{activeAlerts ? (
				activeAlerts.map((alert) => (
					<NwsAlertListItem key={alert.properties.id} activeAlert={alert} />
				))
			) : (
				<p> "Something went wrong..."</p>
			)}
		</>
	);
};
