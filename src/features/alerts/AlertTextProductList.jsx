import { AlertTextProductItem } from "./AlertTextProduct";

export const AlertTextProductList = ({ activeAlerts }) => {
	return (
		<>
			{activeAlerts ? (
				activeAlerts.map((alert) => (
					<AlertTextProductItem key={alert.properties.id} activeAlert={alert} />
				))
			) : (
				<p> {"Something went wrong..."}</p>
			)}
		</>
	);
};
