import React from "react";
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);

export const Clock = () => {
	const [time, setTime] = React.useState(new Date());

	const clockTick = () => {
		setTime(new Date());
	};

	React.useEffect(() => {
		let id = setInterval(() => {
			clockTick();
		}, 1000);

		return () => clearInterval(id);
	}, [time]);

	return (
		<div className='flex flex-col'>
			<span className='text-xs'>{dayjs(time).format("lll")}</span>
		</div>
	);
};
