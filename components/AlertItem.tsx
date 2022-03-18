interface ALERT_PREVIEW {
  eventType: string;
  alertType: string;
}

export const AlertItem = ({ alert }) => {
  const { event, areaDesc, headline, instruction } = alert;
  let color: string;

  switch (event) {
    case "Tornado Warning": {
      color = "bg-purple-600";
      break;
    }
    case "Tornado Watch": {
      color = "bg-red-500";
      break;
    }
    case "Severe Thunderstorm Warning": {
      color = "bg-orange-500";
      break;
    }
    case "Severe Thunderstorm Watch": {
      color = "bg-yellow-500";
      break;
    }
  }

  // = event === "Tornado Warning" ? "bg-red-600" : "bg-yellow-500";

  return (
    <li className={`${color}`}>
      <h3>{event}</h3>
      <p>{areaDesc}</p>
      <p>{headline}</p>
      <p>{instruction}</p>
    </li>
  );
};
