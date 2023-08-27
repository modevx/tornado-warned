import { useState } from "react";
import rewind from "@turf/rewind";
import * as topojson from "topojson-client";
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
    console.log("feature clicked");
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
            // alerts={tor_warn}
            alerts={fake_tor_warn}
            color="red"
            callback={handleShowAlertModal}
          />
          <Warnings
            // alerts={st_warn}
            alerts={fake_st_warn}
            color="orange"
            callback={handleShowAlertModal}
          />
          <Watches
            // alerts={tor_watch}
            alerts={fake_tor_watch}
            color="yellow"
            callback={testWatchHandler}
          />
          <Watches
            // alerts={st_watch}
            alerts={fake_st_watch}
            color="limegreen"
            callback={testWatchHandler}
          />
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
const Warnings = ({ alerts, color, callback }) => {
  return (
    <>
      {alerts && alerts.length > 0 ? (
        <g>
          {alerts.map((alert) => {
            const { description: desc } = alert.properties;
            const isEmergency = checkStringForPhrase(desc, SITUATIONS.te);
            const isPDS = checkStringForPhrase(desc, SITUATIONS.pds);
            const polygonColor = isEmergency ? "#f0f" : isPDS ? "#09f" : color;

            return (
              <WarningPolygon
                key={alert.id}
                feature={alert}
                color={polygonColor}
                onClick={callback}
              />
            );
          })}
        </g>
      ) : null}
    </>
  );
};

const WarningPolygon = ({ color, feature, onClick }) => {
  return (
    <path
      d={d3GeoPath(rewind(feature.geometry, { reverse: true }))}
      fill="none"
      stroke={color}
      strokeWidth={1}
      onClick={() => onClick(feature)}
    />
  );
};

// ------------
// --- WATCHES
// ------------

const Watches = ({ alerts, color, callback }) => {
  const isValidFeatures = alerts && alerts.length > 0;

  return (
    <>
      {isValidFeatures
        ? alerts.map((alert) => {
            const affectedCountyIds = alert.properties.geocode.SAME;
            // ! --- FIX TOPOJSON.MERGE ERROR ---
            const watchFeature = topojson.merge(
              AlbersTopo,
              AlbersTopo.objects.counties.geometries.filter((geometry) => {
                const id = `0${geometry.id}`;
                return affectedCountyIds.includes(id);
              })
            );

            return (
              <WatchPolygon
                key={alert.id}
                color={color}
                feature={watchFeature}
                onClick={callback}
              />
            );
          })
        : null}
    </>
  );
};

const WatchPolygon = ({ color, feature, onClick }) => {
  return (
    <path
      d={d3GeoPath(rewind(feature, { reverse: true }))}
      fill={color}
      onClick={() => onClick(feature)}
      opacity={0.7}
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
