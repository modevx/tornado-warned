import NextLink from "next/link";
import { Menu, Navbar } from "react-daisyui";

const NAV_ITEMS = [
	{
		label: "active alerts",
		href: "/",
	},
	{
		label: "convective outlooks",
		href: "/convective-outlooks",
	},
	// {
	// 	label: "SPC RSS feeds",
	// 	href: "/spc-rss-feeds",
	// },
];

export const Header = () => {
	return (
		<header data-testid='header' className='p-4 bg-zinc-800'>
			<Navbar className='grid grid-cols-1'>
				<Navbar.Start className='w-full justify-center'>
					<Branding />
				</Navbar.Start>
				<Navbar.End className='w-full justify-center'>
					<Menu>
						<MainNav />
					</Menu>
				</Navbar.End>
			</Navbar>
		</header>
	);
};

const Branding = () => {
	return (
		<NextLink href='/'>
			<a className='text-xl text-center text-neutral-200 font-display uppercase'>
				Tornado{" "}
				<span className='text-xl italic bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-neutral-400 pr-2'>
					Warned
				</span>
			</a>
		</NextLink>
	);
};

const MainNav = () => {
	return (
		<Menu horizontal>
			{NAV_ITEMS.map(({ icon, label, href }) => {
				return (
					<Menu.Item key={label} className='text-sm'>
						<NextLink href={href}>{label}</NextLink>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};
