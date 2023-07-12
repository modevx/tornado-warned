import { GiGolfTee, GiMarbles } from "react-icons/gi";
import { BiCreditCard } from "react-icons/bi";
import { IoBaseballOutline } from "react-icons/io5";
import { TbToiletPaper } from "react-icons/tb";

export const AlertCardMaxHailSize = ({ maxHailSize }) => {
	const maxSizeFloat = maxHailSize?.length
		? parseFloat(maxHailSize[0].split(" ")[2])
		: "N/A";

	const sizeIcons = [
		[0.5, GiMarbles],
		[1.75, GiGolfTee],
		[2.75, IoBaseballOutline],
		[3, BiCreditCard],
		[4, TbToiletPaper],
	];

	return (
		<span className='text-sm bg-black rounded-md p-2'>
			Max Hail Size: {maxSizeFloat}
		</span>
	);
};
