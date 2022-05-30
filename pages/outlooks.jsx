import React from "react";
import Image from "next/image";
import esriConfig from "@arcgis/core/config";
import { PageWrapper } from "components/common";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/spc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery } from "react-query";

export async function getStaticProps() {
	const res = await fetch(
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer?f=json"
	);
	const data = await res.json();
	return { props: { spcOutlooks: await data.layers } };
}

const OutlooksPage = ({ spcOutlooks }) => {
	// const [outlooks, setOutlooks] = React.useState([]);
	// const [filteredLayers, setFilteredLayers] = React.useState([]);

	// React.useEffect(() => {
	// 	const convective = spcOutlooks.filter((layer) => layer.subLayerIds);

	// 	const categorical = spcOutlooks.filter((layer) =>
	// 		layer.name.toLowerCase().includes("categorical")
	// 	);
	// 	const prob4Day = spcOutlooks.filter((layer) => layer.parentLayerId == 20);

	// 	const tornado = spcOutlooks.filter((layer) =>
	// 		layer.name.toLowerCase().includes("tornado")
	// 	);
	// 	const hail = spcOutlooks.filter((layer) =>
	// 		layer.name.toLowerCase().includes("hail")
	// 	);
	// 	const wind = spcOutlooks.filter((layer) =>
	// 		layer.name.toLowerCase().includes("wind")
	// 	);

	// 	setOutlooks(categorical);
	// 	setFilteredLayers(prob4Day);
	// 	// setFilteredLayers(tornado);
	// 	// setFilteredLayers(hail);
	// 	// setFilteredLayers(wind);
	// }, [spcOutlooks]);

	// if (outlooks.length) console.log("CONVECTIVE OUTLOOKS >>\n", outlooks);
	// if (filteredLayers.length)
	// 	console.log("4-DAY PROBABILISTIC >>\n", filteredLayers);

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				<Image
					alt='Day 1 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day1otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Day 2 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day2otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Day 3 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day3otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Days 4-8 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day48prob.gif'
					height={555}
					width={815}
				/>
				{/* {outlooks &&
					outlooks.map((layer) => (
						<SPCOutlookMap layer={layer} key={layer.name} />
					))}
				{filteredLayers &&
					filteredLayers.map((layer) => (
						<SPCOutlookMap layer={layer} key={layer.name} />
					))} */}
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
