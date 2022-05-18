import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { FeatureSection, Hero, PageWrapper } from "components";
import { app_features } from "site_data";
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
			{/* <SpcOutlookMap /> */}
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
		</PageWrapper>
	);
};

export default HomeScreen;
