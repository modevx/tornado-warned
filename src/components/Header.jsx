import { useCallback, useState } from "react";
import NextLink from "next/link";
import { Drawer, Menu, Navbar } from "react-daisyui";
import { AiOutlineMenu } from "react-icons/ai";

const NAV_ITEMS = [
	{
		label: "active alerts",
		href: "/",
	},
	{
		label: "convective outlooks",
		href: "/convective-outlooks",
	},
];

export const Header = ({ callback }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

	return (
		<header
			data-testid='header'
			className='bg-primary text-primary-content px-3'
		>
			<Navbar className='w-full'>
				<Navbar.Start>
					<Branding />
				</Navbar.Start>
				<Navbar.End>
					<AiOutlineMenu
						onClick={callback}
						className='sm:hidden cursor-pointer'
					/>
					<MainNav />
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
		<Menu className='hidden sm:flex' horizontal>
			<Menu.Item className='text-sm'>
				<NextLink href='/'>alerts</NextLink>
			</Menu.Item>
			<Menu.Item className='text-sm'>
				<NextLink href='/convective-outlooks'>outlooks</NextLink>
			</Menu.Item>
		</Menu>
	);
};
