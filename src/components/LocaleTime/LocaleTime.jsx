// 'LT' formats time to 'h:mm A'
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const LocaleTime = ({ date }) => {
  return <span>{dayjs(date).format("LT")}</span>;
};
