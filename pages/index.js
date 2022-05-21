import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import {
	ConvectiveOutlookMap,
	FeatureSection,
	Hero,
	PageWrapper,
} from "components";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<Hero />
			<ConvectiveOutlookMap />
			{app_features &&
				app_features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})}
		</PageWrapper>
	);
};

export default HomeScreen;
