import { Stats } from "react-daisyui";

export const ActiveAlertCounts = ({ counts }) => {
  // tag fields ALWAYS exist
  const tornadoEmergencies = counts?.["tornado emergency"];
  const pdsAlerts = counts?.["particularly dangerous situation"];
  const destructiveStorms = counts?.["destructive storm"];
  // alert fields ONLY exist when > 0
  const tornadoWarnings = counts?.["Tornado Warning"];
  const tornadoWatches = counts?.["Tornado Watch"];
  const stormWarnings = counts?.["Severe Thunderstorm Warning"];
  const stormWatches = counts?.["Severe Thunderstorm Watch"];

  return (
    <Stats vertical>
      {tornadoEmergencies > 0 && (
        <AlertStatItem
          count={tornadoEmergencies}
          color="#651fff"
          title="TOR EMERGENCY"
        />
      )}
      {pdsAlerts > 0 && (
        <AlertStatItem count={pdsAlerts} color="#f0f" title="PDS" />
      )}
      {destructiveStorms > 0 && (
        <AlertStatItem
          count={destructiveStorms}
          color="#00f"
          title="DESTRUCTIVE"
        />
      )}
      {tornadoWarnings && (
        <AlertStatItem
          count={tornadoWarnings}
          color="red"
          title="TOR WARNINGS"
        />
      )}
      {tornadoWatches && (
        <AlertStatItem
          count={tornadoWatches}
          color="yellow"
          title="TOR WATCHES"
        />
      )}
      {stormWarnings && (
        <AlertStatItem
          count={stormWarnings}
          color="orange"
          title="STM WARNINGS"
        />
      )}
      {stormWatches && (
        <AlertStatItem
          count={stormWatches}
          color="limegreen"
          title="STM WATCHES"
        />
      )}
    </Stats>
  );
};

const AlertStatItem = ({ color, count, title }) => {
  const { Stat } = Stats;
  // const bgColor = count > 0 ? color : "grey";

  return (
    <Stats.Stat
      style={{ backgroundColor: color }}
      className="text-black place-items-center"
    >
      <Stat.Item variant="title" className="text-black">
        {title}
      </Stat.Item>
      <Stat.Item variant="value">{count}</Stat.Item>
    </Stats.Stat>
  );
};
