/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { RiTornadoLine } from "react-icons/ri";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const navigation = [
	{
		label: "alerts",
		href: "/alerts",
		isCurrent: false,
		isDisabled: false,
	},
	{
		label: "outlooks",
		href: "/outlooks",
		isCurrent: false,
		isDisabled: true,
	},
	// {
	// 	label: "safety",
	// 	href: "/safety",
	// isCurrent: false,
	// 	isDisabled: true
	// },
	// {
	// 	label: "storm chasing",
	// 	href: "/storm chasing",
	// isCurrent: false,
	// 	isDisabled: true
	// },
	// {
	// 	label: "developers",
	// 	href: "/developers",
	// isCurrent: false,
	// isDisabled: true
	// },
	// {
	// 	label: "images",
	// 	href: "/images",
	// isCurrent: false,
	// isDisabled: true
	// },
	// {
	// 	label: "interactive",
	// 	href: "/interactive",
	// isCurrent: false,
	// isDisabled: true
	// },
	// {
	// 	label: "pop culture",
	// 	href: "/pop culture",
	// isCurrent: false,
	// isDisabled: true
	// },
	// {
	// 	label: "radar",
	// 	href: "/radar",
	// isCurrent: false,
	// isDisabled: true
	// },
	// {
	// 	label: "stats",
	// 	href: "/stats",
	// isCurrent: false,
	// isDisabled: true
	// },
];

export const Navbar = () => {
	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-between sm:items-stretch'>
								<div className='flex-shrink-0 flex items-center'>
									<RiTornadoLine
										alt='tornado icon'
										className='block h-12 w-auto'
										color='limegreen'
									/>
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map(item => (
											<a
												key={item.label}
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.label}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map(item => (
								<Disclosure.Button
									key={item.label}
									as='a'
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.label}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
