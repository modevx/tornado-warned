export const AlertCardMaxHailSize = ({ maxHailSize }) => {
	const maxHail = maxHailSize?.length
		? maxHailSize[0].replace("Up to ", "")
		: "N/A";

	return (
		<span className='text-sm bg-black rounded-md p-2'>
			Max Hail Size: {maxHail}
		</span>
	);
};
