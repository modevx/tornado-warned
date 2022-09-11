import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_TIMEOUT = 5000;

// -- OUTLOOKS
const MAP_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	timeout: DEFAULT_TIMEOUT,
});
// -- SVGs
const WMS_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer",
	timeout: DEFAULT_TIMEOUT,
});

export const LAYER_ID_NUM = Object.freeze({
	cat1: "1",
	cat2: "9",
	cat3: "17",
	conv1: "0",
	conv2: "8",
	conv3: "16",
	conv48: "20",
	prob3: "18",
	prob4: "21",
	prob5: "22",
	prob6: "23",
	prob7: "24",
	prob8: "25",
	probHail1: "5",
	probHail2: "13",
	probTornado1: "3",
	probTornado2: "11",
	probWind1: "7",
	probWind2: "15",
	sig3: "19",
	sigHail1: "4",
	sigHail2: "12",
	sigTornado1: "2",
	sigTornado2: "10",
	sigWind1: "6",
	sigWind2: "14",
});

const fetchOutlookByLayerId = async (layerIdNum) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerIdNum}/query?f=json&geometry=true&outFields=objectid,dn,valid,expire,idp_source`
	);
};

export const useCategoricalOutlookQuery = (layerIdNum) => {
	return useQuery(["convectiveOutlooks", layerIdNum], () =>
		fetchOutlookByLayerId(layerIdNum)
	);
};

// const fetchAllOutlookLayers = async () => {
// 	return await MAP_SERVER_CLIENT.get("/layers?f=json");
// };
