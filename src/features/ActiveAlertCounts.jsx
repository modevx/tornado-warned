import { Stats } from "react-daisyui";

export const ActiveAlertCounts = ({ alerts }) => {
  let destructiveStorms = alerts.filter((alert) =>
    alertIsDestructiveStorm(alert)
  );
  let pdsAlerts = alerts.filter((alert) => alertIsPDS(alert));
  let tornadoEmergencies = alerts.filter((alert) =>
    alertIsTornadoEmergency(alert)
  );

  return (
    <Stats className="flex">
      <AlertStatItem
        count={tornadoEmergencies.length}
        color="#651fff"
        title="TOR EMERGENCY"
      />
      <AlertStatItem count={pdsAlerts.length} color="#f0f" title="PDS" />
      <AlertStatItem
        count={destructiveStorms.length}
        color="#00f"
        title="DESTRUCTIVE"
      />
      <AlertStatItem count={tornadoWarnings} color="red" title="TOR WARNINGS" />
      <AlertStatItem
        count={tornadoWatches}
        color="yellow"
        title="TOR WATCHES"
      />
      <AlertStatItem
        count={stormWarnings}
        color="orange"
        title="STM WARNINGS"
      />
      <AlertStatItem
        count={stormWatches}
        color="limegreen"
        title="STM WATCHES"
      />
    </Stats>
  );
};

const AlertStatItem = ({ color, count, title }) => {
  const { Stat } = Stats;
  const bgColor = count > 0 ? color : "grey";

  return (
    <Stats.Stat
      style={{ backgroundColor: bgColor }}
      className="text-black place-items-center"
    >
      <Stat.Item variant="title" className="text-black">
        {title}
      </Stat.Item>
      <Stat.Item variant="value">{count}</Stat.Item>
    </Stats.Stat>
  );
};
