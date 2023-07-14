import { Card } from "react-daisyui";

import { DayJSDateTime } from "components";
import { STATES_MAP } from "constants";
import { createImpactedAreasMap } from "utils";
import { BiCreditCard } from "react-icons/bi";
import { IoBaseballOutline } from "react-icons/io5";
import { TbToiletPaper } from "react-icons/tb";
import {
	GiBinoculars,
	GiRadarSweep,
	GiGolfTee,
	GiMarbles,
} from "react-icons/gi";

export const Body = ({ children }) => {
	const { Body } = Card;

	return <Body className='p-0'>{children}</Body>;
};

export const Title = ({ children }) => {
	const { Title } = Card;

	return (
		<Title className='bg-black rounded-md p-2 mb-2 flex justify-between'>
			{children}
		</Title>
	);
};

export const SenderName = ({ senderName }) => {
	const wfoOffice =
		senderName?.replace("NWS ", "") ?? "National Weather Service";

	return (
		<div className='flex flex-col'>
			<span className='text-sm'>NWS Office:</span>
			<span>{wfoOffice}</span>
		</div>
	);
};

export const Expiration = ({ expiresTime }) => {
	return (
		<div className='text-xs flex flex-col'>
			<span>Expires:</span>
			{expiresTime ? (
				<DayJSDateTime utcDate={expiresTime} format='dd LT' />
			) : (
				"Unknown"
			)}
		</div>
	);
};

export const ImpactedAreas = ({ areaDesc }) => {
	let impactedAreasMap;
	let impactedAreasMapEntries;

	if (areaDesc?.length) {
		impactedAreasMap = createImpactedAreasMap(areaDesc);
		impactedAreasMapEntries = Array.from(impactedAreasMap.entries());
	}

	return (
		<div className='bg-black rounded-md p-2 mb-2'>
			{impactedAreasMapEntries
				? impactedAreasMapEntries.map(([state, areas]) => {
						const joinedAreaDescStr = areas.join(", ");
						{
							/* const stateName = STATES_MAP[state]; */
						}

						return (
							<div key={state}>
								<h4 className='text-md font-bold mb-2 uppercase'>
									{/* {stateName} */}
								</h4>
								<p className='text-sm mb-2'>{joinedAreaDescStr}</p>
							</div>
						);
				  })
				: "NWS Error: Impacted areas not available at this time..."}
		</div>
	);
};

export const MaxHailSize = ({ maxHailSize }) => {
	//TODO: check for empty maxHailSize [] or null values
	let SizeIcon;
	const maxSizeFloat = parseFloat(maxHailSize[0].split(" ")[2]);

	console.log("maxSizeFloat\n", maxSizeFloat);

	if (maxSizeFloat >= 4) {
		SizeIcon = TbToiletPaper;
	} else if (maxSizeFloat >= 3) {
		SizeIcon = BiCreditCard;
	} else if (maxSizeFloat >= 2.75) {
		SizeIcon = IoBaseballOutline;
	} else if (maxSizeFloat >= 1.75) {
		SizeIcon = GiGolfTee;
	} else {
		// .5
		SizeIcon = GiMarbles;
	}

	return (
		<span className='bg-black rounded-md p-2'>
			<span className='text-sm '>MAX HAIL SIZE</span>
			<div className='flex justify-center mt-2'>
				{<SizeIcon size={40} /> ?? "NA"}
			</div>
		</span>
	);
};

export const TornadoDetection = ({ tornadoDetection }) => {
	let DetectionIcon =
		tornadoDetection[0] === "OBSERVED" ? GiBinoculars : GiRadarSweep;

	return (
		<div className='bg-black rounded-md p-2'>
			<span className='text-sm '>DETECTION</span>
			<div className='flex justify-center mt-2'>
				<DetectionIcon size={40} />
			</div>
		</div>
	);
};
