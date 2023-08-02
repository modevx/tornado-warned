import axios from "axios";
import { useEffect } from "react";

import { PageLayout } from "components";
import {
	CategoricalLegend,
	OutlookSection,
} from "features/convective-outlooks";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES } from "features/convective-outlooks/_constants";

const ConvectiveOutlookScreen = () => {
	const getRSSFeed = async () => {
		const axiosRSS = axios.create({ baseURL: "/api" });

		try {
			const { data } = await axiosRSS.post("/spc-rss-feeds", {
				feed_url: "http://www.spc.noaa.gov/products/spcacrss.xml",
			});

			return data;
		} catch (error) {
			console.log("RSS ERROR >>\n", error);
		}
	};

	const res = getRSSFeed();

	res.then((result) => console.log("RSS RESPONSE >>\n", result));

	return (
		<PageLayout>
			<CategoricalLegend stylesObj={CATEGORICAL_OUTLOOK_FEATURE_STYLES} />

			<div className='lg:flex lg:justify-evenly lg:items-center'>
				<OutlookSection day={1} layerId={1} />
				<OutlookSection day={2} layerId={9} />
				<OutlookSection day={3} layerId={17} />
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
