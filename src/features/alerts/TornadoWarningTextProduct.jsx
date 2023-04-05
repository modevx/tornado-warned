import React from "react";
import { Modal } from "react-daisyui";

import { LocaleDate } from "_shared/components";
import { getAreaDescMAP } from "utils";
import { STATE_ABBREVIATIONS } from "_shared/constants";

export const TornadoWarningTextProduct = ({ textProduct }) => {
  {
    /* {warningTextProducts &&
            warningTextProducts.map(({ id, properties }) => {
              const {
                areaDesc,
                description,
                effective,
                expires,
                headline,
                instruction,
                parameters: { maxHailSize, tornadoDetection },
              } = properties;

              return (
                <Card key={id}>
                  <Card.Body>
                    <p>{effective}</p>
                    <p>{expires}</p>
                    <p>{areaDesc}</p>
                    <p>{maxHailSize}</p>
                    <p>{tornadoDetection[0]}</p>
                    <p>{headline}</p>
                    <p>{description}</p>
                    <p>{instruction}</p>
                  </Card.Body>
                </Card>
              );
            })} */
  }
  const { id, properties } = textProduct;
  const {
    event,
    messageType,
    effective,
    expires,
    areaDesc,
    headline,
    description,
    instruction,
    senderName,
  } = properties;
  const [visible, setVisible] = React.useState(false);

  const fromColorMap = {
    ["Tornado Warning"]: "from-red-600",
    ["Tornado Watch"]: "from-yellow-600",
  };
  const fromColor = fromColorMap[event];
  const areaDescMAP = getAreaDescMAP(areaDesc);
  const areaDescMapARR = Array.from(areaDescMAP.entries());

  const toggleVisible = () => setVisible((prev) => !prev);

  return (
    <div className="font-sans">
      <button
        onClick={toggleVisible}
        className={`w-full flex justify-between align-center bg-gradient-to-r ${fromColor} to-steel-900 my-2 hover:opacity-80`}
      >
        <span key={1} className="text-xs">
          {senderName.replace("NWS", "")}
        </span>
        <div>
          <span key={2} className="text-xs">
            Expires: &nbsp;
          </span>
          <span key={3} className="text-xs">
            <LocaleDate date={expires} format="LT" />
          </span>
        </div>
      </button>
      <Modal
        open={visible}
        className="bg-gradient-to-br from-black to-gray-800 text-white mx-auto"
      >
        <button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </button>
        <Modal.Header className="font-bold text-3xl">{event}</Modal.Header>

        <Modal.Body>
          <div className="flex flex-col items-center mb-4 w-full">
            <div className="bg-neutral-700 px-4 py-2 mb-4 rounded w-full">
              <div className="text-xs text-center">
                <span>Expires: </span>
                <LocaleDate date={expires} format="LT" />
              </div>
            </div>
          </div>
          <div className="bg-neutral-700 px-4 py-2 mb-4 rounded">
            {areaDescMapARR.map(([state, areas]) => {
              const joinedAreaDescSTR = areas.join(", ");

              return (
                <div key={state}>
                  <h4 className="text-lg font-medium mb-2 uppercase">
                    {STATE_ABBREVIATIONS[state]}
                  </h4>
                  <p className="text-sm mb-2">{joinedAreaDescSTR}</p>
                </div>
              );
            })}
          </div>
          {instruction !== null ? (
            <div className="bg-neutral-700 px-4 py-2 mb-4 rounded">
              <p className="text-sm">{instruction}</p>
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
