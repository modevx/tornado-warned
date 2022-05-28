import React from "react";
import dynamic from "next/dynamic";

const createMap = async (container) => {
	const { initializeArcGISMap: initializeMapView } = await import(
		"services/ArcGIS"
	);
	return initializeMapView(container);
};

export const SPCOutlookMap = () => {
	const [asyncMap, setAsyncMap] = React.useState(null);

	const mapDivREF = React.useRef(null);

	React.useEffect(() => {
		if (mapDivREF.current) {
			const divRefMap = createMap(mapDivREF.current);
			setAsyncMap(divRefMap);
		}

		return () => {
			asyncMap && asyncMap.then((cleanup) => cleanup());
		};
	}, [mapDivREF]);

	return (
		<div className='h-96 relative'>
			<div
				id='arcgis-map'
				ref={mapDivREF}
				className='w-screen h-[50vh] bg-stone-400 '
			></div>
		</div>
	);
};
