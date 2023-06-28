// 'LL' formats date to 'MMMM D, YYYY'
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const DayJSDateTime = ({ utcDate, format }) => {
	return (
		<>{utcDate ? <span>{dayjs(utcDate).format(format)}</span> : "Unknown"}</>
	);
};
