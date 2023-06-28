import { DayJSDateTime } from "components";

export const OutlookSectionValidDates = ({ valid, expire }) => {
	return (
		<p className='text-center text-xs'>
			<DayJSDateTime utcDate={valid ? valid : "N/A"} format='ddd LT' />
			&nbsp;&#45;&nbsp;
			<DayJSDateTime utcDate={expire ? expire : "N/A"} format='ddd LT' />
		</p>
	);
};
