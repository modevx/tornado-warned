import React from "react";
import { Button, Form, Radio } from "react-daisyui";

import { PageLayout } from "components";
import { AlertPolygonMap, AlertStats } from "features/nws-alerts";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks/components";
import {
  fetchConvectiveOutlookFeatures,
  useAllLayersAndTables,
  useLegendLayersQuery,
} from "services/arcgis-server-convective-outlooks/service";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="grid gap-4 grid-cols-4 grid-rows-3 bg-neutral-400 min-h-screen">
        <div className="row-span-2 bg-purple-300">Tornado Warnings</div>
        <div className="col-span-2 row-span-2 bg-red-400">
          NEXRAD/Alert Polygons
        </div>
        <div className="row-span-3 bg-green-300">Convective Outlooks</div>
        <div className="bg-yellow-200">Tornado Watches</div>
        <div className="bg-blue-300">Twitter Feed</div>
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
        <OptionRadio title="1" value={0} defaultChecked />
        <OptionRadio title="2" value={8} />
        <OptionRadio title="3" value={16} />
      </Form>
    </div>
  );
};

const OptionRadio = ({ title, value, ...rest }) => {
  return (
    <Form.Label title={title}>
      <Radio
        name="outlookDays"
        value={value}
        // className='ml-3'
        size="xs"
        {...rest}
      />
    </Form.Label>
  );
};

const SubLayerSelector = ({ allLayers, selectedDay, onClickHandler }) => {
  const subLayers = getSubLayerArr({ allLayers, selectedDay });

  return (
    <div className="flex flex-col justify-center">
      {subLayers.map(({ id, name }) => {
        const label = createSubLayerSelectBtnLabelText(name);

        return (
          <Button
            key={name}
            className="mb-3 text-2xs"
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
