import React from "react";
import { Basemap, LinearGradient } from "_shared/components";
import { PageLayout } from "_shared/components";
import { Alerts, useAlertPolygons, EVENT_NAME } from "features/nws-alerts";
import { geoAlbers, geoPath } from "d3-geo";
import rewind from "@turf/rewind";

const ActiveAlertsPage = () => {
  const { data, error, isLoading } = useAlertPolygons(
    EVENT_NAME.tornadoWarning
  );
  const colors = ["limegreen", "green", "yellow", "orange", "red", "purple"];
  let hue = 120; // green
  const projection = geoAlbers();
  const pathGen = geoPath(projection);

  if (data) {
    return (
      <PageLayout>
        <div className="flex flex-col">
          <h2 className="text-center text-3xl font-bold my-10">
            TORNADO WARNINGS FOR LAST 2 WEEKS
          </h2>

          <Basemap>
            {data &&
              data.features.map((feature, index) => {
                hue *= 1.1;
                return (
                  <g id={feature.properties.id} key={feature.properties.id}>
                    <path
                      d={pathGen(rewind(feature, { reverse: true }))}
                      // hsl(hue 0-360, saturation 0-100%, lightness 0-100%)
                      fillOpacity={0.5}
                      fill={`hsl(${hue},50%,50%)`}
                      stroke={`hsl(${hue},100%,50%)`}
                      strokeWidth={2}
                    />
                  </g>
                );
              })}
          </Basemap>
        </div>
      </PageLayout>
    );
  }

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>...Loading</p>;
};

export default ActiveAlertsPage;
