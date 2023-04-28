export const logTornadoAlertError = (alertName, error) => {
  console.log(`>> ${alertName.toUpperCase()} ERROR\n`, error.message);
};
