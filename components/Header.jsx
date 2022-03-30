import { Clock, NavBar } from "./";

export const Header = () => {
	return (
		<header className='flex justify-between text-xs'>
			<NavBar />
			<Clock />
		</header>
	);
};
