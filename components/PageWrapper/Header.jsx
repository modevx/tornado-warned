import { NavBar, Clock } from ".";
import Link from "next/link";
import dayjs from "dayjs";

export const Header = () => {
	return (
		<header className='flex justify-between items-center text-xs'>
			<NavBar />
			<Clock />
		</header>
	);
};
