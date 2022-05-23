import React from "react";

export const ConvectiveOutlookMap = () => {
	const [day, setDay] = React.useState(1);
	const mapRef = React.useRef(null);

	const handleCheckboxOnChange = (e) => {
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
			<div
				id='arcgis-map'
				ref={mapRef}
				className='w-screen h-[50vh] bg-stone-400 '
			></div>
			<div id='outlook-radio-btns' className='absolute top-0 left-0'>
				<label>
					<input
						type='radio'
						id='day-1'
						name='outlook-day'
						value='1'
						defaultChecked
						onChange={handleCheckboxOnChange}
					/>
					1
				</label>
				<label>
					<input
						type='radio'
						id='day-2'
						name='outlook-day'
						value='2'
						onChange={handleCheckboxOnChange}
					/>
					2
				</label>
				<label>
					<input
						type='radio'
						id='day-3'
						name='outlook-day'
						value='3'
						onChange={handleCheckboxOnChange}
					/>
					3
				</label>
			</div>
		</div>
	);
};
