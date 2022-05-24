import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import { PageWrapper } from "components/shared";
import { OutlookMapView } from "components/feature";
import {
	HomeFeatureSection,
	HomeHero,
	TornadoAlertSection,
} from "components/view";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<Hero />
			<TornadoAlertSection />
			{app_features &&
				app_features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})}
		</PageWrapper>
	);
};

export default HomeScreen;
