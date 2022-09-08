import Link from "next/link";
import { NAV_ITEMS } from "constants/index.js";

export const Navbar = () => {
	return (
		<header
			data-testid='header'
			className='text-center p-4 sm:flex sm:justify-between sm:items-center'
		>
			<div className='mb-4 sm:mb-0 w-full'>
				<nav className='flex items-center justify-between container mx-auto'>
					<Link href='/' passHref>
						<a className='flex items-center'>
							<div className='flex flex-col leading-4 text-right italic md:text-2xl md:flex-row'>
								<span className='inline-block'>TORNADO</span>
								<span className='inline-block text-red-500'>&nbsp;WARNED</span>
							</div>
						</a>
					</Link>
					<div className='space-x-4 md:text-2xl'>
						{NAV_ITEMS.map((navItem) => (
							<Link key={navItem.name} href={navItem.href}>
								<a className='text-stone-200 hover:text-red-500'>
									{navItem.name}
								</a>
							</Link>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
};
