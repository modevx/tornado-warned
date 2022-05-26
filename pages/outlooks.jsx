import React from "react";
import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";
import { PageWrapper } from "@components/common";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/SPC";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OutlooksPage = (props) => {
	const [layerId, setLayerId] = React.useState(1);

	const handleLayerChange = (type) => {
		if (type === "-" && layerId > 0) {
			setLayerId((prev) => prev - 1);
		}
		if (type === "+" && layerId < 25) {
			setLayerId((prev) => prev + 1);
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
					<span className='mx-5'>Outlook Layer: {layerId}</span>
					<FaChevronRight onClick={() => handleLayerChange("+")} />
				</div>
				{/* ------------------------ */}
				{/* MAP */}
				{/* ------------------------ */}
				<SPCOutlookMap layerId={layerId} />
				<div>LayerID: {layerId}</div>
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
