import React from "react";
import { Stats } from "react-daisyui";

import { PageLayout } from "_shared/components";
import { AlertPolygonMap, AlertTextProduct } from "features/alerts";
import { ICONS } from "_shared/constants";

import {
	useActiveTornadoWarningTextProducts,
	useActiveTornadoWarningPolygons,
} from "services/nws-api-web-service";

const HomePage = () => {
	const { data: warningTextProducts } = useActiveTornadoWarningTextProducts();
	const { data: warningPolygons } = useActiveTornadoWarningPolygons();
	let warningCount = 0;

	// [?] DAISYUI: why do I need to desctructure for Stats.Stat to work?
	const { Stat } = Stats;

	if (warningTextProducts) {
		warningCount = warningTextProducts.length;
		console.log("Warning Text Products:\n", warningTextProducts);
	}
	if (warningPolygons) console.log("Warning Polygons:\n", warningPolygons);

	return (
		<PageLayout>
			<Stats>
				<Stats.Stat>
					<Stat.Item variant='title'>Active Warnings</Stat.Item>
					<Stat.Item variant='value'>{warningCount}</Stat.Item>
				</Stats.Stat>
			</Stats>

			<div className='bg-red-500 p-4'>
				<H1>Tornado Warnings</H1>
				<div className='h-[200px]'></div>
			</div>

			<div className='p-4'>
				<H1>Tornado Watches</H1>
				<div className='h-[200px]'></div>
			</div>
		</PageLayout>
	);
};

export default HomePage;

const H1 = ({ children }) => {
	return <h1 className='text-2xl font-bold'>{children}</h1>;
};
