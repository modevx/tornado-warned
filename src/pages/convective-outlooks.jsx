import { useEffect } from "react";

import { PageLayout } from "components";
import {
	CategoricalLegend,
	OutlookSection,
} from "features/convective-outlooks";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES } from "features/convective-outlooks/_constants";

const ConvectiveOutlookScreen = () => {
	return (
		<PageLayout>
			<CategoricalLegend stylesObj={CATEGORICAL_OUTLOOK_FEATURE_STYLES} />

			<div className='lg:flex lg:justify-evenly lg:items-center'>
				<OutlookSection day={1} layerId={1} />
				<OutlookSection day={2} layerId={9} />
				<OutlookSection day={3} layerId={17} />
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
