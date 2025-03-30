import { PageLayout } from "components";
import { useEffect, useState } from "react";
import {
  getFirstTornadoEvent,
  getAnnualSummaries,
  getMagnitudeSummaries,
  getStateSummaries,
  getSummaryByYear,
  getSummaryByMagnitude,
  getSummaryByState,
} from "services/tornadoWarnedApi";

const StatsScreen = () => {
  const [data, setData] = useState([]);
  const stateSummary = getSummaryByState("MO");
  stateSummary.then(setData).catch((err) => console.log("///Error: ", err));

  useEffect(() => {
    // if (value) console.log("/// Response: ", value);
    // async function fetchData() {
    // const data = await getFirstTornadoEvent();
    // const data = await getAnnualSummaries();
    // const data = await getMagnitudeSummaries();
    // const data = await getStateSummaries();
    // const data = await getSummaryByYear(2021);
    // const data = await getSummaryByMagnitude(3);
    // const data = await getSummaryByState("HI");
    //     if (data) setData(data);
    //   }
    //   fetchData();
  }, []);

  return (
    <PageLayout>
      <PrintedApiData data={data} />
    </PageLayout>
  );
};

export default StatsScreen;

const PrintedApiData = ({ data }) => {
  return (
    <div>
      {data.length > 0
        ? data.map((obj, index) => {
            return (
              <div key={index}>
                {Object.entries(obj).map(([key, value], index) => {
                  return <p key={`${key}-${index}`}>{`${key}: ${value}`}</p>;
                })}
                <hr />
              </div>
            );
          })
        : null}
    </div>
  );
};
