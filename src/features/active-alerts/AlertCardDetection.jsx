export const AlertCardDetection = ({ tornadoDetection }) => {
	const detectionType = tornadoDetection?.length
		? tornadoDetection[0].split(" ")[0]
		: "N/A";

	return (
		<span className='text-sm bg-black rounded-md p-2'>
			Detection: {detectionType}
		</span>
	);
};
