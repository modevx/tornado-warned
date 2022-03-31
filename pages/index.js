import dayjs from "dayjs";
// -----
import { Hero, Features, Header, PageWrapper } from "../components";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useCancelledAlerts,
} from "../hooks";

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
		TornadoWatch: "from-yellow-400",
	};

	const color =
		messageType.toLowerCase() === "cancel"
			? "from-neutral-500"
			: EVENT_COLOR_MAP[`${event.split(" ").join("")}`];

	return (
		<div
			className={`bg-gradient-to-r ${color} to-neutral-900 my-3 p-2 text-xs`}
		>
			<div className='flex justify-between'>
				<div className='flex flex-col'>
					<div className='font-bold inline-block italic text-lg text-white uppercase'>
						{event.split(" ")[1]}
					</div>
					<div className='font-bold inline-block italic text-lg text-white lowercase'>
						{messageType}
					</div>
				</div>
				<div className='flex flex-col justify-between mb-2 text-right'>
					<div>
						<span className='font-bold'>FROM:</span>{" "}
						{dayjs(effective).format("h:mm a")}
					</div>
					<div>
						<span className='font-bold'>TO:</span>{" "}
						{dayjs(expires).format("h:mm a")}
					</div>
				</div>
			</div>
			<div className='bg-neutral-700 px-2 py-3'>
				<p>{areaDesc}</p>
			</div>
		</div>
	);
};

const HomeScreen = () => {
	const { data: warnings } = useTornadoWarnings();
	const { data: watches } = useTornadoWatches();
	const { data: cancels } = useCancelledAlerts();

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
