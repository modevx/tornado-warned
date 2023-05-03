import { Card } from "react-daisyui";

import { LocaleDate } from "components";
import { getAreaDescMAP } from "utils";
import { STATE_ABBREVIATIONS } from "constants";

export const TornadoWatchTextProduct = ({ textProduct }) => {
  const { id, properties } = textProduct;
  const { areaDesc, expires, senderName } = properties;

  const areaDescMAP = getAreaDescMAP(areaDesc);
  const areaDescMapARR = Array.from(areaDescMAP.entries());

  return (
    <Card className="bg-yellow-400 m-3 p-2">
      <Card.Body className="p-2">
        <CardSection>
          <p className="text-right text-2xl font-bold">
            {senderName.replace("NWS ", "")}
          </p>
          <p className="text-right text-sm">
            Expires <LocaleDate date={expires} format="LLL" />
          </p>
        </CardSection>

        <CardSection>
          <AreaDescription
            areaDescriptions={areaDescMapARR}
            stateMap={STATE_ABBREVIATIONS}
          />
        </CardSection>
      </Card.Body>
      {/* <Card.Actions></Card.Actions> */}
      {/* <Card.Image /> */}
    </Card>
  );
};

const CardSection = ({ children }) => (
  <div className="bg-black rounded-md px-3 py-2">{children}</div>
);

const AreaDescription = ({ areaDescriptions, stateMap }) => {
  return (
    <>
      {areaDescriptions.map(([state, areas]) => {
        const joinedAreaDescSTR = areas.join(", ");

        return (
          <div key={state}>
            <h4 className="text-lg font-medium mb-2 uppercase">
              {stateMap[state]}
            </h4>
            <p className="text-sm mb-2">{joinedAreaDescSTR}</p>
          </div>
        );
      })}
    </>
  );
};
