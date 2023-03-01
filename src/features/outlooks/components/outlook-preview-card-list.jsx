import { OutlookPreviewCard } from "./outlook-preview-card";

export const OutlookPreviewCardList = ({ outlooks }) => {
	return (
		<div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
			{outlooks
				? outlooks.map((outlook, index) => {
						const featureCollection = outlook?.data.features;

						return (
							<OutlookPreviewCard
								key={`outlook-${index}`}
								day={index + 1}
								featureCollection={featureCollection}
							/>
						);
				  })
				: null}
		</div>
	);
};
