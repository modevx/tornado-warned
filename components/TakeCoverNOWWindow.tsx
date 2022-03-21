import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { useTornadoWarningsTest } from "../services/NationalWeatherService";

const TakeCoverNOWWindow = () => {
	const { isLoading, error, data } = useTornadoWarningsTest();

	const testAlert = [
		{
			areaDesc: "Atkinson, GA; Clinch, GA; Ware, GA",
			effective: "2022-03-19T17:29:00-04:00",
			expires: "2022-03-19T18:00:00-04:00",
			severity: "Extreme",
			certainty: "Observed",
			urgency: "Immediate",
			event: "Tornado Warning",
			instruction:
				"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nHeavy rainfall may hide this tornado. Do not wait to see or hear the\ntornado. TAKE COVER NOW!",
		},
	];

	return (
		<div className='bg-red-500'>
			<h2>TAKE COVER NOW!</h2>
			<div className='card'>
				<DataTable value={testAlert} responsiveLayout='scroll'>
					<Column field='areaDesc' header='Areas'></Column>
					<Column field='effective' header='effective'></Column>
					<Column field='expires' header='expires'></Column>
					<Column field='instruction' header='instruction'></Column>
				</DataTable>
			</div>
		</div>
	);
};

export default TakeCoverNOWWindow;
