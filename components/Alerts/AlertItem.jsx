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

	return (
		<div
			className={`flex flex-col bg-gradient-to-b ${color} to-neutral-400 w-full max-w-md shadow-md shadow-stone-900 mb-6 mx-auto rounded-md p-2`}
		>
			<div className='flex flex-col items-center mb-4 w-full'>
				<p
					className={`${italicWarn} text-3xl text-center font-medium w-full mb-2`}
				>
					{event}
				</p>

				<div className='flex items-center'>
					<Image
						alt='National Weather Service logo'
						src='/nws-logo.png'
						height={30}
						width={30}
					/>
					<span className='ml-2'>{formatSenderNameSTR(senderName)}</span>
				</div>
			</div>

			<div className='bg-neutral-700 px-4 py-2 mb-4 rounded'>
				<p className='text-xs text-right'>
					Expires: {dayjs(expires).format("LT")}
				</p>
				{areaDescMapARR.map(([state, areas]) => {
					const joinedAreaDescSTR = areas.join(", ");

					return (
						<div key={state}>
							<h4 className='text-lg font-medium mb-2 uppercase'>
								{STATES[state]}
							</h4>
							<p className='text-sm mb-2'>{joinedAreaDescSTR}</p>
						</div>
					);
				})}
			</div>

			{instruction !== null ? (
				<div className='bg-neutral-700 px-4 py-2 mb-4 rounded'>
					<p className='text-sm italic'>{instruction}</p>
				</div>
			) : (
				""
			)}

			<div className='flex-1'></div>

			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex justify-between w-full shadow-lg shadow-black px-4 py-2 mb-2 text-sm font-medium rounded-md bg-blue-600 active:scale-95 active:shadow-sm`}
						>
							<span>Details</span>
							<ChevronUpIcon
								className={`${
									open ? "" : "transform rotate-180"
								} w-5 h-5 text-white`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-white'>
							{description.split(/\n(?:\n)?/).map((text, index) => (
								<p
									className='text-xs mb-2'
									key={`${text.slice(0, 10)}-${index}`}
								>
									{text}
								</p>
							))}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
