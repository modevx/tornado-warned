import { AlertListItem } from ".";

export const AlertList = ({ activeAlerts }) => {
	return (
		<section className='grow'>
			{activeAlerts.map((alert) => (
				<AlertListItem key={alert.properties.id} activeAlert={alert} />
			))}
		</section>
	);
};
