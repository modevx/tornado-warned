export const getUniqueStatesSet = scsString => {
	// matches state abbrevitions followed by ';' OR
	// last state abbreviation in string
	const rgx = /\w\w(?=;)|\w\w$/gm;
	// copy of og string
	const rawString = scsString.slice(0);
	// target all state abbreviations
	const rawStateAbbrArr = rawString.match(rgx);
	// parse unique state abbreviations via Set
	return new Set(rawStateAbbrArr);
};
