import { DayJSDateTime } from "components";

import { useCatOutlookGeoJSONQuery } from "services/outlook-mapserver";

export const DayInfo = ({ day }) => {
	let valid, expire;

	const DAY_LAYER_MAP = Object.freeze({
		1: 1,
		2: 9,
		3: 17,
	});

	const { data } = useCatOutlookGeoJSONQuery(DAY_LAYER_MAP[day]);

	if (data) {
		valid = data[0]?.properties.valid;
		expire = data[0]?.properties.expire;
	}

	return (
		<div>
			<h1 className='text-center text-2xl uppercase'>{`Day ${day} Convective Outlook`}</h1>
			<div className='text-center'>
				<DayJSDateTime utcDate={Date.now()} format='ddd MMM D' />
				<ValidDates valid={valid} expire={expire} />
			</div>
		</div>
	);
};

const ValidDates = ({ valid, expire }) => {
	return (
		<p className='text-xs'>
			<DayJSDateTime utcDate={valid ? valid : "N/A"} format='LT' />
			&nbsp;&#45;&nbsp;
			<DayJSDateTime utcDate={expire ? expire : "N/A"} format='LT' />
		</p>
	);
};
