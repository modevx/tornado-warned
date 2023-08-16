import { useState } from "react";
import { Button, Checkbox, Form, Modal } from "react-daisyui";

import { PageLayout, ConusBasemap } from "components";
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

	const [showStates, setShowStates] = useState(true);
	const [showCounties, setShowCounties] = useState(false);
	const [showCWAs, setShowCWAs] = useState(false);
	const [showPFZs, setShowPFZs] = useState(false);

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

	// useFakeWatchAlerts("Severe Thunderstorm Watch");

	return (
		<PageLayout>
			<>
				<div className='flex items-center p-10'>
					<ConusBasemap
						showStates={showStates}
						showCounties={showCounties}
						showCWAs={showCWAs}
						showPFZs={showPFZs}
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
					</ConusBasemap>
					<Form className='flex flex-col justify-center bg-blue-900 rounded-md p-4'>
						<Form.Label title='States'>
							<Checkbox
								className='ml-4'
								defaultChecked
								value={showStates}
								onChange={() => setShowStates((prev) => !prev)}
							/>
						</Form.Label>
						<Form.Label title='Counties'>
							<Checkbox
								className='ml-4'
								value={showCounties}
								onChange={() => setShowCounties((prev) => !prev)}
							/>
						</Form.Label>
						<Form.Label title='CWAs'>
							<Checkbox
								className='ml-4'
								value={showCWAs}
								onChange={() => setShowCWAs((prev) => !prev)}
							/>
						</Form.Label>
						<Form.Label title='PFZs'>
							<Checkbox
								className='ml-4'
								value={showPFZs}
								onChange={() => setShowPFZs((prev) => !prev)}
							/>
						</Form.Label>
					</Form>
					<ClickedPolygonModal
						isOpen={isOpen}
						alertInfo={alertInfo}
						closeModalHandler={handleCloseModal}
					/>
				</div>
				{/* <ActiveAlertMap /> */}
				{/* <AlertFilters
          handler={handleToggleChange}
          filterState={alertFilters ?? {}}
        />

        {alertFilters.showTornadoWarnings && (
          <AlertSection
            alertComponent={TornadoWarningAlert}
            event="Tornado Warning"
          />
        )}

        {alertFilters.showTornadoWatches && (
          <AlertSection
            alertComponent={TornadoWatchAlert}
            event="Tornado Watch"
          />
        )}

        {alertFilters.showStormWarnings && (
          <AlertSection
            alertComponent={SevereStormWarningAlert}
            event="Severe Thunderstorm Warning"
          />
        )}

        {alertFilters.showStormWatches && (
          <AlertSection
            alertComponent={SevereStormWatchAlert}
            event="Severe Thunderstorm Watch"
          />
        )} */}
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
