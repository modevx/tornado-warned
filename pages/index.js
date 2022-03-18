import { AlertList, PageWrapper } from "../components";
import {
  useActiveAlerts,
  useTestAlerts,
} from "../services/NationalWeatherService";

const HomeScreen = () => {
  // const { isLoading, error, data } = useActiveAlerts();
  const { isLoading, error, data } = useTestAlerts();
  const tornadoWarnings = [];
  const tornadoWatches = [];
  const stormWarnings = [];
  const stormWatches = [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  if (data) {
    data.forEach((alert) => {
      if (alert.event === "Tornado Warning") tornadoWarnings.push(alert);
      if (alert.event === "Tornado Watch") tornadoWatches.push(alert);
      if (alert.event === "Severe Thunderstorm Warning")
        stormWarnings.push(alert);
      if (alert.event === "Severe Thunderstorm Watch") stormWatches.push(alert);
    });
  }

  return (
    <PageWrapper>
      <div className="flex flex-col justify-around w-full">
        <div>
          {data ? (
            <>
              <h2 className="text-4xl">TORNADO WARNINGS</h2>
              <AlertList alerts={tornadoWarnings} />
              <h2 className="text-4xl">TORNADO WATCHES</h2>
              <AlertList alerts={tornadoWatches} />
              <h2 className="text-4xl">SEVERE THUNDERSTORM WARNINGS</h2>
              <AlertList alerts={stormWarnings} />
              <h2 className="text-4xl">SEVERE THUNDERSTORM WATCHES</h2>
              <AlertList alerts={stormWatches} />
            </>
          ) : (
            <p>No ALERT to report...</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomeScreen;
