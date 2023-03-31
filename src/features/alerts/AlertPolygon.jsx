export const AlertPolygon = ({ feature, colorHex }) => {
	const { id, event } = feature.properties;

	return (
		<g id={id} key={id}>
			<path
				d={pathGen(rewind(feature, { reverse: true }))}
				fillOpacity={0.8}
				fill={colorHex}
				stroke='limegreen'
				strokeWidth={0.5}
			/>
		</g>
	);
};
