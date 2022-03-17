import { useQuery } from "react-query";
import axios from "axios";

export const useTornadoWatches = () => {
  return useQuery(
    "tornadoWatches",
    async () =>
      await axios.get(
        "https://api.weather.gov/alerts/active?event=Tornado%20Watch"
      )
  );
};
