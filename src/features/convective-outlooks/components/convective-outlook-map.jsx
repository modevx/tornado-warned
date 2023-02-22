import React from "react";
import rewind from "@turf/rewind";
import { Button, Divider, Form, Radio, ButtonGroup } from "react-daisyui";
import { geoAlbers, geoPath } from "d3-geo";
import { Basemap } from "components/maps";
import * as ICONS from "constants/icons";
import {
	IoRainy,
	IoSkull,
	IoThunderstorm,
	IoWarningOutline,
} from "react-icons/io5";
import { BsTornado } from "react-icons/bs";
import { GiDamagedHouse } from "react-icons/gi";
import { MAYFIELD } from "../Mayfield";
import {
	getMapServerLayerJSON,
	getMapServerFeatureLayerGeoJSON,
	getOutlookDayFeatureLayersJSON,
	getOutlookDayFeatureLayersGeoJSON,
	useConvectiveOutlookQuery,
	useSPCConvectiveOutlooks,
} from "services/convective-outlook-map-server";
import dayjs from "dayjs";
import dayJSlocFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(dayJSlocFormat);

// (1-MRGL-dark green, 2-SLGT-yellow, 3-ENH-orange, 4-MDT-red, and 5-HIGH-magenta
const dnMap = {
	2: {
		label: "storm",
		description: "> 10% chance of thunderstorms",
		abbr: "tstm",
		activeColor: "bg-[hsl(120,60%,30%)]",
		fill: "hsl(120,60%,30%)",
		stroke: "hsl(120,70%,30%)",
		icon: ICONS.IoRainy,
	},
	3: {
		label: "marginal",
		description: "scattered severe storms",
		abbr: "mrgl",
		activeColor: "bg-[hsl(120,100%,50%)]",
		fill: "hsl(120,100%,50%)",
		stroke: "hsl(120,100%,50%)",
		icon: ICONS.IoThunderstorm,
	},
	4: {
		label: "slight",
		description: "organized severe storms expected",
		abbr: "slgt",
		activeColor: "bg-[hsl(60,100%,50%)]",
		fill: "hsl(60,100%,30%)",
		stroke: "hsl(60,100%,50%)",
		icon: ICONS.IoWarningOutline,
	},
	5: {
		label: "enhanced",
		description: "concentrated, severe storms.",
		abbr: "enh",
		activeColor: "bg-[hsl(30,100%,50%)]",
		fill: "hsl(30,100%,30%)",
		stroke: "hsl(30,100%,50%)",
		icon: ICONS.GiDamagedHouse,
	},
	6: {
		label: "moderate",
		description:
			"widespread severe weather with multiple tornadoes and/or intense storms.",
		abbr: "mdt",
		activeColor: "bg-[hsl(0,100%,50%)]",
		fill: "hsl(0,100%,30%)",
		stroke: "hsl(0,100%,50%)",
		icon: ICONS.BsTornado,
	},
	8: {
		label: "high",
		description:
			"severe weather outbreak with intense tornadoes or a long-lived derecho system.",
		abbr: "high",
		activeColor: "bg-[hsl(300,100%,30%)]",
		fill: "hsl(300,100%,30%)",
		stroke: "hsl(300,100%,50%)",
		icon: ICONS.IoSkull,
	},
	10: {
		label: "significant",
		description:
			"severe weather outbreak with intense tornadoes or a long-lived derecho system.",
		abbr: "high",
		activeColor: "bg-[hsl(300,100%,30%)]",
		fill: "hsl(300,100%,30%)",
		stroke: "hsl(300,100%,50%)",
		icon: ICONS.IoSkull,
	},
};
const projection = geoAlbers();
const pathGen = geoPath(projection);

export const ConvectiveOutlookMap = () => {
	React.useEffect(() => {
		const testServiceFunction = async () => {
			const layerJSON = await getMapServerLayerJSON(17);
			const layerGeoJSON = await getMapServerFeatureLayerGeoJSON(17);
			const layersJSON = await getOutlookDayFeatureLayersJSON([17, 18, 19]);
			const layersGeoJSON = await getOutlookDayFeatureLayersGeoJSON([
				17, 18, 19,
			]);

			console.clear();

			console.log("LAYER JSON >>\n", layerJSON);
			console.log("FEATURE LAYER GEOJSON >>\n", layerGeoJSON);
			console.log("LAYERS JSON >>\n", layersJSON);
			console.log("FEATURE LAYERS GEOJSON >>\n", layersGeoJSON);
		};

		testServiceFunction();
	}, []);

	// const { data: outlooks, error: errorOutlooks } = useSPCConvectiveOutlooks();
	const [btnStatusMap, setBtnStatusMap] = React.useState({
		1: true,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
	});
	const [outlookDay, setOutlookDay] = React.useState(0);

	// const [layers, setLayers] = React.useState(MAYFIELD);
	// const [legendState, setLegendState] = React.useState({
	// 	storm: false,
	// 	marginal: false,
	// 	slight: false,
	// 	enhanced: false,
	// 	moderate: false,
	// 	high: false,
	// });
	// let [currentOutlook, setCurrentOutlook] = React.useState([]);
	// let [activeDate, setActiveDate] = React.useState();
	// let [expirationDate, setExpirationDate] = React.useState();

	const handleOutlookDaySelect = (key) => {
		console.log("Day: ", key);

		const clearedDaySelectBtns = {
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
			7: false,
			8: false,
		};

		setBtnStatusMap({ ...clearedDaySelectBtns, [key]: true });
		setOutlookDay(key - 1);
	};

	// React.useEffect(() => {
	// 	const parsedOutlookFeatures = outlooks ? {
	// 		1: {outlooks.DAY_1},
	// 	} : null;

	// 	const parsedOutlookMeta = outlooks ? {
	// 		1:
	// 	} : null;

	// },[outlooks])

	// React.useEffect(() => {
	// 	console.clear();
	// 	console.log("> FORMATTED OUTLOOKS FROM SERVICE\n", outlooks);
	// 	console.log("DAY SELECT BTNS\n", btnStatusMap);
	// }, [btnStatusMap, outlooks]);

	return (
		<>
			<DaySelectBtns
				btnStatuses={btnStatusMap}
				onClickHandler={handleOutlookDaySelect}
			/>

			{/* {outlooks ? (
				<div className='flex justify-center mt-5'>
					<div className='flex flex-col'>
						<span className='text-2xl bold text-left my-3'>
							OUTLOOK DAY: {outlookDay + 1}
						</span>
						<span className='text-2xl bold text-left my-3'>
							ACTIVE:{" "}
							{dayjs(outlooks[outlookDay].features[0].properties.valid).format(
								"dddd - MMM DD, YYYY - h:mm A"
							)}
						</span>
						<span className='text-2xl bold text-left my-3'>
							EXPIRES:{" "}
							{dayjs(outlooks[outlookDay].features[0].properties.expire).format(
								"dddd - MMM DD, YYYY - h:mm A"
							)}
						</span>
					</div>
				</div>
			) : null} */}

			{/* <Basemap>
				{outlooks ? (
					<GeoJsonSVGPathGroup
						featureCollectionOBJ={outlooks[outlookDay]}
						setState={setLegendState}
					/>
				) : null}
			</Basemap> */}

			{/* <FeatureLayerSwitches layers={}/> */}
		</>
	);
};

const DaySelectBtns = ({ btnStatuses, onClickHandler }) => {
	return (
		<ButtonGroup className='w-full justify-center'>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((day) => (
				<Button
					key={`day-${day}`}
					active={btnStatuses[day]}
					onClick={() => onClickHandler(day)}
				>
					{day}
				</Button>
			))}
		</ButtonGroup>
	);
};

const GeoJsonSVGPathGroup = ({ featureCollectionOBJ, setState }) => {
	return (
		<g>
			{featureCollectionOBJ.features.map((feature, index) => {
				const {
					properties: { dn, valid, expire, idp_source },
				} = feature;
				const fLabel = dnMap[dn]?.label;

				return (
					<path
						d={pathGen(rewind(feature, { reverse: true }))}
						key={`${idp_source}-${dn}`}
						fill={dnMap[dn]?.fill}
						stroke={dnMap[dn]?.stroke}
						fillOpacity={0.5}
						strokeWidth={2} // `${dnMap[dn].label}`
						onMouseOver={() =>
							setState((state) => {
								return {
									...state,
									[fLabel]: !state[fLabel],
								};
							})
						}
						onMouseLeave={() =>
							setState((state) => {
								return {
									...state,
									[fLabel]: !state[fLabel],
								};
							})
						}
					/>
				);
			})}
		</g>
	);
};

const FeatureLayerSwitches = () => {};

// -- LATER
// consolidate radio select groups into single "valueSet" component
// args: setValueFun, range/count
// const CategoricalLegend = ({ state }) => {
// 	return (
// 		<div className='flex flex-wrap justify-center mb-5 mx-10'>
// 			{Object.values(dnMap).map((cat, index, array) => {
// 				const LabelIcon = cat.icon;

// 				return (
// 					<>
// 						<div
// 							className={`flex flex-col items-center space-y-3 ${
// 								state[cat.label] ? cat.activeColor : ""
// 							}`}
// 						>
// 							<LabelIcon size={50} color={cat.stroke} />
// 							<span className={`text-[calc(12px+1vw)] uppercase mx-4 mb-2`}>
// 								{cat.label}
// 							</span>
// 						</div>
// 						{index < array.length ? <Divider /> : null}
// 					</>
// 				);
// 			})}
// 		</div>
// 	);
// };
