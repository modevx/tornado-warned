import React from "react";
import { useQuery } from "react-query";
import { Clock, FeatureSection, Hero, Page } from "components";
import { features } from "constants";
// ----- testing ArcGIS + Next.js
import axios from "axios";

const HomeScreen = () => {
	let display = "";

	const { isLoading, isError, error, data } = useQuery("arcgis", () =>
		axios.get("/api/tutorial-route")
	);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<Page>
			<Hero />
			{/* {features &&
				features.map((feature) => {
					return <FeatureSection featureOBJ={feature} key={feature.name} />;
				})} */}
			{/* {data && <p>{JSON.stringify(data)}</p>} */}
		</Page>
	);
};

export default HomeScreen;
