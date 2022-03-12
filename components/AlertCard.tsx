const COLOR_MAP = {
	warning: "red-700",
	watch: "yellow-300",
};

interface ALERT_PREVIEW {
	eventType: string;
	alertType: string;
}

// "areaDesc": "Calloway, KY; Graves, KY; Marshall, KY",
//     "geocode": {
//       "SAME": [
//         "021035",
//         "021083",
//         "021157"
//       ],
//       "UGC": [
//         "KYC035",
//         "KYC083",
//         "KYC157"
//       ]
//     },
//     "affectedZones": [
//       "https://api.weather.gov/zones/county/KYC035",
//       "https://api.weather.gov/zones/county/KYC083",
//       "https://api.weather.gov/zones/county/KYC157"
//     ],
//     "references": [],
//     "sent": "2022-03-07T03:35:00-06:00",
//     "effective": "2022-03-07T03:35:00-06:00",
//     "onset": "2022-03-07T03:35:00-06:00",
//     "expires": "2022-03-07T04:00:00-06:00",
//     "ends": "2022-03-07T04:00:00-06:00",
//     "status": "Actual",
//     "messageType": "Alert",
//     "category": "Met",
//     "severity": "Extreme",
//     "certainty": "Observed",
//     "urgency": "Immediate",
//     "event": "Tornado Warning",
//     "sender": "w-nws.webmaster@noaa.gov",
//     "senderName": "NWS Paducah KY",
//     "headline": "Tornado Warning issued March 7 at 3:35AM CST until March 7 at 4:00AM CST by NWS Paducah KY",

export const AlertCard = ({ senderName, event, areaDesc }) => {
	const alertType = event.split(" ")[1].toLowerCase();
	console.log(alertType);

	return (
		<div
			className={`h-36 p-1 rounded-lg mt-4 bg-gradient-to-r from-${alertType}-900 to-${alertType}-600`}
		>
			<div className='h-1/2 flex items-center justify-center'>
				<span className='text-3xl ml-3'>{event}</span>
			</div>
			<div className='h-1/2 bg-neutral-800 rounded-lg text-xs p-2'>
				{areaDesc}
			</div>
		</div>
	);
};
