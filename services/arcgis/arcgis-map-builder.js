import { watch, when } from "@arcgis/core/core/reactiveUtils";
import config from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import WMSLayer from "@arcgis/core/layers/WMSLayer";

import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
// --
import { MAP_SERVICE_URLS } from "services/spc";
import {
  disableViewNavigation,
  setDefaultUiComponents,
} from "services/arcgis/utils";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
let watchHandle;

export const buildArcGISMap = async (container) => {
  if (app.mapView) {
    app.mapView.destroy();
  }

  const state_lines_layer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
    listMode: "hide",
  });
  const day_1_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day1.sub_layers.categorical,
    opacity: 0.4,
    title: "SPC Day 1 Categorical Outlook",
  });
  const day_2_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day2.sub_layers.categorical,
    opacity: 0.4,
    title: "SPC Day 2 Categorical Outlook",
  });
  const day_3_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day3.sub_layers.categorical,
    opacity: 0.4,
    title: "SPC Day 3 Categorical Outlook",
  });
  const day_4_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day4.sub_layers.probabilistic,
    opacity: 0.4,
    title: "SPC Day 4 Probabilistic Outlook",
  });
  const day_5_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day5.sub_layers.probabilistic,
    opacity: 0.4,
    title: "SPC Day 5 Probabilistic Outlook",
  });
  const day_6_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day6.sub_layers.probabilistic,
    opacity: 0.4,
    title: "SPC Day 6 Probabilistic Outlook",
  });
  const day_7_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day7.sub_layers.probabilistic,
    opacity: 0.4,
    title: "SPC Day 7 Probabilistic Outlook",
  });
  const day_8_cat = new FeatureLayer({
    url: MAP_SERVICE_URLS.day8.sub_layers.probabilistic,
    opacity: 0.4,
    title: "SPC Day 8 Probabilistic Outlook",
  });

  const map = new Map({
    basemap: "arcgis-dark-gray",
    layers: [
      state_lines_layer,
      day_1_cat,
      day_2_cat,
      day_3_cat,
      day_4_cat,
      day_5_cat,
      day_6_cat,
      day_7_cat,
      day_8_cat,
    ],
  });
  const view = new MapView({
    map: map,
    container,
    extent: {
      xmin: -109.03,
      ymin: 19.75,
      xmax: -79,
      ymax: 62,
      spatialReference: 4269,
    },
  });

  // app.layer = spc_wms_outlook_layer;
  app.map = map;
  app.view = view;

  watchHandle = app.view.when().then(async () => {
    const mapLayers = await app.view.get("map.allLayers");
    const mapJsonLayers = await mapLayers.toJSON();
    // mapJsonLayers.forEach((layer) => console.log(`${layer}\n`, layer.toJSON()));

    const wmsLayer = await app.map.get("layers");
    const wmsJsonLayers = await wmsLayer.toJSON();
    // console.log("app.map.layers >>\n", wmsJsonLayers[1].toJSON());

    // app.view.extent = spc_wms_outlook_layer.fullExtent;

    const layerList = new LayerList({
      view,
    });

    const legend = new Legend({
      view,
      basemapLegendVisible: true,
    });

    disableViewNavigation(app.view);
    setDefaultUiComponents(["attribution"], app.view);

    app.view.ui.add(layerList, "top-left");
    // app.view.ui.add(legend, "bottom-left");
    console.log(layerList.operationalItems.toJSON());
  });

  return cleanup;
};

function cleanup() {
  app.mapView?.destroy();
  watchHandle.remove();
}
