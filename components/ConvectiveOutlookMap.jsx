import React from "react";

export const ConvectiveOutlookMap = () => {
	const mapRef = React.useRef(null);

	// dynamically import ArcGIS-built map
	async function loadMap(container) {
		const { buildArcGISMap } = await import("services/arcgis");
		return buildArcGISMap(container);
	}

	React.useEffect(() => {
		let asyncLoadMapCleanup;

		// verify #arcgis-map exists in DOM
		if (mapRef.current) {
			// build map & return cleanup() <Promise>
			asyncLoadMapCleanup = loadMap(mapRef.current);
		}

		return () => {
			// if existing map in DOM, .remove() [mapExtentHandler] & .destroy() [mapView]
			asyncLoadMapCleanup && asyncLoadMapCleanup.then((cleanup) => cleanup());
		};
	}, [mapRef]);

	return (
		<div className='h-96'>
			<div
				id='arcgis-map'
				ref={mapRef}
				className='w-full h-96 bg-stone-400'
			></div>
		</div>
	);
};
