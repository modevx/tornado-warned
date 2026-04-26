import { useState } from "react";
import { Button, Checkbox } from "react-daisyui";
import { PageLayout } from "components/_shared/PageLayout";
import { MAPSERVER_LAYERS, SPC_WX_OUTLKS_FEATURE_LAYERS } from "constants/convective-outlooks";
import {
  CategoricalMap,
  TornadoProbabilisticMap,
  HailWindProbabilisticMap,
  Days4_8ProbabilisticMap,
  SevereWxOutlookMap,
} from "components/convective_outlooks/ConvectiveOutlookMaps";

const ConvectiveOutlookScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [outlookDay, setOutlookDay] = useState(1);
  // const showModalHandler = (outlookDay) => {
  //   setOutlookDay(outlookDay);
  //   setIsOpen(true);
  // };
  // const closeModalHandler = () => {
  //   setIsOpen(false);
  // };

  return (
    <PageLayout>
      {/* <fieldset className="fieldset flex bg-gray-800 border-grey-300 rounded-box w-64 border p-4">
        <legend className="fieldset-legend">Outlooks Filter</legend>
        <label className="label"><Checkbox size="sm"/>Categorical</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Tornado</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Wind</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Hail</label>
      </fieldset> */}

      <OutlooksGrid>
        {/* {Object.entries(SPC_WX_OUTLKS_FEATURE_LAYERS).map(([key,obj]) => {
          return <SevereWxOutlookMap key={key} layerData={obj}/>
        })} */}
        {/* --- DAY 1 --- */}
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_1_CATEGORICAL}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_1_TORNADO}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_1_HAIL}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_1_WIND}/>
        {/* --- DAY 2 --- */}
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_2_CATEGORICAL}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_2_TORNADO}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_2_HAIL}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_2_WIND}/>
        {/* --- DAY 3 --- */}
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_3_CATEGORICAL}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_3_PROBABILISTIC}/>
        {/* --- DAYS 4-8 --- */}
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_4_PROBABILISTIC}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_5_PROBABILISTIC}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_6_PROBABILISTIC}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_7_PROBABILISTIC}/>
        <SevereWxOutlookMap layerData={SPC_WX_OUTLKS_FEATURE_LAYERS.DAY_8_PROBABILISTIC}/>
      </OutlooksGrid>
      {/* 
      <TextProductModal
        isOpen={isOpen}
        outlookDay={outlookDay}
        closeHandler={closeModalHandler}
      /> */}
    </PageLayout>
  );
};

export default ConvectiveOutlookScreen;

// SUB-COMPONENTS
const OutlooksGrid = ({ children }) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
};
// const OutlookTextModalBtn = ({ openHandler, outlookDay }) => (
//   <Button
//     variant="outline"
//     color="accent"
//     className="w-25"
//     size="xs"
//     onClick={() => openHandler(outlookDay)}
//   >
//     {`Day ${outlookDay} Details`}
//   </Button>
// );
// const OutlookGridItem = ({ dayNumber, showOutlookText }) => (
//   <div className="flex flex-col items-center md:flex-1 mb-5">
//     <DayInfo day={dayNumber} />
//     {/* <CategoricalMap outlookDay={dayNumber} /> */}
//     <OutlookTextModalBtn openHandler={showOutlookText} outlookDay={dayNumber} />
//   </div>
// );
