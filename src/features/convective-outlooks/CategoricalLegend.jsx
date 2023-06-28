import { CategoricalLegendKey } from "./CategoricalLegendKey";

export const CategoricalLegend = ({ stylesObj }) => {
	const stylesArr = Object.values(stylesObj);

	return (
		<section
			id='categorical-outlook-legend'
			className='text-xs flex justify-center mt-10 mb-16 sm:text-sm lg:text-lg'
		>
			<div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center pl-10'>
				{stylesArr.map(({ color, label }) => {
					return (
						<CategoricalLegendKey
							key={label}
							colorStr={color}
							labelStr={label}
						/>
					);
				})}
			</div>
		</section>
	);
};
