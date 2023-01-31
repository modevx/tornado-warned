import React from "react";
import { PageLayout } from "components/_shared";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks";
import { OutlookPreviewCard } from "features/spc-convective-outlooks/components";
import {
	useConvectiveOutlooksQuery,
	useConvectiveOutlookLegendQuery,
} from "features/spc-convective-outlooks/service";
import { OUTLOOK_LAYERS } from "features/spc-convective-outlooks/constants";

const OutlooksPage = () => {
	const { data: outlooks, error: outlookError } = useConvectiveOutlooksQuery();
	const { data: outlookLegendData, error: legendDataError } =
		useConvectiveOutlookLegendQuery();

	React.useEffect(() => {
		outlooks &&
			console.log("useConvectiveOutlooksQuery {data: outlooks} >>\n", outlooks);
	}, [outlooks]);

	React.useEffect(() => {
		outlookLegendData &&
			console.log(
				"useConvectiveOutlookLegendQuery\n",
				outlookLegendData?.data.layers
			);
	}, [outlookLegendData]);

	return (
		<PageLayout>
			{/* <ConvectiveOutlookMap /> */}
			<div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
				{outlooks
					? outlooks.map((outlook, index) => {
							return (
								<OutlookPreviewCard
									key={`outlook-${index}`}
									day={index + 1}
									featuresARR={outlook?.data.features}
								/>
							);
					  })
					: null}
			</div>
		</PageLayout>
	);
};

export default OutlooksPage;
