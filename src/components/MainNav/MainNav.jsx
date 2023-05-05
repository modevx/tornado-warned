import NextLink from "next/link";
import { Menu, Navbar } from "react-daisyui";
import { MAIN_NAV_ITEMS } from "./constants";

export const MainNav = () => {
	return (
		<ResponsiveHeader>
			<Navbar>
				<Navbar.Start>
					<NextLink href='/'>Tornado Warned</NextLink>
				</Navbar.Start>
				<Navbar.End>
					<Menu horizontal>
						{MAIN_NAV_ITEMS.map(({ label, href }, index) => (
							<Menu.Item key={`${label}-${index}`}>
								<NextLink href={href}>{label}</NextLink>
							</Menu.Item>
						))}
					</Menu>
				</Navbar.End>
			</Navbar>
		</ResponsiveHeader>
	);
};

const ResponsiveHeader = ({ children }) => {
	return (
		<header
			data-testid='header'
			className='text-center p-4 sm:flex sm:justify-between sm:items-center'
		>
			{children}
		</header>
	);
};
