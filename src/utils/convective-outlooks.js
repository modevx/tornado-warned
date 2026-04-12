export const convectiveFeatureKey = (feature) => {
  return `${feature.properties.idp_source}-${feature.id}`;
};
export const hasConvectiveFeatures = (features) => {
  return features?.some((feature) => feature?.properties?.dn > 0) ?? false;
};
export const isIntensityFeature = (feature) => {
  // not all feature response payloads include 'label' field
  return feature.properties.label?.includes("CIG");
};
