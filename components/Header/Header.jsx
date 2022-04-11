import { Clock } from "../PageWrapper";
import { Navbar } from "./Navbar";

export const Header = () => {
	return (
		<header
			data-testid='header'
			className='flex justify-between items-center text-xs'
		>
			<div>
				<div className='text-lg font-bold'>
					TORNADO <span className='text-red-500'>ACTION</span>
				</div>
				<Clock />
			</div>
			<Navbar />
		</header>
	);
};
