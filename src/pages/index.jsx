import React from "react";
import { PageLayout } from "components";
import {
  ConvectiveOutlookMap,
  OutlookPreviewCard,
  OutlookPreviewCardList,
} from "features/convective-outlooks/components";
import {
  useConvectiveOutlookLegendQuery,
  useSPCConvectiveOutlooks,
} from "services/convective-outlook-map-server";
import { OUTLOOK_LAYERS } from "features/convective-outlooks/constants";
import { feature } from "topojson-client";

const OutlooksPage = () => {
  const { data: dataOutlooks, error: errorOutlooks } =
    useSPCConvectiveOutlooks();
  const { data: dataLegend, error: errorLegend } =
    useConvectiveOutlookLegendQuery();

  React.useEffect(() => {
    console.log("dataOutlooks >>\n", dataOutlooks);
  }, [dataOutlooks]);

  React.useEffect(() => {
    console.log("dataLegend >>\n", dataLegend);
  }, [dataLegend]);

  return (
    <PageLayout>
      <ConvectiveOutlookMap />
      {/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
    </PageLayout>
  );
};

export default OutlooksPage;
