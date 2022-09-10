import React from "react";
import rewind from "@turf/rewind";
import { Form, Radio } from "react-daisyui";
import { geoAlbers, geoPath } from "d3-geo";
import { Basemap } from "components";

// (1-MRGL-dark green, 2-SLGT-yellow, 3-ENH-orange, 4-MDT-red, and 5-HIGH-magenta
const dnMap = {
	2: {
		label: "Thunderstorm",
		abbr: "TSTM",
		fill: "hsl(120,80%,30%)",
		stroke: "hsl(120,100%,50%)",
	},
	3: {
		label: "Marginal",
		abbr: "MRGL",
		fill: "hsl(120,100%,40%)",
		stroke: "hsl(120,100%,50%)",
	},
	4: {
		label: "Slight",
		abbr: "SLGT",
		fill: "hsl(60,100%,30%)",
		stroke: "hsl(60,100%,50%)",
	},
	5: {
		label: "Enhanced",
		abbr: "ENH",
		fill: "hsl(30,100%,30%)",
		stroke: "hsl(30,100%,50%)",
	},
	6: {
		label: "Moderate",
		abbr: "MDT",
		fill: "hsl(0,100%,30%)",
		stroke: "hsl(0,100%,50%)",
	},
	8: {
		label: "High",
		abbr: "HIGH",
		fill: "hsl(300,100%,30%)",
		stroke: "hsl(300,100%,50%)",
	},
};
const projection = geoAlbers();
const pathGen = geoPath(projection);

export const ConvectiveOutlookMap = () => {
	const [outlooks, setOutlooks] = React.useState();
	const [outlookDay, setOutlookDay] = React.useState(0);

	React.useEffect(() => {
		const getOutlooks = async () => {
			const outlooks = await Promise.all([
				fetchOutlookLayerById(1),
				fetchOutlookLayerById(9),
				fetchOutlookLayerById(17),
			]);
			setOutlooks(outlooks);
		};
		getOutlooks();
	}, []);

	return (
		<div>
			<Basemap>
				{outlooks && (
					<GeoJsonSVGPathGroup geojsonGeometry={outlooks[outlookDay]} />
				)}
			</Basemap>
			<DaySelectRadioButtons setDayFunc={setOutlookDay} />
		</div>
	);
};

// -- COMPONENTS
const GeoJsonSVGPathGroup = ({ geojsonGeometry }) => {
	return (
		<g>
			{geojsonGeometry.features.map((feature, index) => {
				const {
					properties: { dn, valid, expire, idp_source },
				} = feature;
				console.log(dn, valid, expire, idp_source);

				return (
					<path
						d={pathGen(rewind(feature, { reverse: true }))}
						key={`${idp_source}-${dn}`}
						fill={dnMap[dn].fill}
						stroke={dnMap[dn].stroke}
						fillOpacity={0.5}
						strokeWidth={2}
					/>
				);
			})}
		</g>
	);
};
const DaySelectRadioButtons = ({ setDayFunc }) => {
	return (
		<Form className='flex-row justify-center'>
			{[0, 1, 2].map((num) => (
				<Form.Label
					key={`outlook-day-radio-btn-${num + 1}`}
					title={`Day ${num + 1}`}
					className='flex mr-2'
				>
					<Radio
						defaultChecked={num == 0}
						name='day'
						value={num}
						className='ml-2'
						onChange={(e) => setDayFunc(e.target.value)}
					/>
				</Form.Label>
			))}
		</Form>
	);
};
// -- FUNCTIONS
const fetchOutlookLayerById = async (layerId) => {
	const url = `https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer/${layerId}/query?&outFields=*&geometry=true&f=geojson`;
	const res = await fetch(url);
	return await res.json();
};
