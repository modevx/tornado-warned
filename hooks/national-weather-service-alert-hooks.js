import { useQuery } from "react-query";
import {
	fetchTornadoWarnings,
	fetchTornadoWatches,
	fetchTestWarnings,
	fetchTestWatches,
} from "../services/nws-api";

const QUERY_KEYS = Object.freeze({
	active_warnings: "activeWarnings",
	active_watches: "activeWatches",
	test_warnings: "testWarnings",
	test_watches: "testWatches",
});

export const useTornadoWarnings = () => {
	return useQuery(QUERY_KEYS.active_warnings, fetchTornadoWarnings);
};
export const useTornadoWatches = () => {
	return useQuery(QUERY_KEYS.active_watches, fetchTornadoWatches);
};
export const useTestWarnings = () => {
	return useQuery(QUERY_KEYS.test_warnings, fetchTestWarnings);
};
export const useTestWatches = () => {
	return useQuery(QUERY_KEYS.test_watches, fetchTestWatches);
};
