import React from "react";

const ConvectiveOutlookMap = () => {
	const mapRef = React.useRef(null);

	// >> DYNAMICALLY IMPORTS ARCGIS-BUILT MAP
	async function loadMap(container) {
		const { buildArcGISMap } = await import("services/arcgis");
		return buildArcGISMap(container);
	}

	React.useEffect(() => {
		let asyncLoadMapCleanup;

		// VERIFY MAP DIV IN DOM
		if (mapRef.current) {
			// BUILDS MAP & RETURNS CLEANUP FUNC (Promise)
			asyncLoadMapCleanup = loadMap(mapRef.current);
		}

		return () => {
			// VERIFY RETURNED MAP THEN REMOVE buildMap() [handler] & destroy buildMap() [mapView]
			asyncLoadMapCleanup && asyncLoadMapCleanup.then((cleanup) => cleanup());
		};
	}, [mapRef]);

	return (
		<div className='h-96'>
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default ConvectiveOutlookMap;
