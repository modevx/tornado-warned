import * as topojson from "topojson-client";
import AlbersTopoJSONMap from "components/_constants/albers-map.topo.json";
import CountyWarningAreas from "components/_constants/county-warning-areas.topo.json";
import PublicForecastZones from "components/_constants/public-forecast-zones.topo.json";

// -- ALBERS MAP FEATURES
export const albersNation = topojson.feature(AlbersTopoJSONMap, "nation");
export const albersStatesMeshed = topojson.mesh(
	AlbersTopoJSONMap,
	AlbersTopoJSONMap.objects.states
);
export const albersCounties = topojson.feature(AlbersTopoJSONMap, "counties");
export const albersCountiesMeshed = topojson.mesh(
	AlbersTopoJSONMap,
	AlbersTopoJSONMap.objects.counties
);
// -- FROM SHAPEFILES
export const countyWarningAreasMeshed = topojson.mesh(
	CountyWarningAreas,
	CountyWarningAreas.objects.w_08mr23
);
export const publicForecastZonesMeshed = topojson.mesh(
	PublicForecastZones,
	PublicForecastZones.objects.z_19se23
);
