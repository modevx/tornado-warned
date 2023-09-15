import { useState } from "react";
import * as topojson from "topojson-client";
import { Button, Modal } from "react-daisyui";

import AlbersTopo from "components/_constants/albers-map.topo.json";
import { USStateMap } from "components";
import {
	TornadoWarningAlert,
	SevereStormWarningAlert,
	TornadoWatchAlert,
	SevereStormWatchAlert,
} from "./AlertModal";

import {
	useNwsAlertsByEvent,
	EVENTS,
	FAKE_ALERTS,
	SITUATIONS,
} from "services/nws-api-web-service";

import {
	pathGenerator,
	rewindPathGenerator,
} from "components/_constants/path-generators";

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

	const handleShowAlertModal = (alert) => {
		setAlertInfo(alert);
		setIsOpen((isOpen) => !isOpen);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<USStateMap>
				<WarningPolygons
					// alerts={tor_warn}
					alerts={fake_tor_warn}
					color='red'
					callback={handleShowAlertModal}
				/>
				<WarningPolygons
					// alerts={st_warn}
					alerts={fake_st_warn}
					color='#f90'
					callback={handleShowAlertModal}
				/>
				<WatchPolygons
					// alerts={tor_watch}
					alerts={fake_tor_watch}
					callback={handleShowAlertModal}
					topojsonClient={topojson}
				/>
				<WatchPolygons
					// alerts={st_watch}
					alerts={fake_st_watch}
					callback={handleShowAlertModal}
					topojsonClient={topojson}
				/>
			</USStateMap>

			<AlertModal
				isOpen={isOpen}
				alertInfo={alertInfo}
				closeModalHandler={handleCloseModal}
			/>
		</>
	);
};

// ------------
// --- UTILS
// ------------

const checkIsPDS = (alert, callback) => {
	const { description } = alert.properties;
	return callback(description, "particularly dangerous situation");
};

const checkIsEmergency = (alert, callback) => {
	const { description } = alert.properties;
	return callback(description, "tornado emergency");
};

const polygonStyles = (alert, isPDS, isTE) => {
	const { event } = alert.properties;

	const EVENT_STYLES = {
		"Tornado Warning": {
			fill: "transparent",
			fillOpacity: 0,
			stroke: "#f00",
			strokeOpacity: 0.5,
			strokeWidth: 2,
		},
		"Tornado Watch": {
			fill: "#ffff00",
			fillOpacity: 0.15,
			stroke: "#c4c400",
			strokeOpacity: 1,
			strokeWidth: 1,
		},
		"Severe Thunderstorm Warning": {
			fill: "transparent",
			fillOpacity: 0,
			stroke: "#ff5800",
			strokeOpacity: 0.5,
			strokeWidth: 2,
		},
		"Severe Thunderstorm Watch": {
			fill: "#00ff00",
			fillOpacity: 0.15,
			stroke: "#00b100",
			strokeOpacity: 1,
			strokeWidth: 1,
		},
	};
	const pdsStyles = {
		fill: "#ff00ff",
		fillOpacity: 0.5,
		stroke: "#b300b3",
		strokeOpacity: 0.5,
		strokeWidth: 2,
	};
	const emergencyStyles = {
		fill: "#3333cc",
		fillOpacity: 0.5,
		stroke: "#330099",
		strokeOpacity: 0.5,
		strokeWidth: 2,
	};

	return isTE ? emergencyStyles : isPDS ? pdsStyles : EVENT_STYLES[event];
};

const createWatchPolygon = (alert, topoJsonClient) => {
	const alertSameCodes = alert.properties.geocode.SAME;
	const watchGeoJSON = topoJsonClient.merge(
		AlbersTopo,
		AlbersTopo.objects.counties.geometries.filter((geometry) => {
			const id = `0${geometry.id}`;
			return alertSameCodes.includes(id);
		})
	);

	return watchGeoJSON;
};

// ------------
// --- WARNINGS
// ------------
const WarningPolygons = ({ alerts, callback, topojsonClient }) => {
	const isValidFeatures = alerts && alerts.length > 0;

	return (
		<>
			{isValidFeatures ? (
				<g>
					{alerts.map((alert) => {
						return (
							<WarningPolygon
								key={alert.id}
								alert={alert}
								topojsonClient={topojsonClient}
								onClick={callback}
							/>
						);
					})}
				</g>
			) : null}
		</>
	);
};

const WarningPolygon = ({ alert, onClick }) => {
	const isPDS = checkIsPDS(alert, checkStringForPhrase);
	const isEmergency = checkIsEmergency(alert, checkStringForPhrase);
	const pathStyles = polygonStyles(alert, isPDS, isEmergency);

	return (
		<path
			d={rewindPathGenerator(alert.geometry)}
			{...pathStyles}
			onClick={() => onClick(alert)}
		/>
	);
};

// ------------
// --- WATCHES
// ------------

const WatchPolygons = ({ alerts, callback, topojsonClient }) => {
	const isValidFeatures = alerts && alerts.length > 0;

	return (
		<>
			{isValidFeatures
				? alerts.map((alert) => {
						return (
							<WatchPolygon
								key={alert.id}
								alert={alert}
								topojsonClient={topojsonClient}
								onClick={callback}
							/>
						);
				  })
				: null}
		</>
	);
};

const WatchPolygon = ({ alert, onClick, topojsonClient }) => {
	const isPDS = checkIsPDS(alert, checkStringForPhrase);
	const isEmergency = checkIsEmergency(alert, checkStringForPhrase);
	const pathStyles = polygonStyles(alert, isPDS, isEmergency);
	const watchGeoJSON = createWatchPolygon(alert, topojsonClient);

	return (
		<path
			d={rewindPathGenerator(watchGeoJSON)}
			{...pathStyles}
			onClick={() => onClick(alert)}
		/>
	);
};

const AlertModal = ({ isOpen, closeModalHandler, alertInfo }) => {
	const ALERT_TYPE = {
		"Tornado Warning": TornadoWarningAlert,
		"Severe Thunderstorm Warning": SevereStormWarningAlert,
		"Tornado Watch": TornadoWatchAlert,
		"Severe Thunderstorm Watch": SevereStormWatchAlert,
	};

	const CurrentAlertModal = ALERT_TYPE[alertInfo?.properties?.event];

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
					<CurrentAlertModal alert={alertInfo} />
				</Modal>
			) : null}
		</>
	);
};

// TODO: relo to utils/
function checkStringForPhrase(string, phrase) {
	return string.toLowerCase().includes(phrase);
}
