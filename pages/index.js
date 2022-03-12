import { useQuery } from "react-query";
import { AlertCard, PageWrapper } from "../components";
import { useTornadoWarnings, useTornadoWatches } from "../hooks";

const HomeScreen = () => {
	const {
		isLoading: wnLoading,
		error: wnError,
		data: wnData,
	} = useTornadoWarnings();
	const {
		isLoading: wtLoading,
		error: wtError,
		data: wtData,
	} = useTornadoWatches();

	if (wnLoading) return <p>Loading...</p>;
	if (wnError) return <p>ERROR: {wnError.message}</p>;

	if (wtLoading) return <p>Loading...</p>;
	if (wtError) return <p>ERROR: {wtError.message}</p>;

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				{/* TORNADO WARNINGS */}
				<div>
					{wnData ? (
						console.log("REACT QUERY DATA", wnData.data)
					) : (
						<span>made it this far..</span>
					)}
				</div>
				{/* TORNADO WATCHES */}
				<div>
					{wtData ? (
						console.log("REACT QUERY DATA", wtData.data)
					) : (
						<span>made it this far..</span>
					)}
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
