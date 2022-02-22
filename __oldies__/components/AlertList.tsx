import Alert from "./Alert";

const AlertList = ({ alertList }) => {
	return (
		<ul className='alert-list'>
			{alertList.map((alertObj: {}) => (
				<Alert key={alertObj.id} alert={alertObj} />
			))}
		</ul>
	);
};

export default AlertList;
