import { AlertList } from ".";
import { BsTornado } from "react-icons/bs";

export const AlertsSection = ({ alerts }) => {
	// if (alerts) {
	// 	const { isLoading, error, data } = alerts;
	// 	console.log("AlertsSection >>\n", isLoading, error, alerts);
	// }

	return (
		<section>
			<AlertList alertArray={alerts} />
		</section>
	);
};
