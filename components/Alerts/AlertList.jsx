import { AlertListItem } from ".";

export const AlertList = ({ alertArray }) => {
	// console.log("AlertList >>\n", alertArray.length);

	if (!alertArray) return null;

	return (
		// <ul className='p-4 flex flex-col flex-wrap gap-4 mx-auto'>
		<ul className='p-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{alertArray.map(alert => (
				<AlertListItem alert={alert} key={alert.id} />
			))}
		</ul>
	);
};
