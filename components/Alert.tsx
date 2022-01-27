const Alert = alert => {
	console.log(alert);
	return <li>{alert.alert.properties.areaDesc}</li>;
};

export default Alert;
