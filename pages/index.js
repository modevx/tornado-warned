import { PageWrapper } from "../components/PageWrapper";
import { Hero } from "../components/Hero";

import { FeatureSection } from "../components/Features";
import { features } from "../site-data/features";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<Hero />
			{features.map((feature) => {
				return <FeatureSection featureOBJ={feature} key={feature.name} />;
			})}
		</PageWrapper>
	);
};

export default HomeScreen;
