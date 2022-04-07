import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);

export const AlertListItem = ({ alert }) => {
	// console.log("AlertListItem >>\n", alert);
	const { event, messageType, effective, expires, areaDesc } = alert;

	const EVENT_COLOR_MAP = {
		TornadoWarning: "bg-red-500",
		TornadoWatch: "bg-yellow-500",
	};

	return (
		<div
			className={`${
				EVENT_COLOR_MAP[`${event.split(" ").join("")}`]
			} my-3 p-2 text-xs shadow-xl rounded`}
		>
			<div className='flex items-center justify-between py-2'>
				{/* <div className='flex items-center'>
					<BsTornado className='mr-1' size={30} />
					<span className='font-bold inline-block  text-lg text-white uppercase'>
						{event.split(" ")[1]}
					</span>
				</div> */}

				<div>
					<span>{dayjs(effective).format("LT")}</span>&nbsp; - &nbsp;
					<span>{dayjs(expires).format("LT")}</span>
				</div>
			</div>

			<div className='bg-neutral-700 px-2 py-3 rounded'>
				<p>{areaDesc}</p>
			</div>
			<Disclosure>
				<Disclosure.Button className='bg-red-700 flex mt-4 shadow-lg justify-between p-2 rounded w-full'>
					<span>Alert Details >></span>
					<BsChevronUp />
				</Disclosure.Button>
				<Disclosure.Panel className='text-gray-500'>
					Yes! You can purchase a license that you can share with your entire
					team.
				</Disclosure.Panel>
			</Disclosure>
		</div>
	);
};
