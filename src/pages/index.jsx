import React from "react";
import { PageLayout } from "_shared/components";
import { ActiveAlertsMap } from "features/alerts";
import { ConvectiveOutlookMaps } from "features/outlooks/components";
import { RssFeeds } from "features/rss/rss-feeds";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="bg-red-600 p-4">
        <h1 className="text-gray-900 text-2xl font-bold">Tornado Warnings</h1>
        <div className="h-[200px]"></div>
      </div>

      <div className="bg-yellow-400 p-4">
        <h1 className="text-gray-900 text-2xl font-bold">Tornado Watches</h1>
        <div className="h-[200px]"></div>
      </div>

      <div className="bg-gray-100 p-4 grid gap-4">
        <h1 className="text-gray-900 text-2xl font-bold">
          Active Tornado Alerts
        </h1>
        <ActiveAlertsMap />
      </div>

      <div className="bg-orange-600 p-4">
        <h1 className="text-gray-900 text-2xl font-bold">RSS Feeds</h1>
        {/* <RssFeeds /> */}
      </div>

      <div className="bg-blue-600 p-4">
        <h1 className="text-gray-900 text-2xl font-bold">
          Convective Outlooks
        </h1>
        <ConvectiveOutlookMaps />
      </div>
    </PageLayout>
  );
};

export default HomePage;
