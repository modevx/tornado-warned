import { PageLayout } from "components/PageLayout";
import {
	useTornadoWarningAlertQuery,
	useTornadoWatchAlertQuery,
	useSevereStormWarningAlertQuery,
	useSevereStormWatchAlertQuery,
} from "services/nws-api-web-service";

const HomeScreen = () => {
	const { data: tornadoWarnings } = useTornadoWarningAlertQuery();
	const { data: tornadoWatches } = useTornadoWatchAlertQuery();
	const { data: stormWarnings } = useSevereStormWarningAlertQuery();
	const { data: stormWatches } = useSevereStormWatchAlertQuery();

	if (tornadoWarnings) console.log(tornadoWarnings);
	if (tornadoWatches) console.log(tornadoWatches);
	if (stormWarnings) console.log(stormWarnings);
	if (stormWatches) console.log(stormWatches);

	return <PageLayout></PageLayout>;
};

export default HomeScreen;
