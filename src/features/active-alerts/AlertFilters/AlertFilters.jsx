import { AlertFilterToggle } from "features/active-alerts";

export const AlertFilters = ({ handler, filterState }) => {
	// * [toggleName] matches filterState props

	const toggleNamesAndLabels = [
		{
			toggleName: "showTornadoWarnings",
			label: "Tornado Warnings",
		},
		{
			toggleName: "showTornadoWatches",
			label: "Tornado Watches",
		},
		{
			toggleName: "showStormWarnings",
			label: "Severe Storm Warnings",
		},
		{
			toggleName: "showStormWatches",
			label: "Severe Storm Watches",
		},
	];

	return (
		<div className='flex justify-center'>
			<div className='mb-6 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
				{toggleNamesAndLabels.map(({ toggleName, label }) => {
					return (
						<AlertFilterToggle
							key={toggleName}
							name={toggleName}
							onChangeHandler={handler}
							isToggled={filterState[toggleName]}
							label={label}
						/>
					);
				})}
			</div>
		</div>
	);
};
