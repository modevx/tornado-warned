import { PageLayout } from "components";
import { AlertPolygonMap, AlertStats } from "features/nws-alerts";
import { ConvectiveOutlookMaps } from "features/convective-outlook-map/components";

const HomePage = () => {
  const alertStats = { warningCount: 0, watchCount: 0 };

  return (
    <PageLayout>
      {/* <AlertStats stats={alertStats} /> */}
      <AlertPolygonMap />
      {/* <ConvectiveOutlookMaps /> */}
    </PageLayout>
  );
};

export default HomePage;
