import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import { PageWrapper } from "components/shared";
import { OutlookMapView } from "components/feature";
import {
	HomePageFeatureSection,
	HomePageHero,
	AlertsPageTornadoAlertSection,
} from "components/view";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<HomePageHero />
			<AlertsPageTornadoAlertSection />
			{app_features &&
				app_features.map((feature) => {
					return (
						<HomePageFeatureSection featureOBJ={feature} key={feature.name} />
					);
				})}
		</PageWrapper>
	);
};

export default HomeScreen;
