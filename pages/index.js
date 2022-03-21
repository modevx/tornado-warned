import { AlertList, PageWrapper } from "../components";
import {
	useActiveAlerts,
	useTornadoWarningsTest,
} from "../services/NationalWeatherService";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NationalWeatherService";
import TakeCoverNOWWindow from "../components/TakeCoverNOWWindow";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					<TakeCoverNOWWindow />
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
