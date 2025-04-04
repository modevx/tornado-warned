import {
  CAT_OUTLOOK_STYLES,
  PROB_TORNADO_STYLES,
  PROB_WIND_HAIL_STYLES,
  PROB_DAYS_4_8_STYLES,
} from "constants/convective-outlooks";
import { rewindAlbersGeoPath } from "utils/geometry";
import { useOutlookLayerById } from "services/convective-outlook-mapserver";

import { albersGeoPath, albersStatesGeoJson } from "utils/geometry";

import { ConusStatesMap } from "components/_shared/Maps";

export const CategoricalMap = ({ catLayer }) => {
  const { id, name } = catLayer;
  const { data: features } = useOutlookLayerById(id);
  let showConvFeatures = false;
  if (features) showConvFeatures = hasConvectiveFeatures(features);

  return showConvFeatures ? (
    // <FullHeightWidthContainer>
    // <MapServerLayerName name={name} />
    <ConusStatesMap>
      <CategoricalFeatures features={features} />
    </ConusStatesMap>
  ) : // </FullHeightWidthContainer>
  null;
};
export const ProbabilisticTornadoMap = ({ probLayer, sigLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { id: sigLayerId } = sigLayer;
  const { data: probFeatures } = useOutlookLayerById(probLayerId);
  const { data: sigFeatures } = useOutlookLayerById(sigLayerId);
  let showProbFeatures = false;
  let showSigFeatures = false;
  if (probFeatures) showProbFeatures = hasConvectiveFeatures(probFeatures);
  if (sigFeatures) showSigFeatures = hasConvectiveFeatures(sigFeatures);

  return showProbFeatures ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />
      <ConusStatesMap>
        <g>
          <MappedProbTornadoFeatures features={probFeatures} />

          {showSigFeatures ? (
            <MappedHatchedSigFeatures features={sigFeatures} />
          ) : null}
        </g>
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
};
export const ProbabilisticWindHailMap = ({ probLayer, sigLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { id: sigLayerId } = sigLayer;
  const { data: probFeatures } = useOutlookLayerById(probLayerId);
  const { data: sigFeatures } = useOutlookLayerById(sigLayerId);
  let showProbFeatures = false;
  let showSigFeatures = false;
  if (probFeatures) showProbFeatures = hasConvectiveFeatures(probFeatures);
  if (sigFeatures) showSigFeatures = hasConvectiveFeatures(sigFeatures);

  return showProbFeatures ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />
      <ConusStatesMap>
        <g>
          <MappedProbWindHailFeatures features={probFeatures} />

          {showSigFeatures ? (
            <MappedHatchedSigFeatures features={sigFeatures} />
          ) : null}
        </g>
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
};
export const Days4_8_ProbabilisticMap = ({ probLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { data: probFeatures } = useOutlookLayerById(probLayerId);
  let showProbFeatures = false;
  if (probFeatures) showProbFeatures = hasConvectiveFeatures(probFeatures);

  return showProbFeatures ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />
      <ConusStatesMap>
        <g>
          <MappedProbDays4_8Features features={probFeatures} />
        </g>
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
};

// ! ---> SUB-COMPONENTS
// const CategoricalLegend = ({ styles }) => {
//   const stylesArr = Object.values(styles);

//   return (
//     <div className="text-xs flex justify-center mt-10 mb-4 ">
//       <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center">
//         {stylesArr.map(({ bgColor, textColor, label }) => {
//           return (
//             <div
//               key={label}
//               style={{ backgroundColor: `${bgColor}` }}
//               className="p-2 rounded"
//             >
//               <span
//                 style={{ color: `${textColor}` }}
//                 className="block text-black text-xs lg:text-base text-center font-bold uppercase"
//               >
//                 {label}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
const FullHeightWidthContainer = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};
const MapServerLayerName = ({ name }) => {
  return (
    <div className="text-center">
      <span>{name}</span>
    </div>
  );
};
// CATEGORICAL
const CategoricalFeatures = ({ features }) => {
  return hasConvectiveFeatures(features) ? (
    <g>
      {features.map((feature) => {
        const key = createConvectiveFeatureKey(feature);
        const color = CAT_OUTLOOK_STYLES[feature.properties.dn].color;
        return <ConvectiveFeature key={key} color={color} feature={feature} />;
      })}
    </g>
  ) : null;
};
export const CategoricalFeatureOutlines = ({ features }) => {
  return hasConvectiveFeatures(features) ? (
    <g>
      {features.map((feature) => {
        const key = createConvectiveFeatureKey(feature);
        const color = CAT_OUTLOOK_STYLES[feature.properties.dn].color;
        return (
          <ConvectiveFeatureOutline key={key} color={color} feature={feature} />
        );
      })}
    </g>
  ) : null;
};
// PROBABILISTIC
const MappedProbTornadoFeatures = ({ features }) => {
  return features.map((feature) => {
    const key = createConvectiveFeatureKey(feature);
    return <ProbabilisticTornadoFeature key={key} feature={feature} />;
  });
};
const ProbabilisticTornadoFeature = ({ feature }) => {
  const color = PROB_TORNADO_STYLES[feature.properties.dn].color;
  return <ConvectiveFeature feature={feature} color={color} />;
};
const MappedProbWindHailFeatures = ({ features }) => {
  return features.map((feature) => {
    const key = createConvectiveFeatureKey(feature);
    return <ProbabilisticWindHailFeature key={key} feature={feature} />;
  });
};
const ProbabilisticWindHailFeature = ({ feature }) => {
  const color = PROB_WIND_HAIL_STYLES[feature.properties.dn].color;
  return <ConvectiveFeature feature={feature} color={color} />;
};
const MappedProbDays4_8Features = ({ features }) => {
  return features.map((feature) => {
    const key = createConvectiveFeatureKey(feature);
    return <ProbabilisticDays4_8Feature key={key} feature={feature} />;
  });
};
const ProbabilisticDays4_8Feature = ({ feature }) => {
  const color = PROB_DAYS_4_8_STYLES[feature.properties.dn].color;
  return <ConvectiveFeature feature={feature} color={color} />;
};
// SIGNIFICANT (hatched)
const MappedHatchedSigFeatures = ({ features }) => {
  return features.map((feature) => {
    const key = createConvectiveFeatureKey(feature);
    return <HatchedSignificantFeature key={key} feature={feature} />;
  });
};
const HatchedSignificantFeature = ({ feature }) => {
  return (
    <>
      <defs>
        <pattern
          id="hatchPattern"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2"
            stroke="#000"
            strokeWidth={1}
          />
        </pattern>
      </defs>
      <path
        d={rewindAlbersGeoPath(feature)}
        fill="url(#hatchPattern)"
        stroke="#000"
        // fillOpacity={0.7}
        // strokeOpacity={0.9}
        strokeWidth={1}
      />
    </>
  );
};
// SINGLE CONVECTIVE FEATURE SVG PATH
const ConvectiveFeature = ({ feature, color }) => (
  <path
    d={rewindAlbersGeoPath(feature)}
    fill={color}
    stroke={color}
    fillOpacity={0.6}
    strokeWidth={3}
  />
);
const ConvectiveFeatureOutline = ({ feature, color }) => (
  <path
    d={rewindAlbersGeoPath(feature)}
    stroke={color}
    fillOpacity={0.2}
    strokeWidth={2}
  />
);
// ! ---> UTILS
const createConvectiveFeatureKey = (feature) => {
  return `${feature.properties.idp_source}-${feature.id}`;
};
const hasConvectiveFeatures = (features) => {
  // SPC MapServer returns single feature obj with [dn:0] if no convective features
  let isValidFeatures = false;

  if (features) {
    if (features[0].properties.dn > 0) isValidFeatures = true;
  }

  return isValidFeatures;
};
