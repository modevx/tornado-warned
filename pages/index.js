import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { Clock, FeatureSection, Hero, Page } from "components";
import { features } from "constants";
// ----- testing ArcGIS + Next.js
const SpcOutlookMap = dynamic(
	() => import("../components/SpcConvectiveOutlookMap"),
	{
		ssr: false,
	}
);
import { MAP_SERVICE } from "services/storm-prediction-center/";

const HomeScreen = () => {
	const eightDayOutlookObjARR = Object.keys(MAP_SERVICE).map(
		(key) => MAP_SERVICE[key].sub_layers
	);
	console.log("8-DAY OUTLOOKS", eightDayOutlookObjARR);

	return (
		<Page>
			<Hero />
			{eightDayOutlookObjARR.map((outlookLayers) => (
				<SpcOutlookMap day_layers={outlookLayers} />
			))}
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
		</Page>
	);
};

export default HomeScreen;
