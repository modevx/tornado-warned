import React from "react";

const PageWrapper = ({ children }) => {
	return (
		<body>
			<head></head>
			<header>
				<nav></nav>
			</header>
			<main>{children}</main>
		</body>
	);
};

export default PageWrapper;
