import dynamic from "next/dynamic";
import { Navbar, OutlookMap, OutlookSelectBtns, PageWrapper } from "components";

// const OutlookMapView = dynamic(() =>
// 	import("../components/OutlookMapView").then((mod) => mod.OutlookMapView)
// );

const OutlooksPage = () => {
	// const [layer, setLayer] = React.useState("1");

	return (
		<PageWrapper>
			<Navbar />
			<div className='grow flex items-center justify-center'>
				<h1 className='text-center'>Convective Outlooks Page</h1>
			</div>
			{/* <OutlookMapView layer_id={layer} /> */}
			{/* <OutlookSelectBtns value={{ outlookMap }} onChange={{ setLayer }}/> */}
		</PageWrapper>
	);
};

export default OutlooksPage;
