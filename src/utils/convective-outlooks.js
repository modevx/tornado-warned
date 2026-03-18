export const hasConvectiveFeatures = (features) => {
  // SPC MapServer returns single feature obj with [dn:0] if no convective features
  let isValidFeatures = false;

  if (features) {
    if (features.length > 0) {
      console.log("hasConvectiveFeatures >>> \n", features);
      isValidFeatures = true;
    }
    // if (features[0].properties.dn > 0) isValidFeatures = true;
  }

  return isValidFeatures;
};

export const createConvectiveFeatureKey = (feature) => {
  return `${feature.properties.idp_source}-${feature.id}`;
};
