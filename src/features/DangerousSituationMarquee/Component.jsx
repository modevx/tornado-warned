import React from "react";

export const DangerousSituationMarquee = () => {
	const marqueeText =
		"This is an example marquee intended for 'Particularly Dangerous Situation' alerts from the National Weather Service / Storm Prediction center.";

	return (
		<div className='bg-red-500 relative flex overflow-x-hidden'>
			<div className=' py-2 animate-marquee whitespace-nowrap'>
				<span className='text-lg mx-4'>{marqueeText}</span>
			</div>
		</div>
	);
};
