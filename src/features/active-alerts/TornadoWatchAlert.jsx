import { Card } from "react-daisyui";

import { STATES_MAP } from "constants";
import { sortAffectedAreasByState } from "utils";
import { DayJSDateTime } from "components";

export const TornadoWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;
  const impactedAreas = sortAffectedAreasByState(areaDesc);
  const impactedAreasARR = Array.from(impactedAreas.entries());

  return (
    <Card className="bg-yellow-300 p-2">
      <Card.Title className="bg-black rounded-md p-2 mb-2 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm">NWS Office:</span>
          <span>{senderName.replace("NWS ", "")}</span>
        </div>
        <div className="text-xs flex flex-col">
          <span>Expires:</span>
          <DayJSDateTime utcDate={expires} format="ddd LT" />
        </div>
      </Card.Title>

      <Card.Body className="p-0">
        {/* <div className="flex justify-between mb-2">
          <span className="text-sm bg-black rounded-md p-2">
            Detection: {tornadoDetection[0].split(" ")[0]}
          </span>
          <span className="text-sm bg-black rounded-md p-2">
            Max Hail Size: {maxHailSize[0].replace("Up to ", "")}
          </span>
        </div> */}

        <div className="bg-black rounded-md p-2 mb-2">
          {impactedAreasARR.map(([state, areas]) => {
            const joinedAreaDescSTR = areas.join(", ");

            return (
              <div key={state}>
                <h4 className="text-md font-bold mb-2 uppercase">
                  {STATES_MAP[state]}
                </h4>
                <p className="text-sm mb-2">{joinedAreaDescSTR}</p>
              </div>
            );
          })}
        </div>
        {/* <p>{instruction}</p> */}
      </Card.Body>
    </Card>
  );
};
