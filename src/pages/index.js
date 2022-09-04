import { NwsAlerts, PageLayout } from "components";
import { ALERT_TYPES } from "services/nws-alerts-service";

const HomeScreen = () => {
	return (
		<PageLayout>
			<NwsAlerts alertType={ALERT_TYPES.tornadoWarning} />
			<NwsAlerts alertType={ALERT_TYPES.tornadoWatch} />
		</PageLayout>
	);
};

export default HomeScreen;
