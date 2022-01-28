import { YEAR_OPTIONS } from '../../site_data/year_options_arr.js';

// TODO: add param to dictate year option range

export const YearSelectOptions = () => {
	return YEAR_OPTIONS.map((year) => (
		<option key={year} value={year} label={`${year}`} />
	));
};
