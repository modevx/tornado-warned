import { Basemap } from "components/maps";
import { OutlookSVGPathGroup } from "./outlook-svg-path-group";

export const OutlookPreviewCard = ({ outlookDayGeoJson }) => (
  <Basemap>
    <OutlookSVGPathGroup geometry={outlookDayGeoJson} />
  </Basemap>
);
