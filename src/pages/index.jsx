import React from "react";
import { PageLayout } from "_shared/components";
import { PolygonMap } from "features/alerts";
import {
  ConvectiveOutlookMap,
  OutlookPreviewCard,
  OutlookPreviewCardList,
} from "features/outlooks/components";
import {
  useOutlookLegendQuery,
  useSPCConvectiveOutlooks,
} from "services/convective-outlooks";
import { OUTLOOK_LAYERS } from "features/outlooks/constants";
import { feature } from "topojson-client";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="bg-gray-100 p-4">
        <PolygonMap />
      </div>
      <div className="bg-blue-600 p-4">
        <ConvectiveOutlookMap />
      </div>
      {/* TornadoNews/> */}
      {/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
    </PageLayout>
  );
};

export default HomePage;
