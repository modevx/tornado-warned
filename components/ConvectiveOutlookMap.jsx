import React from "react";

export const ConvectiveOutlookMap = () => {
	const ref_outlookDayBtns = React.useRef(null);
	const ref_mapView = React.useRef(null);

	const handleOutlookDaySelect = (e) => {
		console.log("COMPONENT >>\n", e.target.value);
	};

	async function loadMap(container) {
		const { buildArcGISMap } = await import("services/arcgis");
		return buildArcGISMap(container);
	}

	React.useEffect(() => {
		let asyncLoadMapCleanup;

		if (ref_mapView.current) {
			asyncLoadMapCleanup = loadMap(ref_mapView.current);
		}

		return () => {
			asyncLoadMapCleanup && asyncLoadMapCleanup.then((cleanup) => cleanup());
		};
	}, [ref_mapView]);

	return (
		<div className='h-96 relative'>
			<OutlookDayBtns ref={ref_outlookDayBtns} />
			<MapView ref={ref_mapView} />
		</div>
	);
};

const MapView = React.forwardRef(function (props, ref) {
	return (
		<div
			id='arcgis-map'
			ref={ref}
			className='w-screen h-[50vh] bg-stone-400 '
		></div>
	);
});

const OutlookDayBtns = React.forwardRef(function (props, ref) {
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
