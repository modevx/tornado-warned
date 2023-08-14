import * as topojson from "topojson-client";
import AlbersTopoJSONMap from "components/_constants/albers-map.topo.json";
import CountyWarningAreas from "components/_constants/county-warning-areas.topo.json";

// -- ALBERS MAP FEATURES
export const albersNation = topojson.feature(AlbersTopoJSONMap, "nation");
export const albersStates = topojson.feature(AlbersTopoJSONMap, "states");
export const albersCounties = topojson.feature(AlbersTopoJSONMap, "counties");

export const albersStatesMeshed = topojson.mesh(
	AlbersTopoJSONMap,
	AlbersTopoJSONMap.objects.states
);
export const albersCountiesMeshed = topojson.mesh(
	AlbersTopoJSONMap,
	AlbersTopoJSONMap.objects.counties
);

// -- NWS COUNTY WARNING AREAS
export const countyWarningAreas = topojson.feature(
	CountyWarningAreas,
	"w_08mr23"
);
export const countyWarningAreasMeshed = topojson.mesh(
	CountyWarningAreas,
	CountyWarningAreas.objects.w_08mr23
);
