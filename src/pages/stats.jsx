import { ConusCountiesMap, Basemap, UsaStatesMap, ConusStatesMap } from "components/_shared/Maps";
import { PageLayout } from "components/_shared/PageLayout";
import { useEffect, useState } from "react";
import { DAMAGE_ASSESSMENTS } from "constants/damage-assessment-polygons";
import { getFirstTornadoEvent, getAnnualSummaries, getMagnitudeSummaries, getStateSummaries, getSummaryByYear, getSummaryByMagnitude, getSummaryByState } from "services/tornadoWarnedApi";
import { rewindAlbersGeoPath } from "utils/geometry";

const StatsScreen = () => {
  const [data, setData] = useState([]);
  // const stateSummary = getSummaryByState("MO");
  // stateSummary.then(setData).catch((err) => console.log("///Error: ", err));

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

  const DAMAGE_PATHS = {
    EF5: [],
    EF4: [],
    EF3: [],
  };

  DAMAGE_ASSESSMENTS.forEach((damagePath) => {
    const magnitude = damagePath.properties.efscale;

    DAMAGE_PATHS[magnitude] = [...DAMAGE_PATHS[magnitude], damagePath];
  });

  return (
    <PageLayout>
      {/* <PrintedApiData data={data} /> */}
      <ConusStatesMap>
        <g>
          {DAMAGE_PATHS.EF3.map((damagePath) => {
            const { id } = damagePath;

            return <path key={id} d={rewindAlbersGeoPath(damagePath)} fill="#00FF00" fillOpacity={0.5} stroke="#00FF00" strokeWidth={2} />;
          })}
        </g>
        <g>
          {DAMAGE_PATHS.EF4.map((damagePath) => {
            const { id } = damagePath;

            return <path key={id} d={rewindAlbersGeoPath(damagePath)} fill="#0000FF" fillOpacity={0.5} stroke="#0000FF" strokeWidth={1} />;
          })}
        </g>
        <g>
          {DAMAGE_PATHS.EF5.map((damagePath) => {
            const { id } = damagePath;

            return <path key={id} d={rewindAlbersGeoPath(damagePath)} fill="#FF0000" fillOpacity={0.5} stroke="#FF0000" strokeWidth={0.5} />;
          })}
        </g>
      </ConusStatesMap>
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
