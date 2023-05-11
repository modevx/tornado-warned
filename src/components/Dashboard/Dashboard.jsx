import {
  ConvectiveOutlookTile,
  RadarTile,
  StormReportTile,
  TornadoWarningTile,
  TornadoWatchTile,
  TwitterFeedTile,
} from ".";

export const Dashboard = () => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-3 bg-neutral-400 min-h-screen">
      <TornadoWarningTile />
      <RadarTile />
      <ConvectiveOutlookTile />
      <TornadoWatchTile />
      <TwitterFeedTile />
      <StormReportTile />
    </div>
  );
};
