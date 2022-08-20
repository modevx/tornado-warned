import { Page } from "../layout";
import { NationalWeatherServiceAlerts } from "features";
import { ALERT_TYPES } from "services/national_weather_service/config";

const HomeScreen = () => {
	return (
		<Page>
			<NationalWeatherServiceAlerts
				alertType={ALERT_TYPES.tornadoWarning}
				isTest={true}
			/>
			<NationalWeatherServiceAlerts
				alertType={ALERT_TYPES.tornadoWatch}
				isTest={true}
			/>
		</Page>
	);
};

export default HomeScreen;
