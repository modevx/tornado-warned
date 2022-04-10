import React from "react";
import Image from "next/image";
// --
import { Disclosure } from "@headlessui/react";
import { BsTornado } from "react-icons/bs";
// --
import { getAreaDescMAP } from "./utils/getAreaDescStringByState";
import { formatSenderNameSTR } from "./utils/formatSenderNameSTR";
import { STATES } from "../../constants";
// --
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);

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
		TornadoWatch: "from-yellow-600",
	};
	const color = EVENT_COLOR_MAP[event.split(" ").join("")];
	const italicWarn = event === "Tornado Warning" ? "italic" : "";
	const areaDescMAP = getAreaDescMAP(areaDesc);
	// [...[state, areas]]
	const areaDescMapARR = Array.from(areaDescMAP.entries());
	const impactedAreas = areaDescMapARR.map(([state, areas]) => {
		const joinedAreaDescSTR = areas.join(", ");

		return (
			<div key={state} className='mb-2'>
				<h4 className='text-2xl font-medium mb-2 uppercase'>{STATES[state]}</h4>
				<p>{joinedAreaDescSTR}</p>
			</div>
		);
	});

	const alertPropsToDisplay = [headline, impactedAreas, instruction];

	const alertCardElements = alertPropsToDisplay.map(alertProp => {
		return (
			<div className='bg-neutral-700 p-4 mb-4 rounded'>
				<p className='text-xs'>{alertProp}</p>
			</div>
		);
	});

	return (
		<li
			className={`bg-gradient-to-b ${color} to-stone-800 ${color} mb-6 sm:m-0 sm:h-fit p-4 rounded shadow-black shadow-md`}
		>
			{/* -- BANNER -- */}
			<div className='flex items-center mb-4 w-full'>
				<Image src='/nws-logo.png' height={50} width={50} />
				<div className='flex-1 ml-2 font-medium text-right'>
					<p className={`${italicWarn} text-xl uppercase w-full`}>{event}</p>
					<p className='text-md font-light w-full'>
						{formatSenderNameSTR(senderName)}
					</p>
				</div>
			</div>

			{/* -- TIMES -- */}
			<div className='flex items-center justify-between bg-neutral-700 p-4 mb-4 rounded'>
				<p className='text-center'>{dayjs(effective).format("LT")}</p>
				<span>until</span>
				<p className='text-center'>{dayjs(expires).format("LT")}</p>
			</div>

			{/* -- AREAS -- */}
			<div className='bg-neutral-700 p-4 mb-4 rounded'>
				{/* <p className='text-xs'>{areaDesc}</p> */}
				{impactedAreas}
			</div>

			{/* -- INSTRUCTIONS -- */}
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
