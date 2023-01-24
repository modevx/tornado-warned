import { Basemap } from "components/maps";
import { OutlookSVGPathGroup } from "./outlook-svg-path-group";
import { Card } from "react-daisyui";

export const OutlookPreviewCard = ({ outlookDayGeoJson, day }) => (
  <Card className="rounded-md my-4 bg-stone-800 cursor-pointer md:mx-4 hover:scale-105">
    <Basemap>
      <OutlookSVGPathGroup geometry={outlookDayGeoJson} />
    </Basemap>
    <Card.Body>
      <Card.Title>{`Day ${day} Outlook`}</Card.Title>
    </Card.Body>
  </Card>
);
