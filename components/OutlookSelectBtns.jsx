import React from "react";

export const OutlookSelectBtns = React.forwardRef(function (props, ref) {
	return (
		<div ref={ref}>
			<h2>Categorical Outlooks</h2>
			<div className='flex space-x-3'>
				<div
					className='border-2 border-white hover:bg-red-500/60 active:bg-red-500 px-4 py-2'
					data-layer-id='1'
				>
					Day 1
				</div>
				<div
					className='border-2 border-white hover:bg-red-500/60 active:bg-red-500 px-4 py-2'
					data-layer-id='9'
				>
					Day 2
				</div>
			</div>
		</div>
	);
});
