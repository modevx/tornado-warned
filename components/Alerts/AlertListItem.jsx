import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";
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
	} = alert;

	const EVENT_COLOR_MAP = {
		TornadoWarning: "bg-red-500",
		TornadoWatch: "bg-yellow-500",
	};

	return (
		<div
			className={`${
				EVENT_COLOR_MAP[event.split(" ").join("")]
			} p-2 text-xs shadow-md shadow-black rounded`}
		>
			<div className='flex items-center justify-between py-2'>
				<div>
					<span className='font-bold'>EFFECTIVE: </span>
					<span>{dayjs(effective).format("LT")}</span>
				</div>
				<div>
					<span className='font-bold'>EXPIRES: </span>
					<span>{dayjs(expires).format("LT")}</span>
				</div>
			</div>

			<div className='bg-neutral-700 px-2 py-3 rounded'>
				<p>{areaDesc}</p>
			</div>
			<Disclosure>
				<Disclosure.Button className=' mt-3 shadow-md shadow-black p-2 rounded w-full hover:bg-neutral-600'>
					Click <strong>HERE</strong> for Details
				</Disclosure.Button>
				<Disclosure.Panel className='bg-neutral-700 px-2 py-3 rounded text-white'>
					<p>{instruction}</p>
					<br />
					<p>{description}</p>
					<br />
					<p>{headline}</p>
				</Disclosure.Panel>
			</Disclosure>
		</div>
	);
};
