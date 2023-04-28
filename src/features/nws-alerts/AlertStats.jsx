import { Stats } from "react-daisyui";

const { Stat } = Stats;

export const AlertStats = ({ stats }) => {
  const { warningCount, watchCount } = stats;

  return (
    <div className="flex justify-center">
      <Stats className="shadow font-sans">
        <Stats.Stat className="bg-red-600 place-items-center">
          <Stat.Item variant="title" className="text-white uppercase">
            Active Warnings
          </Stat.Item>
          <Stat.Item variant="value" className="text-white">
            {warningCount}
          </Stat.Item>
        </Stats.Stat>
        <Stats.Stat className="bg-yellow-400 place-items-center">
          <Stat.Item variant="title" className="text-black uppercase">
            Active Watches
          </Stat.Item>
          <Stat.Item variant="value" className="text-black">
            {watchCount}
          </Stat.Item>
        </Stats.Stat>
      </Stats>
    </div>
  );
};
