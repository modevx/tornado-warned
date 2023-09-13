import React from "react";

import { DayJSDateTime, PageLayout } from "components";
import { CategoricalMap, DayInfo } from "features/convective-outlooks";
import { useCategoricalOutlookByLayerId } from "services/outlook-mapserver";

import { CATEGORICAL as styles } from "features/convective-outlooks/_constants/outlook-feature-styles";

const ConvectiveOutlookScreen = () => {
	const { data: day1 } = useCategoricalOutlookByLayerId(1);
	const { data: day2 } = useCategoricalOutlookByLayerId(9);
	const { data: day3 } = useCategoricalOutlookByLayerId(17);

	return (
		<PageLayout>
			<div className='md:grid md:grid-cols-2 xl:grid-cols-3'>
				{day1 && (
					<div className='flex flex-col items-center md:flex-1'>
						<DayInfo day={1} />
						<CategoricalMap features={day1} styles={styles} />
					</div>
				)}
				{day2 && (
					<div className='flex flex-col items-center md:flex-1'>
						<DayInfo day={2} />
						<CategoricalMap features={day2} styles={styles} />
					</div>
				)}
				{day3 && (
					<div className='flex flex-col items-center md:flex-1'>
						<DayInfo day={3} />
						<CategoricalMap features={day3} styles={styles} />
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
