import Link from "next/link";
import { Menu, Navbar } from "react-daisyui";
import { MAIN_NAV_ITEMS } from "constants/main-nav-items";

export const MainNav = () => {
	return (
		<header
			data-testid='header'
			className='text-center p-4 sm:flex sm:justify-between sm:items-center'
		>
			<Navbar>
				<Navbar.Start>
					<Link href='/'>Tornado Warned</Link>
				</Navbar.Start>
				<Navbar.End>
					<Menu horizontal>
						{Object.values(MAIN_NAV_ITEMS).map((menuItem) => (
							<Menu.Item>
								<Link href={menuItem.href}>{menuItem.label}</Link>
							</Menu.Item>
						))}
					</Menu>
				</Navbar.End>
			</Navbar>
		</header>
	);
};
