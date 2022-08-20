import { Page } from "../layout";
import { NationalWeatherServiceAlerts } from "features";
import { ALERT_TYPES } from "services/national_weather_service/config";

const HomeScreen = () => {
	return (
		<Page>
			<NationalWeatherServiceAlerts
				alertType={ALERT_TYPES.tornadoWarning}
				isTest={false}
			/>
			<NationalWeatherServiceAlerts
				alertType={ALERT_TYPES.tornadoWatch}
				isTest={false}
			/>
		</Page>
	);
};

export default HomeScreen;
