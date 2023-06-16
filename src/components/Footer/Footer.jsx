import { Footer as DaisyFooter } from "react-daisyui";
import NextLink from "next/link";

const FOOTER_SECTION_LINKS = [
	{
		title: "BE PREPARED",
		links: [
			{
				label: "Tornado Safety",
				href: "https://www.weather.gov/safety/tornado",
			},
		],
	},
	{
		title: "STORM CHASING",
		links: [
			{
				label: "SKYWARN Storm Spotter Program",
				href: "https://www.weather/skywarn",
			},
		],
	},
];

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterComponent>
			{FOOTER_SECTION_LINKS.map(({ title, links }) => (
				<div key={title}>
					<FooterSectionTitle title={title} />
					<FooterSectionLinks links={links} />
				</div>
			))}
			<FooterCopyright year={currentYear} />
		</FooterComponent>
	);
};

const FooterComponent = ({ children }) => (
	<DaisyFooter className='p-10 bg-neutral text-neutral-content'>
		{children}
	</DaisyFooter>
);

const FooterCopyright = ({ year }) => (
	<p className='text-center text-xs mb-3'>
		&copy; {year} MODEVX, LTD. &nbsp; All Rights Reserved.
	</p>
);

const FooterSectionLinks = ({ links }) => {
	return links.map(({ label, href }) => (
		<NextLink key={label} href={`${href}`} className='link link-hover'>
			{label}
		</NextLink>
	));
};

const FooterSectionTitle = ({ title }) => (
	<DaisyFooter.Title>{title}</DaisyFooter.Title>
);
