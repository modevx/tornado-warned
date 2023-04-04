import React from "react";
import { Drawer, Card } from "react-daisyui";

import { AlertStats, AlertTextProduct } from "features/alerts";
import { PageLayout } from "_shared/components";

import {
  useActiveTornadoWarningTextProducts,
  useActiveTornadoWarningPolygons,
  useActiveTornadoWatchTextProducts,
} from "services/nws-alert-text-products";

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

      <div className="bg-red-500 p-4">
        <H1>Tornado Warnings</H1>
        <div className="grid grid-cols-1">
          {warningTextProducts &&
            warningTextProducts.map(({ id, properties }) => {
              const {
                areaDesc,
                description,
                effective,
                expires,
                headline,
                instruction,
                parameters: { maxHailSize, tornadoDetection },
              } = properties;

              return (
                <Card key={id}>
                  <Card.Body>
                    <p>{effective}</p>
                    <p>{expires}</p>
                    <p>{areaDesc}</p>
                    <p>{maxHailSize}</p>
                    <p>{tornadoDetection[0]}</p>
                    <p>{headline}</p>
                    <p>{description}</p>
                    <p>{instruction}</p>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>

      <div className="p-4">
        <H1>Tornado Watches</H1>
        <div className="h-[200px]"></div>
      </div>
    </PageLayout>
  );
};

export default HomePage;

const H1 = ({ children }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
