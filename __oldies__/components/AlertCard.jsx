const AlertCard = ({ alert }) => {
	const { id, geometry, properties } = alert;
	const bgColor =
		properties.event === "Tornado Warning"
			? "bgRed"
			: properties.event === "Tornado Watch"
			? "bgOrange"
			: "bgYellow";

	return (
		<li className={`alert-cards__li ${bgColor}`}>
			<div className={`alert-card__header  ${bgColor}`}>
				<h3>{properties.event.toUpperCase()}</h3>
				<p>{properties.senderName}</p>
			</div>
			<div className='alert-time-window'>
				<p>START: {properties.effective}</p>
				<p>END: {properties.ends}</p>
			</div>
			<p>{properties.instruction}</p>
		</li>
	);
};

export default AlertCard;
