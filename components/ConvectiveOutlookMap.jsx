import React from "react";

export const ConvectiveOutlookMap = () => {
	const mapSelectorsRef = React.useRef(null);
	const mapRef = React.useRef(null);

	const handleOutlookDaySelect = (e) => {
		console.log("COMPONENT >>\n", e.target.value);
	};

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
		<div className='h-96 relative'>
			{/* <OutlookMapSelectors ref={mapSelectorsRef} /> */}
			<ArcGISMap ref={mapRef} />
		</div>
	);
};

const ArcGISMap = React.forwardRef(function (props, ref) {
	return (
		<div
			id='arcgis-map'
			ref={ref}
			className='w-screen h-[50vh] bg-stone-400 '
		></div>
	);
});

const OutlookMapSelectors = React.forwardRef(function (props, ref) {
	return (
		<div ref={ref}>
			<h2>Categorical Outlooks</h2>
			<div className='flex space-x-3'>
				<div
					className='border-2 border-white hover:bg-red-500/60 active:bg-red-500 px-4 py-2'
					data-layer-id='1'
				>
					Day 1
				</div>
				<div
					className='border-2 border-white hover:bg-red-500/60 active:bg-red-500 px-4 py-2'
					data-layer-id='9'
				>
					Day 2
				</div>
			</div>
		</div>
	);
});
