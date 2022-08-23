import { DangerousSituationMarquee } from "features";
import { Navbar } from "layout";

export const Header = () => {
	return (
		<header
			data-testid='header'
			className='text-center p-4 sm:flex sm:justify-between sm:items-center'
		>
			<div className='mb-4 sm:mb-0 w-full'>
				<DangerousSituationMarquee />
				<Navbar />
			</div>
		</header>
	);
};
