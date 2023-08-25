import { useState } from "react";
import rewind from "@turf/rewind";
import { geoAlbers, geoPath, geoTransform } from "d3";
import { Button, Modal } from "react-daisyui";

import { Basemap, BasemapFeatureSelector } from "components";
import { albersCounties } from "components/_constants/map-features";
import { TornadoWarningAlert, SevereStormWarningAlert } from "./AlertCards";
import {
	useNwsAlertsByEvent,
	useWatchAlertsByEvent,
	useWarningAlertsByEvent,
	useFakeWatchAlertsByEvent,
	useFakeWarningAlertsByEvent,
	EVENTS,
	FAKE_ALERTS,
	SITUATIONS,
} from "services/nws-api-web-service";

const projection = geoAlbers();
const d3GeoPath = geoPath(projection);

export const ActiveAlertMap = () => {
	const { data: tor_warn } = useNwsAlertsByEvent(EVENTS.tor_warn);
	const { data: tor_watch } = useNwsAlertsByEvent(EVENTS.tor_watch);
	const { data: st_warn } = useNwsAlertsByEvent(EVENTS.st_warn);
	const { data: st_watch } = useNwsAlertsByEvent(EVENTS.st_watch);

	const fake_tor_warn = FAKE_ALERTS.tor_warn;
	const fake_tor_watch = FAKE_ALERTS.tor_watch;
	const fake_st_warn = FAKE_ALERTS.st_warn;
	const fake_st_watch = FAKE_ALERTS.st_watch;

	const [isOpen, setIsOpen] = useState(false);
	const [alertInfo, setAlertInfo] = useState(null);
	const [features, setFeatures] = useState({
		states: true,
		counties: false,
		cwas: false,
		pfzs: false,
	});

	const handleShowAlertModal = (alert) => {
		setAlertInfo(alert);
		setIsOpen((isOpen) => !isOpen);
	};
	const handleCloseModal = () => {
		setIsOpen(false);
	};
	const handleFeatureSelectorOnChange = (e) => {
		const { name } = e.target;
		setFeatures((prev) => Object.assign({ ...prev }, { [name]: !prev[name] }));
	};

	const testWatchHandler = () => {};

	return (
		<>
			<div className='flex items-center'>
				<BasemapFeatureSelector
					showValues={features}
					onChangeHandler={handleFeatureSelectorOnChange}
				/>
				<Basemap
					showStates={features.states}
					showCounties={features.counties}
					showCWAs={features.cwas}
					showPFZs={features.pfzs}
				>
					<Warnings
						// features={tor_warn}
						features={fake_tor_warn}
						color='#f00'
						callback={handleShowAlertModal}
					/>
					<Warnings
						// features={st_warn}
						features={fake_st_warn}
						color='#f60'
						callback={handleShowAlertModal}
					/>
					{/* <WatchAlertFeatures
            event="Tornado Watch"
            fillColor="yellow"
            onClickHandler={testWatchHandler}
          /> */}
					{/* <WatchAlertFeatures
            event="Severe Thunderstorm Watch"
            fillColor="green"
            onClickHandler={testWatchHandler}
          /> */}
				</Basemap>
			</div>

			<AlertModal
				isOpen={isOpen}
				alertInfo={alertInfo}
				closeModalHandler={handleCloseModal}
			/>
		</>
	);
};

const Watches = ({ event, fillColor, onClickHandler }) => {
	// TODO: create custom FeatureCollection containing only affectedZones
	const { data: watches } = useWatchAlertsByEvent(event);
	const { features, affectedZones } = useFakeWatchAlertsByEvent(event);
	const watchFeatureCollection = { type: "FeatureCollection", features: [] };

	if (watches) console.log("Watches >>\n", watches);
	// if (fakeWatches) console.log("Fake Watches >>\n", fakeWatches);
	// console.log("Counties >>\n", albersCounties);
	// console.log("affectedZones >>\n", affectedZones);

	albersCounties.features.forEach((feature) => {
		const nwsSAMEcode = `0${feature.id}`;
		const isAffectedCounty = affectedZones.includes(nwsSAMEcode);

		if (isAffectedCounty) {
			watchFeatureCollection.features.push(feature);
		}
	});

	console.log("watchFeatureCollection >>\n", watchFeatureCollection);

	return (
		<>
			{watches && (
				<path
					// d={d3GeoPath(watchFeatureCollection)}
					d={d3GeoPath(watches)}
					fill={fillColor}
					stroke='black'
					strokeOpacity={0.7}
					strokeWidth={0.5}
					opacity={0.7}
				/>
			)}
		</>
	);
};

const Warnings = ({ features, color, callback }) => {
	// ! TODO: add logic to change feature color/behavior for TORNADO EMERGENCY & PDS

	return (
		<>
			{features && features.length > 0 ? (
				<g>
					{features.map((feature) => {
						const { description: desc } = feature.properties;
						const isEmergency = checkStringForPhrase(desc, SITUATIONS.te);
						const isPDS = checkStringForPhrase(desc, SITUATIONS.pds);
						const polygonColor = isEmergency ? "#f0f" : isPDS ? "#09f" : color;

						return (
							<AlertPolygon
								key={feature.id}
								feature={feature}
								color={polygonColor}
								callback={callback}
							/>
						);
					})}
				</g>
			) : null}
		</>
	);
};

const WarningPolygon = ({ callback, color, feature }) => {
	return null;
};

const AlertPolygon = ({ feature, color, callback }) => {
	return (
		<path
			d={d3GeoPath(rewind(feature.geometry, { reverse: true }))}
			fill='none'
			stroke={color}
			strokeWidth={1}
			onClick={() => callback(feature)}
		/>
	);
};

const AlertModal = ({ isOpen, closeModalHandler, alertInfo }) => {
	const ALERT_TYPE = {
		"Tornado Warning": TornadoWarningAlert,
		"Severe Thunderstorm Warning": SevereStormWarningAlert,
	};

	const AlertModal = ALERT_TYPE[alertInfo?.properties?.event];

	return (
		<>
			{alertInfo !== null ? (
				<Modal open={isOpen} className='overflow-auto'>
					<Button
						size='sm'
						color='ghost'
						shape='circle'
						className='absolute right-2 top-2'
						onClick={closeModalHandler}
					>
						x
					</Button>
					<AlertModal alert={alertInfo} />
					{/* <Modal.Header className='font-bold'>Hello!</Modal.Header>
			<Modal.Body className='uppercase font-bold text-red-500'>
				{properties.event}
			</Modal.Body> */}
				</Modal>
			) : null}
		</>
	);
};

// TODO: relo to utils/
function checkStringForPhrase(string, phrase) {
	return string.toLowerCase().includes(phrase);
}
