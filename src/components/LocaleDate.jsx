import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleDate = ({ date, format }) => {
	if (date === undefined || date === null) return;

	return <span>{dayjs(date).format(format)}</span>;
};
