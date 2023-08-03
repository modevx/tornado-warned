import React from "react";

import { DayJSDateTime, PageLayout } from "components";
import {
	CategoricalMap,
	DayInfo,
	OutlookSection,
	TextProduct,
} from "features/convective-outlooks";

import { CATEGORICAL_OUTLOOK_FEATURE_STYLES as styles } from "features/convective-outlooks/_constants";

const ConvectiveOutlookScreen = () => {
	const [outlookDay, setOutlookDay] = React.useState("1");

	React.useEffect(() => {
		// 1. generate meta data to pass to <DayInfo/>
		// 2. generate feature data to pass to <OutlookMap/>
		// 3. parse text to pass to <TextProduct/>
	}, [outlookDay]);

	return (
		<PageLayout>
			<div className='px-4'>
				<DayInfo day={1} />
				<CategoricalMap layerId={1} styles={styles} />
				<TextProduct day={3} />
				{/* META SECTION: day title, date, timeframe */}
				{/* MAP SECTION: with legend @ bottom left */}
				{/* TEXT PRODUCT SECTION: formatted text */}
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
