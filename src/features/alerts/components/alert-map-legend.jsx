import { Card } from "react-daisyui";

export const ActiveAlertMapLegend = () => {
  return (
    <div className="px-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {EVENTS.map(({ description, from_color, title }) => (
        <Card
          key={title}
          className={`p-3 bg-gradient-to-br ${from_color} to-black`}
        >
          <Card.Body className="bg-black rounded-lg">
            <Card.Title className="uppercase text-sm">{title}</Card.Title>
            <p className="text-xs">{description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
