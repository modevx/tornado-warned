<<<<<<< HEAD
import React from "react";
import esriConfig from "@arcgis/core/config";
import { PageWrapper } from "components/common";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/SPC";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery } from "react-query";

export async function getStaticProps() {
	const res = await fetch(
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer?f=json"
	);
	const data = await res.json();
	return { props: { spcOutlooks: await data.layers } };
}

const OutlooksPage = ({ spcOutlooks }) => {
	const [outlooks, setOutlooks] = React.useState([]);
	const [filteredLayers, setFilteredLayers] = React.useState([]);

	React.useEffect(() => {
		const convective = spcOutlooks.filter((layer) => layer.subLayerIds);

		const categorical = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("categorical")
		);
		const prob4Day = spcOutlooks.filter((layer) => layer.parentLayerId == 20);

		const tornado = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("tornado")
		);
		const hail = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("hail")
		);
		const wind = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("wind")
		);

		setOutlooks(categorical);
		setFilteredLayers(prob4Day);
		// setFilteredLayers(tornado);
		// setFilteredLayers(hail);
		// setFilteredLayers(wind);
	}, [spcOutlooks]);

	if (outlooks.length) console.log("CONVECTIVE OUTLOOKS >>\n", outlooks);
	if (filteredLayers.length)
		console.log("4-DAY PROBABILISTIC >>\n", filteredLayers);

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				{outlooks &&
					outlooks.map((layer) => (
						<SPCOutlookMap layer={layer} key={layer.name} />
					))}
				{filteredLayers &&
					filteredLayers.map((layer) => (
						<SPCOutlookMap layer={layer} key={layer.name} />
					))}
			</div>
		</PageWrapper>
=======
import { Navbar, Page, RSSFeed } from "components";
import { useSPC_RSS_Feed } from "hooks";
import { ENDPOINTS } from "services/storm-prediction-center";

const OutlooksPage = () => {
	const all = useSPC_RSS_Feed(ENDPOINTS.rss_feed_all);
	const severe = useSPC_RSS_Feed(ENDPOINTS.rss_feed_severe_wx);
	const meso = useSPC_RSS_Feed(ENDPOINTS.rss_feed_mesoscale_discussions);
	const convective = useSPC_RSS_Feed(ENDPOINTS.rss_feed_convective_outlook);
	const media_briefing = useSPC_RSS_Feed(
		ENDPOINTS.rss_feed_multi_media_briefing
	);
	const pds = useSPC_RSS_Feed(
		ENDPOINTS.rss_feed_particulary_dangerous_situation
	);

	return (
		<Page>
			<Navbar />
			<RSSFeed
				rssFeedObjARR={all}
				sectionTitle='All Storm Prediction Center RSS Feeds'
			/>
			<RSSFeed
				rssFeedObjARR={pds}
				sectionTitle='Particularly Dangerous Situation (PDS)'
			/>
			<RSSFeed
				rssFeedObjARR={media_briefing}
				sectionTitle='Multimedia Briefiengs'
			/>
			<RSSFeed rssFeedObjARR={severe} sectionTitle='Severe Weather Outlook' />
			<RSSFeed rssFeedObjARR={convective} sectionTitle='Convective Outlooks' />
		</Page>
>>>>>>> nws-service
	);
};

export default OutlooksPage;
