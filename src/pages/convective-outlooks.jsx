import { useState } from "react";
import { Button, Checkbox } from "react-daisyui";
import { PageLayout } from "components/_shared/PageLayout";
import { MAPSERVER_LAYERS } from "constants/convective-outlooks";
import {
  CategoricalMap,
  ProbabilisticTornadoMap,
  ProbabilisticWindHailMap,
  ProbabilisticMap,
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
      <fieldset className="fieldset flex bg-gray-800 border-grey-300 rounded-box w-64 border p-4">
        <legend className="fieldset-legend">Outlooks Filter</legend>
        <label className="label"><Checkbox size="sm"/>Categorical</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Tornado</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Wind</label>
        <label className="label"><Checkbox size="sm"/>Probabilistic Hail</label>
      </fieldset>

      <OutlooksGrid>
        {/* --- DAY 1 --- */}
        <CategoricalMap catLayer={MAPSERVER_LAYERS.day_1_categorical} />
        <ProbabilisticTornadoMap probLayer={MAPSERVER_LAYERS.day_1_prob_tornado}/>
        <ProbabilisticWindHailMap probLayer={MAPSERVER_LAYERS.day_1_prob_wind}/>
        <ProbabilisticWindHailMap probLayer={MAPSERVER_LAYERS.day_1_prob_hail}/>
        {/* --- DAY 2 --- */}
        <CategoricalMap catLayer={MAPSERVER_LAYERS.day_2_categorical} />
        <ProbabilisticTornadoMap probLayer={MAPSERVER_LAYERS.day_2_prob_tornado}/>
        <ProbabilisticWindHailMap probLayer={MAPSERVER_LAYERS.day_2_prob_wind}/>
        <ProbabilisticWindHailMap probLayer={MAPSERVER_LAYERS.day_2_prob_hail}/>
        {/* --- DAY 3 --- */}
        <CategoricalMap catLayer={MAPSERVER_LAYERS.day_3_categorical} />
        <ProbabilisticWindHailMap probLayer={MAPSERVER_LAYERS.day_3_prob}/>
        {/* --- DAYS 4-8 --- */}
        <ProbabilisticMap probLayer={MAPSERVER_LAYERS.day_4_prob} />
        <ProbabilisticMap probLayer={MAPSERVER_LAYERS.day_5_prob} />
        <ProbabilisticMap probLayer={MAPSERVER_LAYERS.day_6_prob} />
        <ProbabilisticMap probLayer={MAPSERVER_LAYERS.day_7_prob} />
        <ProbabilisticMap probLayer={MAPSERVER_LAYERS.day_8_prob} />
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
