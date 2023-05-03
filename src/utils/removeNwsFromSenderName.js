// ex: 'NWS Charlotte NC' --> 'Charlotte, NC'
export const removeNwsFromSenderName = (senderName) => {
  return senderName
    .slice(4)
    .split(/\s(?=[A-Z]{2})/)
    .join(", ");
};
