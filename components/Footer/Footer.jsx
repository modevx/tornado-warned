export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='text-center'>
			<div>
				<ul>
					<li></li>
				</ul>
				<ul>
					<li></li>
				</ul>
				<ul>
					<li></li>
				</ul>
			</div>
			<p>&copy; 2022 | tornadoaction.com | All Rights Reserved.</p>
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
