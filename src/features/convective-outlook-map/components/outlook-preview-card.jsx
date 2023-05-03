import { Basemap } from "components";
import { OutlookSVGPathGroup } from "./outlook-svg-path-group";
import { Card } from "react-daisyui";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const OutlookPreviewCard = ({ day, featureCollection }) => {
  const {
    properties: { valid, expire },
  } = featureCollection[0];

  return (
    <Card className="rounded-md my-4 bg-stone-800 cursor-pointer md:mx-4 hover:scale-105">
      <Basemap>
        <OutlookSVGPathGroup featuresARR={featureCollection} />
      </Basemap>
      <Card.Body>
        <Card.Title className="uppercase text-red-500">{`Day ${day} Outlook`}</Card.Title>
        {/* <div className='flex justify-between'> */}
        <div className="flex justify-between">
          <span className="font-bold">FROM:</span>&nbsp;
          <span>{dayjs(valid).format(`ddd MMM D, YYYY - HHmm`)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">TO:</span>&nbsp;
          <span>{dayjs(expire).format(`ddd MMM D, YYYY - HHmm`)}</span>
        </div>
        {/* </div> */}
      </Card.Body>
    </Card>
  );
};
