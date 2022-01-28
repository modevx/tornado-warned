import axios from "axios";
import { yearConfig } from "./axiosConfigs";

let monthlyTVS = new Map();
// let axiosConfig;
export const getTVSYearMap = async (yr) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // TODO: pass 12 per-month calls to Promise.all() - THEN hit SWDI
  // for (let monthNum = 0; monthNum < 12; monthNum++) {
  // 	axiosConfig = yearConfig(yr, monthNum);
  // 	try {
  // 		const res = new Promise(axios(axiosConfig));
  // 		Tornado Vortex Signatures --> res.data.features
  // 		const tvs = await res.data.features;
  // 		monthReqsMap.set(monthNames[monthNum], res);
  // 		const resProms = Promise.all(monthReqsMap);
  // 		console.log(resProms);
  // 	} catch (error) {
  // 		console.log(error);
  // 		throw new Error(">> getTVSyearMap() >>");
  // 	}
  // }

  // monthReqsMap.forEach((value, key, map) => {
  // 	console.log(`${key} >>>\n${value.length}`);
  // });

  const twelveMonthRes = await Promise.all([
    axios(yearConfig(2021, 0)),
    axios(yearConfig(2021, 1)),
    axios(yearConfig(2021, 2)),
    axios(yearConfig(2021, 3)),
    axios(yearConfig(2021, 4)),
    axios(yearConfig(2021, 5)),
    axios(yearConfig(2021, 6)),
    axios(yearConfig(2021, 7)),
    axios(yearConfig(2021, 8)),
    axios(yearConfig(2021, 9)),
    axios(yearConfig(2021, 10)),
    axios(yearConfig(2021, 11)),
  ]);

  twelveMonthRes.forEach(async (month, index) => {
    const tvsForMonth = await month.data.features;

    monthlyTVS.set(monthNames[index], tvsForMonth);
  });

  return monthlyTVS;
};
