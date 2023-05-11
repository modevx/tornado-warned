import { ConvectiveOutlookTile } from "./ConvectiveOutlookTile";
import { RadarTile } from "./RadarTile";
import { StormReportTile } from "./StormReportTile";
import { TornadoWarningTile } from "./TornadoWarningTile";
import { TornadoWatchTile } from "./TornadoWatchTile";
import { TwitterFeedTile } from "./TwitterFeedTile";

export const Dashboard = () => {
	return (
		<div className='grid gap-4 grid-cols-4 grid-rows-3 bg-neutral-400 min-h-screen'>
			<TornadoWarningTile />
			<RadarTile />
			<ConvectiveOutlookTile />
			<TornadoWatchTile />
			<TwitterFeedTile />
			<StormReportTile />
		</div>
	);
};
