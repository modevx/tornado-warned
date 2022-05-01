import { FeatureSection, Hero, Page } from "components";
import { features } from "site-data";

const HomeScreen = () => {
	return (
		<Page>
			<Hero />
			{features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})}
		</Page>
	);
};

export default HomeScreen;
