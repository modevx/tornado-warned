import { useAll3CategoricalOutlooks } from "services/arcgis-server-convective-outlooks/service";
import { CategoricalOutlookMap } from "features/spc-convective-outlooks/components";

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

  return (
    <div className="bg-gradient-to-br from-blue-700 to-blue-200 row-span-3 mdx-dashboard-tile overflow-auto">
      <h2>CONVECTIVE OUTLOOKS</h2>
      <h3>Day 1</h3>
      {data && <CategoricalOutlookMap features={day1features} />}

      <h3>Day 2</h3>
      {data && <CategoricalOutlookMap features={day2features} />}

      <h3>Day 3</h3>
      {data && <CategoricalOutlookMap features={day3features} />}
    </div>
  );
};
