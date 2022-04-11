import { Clock } from "../PageWrapper";
import { NavBar } from "./Navbar";

export const Header = () => {
	return (
		<header
			data-testid='header'
			className='flex justify-between items-center text-xs'
		>
			<NavBar />
			<Clock />
		</header>
	);
};
