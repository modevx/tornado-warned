import { DayJSDateTime, USMapLoading } from "components";
import { CategoricalMap } from "features/convective-outlooks";

import { useCategoricalOutlookGeoJsonQuery } from "services/outlook-mapserver";

export const OutlookSection = ({ day, layerId }) => {
	const { data: outlook } = useCategoricalOutlookGeoJsonQuery(layerId);
	let valid, expire;

	if (outlook) {
		valid = outlook[0]?.properties.valid;
		expire = outlook[0]?.properties.expire;
	}

	return (
		<section id={`day-${day}-categorical-outlook-map`} className='lg:flex-1'>
			<SectionTitle>{`Day ${day}`}</SectionTitle>
			<ValidDates valid={valid} expire={expire} />
			{outlook ? (
				<CategoricalMap features={outlook} />
			) : (
				<USMapLoading loadingMessage='Outlook Loading...' />
			)}
		</section>
	);
};

const SectionTitle = ({ children }) => {
	return (
		<h2 className='text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
			{children}
		</h2>
	);
};

const ValidDates = ({ valid, expire }) => {
	return (
		<p className='text-center text-xs'>
			<DayJSDateTime utcDate={valid ? valid : "N/A"} format='ddd LT' />
			&nbsp;&#45;&nbsp;
			<DayJSDateTime utcDate={expire ? expire : "N/A"} format='ddd LT' />
		</p>
	);
};
