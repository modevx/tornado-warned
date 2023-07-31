// 'LL' formats date to 'MMMM D, YYYY'
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

export const DayJSDateTime = ({ utcDate, format = "LT" }) => {
  return (
    <span data-testid="DayJSDateTime">
      {utcDate ? dayjs(utcDate).format(format) : "Unknown"}
    </span>
  );
};
