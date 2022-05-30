import Link from "next/link";
import { RiTornadoLine } from "react-icons/ri";

export const Navbar = () => {
	return (
		<nav className='flex items-center justify-between'>
			<Link href='/' passHref>
				<a className='flex items-center'>
					<RiTornadoLine color='red' className='h-9 w-auto mr-2' />
					<div className='flex flex-col leading-4 text-right italic'>
						<span className='inline-block'>TORNADO</span>
						<span className='inline-block text-red-500 text-xs'>
							&nbsp;ACTION
						</span>
					</div>
				</a>
			</Link>
			<Link href='/outlooks'>
				<a className='text-stone-200 hover:text-red-500'>outlooks</a>
			</Link>
		</nav>
	);
};
