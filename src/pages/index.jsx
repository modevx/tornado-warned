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

	const handleToggleChange = (e) => {
		const { name: toggleName } = e.target;

		setAlertFilters((prev) =>
			Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
		);
	};

	return (
		<PageLayout>
			<>
				<div className='flex items-center p-10'>
					<ActiveAlertMap />
				</div>
			</>
		</PageLayout>
	);
};

export default HomeScreen;
