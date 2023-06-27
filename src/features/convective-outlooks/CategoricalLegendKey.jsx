export const CategoricalLegendKey = ({ colorStr, labelStr }) => {
	const badgeStyles = `bg-[${colorStr}] h-2 w-2 rounded-sm sm:h-4 sm:w-4 sm:rounded-md`;

	return (
		<div className='flex items-center'>
			<div className={badgeStyles} />
			<span className='ml-2'>{labelStr}</span>
		</div>
	);
};
