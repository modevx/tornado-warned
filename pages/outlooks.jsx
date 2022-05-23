import React from "react";
import dynamic from "next/dynamic";
import { Navbar, OutlookMap, OutlookSelectBtns, PageWrapper } from "components";

const OutlookMapView = dynamic(() =>
	import("../components/OutlookMapView").then((mod) => mod.OutlookMapView)
);

const OutlooksPage = () => {
	const [outlookDay, setOutlookDay] = React.useState("1");

	return (
		<PageWrapper>
			<Navbar />
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				<div className='flex space-x-4 items-center'>
					<OutlookSelectBtns setOutlookDay={setOutlookDay} />
					{<span>{outlookDay}</span>}
				</div>
				<OutlookMapView />
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
