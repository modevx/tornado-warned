import { GiGolfTee, GiMarbles } from "react-icons/gi";
import { BiCreditCard } from "react-icons/bi";
import { IoBaseballOutline } from "react-icons/io5";
import { TbToiletPaper } from "react-icons/tb";

export const AlertCardMaxHailSize = ({ maxHailSize }) => {
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
