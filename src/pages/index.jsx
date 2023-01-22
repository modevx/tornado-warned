import React from "react";
import { PageLayout } from "components/_shared";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks";

const OutlooksPage = () => {
	return (
		<PageLayout>
			<ConvectiveOutlookMap />
		</PageLayout>
	);
};

export default OutlooksPage;
