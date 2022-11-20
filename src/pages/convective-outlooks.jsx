import React from "react";
import { PageLayout } from "components";
import { ConvectiveOutlookMap } from "features/SPCConvectiveOutlooks";

const OutlooksPage = () => {
	const [outlookDay, setOutlookDay] = React.useState(1);

	return (
		<PageLayout>
			<ConvectiveOutlookMap />
		</PageLayout>
	);
};

export default OutlooksPage;
