import { Stats } from "react-daisyui";
import { BsTornado } from "react-icons/bs";

const { Stat } = Stats;

export const AlertStats = ({ stats }) => {
  const { warningCount, watchCount } = stats;

  return (
    <div className="flex justify-center">
      <Stats className="shadow font-sans">
        <Stats.Stat className="place-items-center">
          <Stat.Item variant="title">Active Warnings</Stat.Item>
          <Stat.Item variant="value">{warningCount}</Stat.Item>
          <Stat.Item variant="figure">
            <BsTornado size={30} color="red" title="tornado" />
          </Stat.Item>
        </Stats.Stat>
        <Stats.Stat className="place-items-center">
          <Stat.Item variant="title">Active Watches</Stat.Item>
          <Stat.Item variant="value">{watchCount}</Stat.Item>
          <Stat.Item variant="figure">
            <BsTornado size={30} color="yellow" title="tornado" />
          </Stat.Item>
        </Stats.Stat>
      </Stats>
    </div>
  );
};
