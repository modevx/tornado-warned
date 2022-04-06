import React from "react";
import { BsTornado } from "react-icons/bs";
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);

import { Header, PageWrapper } from "../components";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useCancelledAlerts,
} from "../hooks";

import axios from "axios";

const Hero = () => {
	return (
		<div className='px-4 py-8 md:px-6 lg:px-8'>
			<div className='text-700 text-left my-auto'>
				<div className='text-900 font-bold text-5xl mb-3'>
					stay ahead of the storm.
				</div>
				<div className='text-700 text-2xl mb-5'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
					numquam eligendi quos.
				</div>
				<div className='rounded-md shadow'>
					<a
						href='#'
						className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
					>
						Get started
					</a>
				</div>
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
const AlertSection = ({ color }) => {
	const colorMap = {
		red: "bg-red-600",
		yellow: "bg-yellow-400",
	};

	return (
		<section
			id='tornado-warnings'
			className={`${colorMap[color]} h-80 my-4 text-black`}
		>
			<h1>Tornado Warnings</h1>
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
		TornadoWarning: "from-red-500",
		TornadoWatch: "from-yellow-500",
	};

	const color =
		messageType.toLowerCase() === "cancel"
			? "from-neutral-500"
			: EVENT_COLOR_MAP[`${event.split(" ").join("")}`];

	return (
		// -- [ CARD ]
		<div
			className={`bg-gradient-to-r ${color} to-neutral-900 my-3 p-2 text-xs`}
		>
			<div className='flex items-center justify-between py-2'>
				<div className='flex items-center'>
					<BsTornado className='mr-1' size={30} />
					<span className='font-bold inline-block  text-lg text-white uppercase'>
						{event.split(" ")[1]}
					</span>
				</div>

				<div>
					<span>{dayjs(effective).format("LT")}</span>&nbsp; - &nbsp;
					<span>{dayjs(expires).format("LT")}</span>
				</div>
			</div>

			<div className='bg-neutral-700 px-2 py-3'>
				<p>{areaDesc}</p>
			</div>
		</div>
	);
};

const HomeScreen = () => {
	const [testAlerts, setTestAlerts] = React.useState([]);
	const { data: warnings } = useTornadoWarnings();
	const { data: watches } = useTornadoWatches();
	const { data: cancels } = useCancelledAlerts();

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
			<div className='flex flex-col w-full'>
				<div className='bg-neutral-900/70 bg-blend-overlay bg-[url("/bg-img-03.jpg")] bg-center bg-cover border-red-600 border-t-4 h-[50vh]'>
					<Header />
					<Hero />
				</div>
				{/* <FeaturesSection />
				<AlertSection color='red' />
				<AlertSection color='yellow' />
				<AlertList alertArray={warnings} color='red' />
				<AlertList alertArray={watches} color='neutral' /> */}
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
