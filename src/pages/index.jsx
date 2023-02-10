import React from "react";
import { PageLayout } from "components";
import {
	ConvectiveOutlookMap,
	OutlookPreviewCard,
	OutlookPreviewCardList,
} from "features/convective-outlooks/components";
import {
	useAllConvectiveOutlookGroupLayersQuery,
	useAllConvectiveOutlookFeatureLayersQuery,
	useConvectiveOutlooksQuery,
	useConvectiveOutlookLegendQuery,
} from "services/convective-outlook-map-server";
import { OUTLOOK_LAYERS } from "features/convective-outlooks/constants";
import { feature } from "topojson-client";

const OutlooksPage = () => {
	const { data: groupLayers, error: groupLayersError } =
		useAllConvectiveOutlookGroupLayersQuery();
	const { data: featureLayers, error: featureLayersError } =
		useAllConvectiveOutlookFeatureLayersQuery();
	const { data: outlookLegendData, error: legendDataError } =
		useConvectiveOutlookLegendQuery();

	React.useEffect(() => {
		groupLayers && console.log("{data: groupLayers} >>\n", groupLayers);
	}, [groupLayers]);

	// React.useEffect(() => {
	//   featureLayers && console.log("{data: featureLayers} >>\n", featureLayers);
	// }, [featureLayers]);

	// React.useEffect(() => {
	//   outlookLegendData &&
	//     console.log(
	//       "{data: outlookLegendData} >>\n",
	//       outlookLegendData?.data.layers
	//     );
	// }, [outlookLegendData]);

	return (
		<PageLayout>
			<ConvectiveOutlookMap />
			{/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
		</PageLayout>
	);
};

export default OutlooksPage;
