import React from "react";
import { LocaleDate } from "components";
import { getAreaDescMAP } from "utils";

export const NwsAlertListItem = ({ activeAlert }) => {
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
			{/* <button
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
						<LocaleDate date={expires} format='LT' />
					</span>
				</div>
			</button>
			<Modal
				open={visible}
				className='bg-gradient-to-br from-black to-gray-800 text-white mx-auto'
			>
				<button
					size='sm'
					shape='circle'
					className='absolute right-2 top-2'
					onClick={toggleVisible}
				>
					✕
				</button>
				<Modal.Header className='font-bold text-3xl'>{event}</Modal.Header>

				<Modal.Body>
					<div className='flex flex-col items-center mb-4 w-full'>
						<div className='bg-neutral-700 px-4 py-2 mb-4 rounded w-full'>
							<div className='text-xs text-center'>
								<span>Expires: </span>
								<LocaleDate date={expires} format='LT' />
							</div>
						</div>
					</div>
					<div className='bg-neutral-700 px-4 py-2 mb-4 rounded'>
						{areaDescMapARR.map(([state, areas]) => {
							const joinedAreaDescSTR = areas.join(", ");

							return (
								<div key={state}>
									<h4 className='text-lg font-medium mb-2 uppercase'>
										{STATE_NAMES_ABBR[state]}
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
			</Modal> */}
		</div>
	);
};
