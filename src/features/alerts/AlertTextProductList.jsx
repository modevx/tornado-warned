import { AlertTextProduct } from "./AlertTextProduct";

export const AlertTextProductList = ({ activeAlerts }) => {
	return (
		<>
			{activeAlerts ? (
				activeAlerts.map((alert) => (
					<AlertTextProduct key={alert.properties.id} activeAlert={alert} />
				))
			) : (
				<p> {"Something went wrong..."}</p>
			)}
		</>
	);
};
