import React from "react";

export const ConvectiveOutlookMap = () => {
	const mapRef = React.useRef(null);

	async function loadMap(container) {
		const { buildArcGISMap } = await import("services/arcgis");
		return buildArcGISMap(container);
	}

	React.useEffect(() => {
		let asyncLoadMapCleanup;

		if (mapRef.current) {
			asyncLoadMapCleanup = loadMap(mapRef.current);
		}

		return () => {
			asyncLoadMapCleanup && asyncLoadMapCleanup.then((cleanup) => cleanup());
		};
	}, [mapRef]);

	return (
		<div className='h-96'>
			<div
				id='arcgis-map'
				ref={mapRef}
				className='w-screen h-96 bg-stone-400'
			></div>
		</div>
	);
};
