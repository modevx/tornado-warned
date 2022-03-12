import { useQuery } from "react-query";
import axios from "axios";

export const useTestTornadoWatches = () =>
	useQuery("testTornadoWatches", async () => {
		const res = await axios.get(
			"https://api.weather.gov/alerts?start=2022-03-06T12%3A00%3A00Z&end=2022-03-07T12%3A00%3A00Z&event=Tornado%20Watch&message_type=alert&status=actual"
		);

		return res.data.features;
	});
