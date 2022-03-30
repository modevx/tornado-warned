import { AlertList, PageWrapper } from "../components";
import { useActiveAlerts, useTornadoWarningsTest } from "../hooks";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NWS";
import TornadoWarningWindow from "../components/TornadoWarningWindow";
import TornadoWatchesWindow from "../components/TornadoWatchesWindow";
import CancelledAlertsWindow from "../components/CancelledAlertsWindow";
import Hero from "../components/Hero";
import TornadoActionFeaturesSection from "../components/TornadoActionFeaturesSection";
// ------
import { useTornadoWarnings } from "../hooks";

const SiteFeaturesSection = () => {};

const AlertSection = () => {};

const Alert = ({ alert }) => {
	const { areaDesc, effective, expires, event } = alert.properties;

	return (
		<div>
			<h3 className='text-white'>{event}</h3>
			<div>
				<span>Starts: {effective}</span> | <span>Ends: {expires}</span>
			</div>
			<p>{areaDesc}</p>
		</div>
	);
};

const HomeScreen = () => {
	const { data, error, isLoading } = useTornadoWarnings();

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					{/* <Hero /> */}
					{data?.map(warning => (
						<Alert alert={warning} key={warning.id} />
					))}
					{/* <TornadoActionFeaturesSection /> */}
					<TornadoWarningWindow />
					{/* <TornadoWatchesWindow /> */}
					{/* <CancelledAlertsWindow /> */}
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
