import { Navbar, PageWrapper } from "components";
import { ConvectiveOutlookMap } from "components";

const OutlooksPage = () => {
	// const [outlookMap, setOutlookMap] = React.useState("day-1-convective");

	return (
		<PageWrapper>
			<Navbar />
			<div className='grow flex items-center justify-center'>
				<h1 className='text-center'>Convective Outlooks Page</h1>
			</div>
			{/* <OutlookMapView map={outlookMap} />
				<OutlookDaySelect
					value={{ outlookMap }}
					onChange={{ setOutlookMap }}
				/>
			*/}
		</PageWrapper>
	);
};

export default OutlooksPage;
