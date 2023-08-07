import React from "react";

import { DayJSDateTime, PageLayout } from "components";
import {
	CategoricalMap,
	DayInfo,
	DayPicker,
	OutlookSection,
	TextProduct,
} from "features/convective-outlooks";

import { CATEGORICAL as styles } from "features/convective-outlooks/_constants/outlook-feature-styles";

const ConvectiveOutlookScreen = () => {
	const [outlookDay, setOutlookDay] = React.useState(1);

	const handleDayChange = (e) => setOutlookDay(e.target.value);

	return (
		<PageLayout>
			<div className='px-4'>
				<DayPicker onChangeHandler={handleDayChange} />
				<DayInfo day={outlookDay} />
				<CategoricalMap layerId={outlookDay} styles={styles} />
				<TextProduct day={outlookDay} />
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
