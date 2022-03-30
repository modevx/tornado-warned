import { AlertList, PageWrapper } from "../components";
import { useActiveAlerts, useTornadoWarningsTest } from "../hooks";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NWS";
import TornadoWarningWindow from "../components/TornadoWarningWindow";
import TornadoWatchesWindow from "../components/TornadoWatchesWindow";
import CancelledAlertsWindow from "../components/CancelledAlertsWindow";
import Hero from "../components/Hero";
import TornadoActionFeaturesSection from "../components/TornadoActionFeaturesSection";

const SiteFeaturesSection = () => {};

const AlertSection = () => {};

const Alert = () => {};

const HomeScreen = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					<Hero />
					<TornadoActionFeaturesSection />
					<TornadoWarningWindow />
					<TornadoWatchesWindow />
					<CancelledAlertsWindow />
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
