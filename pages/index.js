import React from "react";
import { Clock, FeatureSection, Hero, Page } from "components";
import { features } from "constants";

const HomeScreen = () => {
	const [outlook, setOutlook] = React.useState();

	// React.useEffect(() => {
	// 	(async () => {
	// 		const outlookMap = await fetch(
	// 			"https://www.spc.noaa.gov/products/exper/day4-8/ac48_SItable.html"
	// 		);
	// 		console.log(await outlookMap);
	// 		setOutlook(outlook);
	// 	})();
	// }, [outlook]);

	return (
		<Page>
			<Hero />
			{/* {outlook && outlook.body} */}
			{features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})}
		</Page>
	);
};

export default HomeScreen;
