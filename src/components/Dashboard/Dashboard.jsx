import { TileConvectiveOutlooks } from "./TileConvectiveOutlooks";
import { TileNEXRAD } from "./TileNEXRAD";
import { TileStormReports } from "./TileStormReports";
import { TileTornadoWarningTextProducts } from "./TileTornadoWarningTextProducts";
import { TileTornadoWatchTextProducts } from "./TileTornadoWatchTextProducts";
import { TileMesoscaleDiscussions } from "./TileMesoscaleDiscussions";

export const Dashboard = () => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-3 bg-neutral-400 h-screen">
      <TileTornadoWarningTextProducts />
      <TileNEXRAD />
      <TileConvectiveOutlooks />
      <TileTornadoWatchTextProducts />
      <TileMesoscaleDiscussions />
      <TileStormReports />
    </div>
  );
};
