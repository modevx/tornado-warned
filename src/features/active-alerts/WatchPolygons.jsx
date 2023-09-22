import { checkAlertIsTornadoEmergency, checkAlertIsPDS } from "utils";
import { createWatchPolygon } from "./utils/create-watch-polygon";
import { createPolygonStyles } from "./utils";
import { rewindPathGenerator } from "components/_constants/path-generators";

export const WatchPolygons = ({ alerts, showAlertModal }) => {
	const isValidFeatures = alerts && alerts.length > 0;

	return (
		<>
			{isValidFeatures
				? alerts.map((alert) => {
						return (
							<WatchPolygon
								key={alert.id}
								alert={alert}
								showAlertModal={showAlertModal}
							/>
						);
				  })
				: null}
		</>
	);
};

const WatchPolygon = ({ alert, showAlertModal }) => {
	const isPDS = checkAlertIsPDS(alert);
	const isEmergency = checkAlertIsTornadoEmergency(alert);
	const watchGeoJSON = createWatchPolygon(alert);
	const pathStyles = createPolygonStyles(alert, isPDS, isEmergency);

	return (
		<path
			d={rewindPathGenerator(watchGeoJSON)}
			{...pathStyles}
			onClick={() => showAlertModal(alert)}
		/>
	);
};
