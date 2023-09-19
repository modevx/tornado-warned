import { Button, Card, Modal } from "react-daisyui";

import {
  AlertMessageButtons,
  AlertMessageModal,
  AlertPolygonMap,
  Body,
  Description,
  Event,
  Instruction,
  ExpirationTime,
  ImpactedAreas,
  MaxHailSize,
  SenderName,
  CardTitle,
  TornadoDetection,
} from "./AlertCardElements";
import { createWatchPolygon } from "features/active-alerts/utils/alert-polygons";
import { checkAlertIsTornadoEmergency, checkAlertIsPDS } from "utils";

export const AlertModal = ({ alert, isOpen, closeHandler }) => {
  let areaDesc, event, isWarning, isPDS, isEmergency, modalColor, geoJSON;

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
    areaDesc = alert.properties.areaDesc;
    event = alert.properties.event;
    isWarning = event === "Tornado Warning" || "Severe Thunderstorm Warning";
    isPDS = checkAlertIsPDS(alert);
    isEmergency = checkAlertIsTornadoEmergency(alert);
    modalColor = isEmergency
      ? DANGEROUS_COLORS.tor_emer
      : isPDS
      ? DANGEROUS_COLORS.pds
      : STANDARD_COLORS[event];
    // geoJSON =
  }

  return (
    <>
      {alert && (
        <Modal
          open={isOpen}
          className="overflow-auto text-base-content"
          style={{ backgroundColor: modalColor }}
        >
          <Button
            size="sm"
            shape="circle"
            className="absolute right-2 top-2 hover:bg-red-500"
            onClick={closeHandler}
          >
            x
          </Button>
          <Modal.Body>
            <Event
              event={
                isEmergency
                  ? "Tornado Emergency"
                  : isPDS
                  ? "Particularly Dangerous Situation"
                  : alert.properties.event
              }
            />
            <SenderName senderName={alert.properties.senderName} />
            {/* <AlertPolygonMap
              alertFeature={
                isWarning ? alert.geometry : createWatchPolygon(alert.geometry)
              }
            /> */}
          </Modal.Body>
          <Modal.Actions></Modal.Actions>
        </Modal>
      )}
    </>
  );
};

// -----------------------------
// --- OLD EVENT-SPECIFIC ALERTS
// -----------------------------

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
