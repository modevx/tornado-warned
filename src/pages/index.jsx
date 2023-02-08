import React from "react";
import { PageLayout } from "components";
import {
	ConvectiveOutlookMap,
	OutlookPreviewCard,
} from "features/convective-outlooks/components";
import {
	useAllConvectiveOutlookLayersQuery,
	useConvectiveOutlooksQuery,
	useConvectiveOutlookLegendQuery,
} from "services/convective-outlook-map-server";
import { OUTLOOK_LAYERS } from "features/convective-outlooks/constants";

const OutlooksPage = () => {
	const { data: outlooks, error: outlookError } = useConvectiveOutlooksQuery();
	const { data: allOutlookLayers, error: allOutlookLayersError } =
		useAllConvectiveOutlookLayersQuery();
	const { data: outlookLegendData, error: legendDataError } =
		useConvectiveOutlookLegendQuery();

	React.useEffect(() => {
		outlooks && console.log("{data: outlooks} >>\n", outlooks);
	}, [outlooks]);

	React.useEffect(() => {
		allOutlookLayers &&
			console.log("{data: allOutlookLayers} >>\n", allOutlookLayers);
	}, [allOutlookLayers]);

	React.useEffect(() => {
		outlookLegendData &&
			console.log(
				"{data: outlookLegendData} >>\n",
				outlookLegendData?.data.layers
			);
	}, [outlookLegendData]);

	return (
		<PageLayout>
			{/* <ConvectiveOutlookMap /> */}
			<div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
				{outlooks
					? outlooks.map((outlook, index) => {
							const featureCollection = outlook?.data.features;

							return (
								<OutlookPreviewCard
									key={`outlook-${index}`}
									day={index + 1}
									featuresCollection={featureCollection}
								/>
							);
					  })
					: null}
			</div>
		</PageLayout>
	);
};

export default OutlooksPage;
