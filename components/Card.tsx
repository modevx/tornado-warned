import React from "react";

export const Card = ({ children, bgColorClass }) => {
	return (
		<div
			className={`max-w-sm min-h-max shadow-md shadow-orange-500 ${bgColorClass}`}
		>
			{children}
		</div>
	);
};
