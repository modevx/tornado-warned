import { AlertListItem } from ".";

export const AlertList = ({ alertArray }) => {
	console.log("AlertList >>\n", alertArray.length);

	if (!alertArray) return null;

	return (
		<div>
			{alertArray.map(alert => (
				<AlertListItem alert={alert} key={alert.id} />
			))}
		</div>
	);
};
