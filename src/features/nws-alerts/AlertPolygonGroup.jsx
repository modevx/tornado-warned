import { TornadoAlertPolygon } from "./TornadoAlertPolygon";

export const AlertPolygonGroup = ({ alertsObj, fillColor }) => {
	return (
		<g>
			{alertsObj.features.map((feature, index) => (
				<TornadoAlertPolygon
					key={index}
					feature={feature}
					fillColor={fillColor}
				/>
			))}
		</g>
	);
};
