import React from "react";
import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";
import { PageWrapper } from "components/shared";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/SPC";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OutlooksPage = (props) => {
	const [outlookLayers, setOutlookLayers] = React.useState({
		prev_layer: 1,
		new_layer: 1,
	});

	const handleLayerChange = (type) => {
		if (type === "-") {
			if (outlookLayers.prev_layer > 0) {
				setOutlookLayers(({ prev_layer, new_layer }) => {
					return {
						prev_layer: new_layer + 1,
						new_layer: prev_layer - 1,
					};
				});
			}
		} else {
			if (outlookLayers.prev_layer < 25) {
				setOutlookLayers(({ prev_layer, new_layer }) => {
					return {
						prev_layer: new_layer - 1,
						new_layer: prev_layer + 1,
					};
				});
			}
		}
	};

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				{/* ------------------------ */}
				{/* OUTLOOK DAY SELECT BTNS */}
				{/* ------------------------ */}
				<div className='flex justify-center items-center'>
					<FaChevronLeft onClick={() => handleLayerChange("-")} />
					<span className='mx-5'>Outlook Layer: {outlookLayers.new_layer}</span>
					<FaChevronRight onClick={() => handleLayerChange("+")} />
				</div>
				{/* ------------------------ */}
				{/* MAP */}
				{/* ------------------------ */}
				<SPCOutlookMap layerIds={outlookLayers} />
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
