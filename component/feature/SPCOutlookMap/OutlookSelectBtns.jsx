import React from "react";

export const OutlookSelectBtns = ({ setOutlookDay }) => {
	const updateSelectedOutlook = (outlookDay) => {
		return () => setOutlookDay(outlookDay);
	};

	return (
		<div className='flex space-x-3'>
			<SelectBtn day='1' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='2' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='3' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='4' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='5' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='6' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='7' handleOnClick={updateSelectedOutlook} />
			<SelectBtn day='8' handleOnClick={updateSelectedOutlook} />
		</div>
	);
};

const SelectBtn = function ({ day, handleOnClick }) {
	return (
		<div
			className='border-2 border-white hover:bg-red-500/60 active:bg-red-500 px-4 py-2'
			onClick={handleOnClick(day)}
		>
			{`Day ${day}`}
		</div>
	);
};
