import { STATES_MAP } from "constants";
import { createImpactedAreasMap } from "utils";

export const AlertCardImpactedAreas = ({ areaDesc }) => {
  let impactedAreasMap;
  let impactedAreasMapEntries;

  if (areaDesc?.length) {
    impactedAreasMap = createImpactedAreasMap(areaDesc);
    impactedAreasMapEntries = Array.from(impactedAreasMap.entries());
  }

  return (
    <div className="bg-black rounded-md p-2 mb-2">
      {impactedAreasMapEntries
        ? impactedAreasMapEntries.map(([state, areas]) => {
            const joinedAreaDescStr = areas.join(", ");
            {
              /* const stateName = STATES_MAP[state]; */
            }

            return (
              <div key={state}>
                <h4 className="text-md font-bold mb-2 uppercase">
                  {/* {stateName} */}
                </h4>
                <p className="text-sm mb-2">{joinedAreaDescStr}</p>
              </div>
            );
          })
        : "NWS Error: Impacted areas not available at this time..."}
    </div>
  );
};
