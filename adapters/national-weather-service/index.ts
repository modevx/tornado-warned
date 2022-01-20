import { getNWS } from "../xhr";

export const getSevereThunderStormWarningAlerts = () =>
	getNWS("/alerts/active?event=Severe Thunderstorm Warning");
