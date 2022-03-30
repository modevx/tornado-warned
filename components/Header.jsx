import { Clock, NavBar } from "./";

export const Header = () => {
	return (
		<header className='flex justify-between'>
			<NavBar />
			<Clock />
		</header>
	);
};
