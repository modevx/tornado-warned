import { useState } from "react";

import { PageLayout } from "components";
import {
	AlertFilters,
	NWSAlertSection,
	TornadoWarningAlert,
	TornadoWatchAlert,
	SevereStormWarningAlert,
	SevereStormWatchAlert,
} from "features/active-alerts";
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

        <NWSAlertSection
          alertFeatureArr={tornadoWarnings}
          alertComponent={TornadoWarningAlert}
        />
        <NWSAlertSection
          alertFeatureArr={tornadoWatches}
          alertComponent={TornadoWatchAlert}
        />
        <NWSAlertSection
          alertFeatureArr={stormWarnings}
          alertComponent={SevereStormWarningAlert}
        />
        <NWSAlertSection
          alertFeatureArr={stormWatches}
          alertComponent={SevereStormWatchAlert}
        /> */}
				{/* -- TESTING -- */}

				<AlertFilters
					handler={handleToggleChange}
					filterState={appliedAlertFilters ?? {}}
				/>

				{appliedAlertFilters["showTornadoWarnings"] ? (
					<NWSAlertSection
						alertFeatureArr={fakeTornadoWarnings}
						alertComponent={TornadoWarningAlert}
					/>
				) : null}

				{appliedAlertFilters["showTornadoWatches"] ? (
					<NWSAlertSection
						alertFeatureArr={fakeTornadoWatches}
						alertComponent={TornadoWatchAlert}
					/>
				) : null}

				{appliedAlertFilters["showStormWarnings"] ? (
					<NWSAlertSection
						alertFeatureArr={fakeStormWarnings}
						alertComponent={SevereStormWarningAlert}
					/>
				) : null}

				{appliedAlertFilters["showStormWatches"] ? (
					<NWSAlertSection
						alertFeatureArr={fakeStormWatches}
						alertComponent={SevereStormWatchAlert}
					/>
				) : null}
			</div>
		</PageLayout>
	);
};

export default HomeScreen;
