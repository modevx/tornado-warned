import { MONTH_OPTIONS as MONTHS } from '../../site_data/month_options_map';

export const MonthSelectOptions = () => {
	let selectOptions = [];

	for (let [monthKey, monthValue] of MONTHS) {
		selectOptions.push(
			<option key={monthKey} value={monthValue} label={monthKey} />
		);
	}

	return selectOptions;
};
