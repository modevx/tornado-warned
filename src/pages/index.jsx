import { useState } from "react";

import { PageLayout } from "components";
import { ActiveAlertMap } from "features/active-alerts";

const HomeScreen = () => {
	const [alertFilters, setAlertFilters] = useState({
		showTornadoWarnings: true,
		showTornadoWatches: true,
		showStormWarnings: true,
		showStormWatches: true,
	});

	return (
		<PageLayout>
			<ActiveAlertMap />
		</PageLayout>
	);
};

export default HomeScreen;
