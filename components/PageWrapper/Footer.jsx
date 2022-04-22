export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='text-center'>
			&copy; 2022 | tornadoaction.com | All Rights Reserved.
		</footer>
	);
};

const navItems = [
	{
		label: "National Weather Service",
		href: "",
	},
	{
		label: "Storm Prediction Center",
		href: "",
	},
	{
		label: "National Severe Storms Laboratory",
		href: "",
	},
];
