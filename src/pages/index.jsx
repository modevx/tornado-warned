import { useState } from "react";

import { PageLayout } from "components";
import { AlertFilters } from "features/active-alerts/AlertFilters";
import { AlertSection } from "features/active-alerts/AlertSection";
import {
	TornadoWarningAlert,
	TornadoWatchAlert,
	SevereStormWarningAlert,
	SevereStormWatchAlert,
} from "features/active-alerts/AlertCards";

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

	return (
		<PageLayout>
			<>
				<AlertFilters
					handler={handleToggleChange}
					filterState={alertFilters ?? {}}
				/>

				<AlertSection
					alertComponent={TornadoWarningAlert}
					event='Tornado Warning'
					isDisplayed={alertFilters.showTornadoWarnings}
				/>

				<AlertSection
					alertComponent={TornadoWatchAlert}
					event='Tornado Watch'
					isDisplayed={alertFilters.showTornadoWatches}
				/>

				<AlertSection
					alertComponent={SevereStormWarningAlert}
					event='Severe Thunderstorm Warning'
					isDisplayed={alertFilters.showStormWarnings}
				/>

				<AlertSection
					alertComponent={SevereStormWatchAlert}
					event='Severe Thunderstorm Watch'
					isDisplayed={alertFilters.showStormWatches}
				/>
			</>
		</PageLayout>
	);
};

export default HomeScreen;
