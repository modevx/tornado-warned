import React from "react";
import rewind from "@turf/rewind";
import dayjs from "dayjs";
import dayJSlocFormat from "dayjs/plugin/localizedFormat";

import { albersGeoPath } from "utils";
import { CATEGORY_STYLES } from "../constants";
import { AlbersStateMap } from "components/AlbersStateMap";
import { ConvectiveOutlookFeatures } from "./ConvectiveOutlookFeatures";
import { useCategoricalOutlooksGeoJSON } from "services/arcgis-server-convective-outlooks/service";

dayjs.extend(dayJSlocFormat);

export const ConvectiveOutlookMap = () => {
  let features = [];
  const { data: arrOutlooksGeoJSON, error: outlookGeoJSONError } =
    useCategoricalOutlooksGeoJSON();

  if (arrOutlooksGeoJSON) {
    features = arrOutlooksGeoJSON[0].features;
  }

  return (
    <AlbersStateMap>
      {arrOutlooksGeoJSON && (
        <ConvectiveOutlookFeatures arrFeatures={features} />
      )}
    </AlbersStateMap>
  );
};
