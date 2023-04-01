import React from "react";
import { Card, Stats } from "react-daisyui";

import { PageLayout } from "_shared/components";
import { AlertTextProduct } from "features/alerts";
import { ICONS } from "_shared/constants";

import {
  useActiveTornadoWarningTextProducts,
  useActiveTornadoWarningPolygons,
} from "services/nws-api-web-service";
import { BsTornado } from "react-icons/bs";

const HomePage = () => {
  const { data: warningTextProducts } = useActiveTornadoWarningTextProducts();
  const { data: warningPolygons } = useActiveTornadoWarningPolygons();
  let warningCount = 0;
  // const { BsTornado } = ICONS;

  // [?] DAISYUI: why do I need to desctructure for Stats.Stat to work?
  const { Stat } = Stats;

  if (warningTextProducts) {
    warningCount = warningTextProducts.length;
    console.log("Warning Text Products:\n", warningTextProducts);
  }
  if (warningPolygons) console.log("Warning Polygons:\n", warningPolygons);

  return (
    <PageLayout>
      <Stats className="shadow font-sans">
        <Stats.Stat className="place-items-center">
          <Stat.Item variant="title">Active Warnings</Stat.Item>
          <Stat.Item variant="value">{warningCount}</Stat.Item>
          <Stat.Item variant="figure">
            <BsTornado size={30} color="red" title="tornado" />
          </Stat.Item>
        </Stats.Stat>
      </Stats>

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
