// component copied from ConvectiveOutlookMap
export const GeoJsonSVGPathGroup = ({ geometry }) => {
	return geometry ? (
		<g>
			{geometry.features.map((feature, index) => {
				const {
					properties: { dn, valid, expire, idp_source },
				} = feature;

				const fLabel = dnMap[dn].label;

				return (
					<path
						d={pathGen(rewind(feature, { reverse: true }))}
						key={`${idp_source}-${dn}`}
						fill={dnMap[dn].fill}
						stroke={dnMap[dn].stroke}
						fillOpacity={0.5}
						strokeWidth={2} // `${dnMap[dn].label}`
					/>
				);
			})}
		</g>
	) : null;
};
