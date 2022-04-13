import React from "react";
import Image from "next/image";
// --
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
// --
import { getAreaDescMAP, formatSenderNameSTR } from "./utils";
import { STATE_ABBREVIATION_MAP as STATES } from "../states";
// --
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);

export const AlertItem = ({ activeAlert }) => {
	// console.log("AlertListItem >>\n", activeAlert.properties.event);
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
	} = activeAlert.properties;
	const EVENT_COLOR_MAP = {
		TornadoWarning: "from-red-500",
		TornadoWatch: "from-yellow-600",
	};
	const color = EVENT_COLOR_MAP[event.split(" ").join("")];
	const italicWarn = event === "Tornado Warning" ? "italic" : "";
	const areaDescMAP = getAreaDescMAP(areaDesc);

	const areaDescMapARR = Array.from(areaDescMAP.entries());
	const impactedAreas = areaDescMapARR.map(([state, areas]) => {
		const joinedAreaDescSTR = areas.join(", ");

		return (
			<div key={state} className='mb-2'>
				<h4 className='text-xl font-medium mb-2 uppercase'>{STATES[state]}</h4>
				<p>{joinedAreaDescSTR}</p>
			</div>
		);
	});

	// 	const alertPropsToDisplay = [headline, impactedAreas, instruction];

	// 	const alertCardElements = alertPropsToDisplay.map(alertProp => {
	// 		return (
	// 			<div className='bg-neutral-700 p-4 mb-4 rounded'>
	// 				<p className='text-xs'>{alertProp}</p>
	// 			</div>
	// 		);
	// 	});

	// 	return (
	// 		<li
	// 			className={`bg-gradient-to-b ${color} to-stone-800 ${color} mb-6 sm:m-0 sm:h-fit p-4 rounded shadow-black shadow-md`}
	// 		>
	// 			<div className='flex items-center mb-4 w-full'>
	// 				<Image src='/nws-logo.png' height={50} width={50} />
	// 				<div className='flex-1 ml-2 font-medium text-right'>
	// 					<p className={`${italicWarn} text-xl uppercase w-full`}>{event}</p>
	// 					<p className='text-md font-light w-full'>
	// 						{formatSenderNameSTR(senderName)}
	// 					</p>
	// 				</div>
	// 			</div>

	// 			<div className='flex items-center justify-between bg-neutral-700 p-4 mb-4 rounded'>
	// 				<p className='text-center'>{dayjs(effective).format("LT")}</p>
	// 				<span>until</span>
	// 				<p className='text-center'>{dayjs(expires).format("LT")}</p>
	// 			</div>

	// <div className='bg-neutral-700 p-4 mb-4 rounded'>
	// 	<p className='text-xs'>{areaDesc}</p>
	// 	{impactedAreas}
	// </div>

	// {instruction !== null ? (
	// 	<div className='bg-neutral-700 p-4 mb-4 rounded'>
	// 		<p className='text-xs'>{instruction}</p>
	// 	</div>
	// ) : (
	// 	""
	// )}

	// 			<div className='bg-neutral-700 p-4 mb-4 rounded'>
	// 				<p className='font-bold italic text-xl mb-2'>Description</p>
	// 				{description.split(/\n(?:\n)?/gm).map(copySection => (
	// 					<p className='text-xs'>{copySection}</p>
	// 				))}
	// 			</div>
	// 		</li>
	// 	);

	// ****************************************
	// ** DISCLOSURE
	// ****************************************
	return (
		<div
			className={`bg-gradient-to-r ${color} to-neutral-800 w-full max-w-md shadow-md shadow-stone-900 mb-4 mx-auto rounded-md p-2`}
		>
			<div className='flex items-center mb-4 w-full'>
				<Image src='/nws-logo.png' height={50} width={50} />
				<div className='flex-1 ml-2 font-medium text-right'>
					<p className={` text-xl uppercase w-full`}>
						{formatSenderNameSTR(senderName)}
					</p>
					<p className={`${italicWarn} text-md font-light w-full`}>{event}</p>
				</div>
			</div>

			{impactedAreas}

			{instruction !== null ? (
				<div className='bg-neutral-700 p-4 mb-4 rounded'>
					<p className='text-xs'>{instruction}</p>
				</div>
			) : (
				""
			)}

			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex justify-between w-full px-4 py-2 text-sm font-medium rounded-md bg-stone-900`}
						>
							<span>Details</span>
							<ChevronUpIcon
								className={`${
									open ? "" : "transform rotate-180"
								} w-5 h-5 text-white`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
							If you're unhappy with your purchase for any reason, email us
							within 90 days and we'll refund you in full, no questions asked.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
