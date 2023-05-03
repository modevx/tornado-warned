import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleDate = ({ date, format }) => {
  return <span>{dayjs(date).format(format)}</span>;
};
