import { useState } from "react";
import rewind from "@turf/rewind";
import topojson from "topojson-client";
import { Button, Modal } from "react-daisyui";
import { geoAlbers, geoPath, geoTransform } from "d3";

import AlbersTopo from "components/_constants/albers-map.topo.json";
import { Basemap, BasemapFeatureSelector } from "components";
import { albersCounties } from "components/_constants/map-features";
import { TornadoWarningAlert, SevereStormWarningAlert } from "./AlertCards";
import {
  useNwsAlertsByEvent,
  EVENTS,
  FAKE_ALERTS,
  SITUATIONS,
} from "services/nws-api-web-service";

const projection = geoAlbers();
const d3GeoPath = geoPath(projection);

export const ActiveAlertMap = () => {
  const { data: tor_warn } = useNwsAlertsByEvent(EVENTS.tor_warn);
  const { data: tor_watch } = useNwsAlertsByEvent(EVENTS.tor_watch);
  const { data: st_warn } = useNwsAlertsByEvent(EVENTS.st_warn);
  const { data: st_watch } = useNwsAlertsByEvent(EVENTS.st_watch);

  const fake_tor_warn = FAKE_ALERTS.tor_warn;
  const fake_tor_watch = FAKE_ALERTS.tor_watch;
  const fake_st_warn = FAKE_ALERTS.st_warn;
  const fake_st_watch = FAKE_ALERTS.st_watch;

  const [isOpen, setIsOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState(null);
  const [features, setFeatures] = useState({
    states: true,
    counties: false,
    cwas: false,
    pfzs: false,
  });

  const handleShowAlertModal = (alert) => {
    setAlertInfo(alert);
    setIsOpen((isOpen) => !isOpen);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleFeatureSelectorOnChange = (e) => {
    const { name } = e.target;
    setFeatures((prev) => Object.assign({ ...prev }, { [name]: !prev[name] }));
  };

  const testWatchHandler = () => {};

  return (
    <>
      <div className="flex items-center">
        {/* <BasemapFeatureSelector
					showValues={features}
					onChangeHandler={handleFeatureSelectorOnChange}
				/> */}
        <Basemap>
          <Warnings
            // features={tor_warn}
            features={fake_tor_warn}
            color="#f00"
            callback={handleShowAlertModal}
          />
          <Warnings
            // features={st_warn}
            features={fake_st_warn}
            color="#f60"
            callback={handleShowAlertModal}
          />
          <Watches
            // features={tor_watch}
            features={fake_tor_watch}
            fillColor="#ff0"
            onClickHandler={testWatchHandler}
          />
          {/* <Watches
            features={st_watch}
            features={fake_st_watch}
            fillColor="green"
            onClickHandler={testWatchHandler}
          /> */}
        </Basemap>
      </div>

      <AlertModal
        isOpen={isOpen}
        alertInfo={alertInfo}
        closeModalHandler={handleCloseModal}
      />
    </>
  );
};

// ------------
// --- WARNINGS
// ------------
const Warnings = ({ features, color, callback }) => {
  return (
    <>
      {features && features.length > 0 ? (
        <g>
          {features.map((feature) => {
            const { description: desc } = feature.properties;
            const isEmergency = checkStringForPhrase(desc, SITUATIONS.te);
            const isPDS = checkStringForPhrase(desc, SITUATIONS.pds);
            const polygonColor = isEmergency ? "#f0f" : isPDS ? "#09f" : color;

            return (
              <WarningPolygon
                key={feature.id}
                feature={feature}
                color={polygonColor}
                callback={callback}
              />
            );
          })}
        </g>
      ) : null}
    </>
  );
};

const WarningPolygon = ({ callback, color, feature }) => {
  return (
    <path
      d={d3GeoPath(rewind(feature.geometry, { reverse: true }))}
      fill="none"
      stroke={color}
      strokeWidth={1}
      onClick={() => callback(feature)}
    />
  );
};

// ------------
// --- WATCHES
// ------------

const Watches = ({ features, color, callback }) => {
  const isValidFeatures = features && features.length > 0;
  // const topoJson = Object.assign(AlbersTopo, {});

  return (
    <>
      {isValidFeatures
        ? features.map((feature) => {
            const affectedCountyIds = feature.properties.geocode.SAME;
            const watchFeature = topojson.merge(
              AlbersTopo,
              AlbersTopo.objects.counties.geometries.filter((geometry) => {
                const id = `0${geometry.id}`;
                return affectedCountyIds.includes(id);
              })
            );

            {
              /* const watchCounties = {
              counties: {
                type: "GeometryCollection",
                geometries: [],
              },
            }; */
            }

            // iterate counties in AlbersTopoJson
            // IF TopoJSON county id = SAME code in affectedCounties
            // THEN add county feature to alert TopoJSON
            {
              /* counties.geometries.forEach((county) => {
              const countySAME = `0${county.id}`;
              const isAffectedCounty =
                affectedCountyIds.includes(countySAME);

              if (isAffectedCounty) {
                watchCounties.counties.geometries = [
                  ...watchCounties.counties.geometries,
                  county,
                ];
              }
            }); */
            }

            // create new topoJSON with counties in watch
            {
              /* const watchTopoJSON = Object.assign(
              { ...AlbersTopo },
              { objects: watchCounties }
            ); */
            }

            {
              /* console.log("WATCH TOPOJSON >>\n", watchTopoJSON); */
            }

            // merge affected county features to create single watch polygon

            {
              /* console.log("WATCH FEATURE >>\n", watchFeature); */
            }

            {
              /* return (
              <path
                key={feature.id}
                d={d3GeoPath(watchFeature)}
                fill={fillColor}
              />
            ); */
            }
            return null;
          })
        : null}
    </>
  );
};

const WatchPolygon = ({ callback, color, feature }) => {
  return null;
};

const AlertPolygon = ({ feature, color, callback }) => {
  return (
    <path
      d={d3GeoPath(rewind(feature.geometry, { reverse: true }))}
      fill="none"
      stroke={color}
      strokeWidth={1}
      onClick={() => callback(feature)}
    />
  );
};

const AlertModal = ({ isOpen, closeModalHandler, alertInfo }) => {
  const ALERT_TYPE = {
    "Tornado Warning": TornadoWarningAlert,
    "Severe Thunderstorm Warning": SevereStormWarningAlert,
  };

  const AlertModal = ALERT_TYPE[alertInfo?.properties?.event];

  return (
    <>
      {alertInfo !== null ? (
        <Modal open={isOpen} className="overflow-auto">
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={closeModalHandler}
          >
            x
          </Button>
          <AlertModal alert={alertInfo} />
          {/* <Modal.Header className='font-bold'>Hello!</Modal.Header>
			<Modal.Body className='uppercase font-bold text-red-500'>
				{properties.event}
			</Modal.Body> */}
        </Modal>
      ) : null}
    </>
  );
};

// TODO: relo to utils/
function checkStringForPhrase(string, phrase) {
  return string.toLowerCase().includes(phrase);
}
