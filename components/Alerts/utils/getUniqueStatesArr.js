export const getUniqueStatesArr = scsString => {
	// match state abbr preceding ';' or last state abbr in string
	const rgx = /\w\w(?=;)|\w\w$/gm;
	// make copy of og string
	const rawString = scsString.slice(0);
	// get arr of every state abbr in string
	const rawStatesArr = rawString.match(rgx);
	// use Set to create unique state abbr iterable
	const uniqueStatesObj = new Set(rawStatesArr);
	// create unique state abbr arr to ref when looping through each city/area
	const uniqueStatesArr = [];
	uniqueStatesObj.forEach(state => uniqueStatesArr.push(state));

	return uniqueStatesArr;
};
