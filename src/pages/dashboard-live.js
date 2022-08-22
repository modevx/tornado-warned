import Image from "next/image";
import { Page } from "../layout";
import { NationalWeatherServiceAlerts } from "../features";
import { ALERT_TYPES } from "services/nws_api_web_service/config";

import { VectorMap } from "@south-paw/react-vector-maps";
import { USA_MAP } from "services/spc_mapserver";

import { useSpcConvectiveOutlookDay1 } from "services/spc_mapserver/hooks";

const LiveDashboard = () => {
	const { data } = useSpcConvectiveOutlookDay1();

	if (data) {
		// console.log(">> DAY 1 LAYER: ", data);
	}

	return (
		<Page>
			<div className='grow flex flex-col mx-auto'>
				{/* -- DASHBOARD */}
				<div className='m-4 grow grid gap-4 sm:grid-cols-2 sm:gap-5'>
					{/* -- MAP GRID TILE */}
					<div className=' sm:col-span-2'>
						{data && (
							<div className='stroke-blue-500'>
								<VectorMap
									{...USA_MAP}
									layerProps={{ className: "hover:fill-yellow-400" }}
								>
									<defs>
										<linearGradient
											id='SvgMapGradient'
											gradientUnits='userSpaceOnUse'
											x1='50%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='blue' />
											<stop offset='100%' stopColor='black' />
										</linearGradient>
									</defs>
								</VectorMap>
							</div>
						)}
					</div>
					{/* -- TORNADO WARNINGS GRID TILE */}
					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Warnings
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPES.tornadoWarning}
							isTest={true}
						/>
					</div>
					{/* -- TORNADO WATCHES GRID TILE */}
					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Watches
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPES.tornadoWatch}
							isTest={true}
						/>
					</div>
					{/* <div className='sm:col-span-2 bg-stone-800 flex flex-col justify-center text-center'>
						LOCAL STORM REPORTS
					</div> */}
				</div>
			</div>
		</Page>
	);
};

export default LiveDashboard;
