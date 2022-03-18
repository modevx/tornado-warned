export const AlertItem = ({ alert }) => {
  const { event, status, messageType, areaDesc, headline, instruction } = alert;
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

  return (
    <li className={`${color} p-3 rounded-md`}>
      <h3 className="text-2xl font-bold">{event}</h3>
      <div className="bg-neutral-800 rounded-md">
        {/* <p>{status}</p> */}
        <p className="p-2 ">{messageType}</p>
      </div>
      <p>{areaDesc}</p>
      <p>{headline}</p>
      <p>{instruction}</p>
    </li>
  );
};
