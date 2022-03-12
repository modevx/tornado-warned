import { useQuery } from "react-query";
import axios from "axios";

export const useTornadoWatches = () =>
	useQuery("tornadoWatches", () =>
		axios.get("https://api.weather.gov/alerts/active?event=Tornado Watch")
	);
