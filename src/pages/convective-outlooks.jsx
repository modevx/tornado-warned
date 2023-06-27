import { DayJSDateTime, PageLayout, USMap } from "components";
import { CategoricalOutlookMap } from "features/convective-outlooks";
import {
	useCategoricalOutlooks,
	useCategoricalOutlookGeoJsonQuery,
} from "services/spc-convective-outlook-mapserver";

const ConvectiveOutlookScreen = () => {
	const { data: day1outlook } = useCategoricalOutlookGeoJsonQuery(1);
	const { data: day2outlook } = useCategoricalOutlookGeoJsonQuery(9);
	const { data: day3outlook } = useCategoricalOutlookGeoJsonQuery(17);

	let day1valid, day1expire, day2valid, day2expire, day3valid, day3expire;

	if (day1outlook) {
		day1valid = day1outlook[0].properties.valid;
		day1expire = day1outlook[0].properties.expire;
	}
	if (day2outlook) {
		day2valid = day2outlook[0].properties.valid;
		day2expire = day2outlook[0].properties.expire;
	}
	if (day3outlook) {
		day3valid = day3outlook[0].properties.valid;
		day3expire = day3outlook[0].properties.expire;
	}

	console.log("Day 1 Valid: ", day1valid);
	console.log("Day 1 Expire: ", day1expire);
	console.log("Day 2 Valid: ", day2valid);
	console.log("Day 2 Expire: ", day2expire);
	console.log("Day 3 Valid: ", day3valid);
	console.log("Day 4 Expire: ", day3expire);

	return (
		<PageLayout>
			<div className='md:flex md:justify-evenly'>
				<section id='day-1-categorical-outlook-map'>
					<OutlookTitle>Day 1</OutlookTitle>
					<OutlookValidDates valid={day1valid} expire={day1expire} />
					{day1outlook ? (
						<CategoricalOutlookMap features={day1outlook} />
					) : (
						<OutlookLoadingMap />
					)}
				</section>

				<section id='day-2-categorical-outlook-map'>
					<OutlookTitle>Day 2</OutlookTitle>
					<OutlookValidDates valid={day2valid} expire={day2expire} />
					{day2outlook ? (
						<CategoricalOutlookMap
							key='day-2-categorical-outlook-map'
							features={day2outlook}
						/>
					) : (
						<OutlookLoadingMap />
					)}
				</section>

				<section id='day-3-categorical-outlook-map'>
					<OutlookTitle>Day 3</OutlookTitle>
					<OutlookValidDates valid={day3valid} expire={day3expire} />
					{day3outlook ? (
						<CategoricalOutlookMap
							key='day-3-categorical-outlook-map'
							features={day3outlook}
						/>
					) : (
						<OutlookLoadingMap />
					)}
				</section>
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;

const OutlookTitle = ({ children }) => {
	return <h2 className='text-center'>{children}</h2>;
};

const OutlookValidDates = ({ valid, expire }) => {
	return (
		<p className='text-center text-xs'>
			<DayJSDateTime utcDate={valid ? valid : "N/A"} format='ddd LT' />
			&nbsp;&#45;&nbsp;
			<DayJSDateTime utcDate={expire ? expire : "N/A"} format='ddd LT' />
		</p>
	);
};

const OutlookLoadingMap = () => {
	return (
		<USMap>
			<text x={350} y={250} fill='red' className='text-3xl font-bold'>
				Loading Outlook...
			</text>
		</USMap>
	);
};
