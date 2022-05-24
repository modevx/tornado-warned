import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import {
	OutlookMapView,
	FeatureSection,
	Hero,
	PageWrapper,
	TornadoAlertSection,
} from "component";

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
