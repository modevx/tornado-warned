import { useQuery } from "react-query";
import { AlertCard, PageWrapper } from "../components";
import {
  useTornadoWarnings,
  useTestTornadoWarnings,
  useTornadoWatches,
  useTestTornadoWatches,
} from "../hooks";

const HomeScreen = () => {
  const {
    isLoading: wnLoading,
    error: wnError,
    data: wnData,
  } = useTornadoWarnings();
  // } = useTestTornadoWarnings();
  const {
    isLoading: wtLoading,
    error: wtError,
    data: wtData,
  } = useTornadoWatches();
  // } = useTestTornadoWatches();

  if (wnLoading) return <p>Loading...</p>;
  if (wnError) return <p>ERROR: {wnError.message}</p>;

  if (wtLoading) return <p>Loading...</p>;
  if (wtError) return <p>ERROR: {wtError.message}</p>;

  return (
    <PageWrapper>
      <div className="flex flex-col justify-around w-full">
        {/* TORNADO WARNINGS */}
        <div>
          {wnData ? (
            <p>{JSON.stringify(wnData.data)}</p>
          ) : (
            <span>no warnings</span>
          )}
          {wtData ? (
            <p>{JSON.stringify(wtData.data)}</p>
          ) : (
            // <AlertCard
            //   senderName={wnData.senderName}
            //   event={wnData.event}
            //   areaDescription={wnData.headline}
            // />
            <span>no watches</span>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomeScreen;
