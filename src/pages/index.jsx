import React from "react";
import { PageLayout } from "_shared/components";
import { PolygonMap } from "features/alerts";
import { ConvectiveOutlookMap } from "features/outlooks/components";
import { RssFeeds } from "features/rss/components/rss-feeds";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="bg-gray-100 p-4">
        <PolygonMap />
      </div>
      <div className="bg-blue-600 p-4">
        <ConvectiveOutlookMap />
      </div>
      <div className="bg-orange-600 p-4">
        <RssFeeds />
      </div>
      {/* TornadoNews/> */}
      {/* <OutlookPreviewCardList outlooks={featureLayers} /> */}
    </PageLayout>
  );
};

export default HomePage;
