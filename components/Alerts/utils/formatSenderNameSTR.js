export const formatSenderNameSTR = senderName => {
	return senderName
		.slice(4)
		.split(/\s(?=[A-Z]{2})/)
		.join(", ");
};
