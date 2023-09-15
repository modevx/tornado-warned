import { useState } from "react";

import { PageLayout } from "components";
import { ActiveAlertMap } from "features/active-alerts";

const HomeScreen = () => {
	return (
		<PageLayout>
			{/* Extreme Alert CTAs */}
			<ActiveAlertMap />
			{/* Alert Description Modal Btns */}
		</PageLayout>
	);
};

export default HomeScreen;
