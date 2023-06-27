import { CategoricalLegendKey } from "./CategoricalLegendKey";

export const CategoricalLegend = ({ stylesObj }) => {
	const stylesArr = Object.values(stylesObj);

	return (
		<div className='text-xs grid grid-cols-2 justify-center mt-10 mb-16'>
			{stylesArr.map(({ color, label }) => {
				return (
					<CategoricalLegendKey key={label} colorStr={color} labelStr={label} />
				);
			})}
		</div>
	);
};
