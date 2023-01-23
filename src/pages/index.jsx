import React from "react";
import { PageLayout } from "components/_shared";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks";
import { OutlookPreviewCard } from "features/spc-convective-outlooks/components";
import { useCategoricalOutlooksQuery } from "features/spc-convective-outlooks/service";
import { OUTLOOK_LAYERS } from "features/spc-convective-outlooks/constants";

const OutlooksPage = () => {
	const { data, error } = useCategoricalOutlooksQuery();

	return (
		<PageLayout>
			<ConvectiveOutlookMap />
		</PageLayout>
	);
};

export default OutlooksPage;
