import Axios from "axios";
import { STORM_PREDICTION_CENTER as EPS } from "./constants/endpoints";

// TODO: use environment to set httpClient ie. "SPC --> SPC_TEST"

export const fetchAllRSSFeeds = async () => {
	return await Axios.get(EPS.api_rss_all_feeds);
};
