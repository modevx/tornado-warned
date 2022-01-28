import axios from "axios";
import { createMonthDateRange } from "./createMonthDateRange";

export const fetchTVSforMonth = async (dateObj) => {
  const { start, end } = createMonthDateRange(dateObj);

  var config = {
    method: "get",
    url: `https://www.ncdc.noaa.gov/swdiws/geojson/nx3tvs/${start}:${end}`,
    headers: {},
  };

  try {
    const res = await axios(config);
    const tornadoVortexSignatures = res.data.features;

    if (tornadoVortexSignatures.length < 1) {
      return new EvalError("No events for requested month..");
    }

    return tornadoVortexSignatures;
  } catch (error) {
    throw new Error(
      "ERROR: Unable to fetch tornado vortex signatures for selected month."
    );
  }
};
