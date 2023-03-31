import React from "react";
import { PageLayout } from "_shared/components";
import { AlertPolygonMap } from "features/alerts";
import {
	useActiveTornadoWarningTextProducts,
	useActiveTornadoWarningPolygons,
} from "services/nws-api-web-service";

const HomePage = () => {
	const { data: warningTextProducts } = useActiveTornadoWarningTextProducts();
	const { data: warningPolygons } = useActiveTornadoWarningPolygons();

	if (warningTextProducts)
		console.log("Warning Text Products:\n", warningTextProducts);
	if (warningPolygons) console.log("Warning Polygons:\n", warningPolygons);

	return (
		<PageLayout>
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
