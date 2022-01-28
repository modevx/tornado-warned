import { formatToYYYYMMDD } from "../../utils/dateFormatToYYYYMMDD";

export const createMonthDateRange = (dateObj) => {
  let startDate, endDate, start, end;

  startDate = new Date(dateObj.getFullYear(), dateObj.getMonth());
  endDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1);

  start = formatToYYYYMMDD(startDate);
  end = formatToYYYYMMDD(endDate);

  return { start, end };
};
