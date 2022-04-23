import { PageWrapper } from "../../components/PageWrapper";
import { Navbar } from "../../components/Header/Navbar";
import { useSPC_RSS_Feed } from "../../hooks";
import { STORM_PREDICTION_CENTER as SPC_EP } from "../../services/constants/endpoints";

const OutlooksPage = () => {
	const { data, error, isLoading } = useSPC_RSS_Feed(SPC_EP.rss_feed_all);

	let rssFeedDisplay;

	if (error) {
		rssFeedDisplay = <p>ERROR: Storm Prediction Center - RSS feed</p>;
	}

	if (isLoading) {
		rssFeedDisplay = <p>Storm Prediction Center RSS feed loading...</p>;
	}

	if (data) {
		rssFeedDisplay = data.data.map((item) => (
			<div key={item.link} className='mb-4 bg-black p-4'>
				{Object.entries(item).map(([itemKey, value]) => (
					<div key={itemKey}>
						<span className='font-bold italic text-red-400'>{itemKey}: </span>
						<span>{value}</span>
						<br />
					</div>
				))}
			</div>
		));
	}
	return (
		<PageWrapper>
			<Navbar />
			{rssFeedDisplay}
		</PageWrapper>
	);
};

export default OutlooksPage;
