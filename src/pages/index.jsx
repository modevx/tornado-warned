import React from "react";
import { PageLayout } from "_shared/components";
import { AlertPolygonMap } from "features/alerts";
import { ConvectiveOutlookMaps } from "features/outlooks/components";
import { RssFeeds } from "features/rss/rss-feeds";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="bg-red-600 p-4">
        <H1>Tornado Warnings</H1>
        <div className="h-[200px]"></div>
      </div>

      <div className="bg-yellow-400 p-4">
        <H1>Tornado Watches</H1>
        <div className="h-[200px]"></div>
      </div>

      <div className="bg-gray-100 p-4 grid gap-4">
        <H1>Active Tornado Alerts</H1>
        <AlertPolygonMap />
      </div>

      <div className="bg-orange-600 p-4">
        <H1>RSS Feeds</H1>
        {/* <RssFeeds /> */}
      </div>

      <div className="bg-blue-600 p-4">
        <H1>Convective Outlooks</H1>
        <ConvectiveOutlookMaps />
      </div>
    </PageLayout>
  );
};

export default HomePage;

const H1 = ({ children }) => {
  return <h1 className="text-gray-900 text-2xl font-bold">{children}</h1>;
};
