import React from "react";
import esriConfig from "@arcgis/core/config";
import { PageWrapper } from "components/common";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/SPC";
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
	const [outlooks, setOutlooks] = React.useState([]);
	const [filteredLayers, setFilteredLayers] = React.useState([]);

	React.useEffect(() => {
		const convective = spcOutlooks.filter((layer) => layer.subLayerIds);

		const categorical = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("categorical")
		);
		const tornado = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("tornado")
		);
		const hail = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("hail")
		);
		const wind = spcOutlooks.filter((layer) =>
			layer.name.toLowerCase().includes("wind")
		);

		setOutlooks(convective);
		// setFilteredLayers(categorical);
		setFilteredLayers(tornado);
		// setFilteredLayers(hail);
		// setFilteredLayers(wind);
	}, [spcOutlooks]);

	// if (outlooks.length) console.log("CONVECTIVE OUTLOOKS >>\n", outlooks);
	if (filteredLayers.length)
		console.log("FILTERED LAYERS >>\n", filteredLayers);

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				{filteredLayers &&
					filteredLayers.map((layer) => (
						<SPCOutlookMap layer={layer} key={layer.name} />
					))}
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
