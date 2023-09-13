import { rewindPathGenerator } from "components/_constants/path-generators";

import { USStateMap, USMapLoading } from "components";
import { useCategoricalOutlookByLayerId } from "services/outlook-mapserver";

export const CategoricalMap = ({ features, styles }) => {
	return (
		<>
			{features ? (
				<div className='w-full h-full'>
					<USStateMap>
						{features.map((feature) => {
							const {
								id,
								properties: { dn: categoryKey, idp_source },
							} = feature;

							return (
								<path
									key={`${idp_source}-${id}`}
									d={rewindPathGenerator(feature)}
									fill={styles[categoryKey].bgColor}
									opacity={0.7}
									stroke={styles[categoryKey].stroke}
									strokeWidth={4}
								/>
							);
						})}
					</USStateMap>
				</div>
			) : (
				<USMapLoading loadingMessage='Outlook Loading...' />
			)}
		</>
	);
};

const CategoricalLegend = ({ styles }) => {
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
