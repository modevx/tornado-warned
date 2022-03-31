import { Clock, NavBar } from "./";

export const Header = () => {
	return (
		<header className='flex justify-between items-center text-xs'>
			<NavBar />
			<Clock />
		</header>
	);
};
