import { BsTornado } from "react-icons/bs";
/**
 * -- [ Day.js ] localizedFormat plugin extension
 */
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);
// -----
import { Hero, Features, Header, PageWrapper } from "../components";
import {
	useTornadoWarnings,
	useTornadoWatches,
	useCancelledAlerts,
} from "../hooks";
// -----

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

const HomeScreen = () => {
	const { data: warnings } = useTornadoWarnings();
	const { data: watches } = useTornadoWatches();
	const { data: cancels } = useCancelledAlerts();

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<Header />
				{/* <Hero />
				<Features /> */}
				<AlertList alertArray={warnings} color='red' />
				<AlertList alertArray={watches} color='neutral' />
				<AlertList alertArray={cancels} color='yellow' />
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
