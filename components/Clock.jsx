import { useEffect, useState } from "react";

export const Clock = () => {
	const [time, setTime] = useState(new Date());

	const clockTick = () => {
		setTime(new Date());
	};

	useEffect(() => {
		let id = setInterval(() => {
			clockTick();
		}, 1000);

		return () => clearInterval(id);
	}, [time]);

	const dateF = new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		month: "short",
		day: "2-digit",
		year: "numeric",
	}).format(time);

	const timeF = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}).format(time);

	return (
		<div className='flex flex-col'>
			<span className='clock-date'>{`${dateF}`}</span>
			{/* <span className='clock-time'>{`${timeF}`}</span> */}
		</div>
	);
};
