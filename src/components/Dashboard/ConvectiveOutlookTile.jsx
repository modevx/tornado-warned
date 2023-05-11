import { useAll3CategoricalOutlooks } from "services/arcgis-server-convective-outlooks/service";
import { AlbersStateMap } from "components/AlbersStateMap";
import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";
import { CategoricalOutlookFeaturePath } from "features/spc-convective-outlooks/components/CategoricalOutlookFeaturePath";

export const ConvectiveOutlookTile = () => {
	const { data, error } = useAll3CategoricalOutlooks();

	return (
		<div className='row-span-3 mdx-dashboard-tile'>
			<h2>CONVECTIVE OUTLOOKS</h2>
			<h3>Day 1 Outlook</h3>
			<AlbersStateMap>
				{data &&
					data[0].map((feature) => (
						<CategoricalOutlookFeaturePath feature={feature} />
					))}
			</AlbersStateMap>
			<h3>Day 2 Outlook</h3>
			<AlbersStateMap>
				{data &&
					data[1].map((feature) => (
						<CategoricalOutlookFeaturePath feature={feature} />
					))}
			</AlbersStateMap>
			<h3>Day 3 Outlook</h3>
			<AlbersStateMap>
				{data &&
					data[2].map((feature) => (
						<CategoricalOutlookFeaturePath feature={feature} />
					))}
			</AlbersStateMap>
		</div>
	);
};
