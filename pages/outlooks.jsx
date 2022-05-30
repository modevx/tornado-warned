import Image from "next/image";
import { PageWrapper } from "components/common";

const OutlooksPage = () => {
	return (
		<PageWrapper>
			<div className='grow'>
				<h1 className='uppercase font-bold text-4xl'>
					Convective Outlooks Page
				</h1>
				<Image
					alt='Day 1 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day1otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Day 2 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day2otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Day 3 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day3otlk.gif'
					height={555}
					width={815}
				/>
				<Image
					alt='Days 4-8 Outlook Image'
					src='http://www.spc.noaa.gov/products/outlook/day48prob.gif'
					height={555}
					width={815}
				/>
			</div>
		</PageWrapper>
	);
};

export default OutlooksPage;
