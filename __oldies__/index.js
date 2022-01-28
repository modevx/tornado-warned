// -- REACT
import { useEffect, useState } from "react";
// -- COMPONENTS
import ActiveStormAlerts from "../components/ActiveTornadoAlerts";
import FetchButton from "../components/FetchButton";
import Header from "../components/Header";
import Meta from "../components/Meta";
import TVSMonthLocations from "../components/visualizations/TVSMonthLocations";
import TVSMonthCount from "../components/visualizations/TVSMonthCount";
import MessageBanner from "../components/MessageBanner";
// -- API CALLS
import { activeAlertsConfig } from "../services/NWS/axios_configs";
import { getAlerts } from "../services/NWS/getAlerts";
import { getTVS } from "../services/SWDI/getTVS";
import { getTVSYearMap } from "../services/SWDI/getTVSYearMap";
// -- DATA
import { PAGE_META } from "../site_data/pages";
import testAlertJSON from "../site_data/json/test_alerts.json";

export default function Home() {
	const { home } = PAGE_META;
	const [tvsMonth, setTVSMonth] = useState();
	const [tvsYear, setTVSYear] = useState();
	const [activeAlerts, setActiveAlerts] = useState([]);

	const getTestAlerts = async () => {
		console.clear();
		// console.log(testAlertJSON.features);
		setActiveAlerts(testAlertJSON.features);
	};
	const getActiveStormAlerts = async () => {
		try {
			const alerts = await getAlerts(activeAlertsConfig);

			setActiveAlerts(alerts);
		} catch (error) {
			console.log(">> getActiveTornadoAlerts() >>: \n", error);
		}
	};
	const getTVSforMonth = async () => {
		console.clear();

		const monthsTVS = await getTVS();

		setTVSMonth(monthsTVS);
		// console.log(monthsTVS);
	};
	const getTVSforYear = async () => {
		console.clear();

		let tvsCount = 0;
		const tvsYearMap = await getTVSYearMap(2021);
		// console.log(tvsYearMap);

		for (const [key, value] of tvsYearMap) {
			console.log(`${key} | ${value.length}`);
			tvsCount += value.length;
		}

		console.log(">> getTVSforYear() tvsCount >>\n", tvsCount);

		setTVSYear(tvsCount);
	};

	useEffect(() => {
		// getTestAlerts();
		getActiveStormAlerts();
	}, []);

	return (
		<Meta meta={home}>
			<div className='page home-page'>
				<Header title='Tornado Action' />
				<main className='content'>
					{/* <h2>ACTIVE ALERTS</h2>
          {activeAlerts.length > 0 && (
            <ActiveStormAlerts alerts={activeAlerts} />
          )}
          {activeAlerts.length < 1 && (
            <MessageBanner message="All clear. No active alerts." />
          )}

          <h2>TORNADO VORTEX SIGNATURES</h2>

          <FetchButton funcRef={getTVSforMonth} label="Month TVS" />
          <FetchButton funcRef={getTVSforYear} label="Year TVS" />

          <p>Month Count: {tvsMonth && tvsMonth.length}</p>
          <br />
          <p>Year Count: {tvsYear && tvsYear}</p>

          <h2>BAR CHART:</h2>

          <div id="TVSMonthCount"></div>

          <h2>DENSITY MAP:</h2>

          <div id="TVSMonthLocations"></div> */}
				</main>
			</div>
		</Meta>
	);
}
