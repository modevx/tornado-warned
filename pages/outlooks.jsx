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
	const [convectiveGroupLayers, setConvectiveGroupLayers] = React.useState([]);
	const [featureLayers, setFeatureLayers] = React.useState([]);

	React.useEffect(() => {
		setConvectiveGroupLayers(spcOutlooks.filter((layer) => layer.subLayerIds));

		setFeatureLayers(
			spcOutlooks.filter((layer) => layer.type.includes("Feature Layer"))
		);
	}, [spcOutlooks]);

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				{featureLayers &&
					featureLayers.map((layer) => (
						<SPCOutlookMap key={layer.name} layerId={layer.id} />
					))}
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
