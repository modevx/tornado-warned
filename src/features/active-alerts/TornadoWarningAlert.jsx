import { Card } from "react-daisyui";

import {
  AlertCardBody,
  AlertCardDetection,
  AlertCardExpires,
  AlertCardImpactedAreas,
  AlertCardMaxHailSize,
  AlertCardSenderName,
  AlertCardTitle,
} from "features/active-alerts";

export const TornadoWarningAlert = ({ alert }) => {
  const { properties } = alert;
  const {
    areaDesc,
    effective,
    expires,
    senderName,
    description,
    instruction,
    // *
    // * all [parameter] values return values inside an []
    // *
    parameters: { maxHailSize, tornadoDetection },
  } = properties;

  return (
    <Card className="bg-red-500 p-2">
      <AlertCardTitle>
        <AlertCardSenderName senderName={senderName} />
        <AlertCardExpires expiresTime={expires} />
      </AlertCardTitle>

      <AlertCardBody>
        <div className="flex justify-between mb-2">
          <AlertCardDetection tornadoDetection={tornadoDetection} />
          <AlertCardMaxHailSize maxHailSize={maxHailSize} />
        </div>

        <AlertCardImpactedAreas areaDesc={areaDesc} />
        {/* <p>{instruction}</p> */}
      </AlertCardBody>
    </Card>
  );
};
