const COLOR_MAP = {
	warning: "red-700",
	watch: "yellow-300",
};

type ALERT_CARD = { eventType: keyof string; alertType: keyof string };

export const AlertCard = ({ alertType }: ALERT_CARD) => {
	const alertColor = COLOR_MAP[alertType];

	return (
		<div
			className={`h-36 p-1 rounded-lg mt-4 bg-gradient-to-r from-${alertColor}-900 to-${alertColor}-600`}
		>
			<div className='h-1/2 flex items-center justify-center'>
				<span className='text-3xl ml-3'>Tornado Warnings</span>
			</div>
			<div className='h-1/2 bg-neutral-800 rounded-lg text-xs p-2'>
				details go here... <br />
				click to see all tornado warnings
			</div>
		</div>
	);
};
