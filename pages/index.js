import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { app_features } from "site_data";
import {
	ConvectiveOutlookMap,
	FeatureSection,
	Hero,
	PageWrapper,
} from "components";
// ----- testing ArcGIS + Next.js
// const SpcOutlookMap = dynamic(
// 	() => import("../components/ConvectiveOutlookMap"),
// 	{
// 		ssr: false,
// 	}
// );

const HomeScreen = () => {
	return (
		<PageWrapper>
			<Hero />
			<ConvectiveOutlookMap />
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
		</PageWrapper>
	);
};

export default HomeScreen;
