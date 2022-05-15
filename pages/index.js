import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { Clock, FeatureSection, Hero, Page } from "components";
import { app_features } from "site_data";
// ----- testing ArcGIS + Next.js
const SpcOutlookMap = dynamic(
	() => import("../components/SpcConvectiveOutlookMap"),
	{
		ssr: false,
	}
);
import { MAP_SERVICE } from "services/storm-prediction-center/";

const HomeScreen = () => {
	return (
		<Page>
			<Hero />
			<SpcOutlookMap />
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
		</Page>
	);
};

export default HomeScreen;
