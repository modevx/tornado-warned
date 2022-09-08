import Image from "next/image";
import { PageLayout } from "components";
import { useConvectiveOutlookQuery } from "features/SPCConvectiveOutlooks";

const OutlooksPage = () => {
	// const OUTLOOKS = [
	// 	{ day: "1", src: "http://www.spc.noaa.gov/products/outlook/day1otlk.gif" },
	// 	{ day: "2", src: "http://www.spc.noaa.gov/products/outlook/day2otlk.gif" },
	// 	{ day: "3", src: "http://www.spc.noaa.gov/products/outlook/day3otlk.gif" },
	// 	{
	// 		day: "4-8",
	// 		src: "http://www.spc.noaa.gov/products/outlook/day48prob.gif",
	// 	},
	// ];

	return (
		<PageLayout>
			<div className='grow mx-auto p-4'>
				<h1 className='uppercase font-bold text-4xl mb-5'>
					Convective Outlooks
				</h1>

				{/* {OUTLOOKS.map((outlook) => (
					<div key={outlook.day}>
						<h2 className='mb-2'>Day {outlook.day} Outlook</h2>
						<Image
							key={outlook.src}
							alt={`Day ${outlook.day} Outlook Image`}
							src={outlook.src}
							height={555}
							width={815}
						/>
					</div>
				))} */}

				<div>
					<h2 className='mb-2'>Day 1 Convective Outlook</h2>
					<Image
						alt='Day 1 Outlook Image'
						src='http://www.spc.noaa.gov/products/outlook/day1otlk.gif'
						height={555}
						width={815}
					/>
				</div>
				<div>
					<h2 className='mb-2'>Day 2 Convective Outlook</h2>
					<Image
						alt='Day 2 Outlook Image'
						src='http://www.spc.noaa.gov/products/outlook/day2otlk.gif'
						height={555}
						width={815}
					/>
				</div>
				<div>
					<h2 className='mb-2'>Day 3 Convective Outlook</h2>
					<Image
						alt='Day 3 Outlook Image'
						src='http://www.spc.noaa.gov/products/outlook/day3otlk.gif'
						height={555}
						width={815}
					/>
				</div>
				<div>
					<h2 className='mb-2'>Day 4 Convective Outlook</h2>
					<Image
						alt='Day 4 Outlook Image'
						src='http://www.spc.noaa.gov/products/outlook/day48prob.gif'
						height={555}
						width={815}
					/>
				</div>
			</div>
			{[1, 2, 3, 48].map((day) => (
				<ConvectiveOutlook day={day} />
			))}
		</PageLayout>
	);
};

const ConvectiveOutlook = ({ day }) => {
	const { data } = useConvectiveOutlookQuery(day);

	if (day) console.log(">> convective:\n", data);

	return (
		<div>
			{/* {data ? (
				<>
					<h2 className='mb-2'>{`Day ${
						day === 48 ? "4-8" : day
					} Convective Outlook`}</h2>
					<Image
						alt={`Day ${day} Outlook Image`}
						src='http://www.spc.noaa.gov/products/outlook/day48prob.gif'
						height={555}
						width={815}
					/>
				</>
			) : null} */}
		</div>
	);
};

export default OutlooksPage;
