import { Card } from "react-daisyui";

export const TornadoWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const {
    areaDesc,
    effective,
    expires,
    senderName,
    description,
    instruction,
    parameters: { NWSheadline, maxHailSize, tornadoDetection },
  } = properties;

  return (
    <Card className="bg-yellow-400 p-2">
      <Card.Title className="bg-black rounded-md p-2">{senderName}</Card.Title>
      <Card.Body></Card.Body>
    </Card>
  );
};
