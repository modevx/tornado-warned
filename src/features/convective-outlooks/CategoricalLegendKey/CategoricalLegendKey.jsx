export const CategoricalLegendKey = ({ colorStr, labelStr }) => {
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
