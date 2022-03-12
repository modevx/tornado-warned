import { useQuery } from "react-query";
import axios from "axios";

export const useTornadoWarnings = () =>
	useQuery("tornadoWarnings", () =>
		axios.get("https://api.weather.gov/alerts/active?event=Tornado Warning")
	);
