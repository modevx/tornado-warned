import { useState } from "react";

import { H1, PageLayout } from "components";
import { ActiveAlertMap } from "features/active-alerts";

const HomeScreen = () => {
	return (
		<PageLayout>
			{/* Extreme Alert CTAs */}
			<H1>Active Alerts</H1>
			<ActiveAlertMap />
			{/* Alert Description Modal Btns */}
		</PageLayout>
	);
};

export default HomeScreen;
