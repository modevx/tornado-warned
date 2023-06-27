export const CategoricalLegendKey = ({ colorStr, labelStr }) => {
	const badgeStyles = `bg-[${colorStr}] h-2 w-2 rounded-lg`;

	return (
		<div className='flex items-center mx-3 my-1'>
			<div className={badgeStyles} />
			<span className='ml-2'>{labelStr}</span>
		</div>
	);
};
