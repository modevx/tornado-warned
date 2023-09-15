export const checkStringForPhrase = (string, phrase) => {
  const stringToCheck = string.toLowerCase();
  const phraseToFind = phrase.toLowerCase();

  return stringToCheck.includes(phraseToFind);
};

export const checkIsPDS = (alert) => {
  const { description } = alert.properties;
  console.log("checkIsPDS description>>\n", description);
  return checkStringForPhrase(description, "Particularly Dangerous Situation");
};

export const checkIsEmergency = (alert) => {
  const { description } = alert.properties;
  console.log("checkIsEmergency description>>\n", description);
  return checkStringForPhrase(description, "Tornado Emergency");
};
