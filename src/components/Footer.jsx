import { Footer as DaisyFooter } from "react-daisyui";
import { Link } from "./Link";
import { FOOTER_NAV_ITEMS } from "constants/footer-nav-items";

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<FooterComponent>
			{FOOTER_NAV_ITEMS.map(({ title, links }) => (
				<div key={title}>
					<Title title={title} />
					<Links links={links} />
				</div>
			))}
			<Copyright year={year} />
		</FooterComponent>
	);
};

const FooterComponent = ({ children }) => (
	<DaisyFooter className='p-10 bg-neutral text-neutral-content'>
		{children}
	</DaisyFooter>
);

const Title = ({ title }) => <DaisyFooter.Title>{title}</DaisyFooter.Title>;

const Links = ({ links }) => {
	return links.map(({ label, href }) => (
		<Link key={label} href={href}>
			{label}
		</Link>
	));
};

const Copyright = ({ year }) => (
	<p className='text-center text-xs mb-3'>
		&copy; {year} MODEVX, LLC. &nbsp; All Rights Reserved.
	</p>
);
