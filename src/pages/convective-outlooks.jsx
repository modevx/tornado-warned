import { DayJSDateTime, PageLayout } from "components";
import { CategoricalOutlookMap } from "features/convective-outlooks";
import { useCategoricalOutlooks } from "services/spc-convective-outlook-mapserver";

const ConvectiveOutlookScreen = () => {
  const { data } = useCategoricalOutlooks();
  let day1outlook = [],
    day2outlook = [],
    day3outlook = [];

  if (data) {
    [day1outlook, day2outlook, day3outlook] = data;
  }

  if (data) console.log(day1outlook[day1outlook.length - 1].properties.dn);

  return (
    <PageLayout>
      {data ? (
        <>
          <h2 className="text-center uppercase text-2xl">
            Day 1 Convective Outlook
          </h2>

          <p className="text-center text-sm">
            {day1outlook.length > 1 ? (
              <>
                <DayJSDateTime
                  utcDate={day1outlook[0]?.properties.valid}
                  format="ddd MMM D LT"
                />
                &nbsp;&#45;&nbsp;
                <DayJSDateTime
                  utcDate={day1outlook[0]?.properties.expire}
                  format="ddd MMM D LT"
                />
              </>
            ) : (
              ""
            )}
          </p>

          <CategoricalOutlookMap
            key="day-1-categorical-outlook-map"
            features={day1outlook}
          />

          <h2 className="text-center uppercase text-2xl">
            Day 2 Convective Outlook
          </h2>

          <p className="text-center text-sm">
            {day2outlook.length > 1 ? (
              <>
                <DayJSDateTime
                  utcDate={day2outlook[0]?.properties.valid}
                  format="ddd MMM D LT"
                />
                &nbsp;&#45;&nbsp;
                <DayJSDateTime
                  utcDate={day2outlook[0]?.properties.expire}
                  format="ddd MMM D LT"
                />
              </>
            ) : (
              ""
            )}
          </p>

          <CategoricalOutlookMap
            key="day-2-categorical-outlook-map"
            features={day2outlook}
          />

          <h2 className="text-center uppercase text-2xl">
            Day 3 Convective Outlook
          </h2>

          <p className="text-center text-sm">
            {day3outlook.length > 1 ? (
              <>
                <DayJSDateTime
                  utcDate={day3outlook[0]?.properties.valid}
                  format="ddd MMM D LT"
                />
                &nbsp;&#45;&nbsp;
                <DayJSDateTime
                  utcDate={day3outlook[0]?.properties.expire}
                  format="ddd MMM D LT"
                />
              </>
            ) : (
              ""
            )}
          </p>

          <CategoricalOutlookMap
            key="day-3-categorical-outlook-map"
            features={day3outlook}
          />
        </>
      ) : null}
    </PageLayout>
  );
};

export default ConvectiveOutlookScreen;
