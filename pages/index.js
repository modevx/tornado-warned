import { AlertList, PageWrapper } from "../components";
import {
	useActiveAlerts,
	useTornadoWarningsTest,
} from "../services/NationalWeatherService";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NationalWeatherService";
import TornadoWarningWindow from "../components/TornadoWarningWindow";
import TornadoWatchesWindow from "../components/TornadoWatchesWindow";
import CancelledAlertsWindow from "../components/CancelledAlertsWindow";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					<TornadoWarningWindow />
					<TornadoWatchesWindow />
					<CancelledAlertsWindow />
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
