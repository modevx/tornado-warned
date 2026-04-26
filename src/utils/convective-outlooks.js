export const convectiveFeatureKey = (feature) => {
  const { idp_source, objectid } = feature.properties;

  return `${idp_source}_${objectid}`;
};
export const returnsValidCIGFeatures = (features) => {
  return features?.length > 0 ?? false;
};
export const returnsValidConvectiveFeatures = (features) => {
  return features?.some((feature) => feature?.properties?.dn > 0) ?? false;
};
// TODO: depricate
export const isIntensityFeature = (feature) => {
  // not all feature response payloads include 'label' field
  return feature.properties.label?.includes("CIG");
};
export const includesCIGs = (layerData) => {
  return Object.keys(layerData).includes("CIG_LAYER_ID");
};
