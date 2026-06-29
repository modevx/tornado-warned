import { Stats } from "react-daisyui";
import { ALERT_TAGS, ALERT_TYPES } from "constants/nws-alerts";

export const ActiveAlertCounts = ({ counts }) => {
  // tag fields ALWAYS exist
  const toremAlertsCount = counts?.[ALERT_TAGS.TOREM];
  const pdsAlertsCount = counts?.[ALERT_TAGS.PDS];
  const destructiveAlertsCount = counts?.[ALERT_TAGS.DESTRUCTIVE];
  // alert fields ONLY exist when > 0
  const towAlertsCount = counts?.[ALERT_TYPES.TOW];
  const toaAlertscount = counts?.[ALERT_TYPES.TOA];
  const svwAlertsCount = counts?.[ALERT_TYPES.SVW];
  const svaAlertsCount = counts?.[ALERT_TYPES.SVA];

  return (
    <Stats>
      {toremAlertsCount > 0 && <AlertStatItem count={toremAlertsCount} color="#651fff" title="TOR EMERGENCY" />}
      {pdsAlertsCount > 0 && <AlertStatItem count={pdsAlertsCount} color="#f0f" title="PDS" />}
      {destructiveAlertsCount > 0 && <AlertStatItem count={destructiveAlertsCount} color="#00f" title="DESTRUCTIVE" />}
      {towAlertsCount && <AlertStatItem count={towAlertsCount} color="red" title="TOR WARNINGS" />}
      {toaAlertscount && <AlertStatItem count={toaAlertscount} color="yellow" title="TOR WATCHES" />}
      {svwAlertsCount && <AlertStatItem count={svwAlertsCount} color="orange" title="STM WARNINGS" />}
      {svaAlertsCount && <AlertStatItem count={svaAlertsCount} color="limegreen" title="STM WATCHES" />}
    </Stats>
  );
};

const AlertStatItem = ({ color, count, title }) => {
  const { Stat } = Stats;
  // const bgColor = count > 0 ? color : "grey";

  return (
    <Stats.Stat style={{ backgroundColor: color }} className="text-black place-items-center">
      <Stat.Item variant="title" className="text-black">
        {title}
      </Stat.Item>
      <Stat.Item variant="value">{count}</Stat.Item>
    </Stats.Stat>
  );
};
