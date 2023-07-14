export const AlertSection = ({ alertFeatureArr, alertComponent }) => {
	const AlertComponent = alertComponent;

	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
			{alertFeatureArr
				? alertFeatureArr.map((feature) => (
						<AlertComponent key={feature.id} alert={feature} />
				  ))
				: null}
		</section>
	);
};
