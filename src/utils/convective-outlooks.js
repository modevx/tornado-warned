export const hasConvectiveFeatures = (features) => {
  // SPC MapServer returns single feature obj with [dn:0] if no convective features
  let isValidFeatures = false;

  if (features) {
    console.log(features);
    // if (features[0].properties.dn > 0) isValidFeatures = true;
  }

  return isValidFeatures;
};

export const createConvectiveFeatureKey = (feature) => {
  return `${feature.properties.idp_source}-${feature.id}`;
};
