import React from "react";
import { BsTornado } from "react-icons/bs";
/**
 * -- [ Day.js ] localizedFormat plugin extension
 */
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);
// -----
import { Features, Header, PageWrapper } from "../components";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useCancelledAlerts,
} from "../hooks";
// -----
import axios from "axios";

const SiteFeaturesSection = () => {};

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
			{/* -- [ HEADLINE ] */}
			<div className='flex items-center justify-between py-2'>
				{/* -- [ ALERT type ] + [ EFFECTIVE time ] */}
				<div className='flex items-center'>
					<BsTornado className='mr-1' size={30} />

					<span className='font-bold inline-block  text-lg text-white uppercase'>
						{event.split(" ")[1]}
					</span>
				</div>

				{/* -- [ MESSAGE type ] + [ EXPIRATION time ] */}
				<div>
					<span>{dayjs(effective).format("LT")}</span>&nbsp; - &nbsp;
					<span>{dayjs(expires).format("LT")}</span>
				</div>
			</div>
			{/* -- Impacted Areas Box */}
			<div className='bg-neutral-700 px-2 py-3'>
				<p>{areaDesc}</p>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
			<div className='text-700 text-center'>
				<div className='text-900 font-bold text-5xl mb-3'>
					stay ahead of the storm.
				</div>
				<div className='text-700 text-2xl mb-5'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
					numquam eligendi quos.
				</div>
				{/* <Button
					label='STAY INFORMED'
					icon='pi pi-discord'
					className='font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap'
				/> */}
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
			<div className='flex flex-col justify-around w-full'>
				<Header />
				<Hero />
				<Features />
				<AlertList alertArray={warnings} color='red' />
				<AlertList alertArray={watches} color='neutral' />
				<AlertList alertArray={cancels} color='yellow' />
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
