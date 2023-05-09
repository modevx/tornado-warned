import { PageLayout } from "components";
import { AlertPolygonMap, AlertStats } from "features/nws-alerts";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks/components";

const HomePage = () => {
  const alertStats = { warningCount: 0, watchCount: 0 };

  return (
    <PageLayout>
      {/* <AlertStats stats={alertStats} /> */}
      <AlertPolygonMap />
      <ConvectiveOutlookMap />
    </PageLayout>
  );
};

export default HomePage;
