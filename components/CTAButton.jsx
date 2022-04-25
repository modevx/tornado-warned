import React from "react";
import Link from "next/link";

export const CTAButton = ({ href, isSolid, label }) => {
	let styles;

	if (isSolid) {
		styles = ``;
	} else {
		styles = ``;
	}

	return (
		<Link href={href}>
			<a>{label}</a>
		</Link>
	);
};
