export const AlertCardSenderName = ({ senderName }) => {
	const wfoOffice =
		senderName?.replace("NWS ", "") ?? "National Weather Service";

	return (
		<div className='flex flex-col'>
			<span className='text-sm'>NWS Office:</span>
			<span>{wfoOffice}</span>
		</div>
	);
};
