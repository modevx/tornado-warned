import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { FeaturesSection } from "../components/FeaturesSection";
import { Alerts } from "../components/Alerts";

const Hero = () => {
	return (
		<div className='md:px-6 lg:px-8'>
			<div className='text-700 text-left my-auto'>
				<h2 className='text-900 font-bold text-3xl mb-3'>STAY ALERT</h2>
				<div className='text-xs w-1/2'>
					Tornado Action is your source for active tornado alerts, historical
					stats, weather updates, safety resources, more!
				</div>
				{/* <div className='rounded-md shadow mt-5'>
					<a
						href='#'
						className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
					>
						Get started
					</a>
				</div> */}
			</div>
		</div>
	);
};

const HomeScreen = () => {
	return (
		<PageWrapper>
			<div className='bg-neutral-900/70 bg-blend-overlay bg-[url("/bg-img-03.jpg")] bg-center bg-cover border-red-600 border-t-4 h-[50vh] p-2'>
				<Hero />
			</div>
			{/* <FeaturesSection /> */}
			<Alerts />
		</PageWrapper>
	);
};

export default HomeScreen;
