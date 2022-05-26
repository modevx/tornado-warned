import React from "react";
import dynamic from "next/dynamic";

const createMap = async (container, layerId) => {
	const { initializeMapView } = await import("services/ArcGIS");
	return initializeMapView(container, layerId);
};

export const SPCOutlookMap = ({ layerId }) => {
	const [layer, setLayer] = React.useState(1);
	const mapDivREF = React.useRef(null);
	let asyncMap;

	React.useEffect(() => {
		setLayer(layerId);
	}, [layerId]);

	// create MapView (run ONCE when it's mounted)
	React.useEffect(() => {
		if (mapDivREF.current && layer) {
			asyncMap = createMap(mapDivREF.current, layer);
		}

		return () => {
			asyncMap && asyncMap.then(({ cleanup }) => cleanup());
		};
	}, [mapDivREF, layer]);

	// update MapView
	React.useEffect(() => {
		if (asyncMap) {
			asyncMap.then((res) => console.log("mapView", res));
		}
	}, [asyncMap, layerId]);

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
