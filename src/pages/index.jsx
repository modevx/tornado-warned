import React from "react";
import { PageLayout } from "components/_shared";
import { ConvectiveOutlookMap } from "features/SPCConvectiveOutlooks";

const OutlooksPage = () => {
	return (
		<PageLayout>
			<ConvectiveOutlookMap />
		</PageLayout>
	);
};

export default OutlooksPage;
