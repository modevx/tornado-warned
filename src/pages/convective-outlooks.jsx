import React from "react";

import { PageLayout } from "components";
import {
	CategoricalMap,
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
			<div>
				<DayInfo day={1} />
				<CategoricalMap layerId={1} styles={styles} />
				<TextProduct day={1} />
				{/* META SECTION: day title, date, timeframe */}
				{/* MAP SECTION: with legend @ bottom left */}
				{/* TEXT PRODUCT SECTION: formatted text */}
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;

const DayInfo = ({ day }) => {
	return (
		<div>
			<h1>{`Day ${day} Convective Outlook`}</h1>
		</div>
	);
};
