import React from "react";
import { PageLayout } from "components";
import {
	ConvectiveOutlookMap,
	OutlookPreviewCard,
	OutlookPreviewCardList,
} from "features/convective-outlooks/components";
import {
	useConvectiveOutlookLegendQuery,
	useSPCConvectiveOutlooks,
} from "services/convective-outlook-map-server";
import { OUTLOOK_LAYERS } from "features/convective-outlooks/constants";
import { feature } from "topojson-client";

const OutlooksPage = () => {
	return (
		<PageLayout>
			<ConvectiveOutlookMap />
			{/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
		</PageLayout>
	);
};

export default OutlooksPage;
