import { useAll3CategoricalOutlooks } from "services/arcgis-server-convective-outlooks/service";
import { AlbersStateMap } from "components/AlbersStateMap";
import { CategoricalOutlookMap } from "features/spc-convective-outlooks/components";
import { CategoricalOutlookFeaturePath } from "features/spc-convective-outlooks/components/CategoricalOutlookFeaturePath";
import { MAYFIELD } from "features/spc-convective-outlooks/Mayfield";

export const TileConvectiveOutlooks = () => {
  const { data, error } = useAll3CategoricalOutlooks();
  let day1features = [],
    day2features = [],
    day3features = [];

  if (data) {
    day1features = data[0];
    day2features = data[1];
    day3features = data[2];
  }

  const MAYFIELD_FEATURES = MAYFIELD.catOtlk.features;

  return (
    <div className="row-span-3 mdx-dashboard-tile">
      <h2>CONVECTIVE OUTLOOKS</h2>
      <h3>Day 1</h3>
      {data && <CategoricalOutlookMap features={day1features} />}

      <h3>Day 2</h3>
      {data && <CategoricalOutlookMap features={day2features} />}

      <h3>Day 3</h3>
      {data && <CategoricalOutlookMap features={day3features} />}

      <h3>December 10, 2021</h3>
      <CategoricalOutlookMap features={MAYFIELD_FEATURES} />
    </div>
  );
};
