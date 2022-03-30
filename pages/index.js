import { PageWrapper } from "../components";
import { useActiveAlerts, useTornadoWarningsTest } from "../hooks";
import { QUERY_PARAMS as NWS_PARAMS } from "../services/NWS";
import TornadoWarningWindow from "../components/TornadoWarningWindow";
import TornadoWatchesWindow from "../components/TornadoWatchesWindow";
import CancelledAlertsWindow from "../components/CancelledAlertsWindow";
import Hero from "../components/Hero";
import TornadoActionFeaturesSection from "../components/TornadoActionFeaturesSection";
// ------
import { useTornadoWarnings } from "../hooks";
import dayjs from "dayjs";

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
		TornadoWarning: "red",
		TornadoWatch: "yellow",
	};

	const color =
		messageType === "Cancel"
			? "neutral"
			: EVENT_COLOR_MAP[`${event.split(" ").join("")}`];

	return (
		<div
			className={`bg-gradient-to-r from-${color}-500 to-${color}-900 my-3 p-2 text-xs`}
		>
			<div className='flex justify-between'>
				<h3 className='font-bold inline-block italic text-lg text-white uppercase'>
					!! {event.split(" ")[1]} !!
				</h3>
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

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					{/* <Hero /> */}
					<AlertList alertArray={warnings} />
					{/* <TornadoActionFeaturesSection /> */}
					<TornadoWarningWindow />
					{/* <TornadoWatchesWindow /> */}
					{/* <CancelledAlertsWindow /> */}
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
