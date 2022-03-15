import { useQuery } from "react-query";
import { AlertCard, PageWrapper } from "../components";
import { useTornadoWarnings } from "../hooks";

const HomeScreen = () => {
	const { isLoading, error, data } = useTornadoWarnings();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>ERROR: {wnError.message}</p>;

	return (
		<PageWrapper>
			<div className='flex flex-col justify-around w-full'>
				<div>
					{data ? (
						<p>{JSON.stringify(data.data.features)}</p>
					) : (
						<span>no warnings</span>
					)}
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomeScreen;
