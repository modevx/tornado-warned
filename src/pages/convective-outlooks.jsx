import { Steps } from "react-daisyui";
import {
	IoRainy,
	IoSkull,
	IoThunderstorm,
	IoWarningOutline,
} from "react-icons/io5";
import { GiDamagedHouse } from "react-icons/gi";
import { GiTornado } from "react-icons/gi";

import { PageLayout } from "components";
import { CategoricalOutlookMap } from "features/convective-outlooks";
import { useCategoricalOutlooks } from "services/spc-convective-outlook-mapserver";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES as legendInfo } from "features/convective-outlooks/constants";

const ConvectiveOutlookScreen = () => {
	const { data } = useCategoricalOutlooks();
	let day1outlook = [],
		day2outlook = [],
		day3outlook = [];

	if (data) {
		[day1outlook, day2outlook, day3outlook] = data;
	}

	if (data) console.log(day1outlook[day1outlook.length - 1].properties.dn);

	return (
		<PageLayout>
			{data ? (
				<>
					<h2 className='text-center uppercase text-2xl'>
						Day 1 Convective Outlook
						{/* {day1outlook.length > 0
							? legendInfo[day1outlook[day1outlook.length - 1].properties.dn]
									.label
							: 0} */}
					</h2>
					<CategoricalOutlookMap
						key='day-1-categorical-outlook-map'
						features={day1outlook}
					/>
					<h2 className='text-center uppercase text-2xl'>
						Day 2 Convective Outlook
					</h2>
					<CategoricalOutlookMap
						key='day-2-categorical-outlook-map'
						features={day2outlook}
					/>
					<h2 className='text-center uppercase text-2xl'>
						Day 3 Convective Outlook
					</h2>
					<CategoricalOutlookMap
						key='day-3-categorical-outlook-map'
						features={day3outlook}
					/>
				</>
			) : null}
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
