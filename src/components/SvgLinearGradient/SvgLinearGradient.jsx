import React from "react";

export const SvgLinearGradient = () => {
	const [stopColors, setStopColors] = React.useState({});

	return (
		<defs>
			<linearGradient
				id='SvgMapGradient'
				gradientUnits='userSpaceOnUse'
				gradientTransform='rotate(45)'
			>
				<stop offset='0%' stopColor='#111' />
				<stop offset='50%' stopColor='#333' />
				<stop offset='60%' stopColor='#f00' />
				<stop offset='70%' stopColor='#333' />
				<stop offset='100%' stopColor='#111' />
			</linearGradient>
		</defs>
	);
};
