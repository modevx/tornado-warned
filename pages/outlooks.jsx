import { Navbar, PageWrapper, RSSFeed } from "components";
import { useSPC_RSS_Feed } from "../hooks";
import { STORM_PREDICTION_CENTER as SPC_EP } from "../services/constants/endpoints";

const OutlooksPage = () => {
	const all = useSPC_RSS_Feed(SPC_EP.rss_feed_all);
	const severe = useSPC_RSS_Feed(SPC_EP.rss_feed_severe_wx);
	const meso = useSPC_RSS_Feed(SPC_EP.rss_feed_mesoscale_discussions);
	const convective = useSPC_RSS_Feed(SPC_EP.rss_feed_convective_outlook);
	const media_briefing = useSPC_RSS_Feed(SPC_EP.rss_feed_multi_media_briefing);
	const pds = useSPC_RSS_Feed(SPC_EP.rss_feed_particulary_dangerous_situation);

	return (
		<PageWrapper>
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
		</PageWrapper>
	);
};

export default OutlooksPage;
