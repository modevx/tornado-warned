import React from "react";
import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";
import { PageWrapper } from "components/common";
import { SPCOutlookMap } from "components/feature";
import { ENDPOINTS } from "services/SPC";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery } from "react-query";

const OutlooksPage = (props) => {
	const { data, isLoading, error } = useQuery("api-res", () =>
		fetch("api/spc-convective-outlooks")
	);

	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				<div className='flex justify-center items-center'>
					<FaChevronLeft onClick={() => handleLayerChange("-")} />
					<span className='mx-5'>Outlook Layer: </span>
					<FaChevronRight onClick={() => handleLayerChange("+")} />
				</div>
				<SPCOutlookMap />
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
