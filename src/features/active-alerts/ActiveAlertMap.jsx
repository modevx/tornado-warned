import { useState } from "react";
import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3";
import { Button, Modal } from "react-daisyui";

import { Basemap, BasemapFeatureSelector } from "components";
import { albersCounties } from "components/_constants/map-features";
import { TornadoWarningAlert, SevereStormWarningAlert } from "./AlertCards";
import {
	useWatchAlertsByEvent,
	useWarningAlertsByEvent,
	useFakeWatchAlertsByEvent,
	useFakeWarningAlertsByEvent,
	NWS_EVENTS,
} from "services/nws-api-web-service";

const projection = geoAlbers();
const d3GeoPath = geoPath(projection);

export const ActiveAlertMap = () => {
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
					<WarningAlertFeatures
						event='Tornado Warning'
						color='stroke-red-400'
						onClickHandler={handleShowAlertModal}
					/>
					<WarningAlertFeatures
						event='Severe Thunderstorm Warning'
						color='stroke-orange-400'
						onClickHandler={handleShowAlertModal}
					/>
					<WatchAlertFeatures
						event='Tornado Watch'
						fillColor='yellow'
						onClickHandler={testWatchHandler}
					/>
					<WatchAlertFeatures
						event='Severe Thunderstorm Watch'
						fillColor='green'
						onClickHandler={testWatchHandler}
					/>
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

const WatchAlertFeatures = ({ event, fillColor, onClickHandler }) => {
	// TODO: create custom FeatureCollection containing only affectedZones
	// const { data: watches } = useWatchAlertsByEvent(event);
	const { features, affectedZones } = useFakeWatchAlertsByEvent(event);
	const watchFeatureCollection = { type: "FeatureCollection", features: [] };

	// if (watches) console.log("Watches >>\n", watches);
	// if (fakeWatches) console.log("Fake Watches >>\n", fakeWatches);
	console.log("Counties >>\n", albersCounties);
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
		<path
			d={d3GeoPath(watchFeatureCollection)}
			fill={fillColor}
			stroke='black'
			strokeOpacity={0.7}
			strokeWidth={0.5}
			opacity={0.7}
		/>
	);
};

const WarningAlertFeatures = ({ event, color, onClickHandler }) => {
	const { data: warnings } = useWarningAlertsByEvent(event);
	const fakeWarnings = useFakeWarningAlertsByEvent(event);

	return (
		<>
			{/* {warnings.length > 0 ? (
        <g>
          {warnings.map(({ feature }) => (
            <AlertPolygon key={feature.id} feature={feature.geometry} color={color} />
          ))}
        </g>
      ) : null} */}
			{fakeWarnings.length > 0 ? (
				<g>
					{fakeWarnings.map((alert) => (
						<AlertPolygon
							key={alert.id}
							feature={alert}
							color={color}
							onClickHandler={onClickHandler}
						/>
					))}
				</g>
			) : null}
		</>
	);
};

const AlertPolygon = ({ feature, color, onClickHandler }) => {
	return (
		<path
			d={d3GeoPath(rewind(feature.geometry, { reverse: true }))}
			strokeWidth={10}
			opacity={0.7}
			className={color}
			onClick={() => onClickHandler(feature)}
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
