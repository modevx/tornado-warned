import { Navbar, PageWrapper, RSSFeed } from "components";
import { useSPC_RSS_Feed } from "../hooks";
import { STORM_PREDICTION_CENTER as SPC_EP } from "../services/constants/endpoints";

const NewsPage = () => {
	const pds = useSPC_RSS_Feed(SPC_EP.rss_feed_particulary_dangerous_situation);
	const severe = useSPC_RSS_Feed(SPC_EP.rss_feed_severe_wx);
	const convective = useSPC_RSS_Feed(SPC_EP.rss_feed_convective_outlook);
	const meso = useSPC_RSS_Feed(SPC_EP.rss_feed_mesoscale_discussions);
	// const all = useSPC_RSS_Feed(SPC_EP.rss_feed_all);
	// const media_briefing = useSPC_RSS_Feed(SPC_EP.rss_feed_multi_media_briefing);

	return (
		<PageWrapper>
			<Navbar />
			<h2 className='text-4xl uppercase font-bold'>News</h2>
			<RSSFeed
				rssFeedObjARR={pds}
				sectionTitle='Particularly Dangerous Situation (PDS)'
			/>
			<RSSFeed rssFeedObjARR={severe} sectionTitle='Severe Weather Outlook' />
			<RSSFeed rssFeedObjARR={convective} sectionTitle='Convective Outlooks' />
			<RSSFeed rssFeedObjARR={meso} sectionTitle='Meso Discussions' />
			{/* <RSSFeed
				rssFeedObjARR={all}
				sectionTitle='All Storm Prediction Center RSS Feeds'
			/> */}

			{/* <RSSFeed
				rssFeedObjARR={media_briefing}
				sectionTitle='Multimedia Briefiengs'
			/> */}
		</PageWrapper>
	);
};

export default NewsPage;
