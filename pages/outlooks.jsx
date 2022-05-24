import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

import { Navbar, PageWrapper } from "component/shared";
import { OutlookMap, OutlookSelectBtns } from "components/feature";

import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";

import { ENDPOINTS as SPC_URLS } from "services/SPC";

const OutlookMapView = dynamic(() =>
	import("../components/OutlookMapView").then((mod) => mod.OutlookMapView)
);

const useSPCOutlookLayers = () => {
	return useQuery("spc-outlook-layers", () =>
		esriRequest(SPC_URLS.oms_layers).then(({ data }) => {
			const layers = [1, 9, 17, 21, 22, 23, 24, 25];
			return data.layers.filter((layer) => layers.includes(layer.id));
		})
	);
};

const OutlooksPage = () => {
	const [outlookDay, setOutlookDay] = React.useState("1");
	const { data, isLoading, isError, error } = useSPCOutlookLayers();

	if (isLoading) return <p>...Loading</p>;
	if (isError) return <p>{error.message}</p>;

	return (
		<PageWrapper>
			<Navbar />
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				{data ? (
					data.data?.map((layer) => (
						<OutlookMap key={layer.id} outlookLayerId={layer.id} />
					))
				) : (
					<p>...whoops!</p>
				)}
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
