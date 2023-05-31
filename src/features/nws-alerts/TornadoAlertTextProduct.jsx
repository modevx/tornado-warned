import React from "react";
import { Card, Collapse, Modal } from "react-daisyui";

import { LocaleTime } from "components";
import ICONS from "constants/icons";

export const TornadoAlertTextProduct = ({ alert }) => {
  const { id, properties } = alert;
  const {
    areaDesc,
    description,
    effective,
    expires,
    headline,
    instruction,
    senderName,
    parameters: { maxHailSize, tornadoDetection },
  } = properties;

  const checkStringForPhrase = (string, phrase) => {
    const loweredString = string.toLowerCase();
    const loweredPhrase = phrase.toLowerCase();

    return loweredString.includes(loweredPhrase);
  };

  const isAlertParticularlyDangerousSituation = (alertDescription) => {
    return checkStringForPhrase(
      alertDescription,
      "particularly dangerous situation"
    );
  };

  const isAlertornadoEmergency = (alertDescription) => {
    return checkStringForPhrase(alertDescription, "tornado emergency");
  };

  const isPDS = isAlertParticularlyDangerousSituation(description);

  const isTornadoEmergency = isAlertornadoEmergency(description);

  const tornadoEmergencyBannerStyles = "bg-red-500 animate-pulse";
  const pdsBannerStyles = "bg-yellow-400 animate-pulse text-black";

  const bgStyle = isTornadoEmergency
    ? tornadoEmergencyBannerStyles
    : isPDS
    ? pdsBannerStyles
    : "bg-black";

  const enhancedAlertLabel = isTornadoEmergency
    ? "TORNADO EMERGENCY"
    : isPDS
    ? "PARTICULARLY DANGEROUS SITUATION"
    : null;

  return (
    <Collapse className="bg-black m-2 rounded-md" checkbox>
      <Collapse.Title className="p-0 bg-black">
        <p
          className={`${bgStyle} text-xs rounded-t-md p-1 mb-2 text-center font-bold`}
        >
          {enhancedAlertLabel}
        </p>
        <div className="flex justify-between items-center px-2">
          <span className="text-xs">{senderName.replace("NWS ", "")}</span>
          <span className="text-xs flex items-center">
            <LocaleTime date={expires} />
            <DownChevronIcon className="ml-2" />
          </span>
        </div>
      </Collapse.Title>

      <Collapse.Content className="text-xs bg-black">
        {description}
      </Collapse.Content>
    </Collapse>
  );
};

const DownChevronIcon = ICONS.FaChevronDown;

const AlertIcon = ICONS.IoWarningOutline;

const TornadoIcon = ICONS.BsTornado;

const PDSGraphic = () => {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <AlertIcon size={24} color="yellow" />
      <span className="text-xs mt-1 text-yellow-300">PDS</span>
    </div>
  );
};

const TornadoEmergencyGraphic = () => {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <TornadoIcon size={24} color="red" />
      <span className="text-xs mt-1 text-red-400">EMERGENCY</span>
    </div>
  );
};

const CardSection = ({ children }) => (
  <div className="bg-black rounded-md px-3 py-2">{children}</div>
);

const AffectedAreas = ({ areaDescription, stateMap }) => {
  return (
    <>
      {areaDescription.map(([state, areas]) => {
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
