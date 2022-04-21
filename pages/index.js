import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { AlertSection } from "../components/Alerts";
// -----
import axios from "axios";

const HomeScreen = () => {
	React.useEffect(async () => {
		await axios.get("./api/cors/spc-rss-feed");
	});

	return (
		<PageWrapper>
			<AlertSection />
		</PageWrapper>
	);
};

export default HomeScreen;
