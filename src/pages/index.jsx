import { useState } from "react";
import { Form, Checkbox } from "react-daisyui";

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

	const handleToggleChange = (e) => {
		const { name: toggleName } = e.target;

		setAlertFilters((prev) =>
			Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
		);
	};

	return (
		<PageLayout>
			<>
				<div className='flex items-center p-10'>
					<ConusBasemap
						showStates={showStates}
						showCounties={showCounties}
						showCWAs={showCWAs}
					/>
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
					</Form>
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
