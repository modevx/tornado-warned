import { Card } from "./";
import { BsTornado } from "react-icons/bs";
import { IoMdThunderstorm } from "react-icons/io";

const Tornado = () => <BsTornado />;
const Thunderstorm = () => <IoMdThunderstorm />;

const COMPONENT_MAP = {
	tornado: Tornado,
	thunderstorm: Thunderstorm,
};

const COLOR_MAP = {
	tornado_warning: "bg-red-600",
	tornado_watch: "bg-orange-600",
	thunderstorm_warning: "bg-yellow-300",
};

export const AlertCard = ({ eventType, alertType }) => {
	const AlertIcon = COMPONENT_MAP[eventType];
	const color = COLOR_MAP[`${eventType}_${alertType}`];

	return (
		<Card bgColorClass={`${color}`}>
			<AlertIcon />
		</Card>
	);
};
