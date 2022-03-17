import { PageWrapper } from "../components";
import {
  useActiveAlerts,
  useTestAlerts,
} from "../services/NationalWeatherService";

const HomeScreen = () => {
  // const { isLoading, error, data } = useActiveAlerts();
  const { isLoading, error, data } = useTestAlerts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <PageWrapper>
      <div className="flex flex-col justify-around w-full">
        <div>
          {data ? (
            data.map((alert) => {
              return (
                <div>
                  <p>
                    Location: {alert.areaDesc} | Event: {alert.event}
                  </p>
                </div>
              );
            })
          ) : (
            <span>ERROR BRAH!!</span>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomeScreen;
