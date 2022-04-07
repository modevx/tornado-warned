import { AlertListItem } from ".";

export const AlertList = ({ alertArray }) => {
	// console.log("AlertList >>\n", alertArray.length);

	if (!alertArray) return null;

	return (
		<div className='p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
			{alertArray.map(alert => (
				<AlertListItem alert={alert} key={alert.id} />
			))}
		</div>
	);
};
