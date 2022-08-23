import Image from "next/image";
import { Page } from "../layout";

import { SvgLinearGradient } from "components";
import { USA_MAP } from "services/spc_mapserver";
import { VectorMap } from "@south-paw/react-vector-maps";

import { NationalWeatherServiceAlerts } from "../features";
import { ALERT_TYPE } from "services/nws_api_web_service";

const HomePage = () => {
	return (
		<Page>
			<div className='grow flex flex-col mx-auto'>
				{/* -- DASHBOARD */}
				<div className='m-4 grow grid gap-4 sm:grid-cols-2 sm:gap-5'>
					{/* -- MAP GRID TILE */}
					<div className=' sm:col-span-2'>
						{/* TODO: attempt to add SPC Outlook as layer / if not doable today, use OpenLayers */}

						<div className='stroke-blue-400'>
							<VectorMap
								{...USA_MAP}
								layerProps={{ className: "hover:fill-yellow-400" }}
							>
								<SvgLinearGradient />
							</VectorMap>
						</div>
					</div>

					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Warnings
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPE.tornadoWarning}
						/>
					</div>

					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Watches
						</h2>
						<NationalWeatherServiceAlerts alertType={ALERT_TYPE.tornadoWatch} />
					</div>

					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Severe Thunderstorm Warnings
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPE.severeStormWarning}
						/>
					</div>

					<div className=' bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Severe Thunderstorm Watches
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPE.severeStormWatch}
						/>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default HomePage;
