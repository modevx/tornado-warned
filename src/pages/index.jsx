import React from "react";
import { Button, Form, Radio } from "react-daisyui";

import { PageLayout } from "components";
import { AlertPolygonMap, AlertStats } from "features/nws-alerts";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks/components";
import {
	fetchOutlookLayerFeatures,
	useAllLayersAndTables,
	useLegendLayersQuery,
} from "services/arcgis-server-convective-outlooks/service";

const HomePage = () => {
	const alertStats = { warningCount: 0, watchCount: 0 };
	// ----------------------------
	const { data: allLayers, error: allLayersError } = useAllLayersAndTables();
	// if (allLayers) console.log(">> allLayers\n", allLayers);

	const { data: legendLayers, error: legendLayersError } =
		useLegendLayersQuery();
	// if (legendLayers) console.log(">> legendLayers\n", legendLayers);
	// ----------------------------
	// const [selectedLayerId, setSelectedLayerId] = React.useState(1);
	const [outlookFeatures, setOutlookFeatures] = React.useState([]);
	// ----------------------------

	const handleOutlookSelection = async (e) => {
		// console.log(">> handleOutlookSelection: ", e.target.value);
		const layerId = e.target.value;
		const features = await fetchOutlookLayerFeatures(layerId);
		setOutlookFeatures(features);
	};

	return (
		<PageLayout>
			{/* <AlertStats stats={alertStats} /> */}
			{/* <AlertPolygonMap /> */}
			<div>
				{/* <OutlookDaySelector onChangeHandler={handleSelectedDay} /> */}
				<Form className='grid grid-cols-3' onChange={handleOutlookSelection}>
					{allLayers &&
						allLayers.map(({ id, name }) => (
							<OptionRadio title={`(${id}) ${name}`} value={id} key={name} />
						))}
				</Form>

				<ConvectiveOutlookMap arrFeatures={outlookFeatures} />
			</div>
		</PageLayout>
	);
};

export default HomePage;

const OutlookDaySelector = ({ onChangeHandler }) => {
	return (
		<div className='flex items-center justify-center'>
			<span className='mr-10'>Convective Outlook Day:</span>
			<Form className='flex flex-row' onChange={onChangeHandler}>
				<OptionRadio title='1' value={0} defaultChecked />
				<OptionRadio title='2' value={8} />
				<OptionRadio title='3' value={16} />
			</Form>
		</div>
	);
};

const OptionRadio = ({ title, value, ...rest }) => {
	return (
		<Form.Label title={title}>
			<Radio
				name='outlookDays'
				value={value}
				// className='ml-3'
				size='xs'
				{...rest}
			/>
		</Form.Label>
	);
};

const SubLayerSelector = ({ allLayers, selectedDay, onClickHandler }) => {
	const subLayers = getSubLayerArr({ allLayers, selectedDay });

	return (
		<div className='flex flex-col justify-center'>
			{subLayers.map(({ id, name }) => {
				const label = createSubLayerSelectBtnLabelText(name);

				return (
					<Button
						key={name}
						className='mb-3 text-2xs'
						onClick={() => onClickHandler(id)}
					>
						{label}
					</Button>
				);
			})}
		</div>
	);
};

const getSubLayerArr = ({ allLayers, selectedDay }) => {
	const selectedLayer = allLayers.find(({ id }) => id == selectedDay);
	return selectedLayer.subLayers;
};

const createSubLayerSelectBtnLabelText = (name) => {
	const dayRemoved = name.replace(/^.{6}/, "");
	const label = dayRemoved.toLowerCase().replace(" outlook", "");
	return label;
};
