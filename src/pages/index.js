import { PageLayout } from "components/PageLayout";
import { useTornadoWatchAlertQuery } from "services/nws-api-web-service";

const HomeScreen = () => {
	const tornadoWatches = useTornadoWatchAlertQuery();

	if (tornadoWatches) {
		console.log(tornadoWatches);
	}

	return <PageLayout></PageLayout>;
};

export default HomeScreen;
