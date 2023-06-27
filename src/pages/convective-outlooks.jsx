import { PageLayout } from "components";
import { OutlookSection } from "features/convective-outlooks";

const ConvectiveOutlookScreen = () => {
	return (
		<PageLayout>
			<div className='lg:flex lg:justify-evenly lg:items-center'>
				<OutlookSection day={1} layerId={1} />
				<OutlookSection day={2} layerId={9} />
				<OutlookSection day={3} layerId={17} />
			</div>
		</PageLayout>
	);
};

export default ConvectiveOutlookScreen;
