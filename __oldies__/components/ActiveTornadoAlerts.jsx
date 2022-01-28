import AlertCard from "./AlertCard";

const ActiveStormAlerts = ({ alerts }) => {
	return (
		<section className='activeTornadoAlerts'>
			<ul className='alert-cards'>
				{alerts.map(alert => {
					return <AlertCard key={alert.id} alert={alert} />;
				})}
			</ul>
		</section>
	);
};

export default ActiveStormAlerts;
