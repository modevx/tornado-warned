import { PageLayout } from "components";
import { CategoricalOutlookMap } from "features/convective-outlooks";
import { useCategoricalOutlooks } from "services/spc-convective-outlook-mapserver";

const ConvectiveOutlookScreen = () => {
	const { data } = useCategoricalOutlooks();
	let day1outlook = [],
		day2outlook = [],
		day3outlook = [];

	if (data) {
		[day1outlook, day2outlook, day3outlook] = data;
	}

	return (
		<PageLayout>
			{data ? (
				<>
					<CategoricalOutlookMap
						key='day-1-categorical-outlook-map'
						features={day1outlook}
					/>
					<CategoricalOutlookMap
						key='day-2-categorical-outlook-map'
						features={day2outlook}
					/>
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
