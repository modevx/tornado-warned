import React from "react";
import Image from "next/image";

import { Button, Modal, Table } from "react-daisyui";
import { LocaleDate } from "components";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import { STATES_MAP } from "constants";
import { useTornadoAlertsQuery } from "custom_hooks";
import { getAreaDescMAP, formatSenderNameSTR } from "utils";

import { useFakeNationalWeatherServiceAlerts } from "custom_hooks/useFakeNationalWeatherServiceAlerts";

// [alertType] --> use "Watch" or "Warning"
export const NwsAlerts = ({ alertType, isTest = false }) => {
	let data;
	let error;

	const testAlerts = useFakeNationalWeatherServiceAlerts(alertType);
	const alerts = useTornadoAlertsQuery(alertType);

	data = isTest ? testAlerts.data : alerts.data;
	error = isTest ? testAlerts.error : alerts.error;

	if (data) {
		return data.length > 0 ? (
			<section className='grow'>
				<AlertList activeAlerts={data} />
			</section>
		) : (
			<div
				className={`flex flex-col items-center justify-center container w-full h-[25vh] shadow-md shadow-stone-900 mb-6 mx-auto border-dashed border-2 border-stone-300 rounded-md p-2`}
			>
				<p className='text-5xl text-stone-300 text-center'>No active alerts.</p>
			</div>
		);
	}

	if (error) {
		return (
			<>
				<p>Something went wrong...</p>
				<p>{error.message}</p>
			</>
		);
	}

	return <p>Loading...</p>;
};

const AlertList = ({ activeAlerts }) => {
	return (
		<>
			{activeAlerts.map((alert) => (
				<AlertListItem key={alert.properties.id} activeAlert={alert} />
			))}
		</>
	);
};

const AlertListItem = ({ activeAlert }) => {
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
	const [visible, setVisible] = React.useState(false);

	const fromColorMap = {
		["Tornado Warning"]: "from-red-600",
		["Tornado Watch"]: "from-yellow-600",
	};
	const fromColor = fromColorMap[event];
	const areaDescMAP = getAreaDescMAP(areaDesc);
	const areaDescMapARR = Array.from(areaDescMAP.entries());

	const toggleVisible = () => setVisible((prev) => !prev);

	return (
		<div className='font-sans'>
			<Button
				onClick={toggleVisible}
				className={`w-full flex justify-between align-center bg-gradient-to-r ${fromColor} to-steel-900 my-2 hover:opacity-80`}
			>
				<span key={1} className='text-xs'>
					{senderName.replace("NWS", "")}
				</span>
				<div>
					<span key={2} className='text-xs'>
						Expires: &nbsp;
					</span>
					<span key={3} className='text-xs'>
						<LocaleDate dateOBJ={expires} formatSTR='LT' />
					</span>
				</div>
			</Button>
			<Modal
				open={visible}
				className='bg-gradient-to-br from-black to-gray-800 text-white mx-auto'
			>
				<Button
					size='sm'
					shape='circle'
					className='absolute right-2 top-2'
					onClick={toggleVisible}
				>
					✕
				</Button>
				<Modal.Header className='font-bold text-3xl'>{event}</Modal.Header>

				<Modal.Body>
					<div className='flex flex-col items-center mb-4 w-full'>
						<div className='bg-neutral-700 px-4 py-2 mb-4 rounded w-full'>
							<div className='text-xs text-center'>
								<span>Expires: </span>
								<LocaleDate dateOBJ={expires} formatSTR='LT' />
							</div>
						</div>
					</div>
					<div className='bg-neutral-700 px-4 py-2 mb-4 rounded'>
						{areaDescMapARR.map(([state, areas]) => {
							const joinedAreaDescSTR = areas.join(", ");

							return (
								<div key={state}>
									<h4 className='text-lg font-medium mb-2 uppercase'>
										{STATES_MAP[state]}
									</h4>
									<p className='text-sm mb-2'>{joinedAreaDescSTR}</p>
								</div>
							);
						})}
					</div>
					{instruction !== null ? (
						<div className='bg-neutral-700 px-4 py-2 mb-4 rounded'>
							<p className='text-sm'>{instruction}</p>
						</div>
					) : (
						""
					)}
				</Modal.Body>
			</Modal>
		</div>
	);
};
