import { AlertPolygon } from "./AlertPolygon";

export const AlertPolygonList = ({ alertsObj, colorHex }) => {
	return (
		<g>
			{alertsObj.features.map((feature, index) => (
				<AlertPolygon feature={feature} colorHex={colorHex} />
			))}
		</g>
	);
};
