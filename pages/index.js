import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import { PageWrapper } from "component/shared";
import {
	OutlookMapView,
	FeatureSection,
	Hero,
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
