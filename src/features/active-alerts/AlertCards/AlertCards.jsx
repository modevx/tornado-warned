import { Card } from "react-daisyui";

import {
	AlertMessageButtons,
	AlertPolygonMap,
	Body,
	ExpirationTime,
	ImpactedAreas,
	MaxHailSize,
	SenderName,
	Title,
	TornadoDetection,
} from "features/active-alerts/AlertCardElements";

// TODO: add special messaging for TORNADO EMERGENCY & PARTICULARLY DANGEROUS SITUATION alerts

export const TornadoWarningAlert = ({ alert }) => {
	const { id, type, geometry, properties } = alert;
	const alertFeature = { id, type, geometry };
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
		<Card className='bg-red-500 p-2'>
			<Title>
				<SenderName senderName={senderName} />
			</Title>

			<Body>
				<TornadoDetection tornadoDetection={tornadoDetection} />
				<div className='flex justify-between'>
					<MaxHailSize maxHailSize={maxHailSize} />
					<ExpirationTime expiresTime={expires} />
				</div>
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
		<Card className='bg-yellow-300 p-2'>
			<Title>
				<SenderName senderName={senderName} />
				<ExpirationTime expiresTime={expires} />
			</Title>

			<Body>
				<ImpactedAreas areaDesc={areaDesc} />
			</Body>
		</Card>
	);
};

export const SevereStormWarningAlert = ({ alert }) => {
	const { id, type, geometry, properties } = alert;

	const { areaDesc, effective, expires, senderName, description, instruction } =
		alert?.properties;

	return (
		<Card className='bg-orange-500 p-2'>
			<Title>
				<SenderName senderName={senderName} />
				<ExpirationTime expiresTime={expires} />
			</Title>

			<Body>
				<ImpactedAreas areaDesc={areaDesc} />
				<AlertPolygonMap alertFeature={alert} />
			</Body>
		</Card>
	);
};

export const SevereStormWatchAlert = ({ alert }) => {
	const { properties } = alert;
	const { areaDesc, effective, expires, senderName, description, instruction } =
		properties;

	return (
		<Card className='bg-green-300 p-2'>
			<Title>
				<SenderName senderName={senderName} />
				<ExpirationTime expiresTime={expires} />
			</Title>

			<Body>
				<ImpactedAreas areaDesc={areaDesc} />
				{/* <p>{instruction}</p> */}
			</Body>
		</Card>
	);
};
