import { getUniqueStatesArr } from "./getUniqueStatesArr";

export const getAffectedAreasByState = areaDesc => {
	const uniqueStatesArr = getUniqueStatesArr(areaDesc);
	const areaAndStateArr = areaDesc.split(/(?:;)/gm);

	console.log(areaAndStateArr);

	return areaAndStateArr;
};
