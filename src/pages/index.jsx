import React from "react";
import { Form, Radio } from "react-daisyui";

import { PageLayout } from "components";
import { AlertPolygonMap, AlertStats } from "features/nws-alerts";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks/components";
import {
  useAllLayersAndTables,
  useLayerGeoJSONQuery,
  useLegendLayersQuery,
} from "services/arcgis-server-convective-outlooks/service";

const HomePage = () => {
  const alertStats = { warningCount: 0, watchCount: 0 };
  const { data: allLayersAndTables, error: allLayersAndTablesError } =
    useAllLayersAndTables();
  const { data: legendLayers, error: legendLayersError } =
    useLegendLayersQuery();

  const [selectedDay, setSelectedDay] = React.useState("1");
  const [selectedLayer, setSelectedLayer] = React.useState("1");

  const handleOutlookDaySelect = (e) => {
    setSelectedDay(e.target.value);
    setSelectedLayer(e.target.value);
  };

  const handleLayerOnSelect = (e) => {
    setSelectedLayer(e.target.value);
  };

  if (allLayersAndTables)
    console.log(">> allLayersAndTables\n", allLayersAndTables);
  if (legendLayers) console.log(">> legendLayers\n", legendLayers);

  return (
    <PageLayout>
      {/* <AlertStats stats={alertStats} /> */}
      <AlertPolygonMap />
      <div>
        <OutlookDaySelector onChangeHandler={handleOutlookDaySelect} />
        <OutlookDaySubLayerSelector
          selectedDay={selectedDay}
          onSelectHandler={handleLayerOnSelect}
        />
        <h1>{selectedLayer}</h1>
        <ConvectiveOutlookMap />
      </div>
    </PageLayout>
  );
};

export default HomePage;

const OutlookDaySelector = ({ onChangeHandler }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="mr-10">Convective Outlook Day:</span>
      <Form className="flex flex-row" onChange={onChangeHandler}>
        <Form.Label title="1">
          <Radio
            name="outlookDays"
            value="0"
            className="ml-3"
            size="xs"
            defaultChecked
          />
        </Form.Label>
        <Form.Label title="2">
          <Radio name="outlookDays" value="8" className="ml-3" size="xs" />
        </Form.Label>
        <Form.Label title="3">
          <Radio name="outlookDays" value="16" className="ml-3" size="xs" />
        </Form.Label>
      </Form>
    </div>
  );
};

const OutlookDaySubLayerSelector = ({ selectedDay, onSelectHandler }) => {
  // const subLayersIds = allLayersAndTables.filter(
  //   ({ id }) => id === selectedDay
  // );
  // const {id, name} = allLayersAndTables[selectedDay].subLayers
  return null;
};

const getSubLayerIds = ({ allLayers, selectedDay }) => {
  const selectedLayerData = allLayers.filter(({ id }) => id === selectedDay);
  const { subLayers } = selectedDay[0];
};
