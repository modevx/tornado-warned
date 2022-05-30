import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export const HomePageHero = () => {
	return (
		<div className='h-[50vh] flex flex-col items-center sm:text-center lg:text-left  border-b-2 border-red-500'>
			<div className='grow flex flex-col justify-center'>
				<h1 className='bg-gradient-to-br from-stone-500 to-red-500 text-transparent bg-clip-text uppercase inline-block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
					Tornado Action
				</h1>

				<p className='text-neutral-200 text-4xl'>stay ahead of the storm.</p>
			</div>
			<div className='mb-5'></div>
		</div>
	);
};
