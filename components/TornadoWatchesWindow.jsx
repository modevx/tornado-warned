import dayjs from "dayjs";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useTornadoWatches, useTornadoWatchesTest } from "../hooks";

const TornadoWatchesWindow = () => {
	const { isLoading, error, data } = useTornadoWatches();
	let columns, formattedAreas;

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {JSON.stringify(error)}</p>;

	if (data) {
		columns = [
			{
				field: "areaDesc",
				header: "Areas",
			},
			{
				field: "effective",
				header: "Effective",
			},
			{
				field: "expires",
				header: "Expires",
			},
		];

		formattedAreas = data.map(alert => {
			return {
				areaDesc: alert.properties.areaDesc
					.split(";")
					.map(county => county.match(/[\w]+\b/))
					.join(", "),
				effective: dayjs(alert.properties.effective).format("h:mm a"),
				expires: dayjs(alert.properties.expires).format("h:mm a"),
			};
		});
	}

	return (
		<>
			<div className='bg-yellow-500 border-4 border-yellow-500 col-12 my-5 rounded-lg'>
				<h2 className='text-3xl'>TORNADO WATCHES</h2>
				<div className='card'>
					<DataTable
						value={formattedAreas}
						responsiveLayout='scroll'
						tableClassName='text-xs'
					>
						<Column field='areaDesc' header='Areas'></Column>
						<Column field='effective' header='Effective'></Column>
						<Column field='expires' header='Expires'></Column>
					</DataTable>
				</div>
			</div>
		</>
	);
};

export default TornadoWatchesWindow;
