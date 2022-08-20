import React, { useEffect, useRef } from "react";

export const ConvectiveOutlookMap = ({ layer }) => {
	const refMap = useRef(null);

	useEffect(() => {
		let createdMap;

		if (refMap.current && layer) {
			createdMap = createMap(refMap.current, layer.id);
		}

		return () => {
			createdMap && createdMap.then((cleanup) => cleanup());
		};
	}, [refMap, layer]);

	return (
		<div className='mb-4 border-2 border-red-500'>
			<h2>{layer && layer.name}</h2>
			<div ref={refMap} className='w-full h-48 bg-stone-400 '></div>
		</div>
	);
};

const createMap = async (container, layerId) => {
	const { initializeArcGISMap } = await import("services/arcgis");
	return initializeArcGISMap(container, layerId);
};
