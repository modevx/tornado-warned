import { formatYYYYMMDD } from "../util_funcs/formatYYYYMMDD";
import { getPropValueCount } from "../util_funcs/getPropValueCount";

test("formats new Date(2021,03) to be 20210201", () => {
	expect(formatYYYYMMDD(new Date(2021, 03))).toBe("20210201");
});
