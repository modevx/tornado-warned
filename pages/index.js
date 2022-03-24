import { AlertList, PageWrapper } from "../components";
import {
	useActiveAlerts,
	useTornadoWarningsTest,
} from "../services/NationalWeatherService";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NationalWeatherService";
import TornadoWarningWindow from "../components/TornadoWarningWindow";
import TornadoWatchesWindow from "../components/TornadoWatchesWindow";
import CancelledAlertsWindow from "../components/CancelledAlertsWindow";
import Hero from "../components/Hero";
import FeaturesList from "../components/FeaturesList";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					<Hero />
					<FeaturesList />
					<TornadoWarningWindow />
					<TornadoWatchesWindow />
					<CancelledAlertsWindow />
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
