/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { RiTornadoLine } from "react-icons/ri";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const navigation = [
	{ name: "alerts", href: "/alerts" },
	{ name: "outlooks", href: "/outlooks" },
	// { name: "be ready", href: "/safety" },
	// {
	// 	name: "safety",
	// 	href: "/safety",
	// },
	// {
	// 	name: "storm chasing",
	// 	href: "/storm chasing",
	// },
	// {
	// 	name: "developers",
	// 	href: "/developers",
	// },
	// {
	// 	name: "images",
	// 	href: "/images",
	// },
	// {
	// 	name: "interactive",
	// 	href: "/interactive",
	// },
	// {
	// 	name: "pop culture",
	// 	href: "/pop culture",
	// },
	// {
	// 	name: "radar",
	// 	href: "/radar",
	// },
	// {
	// 	name: "stats",
	// 	href: "/stats",
	// },
];

export const Navbar = () => {
	return (
		<Popover>
			<div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
				<nav className='relative flex items-center justify-between sm:h-10'>
					<div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
						<div className='flex items-center justify-between w-full md:w-auto'>
							<Link href='/'>
								<a className='flex items-center'>
									<RiTornadoLine
										color='red'
										className='h-8 w-auto sm:h-10 mr-5'
									/>
									<span className='hidden sm:inline text-lg'>
										TORNADO ACTION
									</span>
								</a>
							</Link>
							<div className='-mr-2 flex items-center md:hidden'>
								<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>Open main menu</span>
									<MenuIcon className='h-6 w-6' aria-hidden='true' />
								</Popover.Button>
							</div>
						</div>
					</div>
					<div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='font-medium text-neutral-200 hover:text-red-500'
							>
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</div>
			{/* ************************************************* */}
			{/* ** HERO/mobile navigation */}
			{/* ************************************************* */}
			<Transition
				as={Fragment}
				enter='duration-150 ease-out'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='duration-100 ease-in'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'
			>
				<Popover.Panel
					focus
					className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
				>
					<div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
						<div className='px-5 pt-4 flex items-center justify-between'>
							<div>
								<RiTornadoLine color='red' className='h-8 w-auto' />
							</div>
							<div className='-mr-2'>
								<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>Close main menu</span>
									<XIcon className='h-6 w-6' aria-hidden='true' />
								</Popover.Button>
							</div>
						</div>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-red-900 hover:bg-gray-50'
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
