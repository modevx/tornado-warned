import { useQuery } from "react-query";
import axios from "axios";

export const useTornadoWatches = () => {
  return useQuery("tornadoWatches", async () => {
    const res = await axios.get(
      "https://api.weather.gov/alerts/active?event=Tornado Watch"
    );
    return res.data.features;
  });
};
