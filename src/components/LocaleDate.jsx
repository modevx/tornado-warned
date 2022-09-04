import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleDate = ({ dateOBJ, formatSTR }) => {
	if (dateOBJ === undefined || dateOBJ === null) return;

	return <span>{dayjs(dateOBJ).format(formatSTR)}</span>;
};
