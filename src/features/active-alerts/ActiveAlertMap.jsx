import { useState } from "react";

import { USStateMap } from "components";
import { AlertModal } from "./AlertModal";
import {
  useNwsAlertsByEvent,
  EVENTS,
  FAKE_ALERTS,
} from "services/nws-api-web-service";
import { WarningPolygons, WatchPolygons } from "features/active-alerts";

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

  const handleShowAlertModal = (selectedAlert) => {
    setAlertInfo(selectedAlert);
    setIsOpen((isOpen) => !isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <USStateMap>
        <WarningPolygons
          // alerts={tor_warn}
          alerts={fake_tor_warn}
          showAlertModal={handleShowAlertModal}
        />
        <WarningPolygons
          // alerts={st_warn}
          alerts={fake_st_warn}
          showAlertModal={handleShowAlertModal}
        />
        <WatchPolygons
          // alerts={tor_watch}
          alerts={fake_tor_watch}
          showAlertModal={handleShowAlertModal}
        />
        <WatchPolygons
          // alerts={st_watch}
          alerts={fake_st_watch}
          showAlertModal={handleShowAlertModal}
        />
      </USStateMap>

      <AlertModal
        isOpen={isOpen}
        alert={alertInfo}
        closeHandler={handleCloseModal}
      />
    </>
  );
};
