import * as topojson from "topojson-client";
import AlbersTopoJSONMap from "components/topoJSON/albers-map.topo.json";
import CountyWarningAreas from "components/topoJSON/county-warning-areas.topo.json";
import PublicForecastZones from "components/topoJSON/public-forecast-zones.topo.json";

// -- ALBERS MAP FEATURES
export const nation = topojson.feature(AlbersTopoJSONMap, "nation");
export const meshedStates = topojson.mesh(
  AlbersTopoJSONMap,
  AlbersTopoJSONMap.objects.states
);
export const counties = topojson.feature(AlbersTopoJSONMap, "counties");
export const meshedCounties = topojson.mesh(
  AlbersTopoJSONMap,
  AlbersTopoJSONMap.objects.counties
);
// -- FROM SHAPEFILES
export const meshedCountyWarningAreas = topojson.mesh(
  CountyWarningAreas,
  CountyWarningAreas.objects.w_08mr23
);
export const meshedPublicForecastZones = topojson.mesh(
  PublicForecastZones,
  PublicForecastZones.objects.z_19se23
);
