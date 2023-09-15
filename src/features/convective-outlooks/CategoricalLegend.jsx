export const CategoricalLegend = ({ styles }) => {
	const stylesArr = Object.values(styles);

	return (
		<div className='text-xs flex justify-center mt-10 mb-4 '>
			<div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center'>
				{stylesArr.map(({ bgColor, textColor, label }) => {
					return (
						<div
							key={label}
							style={{ backgroundColor: `${bgColor}` }}
							className='p-2 rounded'
						>
							<span
								style={{ color: `${textColor}` }}
								className='block text-black text-xs lg:text-base text-center font-bold uppercase'
							>
								{label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
