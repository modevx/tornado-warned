import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import { PageWrapper } from "component/shared";
import { OutlookMapView } from "component/feature";
import {
	HomeFeatureSection,
	HomeHero,
	TornadoAlertSection,
} from "component/view";

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
