import { PageLayout } from "components";
import { useCategoricalOutlooks } from "services/spc-convective-outlook-mapserver";

const ConvectiveOutlookScreen = () => {
  const { data } = useCategoricalOutlooks();
  let day1outlook = [],
    day2outlook = [],
    day3outlook = [];

  if (data) {
    [day1outlook, day2outlook, day3outlook] = data;
  }

  return <PageLayout></PageLayout>;
};
