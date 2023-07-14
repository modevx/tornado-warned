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
import {
	useTornadoWarningQuery,
	useTornadoWatchQuery,
	useSevereStormWarningQuery,
	useSevereStormWatchQuery,
	useFakeTornadoWarnings,
	useFakeTornadoWatches,
	useFakeSevereStormWarnings,
	useFakeSevereStormWatches,
} from "services/nws-api-web-service";

const HomeScreen = () => {
	const [appliedAlertFilters, setAlertFilters] = useState({
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

	const { data: tornadoWarnings } = useTornadoWarningQuery();
	const { data: tornadoWatches } = useTornadoWatchQuery();
	const { data: stormWarnings } = useSevereStormWarningQuery();
	const { data: stormWatches } = useSevereStormWatchQuery();

	const fakeTornadoWarnings = useFakeTornadoWarnings();
	const fakeTornadoWatches = useFakeTornadoWatches();
	const fakeStormWarnings = useFakeSevereStormWarnings();
	const fakeStormWatches = useFakeSevereStormWatches();

	return (
		<PageLayout>
			<div className='p-4'>
				{/* <ActiveAlertCounts
          tornadoWarnings={tornadoWarnings}
          tornadoWatches={tornadoWatches}
        />

				<AlertFilters />

        <AlertSection
          alertFeatureArr={tornadoWarnings}
          alertComponent={TornadoWarningAlert}
        />
        <AlertSection
          alertFeatureArr={tornadoWatches}
          alertComponent={TornadoWatchAlert}
        />
        <AlertSection
          alertFeatureArr={stormWarnings}
          alertComponent={SevereStormWarningAlert}
        />
        <AlertSection
          alertFeatureArr={stormWatches}
          alertComponent={SevereStormWatchAlert}
        /> */}
				{/* -- TESTING -- */}

				<AlertFilters
					handler={handleToggleChange}
					filterState={appliedAlertFilters ?? {}}
				/>

				{appliedAlertFilters["showTornadoWarnings"] ? (
					<AlertSection
						alertFeatureArr={fakeTornadoWarnings}
						alertComponent={TornadoWarningAlert}
					/>
				) : null}

				{appliedAlertFilters["showTornadoWatches"] ? (
					<AlertSection
						alertFeatureArr={fakeTornadoWatches}
						alertComponent={TornadoWatchAlert}
					/>
				) : null}

				{appliedAlertFilters["showStormWarnings"] ? (
					<AlertSection
						alertFeatureArr={fakeStormWarnings}
						alertComponent={SevereStormWarningAlert}
					/>
				) : null}

				{appliedAlertFilters["showStormWatches"] ? (
					<AlertSection
						alertFeatureArr={fakeStormWatches}
						alertComponent={SevereStormWatchAlert}
					/>
				) : null}
			</div>
		</PageLayout>
	);
};

export default HomeScreen;
