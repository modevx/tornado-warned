export const checkStringForPhrase = (string, phrase) => {
  const stringToCheck = string.toLowerCase();
  const phraseToFind = phrase.toLowerCase();

  return stringToCheck.includes(phraseToFind);
};

export const checkAlertIsPDS = (alert) => {
  const { description } = alert.properties;
  return checkStringForPhrase(description, "Particularly Dangerous Situation");
};

export const checkAlertIsTornadoEmergency = (alert) => {
  const { description } = alert.properties;
  return checkStringForPhrase(description, "Tornado Emergency");
};
