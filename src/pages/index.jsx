import { PageLayout } from "components";
import {
	ActiveAlertCounts,
	NWSAlertSection,
	TornadoWarningAlert,
	TornadoWatchAlert,
} from "features/active-alerts";
import {
	useTornadoWarningQuery,
	useTornadoWatchQuery,
	useFakeTornadoWarnings,
	useFakeTornadoWatches,
} from "services/nws-api-web-service";

const HomeScreen = () => {
	const { data: tornadoWarnings } = useTornadoWarningQuery();
	const { data: tornadoWatches } = useTornadoWatchQuery();

	const fakeTornadoWarnings = useFakeTornadoWarnings();
	const fakeTornadoWatches = useFakeTornadoWatches();

	return (
		<PageLayout>
			<div className='p-4'>
				<ActiveAlertCounts
					tornadoWarnings={tornadoWarnings}
					tornadoWatches={tornadoWatches}
				/>

				<NWSAlertSection
					alertFeatureArr={tornadoWarnings}
					alertComponent={TornadoWarningAlert}
				/>
				<NWSAlertSection
					alertFeatureArr={tornadoWatches}
					alertComponent={TornadoWatchAlert}
				/>
				{/* -- TESTING -- */}
				{/* <ActiveAlertCounts
					tornadoWarnings={fakeTornadoWarnings}
					tornadoWatches={fakeTornadoWatches}
				/>

				<NWSAlertSection
					alertFeatureArr={fakeTornadoWarnings}
					alertComponent={TornadoWarningAlert}
				/>
				<NWSAlertSection
					alertFeatureArr={fakeTornadoWatches}
					alertComponent={TornadoWatchAlert}
				/> */}
			</div>
		</PageLayout>
	);
};

export default HomeScreen;
