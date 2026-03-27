import { CAT_OUTLOOK_STYLES, PROB_TORNADO_STYLES, PROB_WIND_HAIL_STYLES, PROB_DAYS_4_8_STYLES } from "styles/convective-outlook-styles";
import { rewindAlbersGeoPath } from "utils/geometry";
import { createConvectiveFeatureKey, hasConvectiveFeatures } from "utils/convective-outlooks";
import { useOutlookLayerById } from "services/convective-outlook-mapserver";

import { albersGeoPath, albersStatesGeoJson } from "utils/geometry";

import { ConusStatesMap } from "components/_shared/Maps";

export const CategoricalMap = ({ catLayer }) => {
  const { id, name } = catLayer;
  const { data: features } = useOutlookLayerById(id);
  let showConvFeatures = false;
  if (features) showConvFeatures = hasConvectiveFeatures(features);

  return showConvFeatures ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={name} />
      <ConusStatesMap>
        <CategoricalFeatures features={features} />
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
};
export const ProbabilisticTornadoMap = ({ probLayer }) => {
  const {id: layerID, name: layerName} = probLayer;
  const { data: features } = useOutlookLayerById(layerID);

  return hasConvectiveFeatures(features) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={layerName} />

      <ConusStatesMap>
          <ProbabilisticTornadoFeatures features={features} />
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
};
export const ProbabilisticWindHailMap = ({ probLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { data: probFeatures } = useOutlookLayerById(probLayerId);

  return hasConvectiveFeatures(probFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />

      <ConusStatesMap>
        <g>
          <ProbabilisticWindHailFeatures features={probFeatures} />
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
        return <ConvectiveFeaturePath key={key} color={color} feature={feature} />;
      })}
    </g>
  ) : null;
};

// PROBABILISTIC
const ProbabilisticTornadoFeatures = ({ features }) => {
  return features.map((feature) => {
    let isConditionalIntensityGroup = feature.properties.label.includes("CIG");
    let color = null;
    if(!isConditionalIntensityGroup) {
      color = PROB_TORNADO_STYLES[feature.properties.dn].color;
    }
    const key = createConvectiveFeatureKey(feature);

    return (
      isConditionalIntensityGroup
      ? <ConditionalIntensityGroup key={key} feature={feature}/>
      : <ConvectiveFeaturePath key={key} feature={feature} color={color} />
    )
  });
};
const ProbabilisticWindHailFeatures = ({ features }) => {
  return features.map((feature) => {
    let isConditionalIntensityGroup = feature.properties.label.includes("CIG");
    let color = null;
    if(!isConditionalIntensityGroup) {
      color = PROB_WIND_HAIL_STYLES[feature.properties.dn].color;
    }
    const key = createConvectiveFeatureKey(feature);

    return (
      isConditionalIntensityGroup
      ? <ConditionalIntensityGroup key={key} feature={feature}/>
      : <ConvectiveFeaturePath key={key} feature={feature} color={color} />
    )
  });
};
const MappedProbDays4_8Features = ({ features }) => {
  return features.map((feature) => {
    const key = createConvectiveFeatureKey(feature);
    return <ProbabilisticDays4_8Feature key={key} feature={feature} />;
  });
};
const ProbabilisticDays4_8Feature = ({ feature }) => {
  console.log("ProbabilisticDays4_8Feature >>>\n", feature);
  const color = PROB_DAYS_4_8_STYLES[feature.properties.dn]?.color ?? "rgb(120,120,120)";
  return <ConvectiveFeaturePath feature={feature} color={color} />;
};

const ConditionalIntensityGroup = ({ feature }) => {
const label = feature.properties.label;  

  return (
    <>
      <defs>
        <pattern id="CIG1" width="8" height="8" patternUnits="userSpaceOnUse">
          <path
            d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2"
            stroke="#000"
            strokeWidth={1}
            strokeDasharray="4,4"
          />
        </pattern>
        <pattern id="CIG2" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2" stroke="#000" strokeWidth={1} />
        </pattern>
        <pattern id="CIG3" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0,10 L10,0" stroke="#000" strokeWidth={1}/>
          <path d="M0,0 L10,10" stroke="#000" strokeWidth={1}/>
        </pattern>
      </defs>
      <path
        d={rewindAlbersGeoPath(feature)}
        fill={`url(#${label})`}
        stroke="#000"
        strokeWidth={1}
      />
    </>
  );
};

const ConvectiveFeaturePath = ({ feature, color }) => {
  return <path 
            d={rewindAlbersGeoPath(feature)} 
            fill={color} 
            stroke={color} 
            fillOpacity={0.6} 
            strokeWidth={3}
          />;
};

// ! ---> UTILS
