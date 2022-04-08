import { Disclosure } from "@headlessui/react";
import { BsTornado } from "react-icons/bs";
// --
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);
// --
import { getAffectedAreasByState as formatAreaDesc } from "./utils/getAffectedAreasByState";

export const AlertListItem = ({ alert }) => {
	// console.log("AlertListItem >>\n", alert);
	const {
		event,
		messageType,
		effective,
		expires,
		areaDesc,
		headline,
		description,
		instruction,
		senderName,
	} = alert;

	const EVENT_COLOR_MAP = {
		TornadoWarning: "from-red-500",
		TornadoWatch: "from-yellow-500",
	};

	const color = EVENT_COLOR_MAP[event.split(" ").join("")];

	const italicWarn = event === "Tornado Warning" ? "italic" : "";

	return (
		<li
			className={`bg-gradient-to-b ${color} to-stone-800 mb-6 sm:m-0 sm:h-fit p-4 rounded shadow-black shadow-md`}
		>
			<div className='flex items-center mb-3 w-full'>
				<BsTornado size={30} />
				<div className={`${italicWarn} ml-2 text-3xl font-bold drop-shadow-md`}>
					{event.split(" ")[1].toUpperCase()}
				</div>
			</div>

			<div className='bg-neutral-700 p-4 mb-4 rounded'>
				<p className='text-xs'>{headline}</p>
			</div>

			<div className='bg-neutral-700 p-4 mb-4 rounded'>
				<p className='text-xs'>{`${formatAreaDesc(areaDesc)}`}</p>
			</div>

			{instruction !== null ? (
				<div className='bg-neutral-700 p-4 mb-4 rounded'>
					<p className='text-xs'>{instruction}</p>
				</div>
			) : (
				""
			)}

			{/* <div className='bg-neutral-700 p-4 mb-4 rounded'>
				<p className='font-bold italic text-xl mb-2'>Description</p>
				{description.split(/\n(?:\n)?/gm).map(copySection => (
					<p className='text-xs'>{copySection}</p>
				))}
			</div> */}
		</li>
	);
};
