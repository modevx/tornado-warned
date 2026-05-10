import { rewindAlbersGeoPath } from "utils/geometry";
import { 
  convectiveFeatureKey, 
  returnsValidCIGFeatures, 
  returnsValidConvectiveFeatures, 
  includesCIGs 
} from "utils/convective-outlooks";
import { useOutlookLayerById } from "services/convective-outlook-mapserver";
import { ConusStatesMap } from "components/_shared/Maps";
import { DayJSDateTime } from "components/_shared/DayJSDateTime";

export const SevereWxOutlookMap = ({ layerData }) => {
  const { MAP_TITLE, LAYER_ID } = layerData;
  const { data: convectiveFeatures } = useOutlookLayerById(LAYER_ID);

  return returnsValidConvectiveFeatures(convectiveFeatures) ? (
    <FullHeightWidthContainer>
      <MapServerLayerName name={MAP_TITLE}/>
      <ValidExpireDates validDate={convectiveFeatures[0].properties.valid} expireDate={convectiveFeatures[0].properties.expire}/>

      <ConusStatesMap>
          <ConvectiveFeatures features={convectiveFeatures}/>
          {includesCIGs(layerData) && <CIGFeatures layerData={layerData}/>}
      </ConusStatesMap>
    </FullHeightWidthContainer>
  ) : null;
}

// * --> SUB-COMPONENTS

const CIGFeatures = ({ layerData }) => {
  const { CIG_LAYER_ID } = layerData;
  const { data: cigFeatures } = useOutlookLayerById(CIG_LAYER_ID);

  return returnsValidCIGFeatures(cigFeatures) ? (
    <g>
      {
        cigFeatures.map(cigFeature => {
          const { label, label2 } = cigFeature.properties;  

          return (
            <>
              <defs>
                <pattern id="CIG1" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0,10 L10,0" stroke="#000" strokeWidth={1} strokeDasharray="10"/>
                </pattern>
                <pattern id="CIG2" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0,0 L10,10" stroke="#000" strokeWidth={1}/>
                </pattern>
                <pattern id="CIG3" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0,10 L10,0 M0,0 L10,10" stroke="#000" strokeWidth={1}/>
                </pattern>
              </defs>
              <path
                d={rewindAlbersGeoPath(cigFeature)}
                // ! pattern IDs match 1 of 3 available CIG labels returned from Outlook MapServer
                fill={`url(#${label})`}
                stroke="#000"
                strokeWidth={1}
              >
                <title>{label2}</title>
              </path>
            </>
          );
        })
      }
    </g>
  ) : null;
};
const ConvectiveFeatures = ({ features }) => {
  return (
    <g>
      {
        features.map(feature => {
          const { fill, stroke, label2 } = feature.properties;

          return (
            <path
              key={convectiveFeatureKey(feature)}
              d={rewindAlbersGeoPath(feature)}
              fill={fill}
              stroke={stroke}
              fillOpacity={0.6} 
              strokeWidth={3}
            >
              <title>{ label2 }</title>
            </path>
          )
        })
      }
    </g>
  )
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
const ValidExpireDates = ({ validDate, expireDate }) => {
  return (
    <div className="flex justify-center text-sm">
      <DayJSDateTime utcDate={validDate} format="ddd h:mm A"/>
      <span>&nbsp; - &nbsp;</span>
      <DayJSDateTime utcDate={expireDate} format="ddd h:mm A"/>
    </div>
  )
};