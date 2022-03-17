import { PageWrapper } from "../components";
import {
  fetchActiveAlerts,
  useActiveAlerts,
} from "../services/NationalWeatherService";

const HomeScreen = () => {
  const { isLoading, error, data } = useActiveAlerts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <PageWrapper>
      <div className="flex flex-col justify-around w-full">
        <div>
          {data ? <p>{JSON.stringify(data)}</p> : <span>no alerts</span>}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomeScreen;
