import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Hero } from "../components/Hero";

import { FeatureSection } from "../components/Features";
import { features } from "../data/features";

const HomeScreen = () => {
	const [outlook, setOutlook] = React.useState();

	React.useEffect(() => {
		(async () => {
			const outlookMap = await fetch(
				"https://www.spc.noaa.gov/products/exper/day4-8/ac48_SItable.html"
			);
			console.log(await outlookMap);
			setOutlook(outlook);
		})();
	}, [outlook]);

	return (
		<PageWrapper>
			<Hero />
			{outlook && outlook}
			{features.map((feature) => {
				return <FeatureSection featureOBJ={feature} key={feature.name} />;
			})}
		</PageWrapper>
	);
};

export default HomeScreen;
