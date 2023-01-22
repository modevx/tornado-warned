import { PageLayout } from "../components/_shared";
import { EVENT_NAME } from "../features/nws-tornado-alerts";
// import { NationalWeatherServiceAlerts } from "../features/NationalWeatherServiceAlerts";

const LiveDashboardPage = () => {
	return (
		<PageLayout>
			<div className='grow flex flex-col mx-auto'>
				{/* -- DASHBOARD */}
				<div className='m-4 grow grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-6 '>
					<div className='sm:col-span-2 md:col-span-3 bg-stone-800 flex flex-col justify-center text-center'>
						MAP
					</div>
					<div className='md:row-span-2 md:order-first bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Warnings
						</h2>
						{/* <NationalWeatherServiceAlerts
							alertType={EVENT_NAME.tornadoWarning}
							isTest={true}
						/> */}
					</div>
					<div className='md:row-span-2 bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Watches
						</h2>
						{/* <NationalWeatherServiceAlerts
							alertType={EVENT_NAME.tornadoWatch}
							isTest={true}
						/> */}
					</div>
					<div className='sm:col-span-2 md:col-span-3 bg-stone-800 flex flex-col justify-center text-center'>
						LOCAL STORM REPORTS
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default LiveDashboardPage;
