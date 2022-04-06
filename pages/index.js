import React from "react";
import dayjs from "dayjs";
import { BsTornado } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);

import { Header, PageWrapper } from "../components";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useCancelledAlerts,
	useTestAlerts,
} from "../hooks";

import axios from "axios";

const Hero = () => {
	return (
		<div className='md:px-6 lg:px-8'>
			<div className='text-700 text-left my-auto'>
				<h2 className='text-900 font-bold text-3xl mb-3'>STAY ALERT</h2>
				<div className='text-xs w-1/2'>
					Tornado Action is your source for active tornado alerts, historical
					stats, weather updates, safety resources, more!
				</div>
				{/* <div className='rounded-md shadow mt-5'>
					<a
						href='#'
						className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
					>
						Get started
					</a>
				</div> */}
			</div>
		</div>
	);
};
const FeaturesSection = () => {
	return (
		<div className='surface-0 text-center'>
			<div className='mb-3 font-bold text-2xl'>
				<span className='text-900'>One Product, </span>
				<span className='text-blue-600'>Many Solutions</span>
			</div>
			<div className='text-700 text-sm mb-6'>
				Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
			</div>
			<div className='grid'>
				<div className='col-12 md:col-4 mb-4 px-5'>
					<span
						className='p-3 shadow-2 mb-3 inline-block'
						style={{ borderRadius: "10px" }}
					>
						<i className='pi pi-desktop text-4xl text-blue-500'></i>
					</span>
					<div className='text-900 mb-3 font-medium'>Built for Developers</div>
					<span className='text-700 text-sm line-height-3'>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</span>
				</div>
				<div className='col-12 md:col-4 mb-4 px-5'>
					<span
						className='p-3 shadow-2 mb-3 inline-block'
						style={{ borderRadius: "10px" }}
					>
						<i className='pi pi-lock text-4xl text-blue-500'></i>
					</span>
					<div className='text-900 mb-3 font-medium'>End-to-End Encryption</div>
					<span className='text-700 text-sm line-height-3'>
						Risus nec feugiat in fermentum posuere urna nec. Posuere
						sollicitudin aliquam ultrices sagittis.
					</span>
				</div>
				<div className='col-12 md:col-4 mb-4 px-5'>
					<span
						className='p-3 shadow-2 mb-3 inline-block'
						style={{ borderRadius: "10px" }}
					>
						<i className='pi pi-check-circle text-4xl text-blue-500'></i>
					</span>
					<div className='text-900 mb-3 font-medium'>Easy to Use</div>
					<span className='text-700 text-sm line-height-3'>
						Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat
						ac tincidunt vitae semper.
					</span>
				</div>
			</div>
		</div>
	);
};
const AlertSection = ({ color, alertType, alertArray }) => {
	const colorMap = {
		red: "from-red-700",
		yellow: "from-yellow-400",
	};

	return (
		<section
			className={`bg-gradient-to-r ${colorMap[color]} to-neutral-800 h-80 my-4 p-2 h-full`}
		>
			<h2>
				{
					<div className='flex items-center'>
						<BsTornado className='mr-1' size={30} />
						<span className='font-bold inline-block  text-lg text-white uppercase'>
							{alertType}
						</span>
					</div>
				}
				<AlertList alertArray={alertArray} color='neutral' />
			</h2>
		</section>
	);
};
const AlertList = ({ alertArray }) => {
	if (!alertArray) return null;

	return (
		<div>
			{alertArray.map(alert => (
				<AlertItem alert={alert} key={alert.id} />
			))}
		</div>
	);
};
const AlertItem = ({ alert }) => {
	const { event, messageType, effective, expires, areaDesc } = alert.properties;

	const EVENT_COLOR_MAP = {
		TornadoWarning: "bg-red-500",
		TornadoWatch: "bg-yellow-500",
	};

	const color =
		messageType.toLowerCase() === "cancel"
			? "from-neutral-500"
			: EVENT_COLOR_MAP[`${event.split(" ").join("")}`];

	return (
		// -- [ CARD ]
		<div
			className={`${
				EVENT_COLOR_MAP[`${event.split(" ").join("")}`]
			} my-3 p-2 text-xs shadow-xl rounded`}
		>
			<div className='flex items-center justify-between py-2'>
				{/* <div className='flex items-center'>
					<BsTornado className='mr-1' size={30} />
					<span className='font-bold inline-block  text-lg text-white uppercase'>
						{event.split(" ")[1]}
					</span>
				</div> */}

				<div>
					<span>{dayjs(effective).format("LT")}</span>&nbsp; - &nbsp;
					<span>{dayjs(expires).format("LT")}</span>
				</div>
			</div>

			<div className='bg-neutral-700 px-2 py-3 rounded'>
				<p>{areaDesc}</p>
			</div>
			<Disclosure>
				<Disclosure.Button className='bg-red-700 flex mt-4 shadow-lg justify-between p-2 rounded w-full'>
					<span>Alert Details >></span>
					<BsChevronUp />
				</Disclosure.Button>
				<Disclosure.Panel className='text-gray-500'>
					Yes! You can purchase a license that you can share with your entire
					team.
				</Disclosure.Panel>
			</Disclosure>
		</div>
	);
};

const HomeScreen = () => {
	// const { data: warnings } = useTornadoWarnings();
	// const { data: watches } = useTornadoWatches();
	// const { data: cancels } = useCancelledAlerts();
	const { data: testAlerts } = useTestAlerts();

	React.useEffect(() => {
		axios
			.get("../test_alerts.json")
			.then(res => {
				console.log(res.data);
				setTestAlerts(res.data.features);
			})
			.catch(err => console.log("FAKE ALERT ERROR", err));
	}, []);

	return (
		<PageWrapper>
			<div className='flex flex-col'>
				<div className='bg-neutral-900/70 bg-blend-overlay bg-[url("/bg-img-03.jpg")] bg-center bg-cover border-red-600 border-t-4 h-[50vh] p-2'>
					<Header />
					<Hero />
				</div>
				{/* <FeaturesSection /> */}
				<AlertSection
					color='red'
					alertType='Warnings'
					alertArray={testAlerts}
				/>
				{/* <AlertSection color='yellow' />
				<AlertList alertArray={warnings} color='red' />
				<AlertList alertArray={watches} color='neutral' /> */}
				{/* <AlertList alertArray={testAlerts} color='neutral' /> */}
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
