export const CategoricalLegend = ({ stylesObj }) => {
	const stylesArr = Object.values(stylesObj);

	return (
		<section
			id='categorical-outlook-legend'
			className='text-xs flex justify-center mt-10 mb-16 sm:text-sm lg:text-lg'
		>
			<div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center pl-10'>
				{stylesArr.map(({ color, label }) => {
					return <LegendKey key={label} colorStr={color} labelStr={label} />;
				})}
			</div>
		</section>
	);
};

const LegendKey = ({ colorStr, labelStr }) => {
	return (
		<div className='flex items-center'>
			<div
				style={{ backgroundColor: `${colorStr}` }}
				className='h-2 w-2 rounded-sm sm:h-4 sm:w-4'
			/>
			<span className='ml-2'>{labelStr}</span>
		</div>
	);
};
