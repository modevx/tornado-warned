import React from "react";
import { PageLayout } from "_shared/components";
import { TornadoAlertMap } from "features/tornado-alerts";
import {
  ConvectiveOutlookMap,
  OutlookPreviewCard,
  OutlookPreviewCardList,
} from "features/convective-outlooks/components";
import {
  useConvectiveOutlookLegendQuery,
  useSPCConvectiveOutlooks,
} from "services/convective-outlooks";
import { OUTLOOK_LAYERS } from "features/convective-outlooks/constants";
import { feature } from "topojson-client";

const OutlooksPage = () => {
  return (
    <PageLayout>
      <TornadoAlertMap />
      {/* <ConvectiveOutlookMap /> */}
      {/* TornadoNews/> */}
      {/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
    </PageLayout>
  );
};

export default OutlooksPage;
