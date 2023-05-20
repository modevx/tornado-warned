import { TileConvectiveOutlooks } from "./TileConvectiveOutlooks";
import { TileNEXRAD } from "./TileNEXRAD";
import { TileStormReports } from "./TileStormReports";
import { TileTornadoWarningTextProducts } from "./TileTornadoWarningTextProducts";
import { TileTornadoWatchTextProducts } from "./TileTornadoWatchTextProducts";
import { TileMesoscaleDiscussions } from "./TileMesoscaleDiscussions";

export const Dashboard = () => {
  const dashboardStyles = "grid gap-4 grid-cols-4 grid-rows-3 h-screen";
  const mdGridLayout = "md:grid-cols-2 md:grid-rows-2";
  const lgGridLayout = "lg:grid-cols-4 lg:grid-rows-3";

  return (
    <div className={`${dashboardStyles}`}>
      <TileTornadoWarningTextProducts />
      <TileNEXRAD />
      <TileTornadoWatchTextProducts />
      <TileConvectiveOutlooks />
      <TileMesoscaleDiscussions />
      <TileStormReports />
    </div>
  );
};
