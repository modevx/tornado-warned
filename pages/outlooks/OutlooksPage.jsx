import { Navbar } from "../../components/Header/Navbar";
import { RSSFeed } from "./RSSFeed";
import { PageWrapper } from "../../components/PageWrapper";
import { useSPC_RSS_Feed } from "../../hooks";
import { STORM_PREDICTION_CENTER as SPC_EP } from "../../services/constants/endpoints";

const OutlooksPage = () => {
	const all = useSPC_RSS_Feed(SPC_EP.rss_feed_all);
	const pds = useSPC_RSS_Feed(SPC_EP.rss_feed_particulary_dangerous_situation);
	const media_briefing = useSPC_RSS_Feed(SPC_EP.rss_feed_multi_media_briefing);
	const severe = useSPC_RSS_Feed(SPC_EP.rss_feed_severe_wx);
	const convective = useSPC_RSS_Feed(SPC_EP.rss_feed_convective_outlook);

	return (
		<PageWrapper>
			<Navbar />
			<RSSFeed rssFeedObjARR={all} />
			<RSSFeed rssFeedObjARR={pds} />
			<RSSFeed rssFeedObjARR={media_briefing} />
			<RSSFeed rssFeedObjARR={severe} />
			<RSSFeed rssFeedObjARR={convective} />
		</PageWrapper>
	);
};

export default OutlooksPage;
