import React from "react";
import dynamic from "next/dynamic";

const createMap = async (container, layerId) => {
	const { initializeArcGISMap } = await import("services/ArcGIS");
	return initializeArcGISMap(container, layerId);
};

export const SPCOutlookMap = ({ layerId }) => {
	const mapREF = React.useRef(null);
	let createdMap;

	React.useEffect(() => {
		if (mapREF.current && layerId) {
			createdMap = createMap(mapREF.current, layerId);
		}

		return () => {
			createdMap && createdMap.then((cleanup) => cleanup());
		};
	}, [mapREF, createdMap, layerId]);

	return (
		<div className='h-96'>
			<div ref={mapREF} className='w-screen h-[50vh] bg-stone-400 '></div>
		</div>
	);
};
