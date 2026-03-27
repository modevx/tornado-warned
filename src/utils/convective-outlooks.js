export const hasConvectiveFeatures = (features) => {
  return features?.some((feature) => feature?.properties?.dn > 0) ?? false;
};

export const createConvectiveFeatureKey = (feature) => {
  return `${feature.properties.idp_source}-${feature.id}`;
};
