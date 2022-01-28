import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const MAIN_NAV = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "deadly-tornadoes",
		url: "/deadly-tornadoes",
	},
	{
		label: "resources",
		url: "/resources",
	},
];

// const iconStyles = {
// 	color: "$black",
// 	height: "1rem",
// };

export const SOCIAL_NAV = [
	{
		label: "Github",
		reactIcon: <FaGithub size={30} title='GitHub icon' />,
		title: "FaGithub",
		url: "https://github.com/tornado-action",
		username: "ephcoding",
	},
	{
		label: "Twitter",
		reactIcon: <FaTwitter size={30} title='Twitter icon' />,
		title: "FaTwitter",
		url: "https://www.twitter.com/ephcoding",
		username: "ephcoding",
	},
];
