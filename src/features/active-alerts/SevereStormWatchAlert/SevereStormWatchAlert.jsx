import { Card } from "react-daisyui";

import {
  AlertCardBody,
  AlertCardExpires,
  AlertCardImpactedAreas,
  AlertCardSenderName,
  AlertCardTitle,
} from "features/active-alerts";

const { Body, Title } = Card;

export const SevereStormWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-green-300 p-2">
      <AlertCardTitle>
        <AlertCardSenderName senderName={senderName} />
        <AlertCardExpires expiresTime={expires} />
      </AlertCardTitle>

      <AlertCardBody>
        <AlertCardImpactedAreas areaDesc={areaDesc} />
        {/* <p>{instruction}</p> */}
      </AlertCardBody>
    </Card>
  );
};
