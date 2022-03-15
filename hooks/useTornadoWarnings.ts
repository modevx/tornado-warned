import { useQuery } from "react-query";
import axios from "axios";

export const useTornadoWarnings = () => {
  return useQuery(
    "tornadoWarnings",
    async () =>
      await axios.get(
        "https://api.weather.gov/alerts/active?event=Tornado%20Warning"
      )
  );
};
