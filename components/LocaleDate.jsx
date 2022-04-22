import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleDate = (date, formatString) => {
	return <span>{dayjs(date).format(formatString)}</span>;
};
