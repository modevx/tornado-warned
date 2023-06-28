import { USMapLoading } from "components";

import {
	CategoricalMap,
	OutlookSectionTitle,
	OutlookSectionValidDates,
} from "features/convective-outlooks";

import { useCategoricalOutlookGeoJsonQuery } from "services/spc-convective-outlook-mapserver";

export const OutlookSection = ({ day, layerId }) => {
	const { data: outlook } = useCategoricalOutlookGeoJsonQuery(layerId);
	let valid, expire;

	if (outlook) {
		valid = outlook[0]?.properties.valid;
		expire = outlook[0]?.properties.expire;
	}

	return (
		<section id={`day-${day}-categorical-outlook-map`} className='lg:flex-1'>
			<OutlookSectionTitle>{`Day ${day}`}</OutlookSectionTitle>
			<OutlookSectionValidDates valid={valid} expire={expire} />
			{outlook ? (
				<CategoricalMap features={outlook} />
			) : (
				<USMapLoading loadingMessage='Outlook Loading...' />
			)}
		</section>
	);
};
