import { Button, Card, Modal } from "react-daisyui";

import {
  AlertMessageButtons,
  AlertMessageModal,
  AlertPolygonMap,
  Body,
  Description,
  Instruction,
  ExpirationTime,
  ImpactedAreas,
  MaxHailSize,
  SenderName,
  CardTitle,
  TornadoDetection,
} from "./AlertCardElements";
import { checkIsEmergency, checkIsPDS } from "./utils";

export const AlertModal = ({ alert, isOpen, closeHandler }) => {
  let event, isTornadoWarning, isPDS, isEmergency, modalBgColor;

  const STANDARD_COLORS = {
    "Tornado Warning": "#f00",
    "Tornado Watch": "#ffff00",
    "Severe Thunderstorm Warning": "#ff5800",
    "Severe Thunderstorm Watch": "#00ff00",
  };
  const DANGEROUS_COLORS = {
    pds: "#ff00ff",
    tor_emer: "#3333cc",
  };

  if (alert) {
    event = alert.properties.event;
    isTornadoWarning = event === "Tornado Warning";
    isPDS = checkIsPDS(alert);
    isEmergency = checkIsEmergency(alert);
    modalBgColor = isEmergency
      ? DANGEROUS_COLORS.tor_emer
      : isPDS
      ? DANGEROUS_COLORS.pds
      : STANDARD_COLORS[event];
  }

  console.log("Alert Modal >>\n", { isTornadoWarning, isPDS, isEmergency });

  return (
    <>
      {alert && (
        <Modal
          open={isOpen}
          className="overflow-auto"
          style={{ backgroundColor: modalBgColor }}
        >
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={closeHandler}
          >
            x
          </Button>

          <Modal.Header>{alert.properties.event}</Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Actions></Modal.Actions>
        </Modal>
      )}
    </>
  );
};

// TODO: add special messaging for TORNADO EMERGENCY & PARTICULARLY DANGEROUS SITUATION alerts

export const TornadoWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;
  const alertFeature = { id, type, geometry };
  const {
    areaDesc,
    description,
    effective,
    expires,
    instruction,
    senderName,

    // ! -- ALL PARAMETER VALUES RETURNED IN AN []
    parameters: { maxHailSize, tornadoDetection },
  } = properties;

  return (
    <Card className="bg-gradient-to-br from-red-500 to-red-800 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <div className="flex justify-between">
          <TornadoDetection tornadoDetection={tornadoDetection} />
          <div className="mx-2" />
          <ExpirationTime expiresTime={expires} />
        </div>
        {/* <MaxHailSize maxHailSize={maxHailSize} /> */}
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const TornadoWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-gradient-to-br from-yellow-300 to-yellow-600 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const SevereStormWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;

  const { areaDesc, effective, expires, senderName, description, instruction } =
    alert?.properties;

  return (
    <Card className="bg-gradient-to-br from-orange-400 to-orange-600 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const SevereStormWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-gradient-to-br from-green-400 to-green-700 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <p>{instruction}</p> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
