// TODO: move to /features/nws-alerts/constants

export const crateAlertAreaDescriptionMap = (strAreaDescription) => {
  if (strAreaDescription === null || strAreaDescription === undefined) return;

  const arrAreaDescription = strAreaDescription.split(/(?:;\s)/gm);
  const mapAreaDescription = new Map();

  arrAreaDescription.forEach((affectedArea) => {
    const [alertArea, state] = affectedArea.split(/\,\s/);

    if (mapAreaDescription.get(state) === undefined) {
      mapAreaDescription.set(state, new Array(alertArea));
    } else {
      mapAreaDescription.set(state, [
        ...mapAreaDescription.get(state),
        alertArea,
      ]);
    }
  });

  return mapAreaDescription;
};
