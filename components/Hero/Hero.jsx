import Link from "next/link";
import { CTAButton } from "../CTAButton";
import { Navbar } from "../Header/Navbar";
import { RiTornadoLine } from "react-icons/ri";

export const Hero = () => {
	return (
		<div className='relative overflow-hidden bg-[url("/bg-img-03.jpg")] bg-no-repeat bg-cover'>
			<div className='max-w-7xl mx-auto bg-gradient-to-r from-neutral-900/80 to-neutral-900/50'>
				<div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
					{/* ** HERO: responsive-mobile-nav */}
					<Navbar />
					{/* ** HERO: call-to-action */}
					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<div className='sm:text-center lg:text-left'>
							{/* HERO: tag headline */}
							<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
								<span className='block xl:inline text-neutral-200'>
									Dangerous Weather
								</span>{" "}
								<span className='block xl:inline text-red-600'>
									alerts. outlooks.
								</span>
							</h1>
							{/* HERO: description */}
							<p className='mt-3 text-base text-neutral-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								View real-time tornado alerts and outlooks as they come in from
								the National Weather Service and the Storm Prediction Center.
							</p>
							{/* HERO Buttons */}
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<Link href='/alerts'>
									<div className='rounded-md shadow'>
										<a
											href='#'
											className='w-full flex items-center justify-center px-8 py-3 border-2 border-red-600 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 hover:border-red-700 md:py-4 md:text-lg md:px-10'
										>
											Check Alerts
										</a>
									</div>
								</Link>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									<a
										href='#'
										className='w-full flex items-center justify-center px-8 py-3 border-2 border-red-600 text-base font-medium rounded-md text-neutral-200 hover:bg-red-700 hover:border-red-700 md:py-4 md:text-lg md:px-10'
									>
										View Outlooks
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
