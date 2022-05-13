import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { Clock, FeatureSection, Hero, Page } from "components";
import { features } from "constants";
// ----- testing ArcGIS + Next.js
const ArcGISMap = dynamic(() => import("../components/ArcGisJsApiNoSsrMap"), {
	ssr: false,
});

const HomeScreen = () => {
	return (
		<Page>
			<Hero />
			<ArcGISMap />
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
		</Page>
	);
};

export default HomeScreen;
