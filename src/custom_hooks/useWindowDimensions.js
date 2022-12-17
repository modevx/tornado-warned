import React from "react";

const getWindowDimensions = () => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	return { windowWidth, windowHeight };
};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions()
	);

	React.useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
};
