import { useQuery } from "react-query";
import { AlertCard, PageWrapper } from "../components";
import { useTornadoWarnings, useTornadoWatches } from "../hooks";

const HomeScreen = () => {
	// const { isLoading, error, data } = useTornadoWarnings();
	const { isLoading, error, data } = useTornadoWatches();

	// const {
	// 	isLoading: watchLoading,
	// 	error: watchError,
	// 	data: watchData,
	// } = useTornadoWatches();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>ERROR: {error.message}</p>;

	// console.log(warnData.data.title);
	// console.log(warnData.data.features.length);

	// console.log(watchData.data.title);
	// console.log(watchData.data.features.length);

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				{data ? (
					console.log("REACT QUERY DATA", data.data)
				) : (
					<span>made it this far..</span>
				)}
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
