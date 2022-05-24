import Link from "next/link";
import { RiTornadoLine } from "react-icons/ri";

const navigation = [
	{ name: "outlooks", href: "/outlooks" },
	{ name: "alerts", href: "/alerts" },
];

export const Navbar = () => {
	return (
		<nav className='flex items-center justify-between'>
			<Link href='/' passHref>
				<a className='flex items-center'>
					<RiTornadoLine color='red' className='h-8 w-auto mr-5' />
				</a>
			</Link>
			<div className='space-x-3'>
				{navigation.map((item) => (
					<Link key={item.name} href={item.href} className=''>
						<a className='text-stone-200 hover:text-red-500'>{item.name}</a>
					</Link>
				))}
			</div>
		</nav>
	);
};
