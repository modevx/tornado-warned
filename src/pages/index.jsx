import { useState } from "react";
import { Button, Checkbox, Form, Modal } from "react-daisyui";

import { Basemap, BasemapFeatureSelector, PageLayout } from "components";
import { AlertFilters } from "features/active-alerts/AlertFilters";
import { AlertSection } from "features/active-alerts/AlertSection";
import {
	TornadoWarningAlert,
	TornadoWatchAlert,
	SevereStormWarningAlert,
	SevereStormWatchAlert,
} from "features/active-alerts/AlertCards";
import { ActiveAlertMap } from "features/active-alerts";

import {
	useWarningAlertsByEvent,
	useFakeWatchAlerts,
	useFakeWarningAlerts,
} from "services/nws-api-web-service";
import rewind from "@turf/rewind";
import { albersPathGenerator } from "components/_constants/path-generators";

const HomeScreen = () => {
	const [alertFilters, setAlertFilters] = useState({
		showTornadoWarnings: true,
		showTornadoWatches: true,
		showStormWarnings: true,
		showStormWatches: true,
	});

	const handleToggleChange = (e) => {
		const { name: toggleName } = e.target;

		setAlertFilters((prev) =>
			Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
		);
	};

	const [isOpen, setIsOpen] = useState(false);
	const [alertInfo, setAlertInfo] = useState(null);

	const handleShowAlertModal = (alert) => {
		setAlertInfo(alert);
		setIsOpen((isOpen) => !isOpen);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const [features, setFeatures] = useState({
		states: true,
		counties: false,
		cwas: false,
		pfzs: false,
	});

	const handleFeatureSelectorOnChange = (e) => {
		const { name } = e.target;
		setFeatures((prev) => Object.assign({ ...prev }, { [name]: !prev[name] }));
	};

	// useFakeWatchAlerts("Severe Thunderstorm Watch");

	return (
		<PageLayout>
			<>
				<div className='flex items-center p-10'>
					<Basemap
						showStates={features.states}
						showCounties={features.counties}
						showCWAs={features.cwas}
						showPFZs={features.pfzs}
					>
						<WarningFeatures
							event='Tornado Warning'
							color='stroke-red-400'
							onClickHandler={handleShowAlertModal}
						/>
						<WarningFeatures
							event='Severe Thunderstorm Warning'
							color='stroke-orange-400'
							onClickHandler={handleShowAlertModal}
						/>
					</Basemap>

					<BasemapFeatureSelector
						showValues={features}
						onChangeHandler={handleFeatureSelectorOnChange}
					/>

					<ClickedPolygonModal
						isOpen={isOpen}
						alertInfo={alertInfo}
						closeModalHandler={handleCloseModal}
					/>
				</div>
			</>
		</PageLayout>
	);
};

export default HomeScreen;

const WarningFeatures = ({ event, color, onClickHandler }) => {
	const { data } = useWarningAlertsByEvent(event);
	const fakeAlerts = useFakeWarningAlerts(event);

	if (fakeAlerts) console.log(`${event} >>\n`, fakeAlerts);

	return (
		<>
			{/* {data.length > 0 ? (
        <g>
          {data.map(({ feature }) => (
            <AlertPolygon key={feature.id} feature={feature.geometry} color={color} />
          ))}
        </g>
      ) : null} */}
			{fakeAlerts.length > 0 ? (
				<g>
					{fakeAlerts.map((alert) => (
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
			d={albersPathGenerator(rewind(feature.geometry, { reverse: true }))}
			strokeWidth={10}
			opacity={0.7}
			className={color}
			onClick={() => onClickHandler(feature)}
		/>
	);
};

const ClickedPolygonModal = ({ isOpen, closeModalHandler, alertInfo }) => {
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
