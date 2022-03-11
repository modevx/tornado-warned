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
  tornado_warning: "bg-red-700",
  tornado_watch: "bg-yellow-300",
  thunderstorm_warning: "bg-purple-300",
};

type ALERT_CARD = { eventType: keyof string; alertType: keyof string };

export const AlertCard = ({ eventType, alertType }: ALERT_CARD) => {
  const AlertIcon = COMPONENT_MAP[eventType];
  const color = COLOR_MAP[`${eventType}_${alertType}`];

  return (
    <Card bgColorClass={`${color}`}>
      <AlertIcon />
    </Card>
  );
};
