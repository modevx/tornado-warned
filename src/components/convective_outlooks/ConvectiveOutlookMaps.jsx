import { CAT_OUTLOOK_STYLES, PROB_TORNADO_STYLES, PROB_WIND_HAIL_STYLES, PROB_DAYS_4_8_STYLES } from "styles/convective-outlook-styles";
import { rewindAlbersGeoPath } from "utils/geometry";
import { convectiveFeatureKey, hasConvectiveFeatures, isIntensityFeature } from "utils/convective-outlooks";
import { useOutlookLayerById } from "services/convective-outlook-mapserver";
import { albersGeoPath, albersStatesGeoJson } from "utils/geometry";
import { ConusStatesMap } from "components/_shared/Maps";
import { DayJSDateTime } from "components/_shared/DayJSDateTime";

// ! [ MAPS ]

export const CategoricalMap = ({ catLayer }) => {
  const { id, name } = catLayer;
  const { data: categoricalFeatures } = useOutlookLayerById(id);

  return hasConvectiveFeatures(categoricalFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={name} />
      <div className="flex justify-center text-sm">
        <DayJSDateTime 
          utcDate={categoricalFeatures[0].properties.valid}
          format="ddd h:mm A"
        />
        <span>&nbsp; - &nbsp;</span>
        <DayJSDateTime 
          utcDate={categoricalFeatures[0].properties.expire}
          format="ddd h:mm A"
        />
      </div>

      <ConusStatesMap>
        <g>
          {categoricalFeatures.map((feature) => {
            const key = convectiveFeatureKey(feature);
            const color = CAT_OUTLOOK_STYLES[feature.properties.dn].color;

            return <ConvectiveFeaturePath key={key} color={color} feature={feature} />;
          })}
        </g>
      </ConusStatesMap>

    </FullHeightWidthContainer>
  ) : null;
};
// TODO: brainstorm logic for displaying CIG features missing response payload label/label2 fields
export const ProbabilisticMap = ({ probLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { data: probabilisticFeatures } = useOutlookLayerById(probLayerId);

  return hasConvectiveFeatures(probabilisticFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />      

      <ConusStatesMap>
        <g>
          {probabilisticFeatures.map((feature) => {
            const key = convectiveFeatureKey(feature);
            let color = null;

            if(!isIntensityFeature(feature)) {
              color = PROB_DAYS_4_8_STYLES[feature.properties.dn]?.color ?? "rgb(120,120,120)";
            }

            return (
                isIntensityFeature(feature)
                ? <IntensityGroupPattern key={key} feature={feature}/>
                : <ConvectiveFeaturePath key={key} feature={feature} color={color} />
              )
          })}
        </g>
      </ConusStatesMap>

    </FullHeightWidthContainer>
  ) : null;
};
export const ProbabilisticTornadoMap = ({ probLayer }) => {
  const {id: layerID, name: layerName} = probLayer;
  const { data: probabilisticTornadoFeatures } = useOutlookLayerById(layerID);

  return hasConvectiveFeatures(probabilisticTornadoFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={layerName} />
      <div className="flex justify-center text-sm">
        <DayJSDateTime 
          utcDate={probabilisticTornadoFeatures[0].properties.valid}
          format="ddd h:mm A"
        />
        <span>&nbsp; - &nbsp;</span>
        <DayJSDateTime 
          utcDate={probabilisticTornadoFeatures[0].properties.expire}
          format="ddd h:mm A"
        />
      </div>

      <ConusStatesMap>
        <g>
          {
            probabilisticTornadoFeatures.map((feature) => {
              const key = convectiveFeatureKey(feature);
              let color = null;

              if(!isIntensityFeature(feature)) {
                color = PROB_TORNADO_STYLES[feature.properties.dn].color;
              }

              return (
                isIntensityFeature(feature)
                ? <IntensityGroupPattern key={key} feature={feature}/>
                : <ConvectiveFeaturePath key={key} feature={feature} color={color} />
              )
            })
          }
        </g>
      </ConusStatesMap>

    </FullHeightWidthContainer>
  ) : null;
};
export const ProbabilisticWindHailMap = ({ probLayer }) => {
  const { id: probLayerId, name: probLayerName } = probLayer;
  const { data: probabilisticWindHailFeatures } = useOutlookLayerById(probLayerId);

  return hasConvectiveFeatures(probabilisticWindHailFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={probLayerName} />
      <div className="flex justify-center text-sm">
        <DayJSDateTime 
          utcDate={probabilisticWindHailFeatures[0].properties.valid}
          format="ddd h:mm A"
        />
        <span>&nbsp; - &nbsp;</span>
        <DayJSDateTime 
          utcDate={probabilisticWindHailFeatures[0].properties.expire}
          format="ddd h:mm A"
        />
      </div>

      <ConusStatesMap>
          {
            <g>
              {
                probabilisticWindHailFeatures.map((feature) => {
                  const key = convectiveFeatureKey(feature);
                  let color = null;
                  
                  if(!isIntensityFeature(feature)) {
                    color = PROB_WIND_HAIL_STYLES[feature.properties.dn].color;
                  }
                  
                  return (
                    isIntensityFeature(feature)
                    ? <IntensityGroupPattern key={key} feature={feature}/>
                    : <ConvectiveFeaturePath key={key} feature={feature} color={color} />
                  )
                })
              }
            </g>
          }
      </ConusStatesMap>

    </FullHeightWidthContainer>
  ) : null;
};

// ! [ SUB-COMPONENTS ]

const IntensityGroupPattern = ({ feature }) => {
const { label, label2 } = feature.properties;  

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
          <path d="M7,-1 l-2,-2 M0,0 l8,8 M-1,7 l-2,-2" stroke="#000" strokeWidth={1}/>
        </pattern>
        <pattern id="CIG3" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0,10 L10,0" stroke="#000" strokeWidth={1}/>
          <path d="M0,0 L10,10" stroke="#000" strokeWidth={1}/>
        </pattern>
      </defs>
      <path
        d={rewindAlbersGeoPath(feature)}
        // pattern IDs match 1 of 3 available CIG labels returned from Outlook MapServer
        fill={`url(#${label})`}
        stroke="#000"
        strokeWidth={1}
      >
        <title>{label2}</title>
      </path>
    </>
  );
};
const ConvectiveFeaturePath = ({ feature, color }) => {
  // <title> = tooltip
  return <path 
            d={rewindAlbersGeoPath(feature)} 
            fill={color} 
            stroke={color} 
            fillOpacity={0.6} 
            strokeWidth={3}
          >
            <title>{feature?.properties?.label2}</title>
          </path>;
};
const FullHeightWidthContainer = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};
const MapServerLayerName = ({ name }) => {
  return (
    <div className="text-center text-lg">
      <span>{name}</span>
    </div>
  );
};

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
