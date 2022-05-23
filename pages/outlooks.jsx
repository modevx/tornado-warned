import dynamic from "next/dynamic";
import {
	Navbar,
	OutlookMap,
	OutlookMapView,
	OutlookSelectBtns,
	PageWrapper,
} from "components";

// const OutlookMapView = dynamic(() =>
// 	import("../components/OutlookMapView").then((mod) => mod.OutlookMapView)
// );

const OutlooksPage = () => {
	// const [layer, setLayer] = React.useState("1");

	return (
		<PageWrapper>
			<Navbar />
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				<OutlookSelectBtns />
				<OutlookMapView />
				{/* <OutlookMapView layer_id={layer} /> */}
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
