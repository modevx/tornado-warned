// 'LL' formats date to 'MMMM D, YYYY'
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleDate = ({ date }) => {
  return <span>{dayjs(date).format("LL")}</span>;
};
