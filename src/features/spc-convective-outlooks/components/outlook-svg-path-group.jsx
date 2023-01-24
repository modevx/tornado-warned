import { OUTLOOK_CATEGORIES } from "../constants/outlook-categories";
import { geoAlbers, geoPath } from "d3-geo";
import rewind from "@turf/rewind";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const OutlookSVGPathGroup = ({ geometry }) => {
  return geometry ? (
    <g>
      {geometry.features.map((feature, index) => {
        const {
          properties: { dn, valid, expire, idp_source },
        } = feature;

        const fLabel = OUTLOOK_CATEGORIES[dn]?.label;

        return (
          <path
            d={pathGen(rewind(feature, { reverse: true }))}
            key={`${idp_source}-${dn}`}
            fill={OUTLOOK_CATEGORIES[dn]?.fill}
            stroke={OUTLOOK_CATEGORIES[dn]?.stroke}
            fillOpacity={0.5}
            strokeWidth={2} // `${CONVECTIVE_OUTLOOK_CATEGORIES[dn]?.label}`
          />
        );
      })}
    </g>
  ) : null;
};
