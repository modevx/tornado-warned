// import React from "react";

import {
  AlertStats,
  AlertTextProducts,
  TornadoWarningTextProduct,
  TornadoWatchTextProduct,
} from "features/nws-alerts";
import { Heading, PageLayout } from "_shared/components";

import {
  useActiveTornadoWarningTextProducts,
  useActiveTornadoWarningPolygons,
  useActiveTornadoWatchTextProducts,
} from "services/nws-alerts";

const HomePage = () => {
  const { data: warningTextProducts } = useActiveTornadoWarningTextProducts();
  const { data: warningPolygons } = useActiveTornadoWarningPolygons();
  const { data: watchTextProducts } = useActiveTornadoWatchTextProducts();
  const alertStats = { warningCount: 0, watchCount: 0 };

  if (warningTextProducts) {
    alertStats.warningCount = warningTextProducts.length;
    console.log("Warning Text Products:\n", warningTextProducts);
  }

  if (watchTextProducts) {
    alertStats.watchCount = watchTextProducts.length;
    console.log("Watch Text Products:\n", watchTextProducts);
  }

  if (warningPolygons) console.log("Warning Polygons:\n", warningPolygons);

  return (
    <PageLayout>
      <AlertStats stats={alertStats} />

      <h2 className="text-4xl font-bold uppercase">Tornado Warnings</h2>

      <AlertTextProducts
        type="tornadoWarning"
        textProducts={warningTextProducts}
      />

      <h2 className="text-4xl font-bold uppercase">Tornado Watches</h2>

      <AlertTextProducts type="tornadoWatch" textProducts={watchTextProducts} />
    </PageLayout>
  );
};

export default HomePage;

const H1 = ({ children }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
