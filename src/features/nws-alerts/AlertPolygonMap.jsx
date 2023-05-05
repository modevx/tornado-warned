import React from "react";
import dayjs from "dayjs";
import LF from "dayjs/plugin/localizedFormat";

import { AlbersStateMap } from "components/AlbersStateMap";
import {
	ALERT_EVENTS,
	useFakeTornadoWarnings,
	useFakeTornadoWatches,
	useTornadoWarnings,
	useTornadoWatches,
} from "services/nws-api-web-service";
import { AlertPolygonGroup } from "./AlertPolygonGroup";

dayjs.extend(LF);

// TODO: figure out where to get Tornado Watch geometry data

export const AlertPolygonMap = () => {
	const fakeTornadoWarnings = useFakeTornadoWarnings();

	return (
		<AlbersStateMap>
			<AlertPolygonGroup alertsObj={fakeTornadoWarnings} fillColor='red' />
		</AlbersStateMap>
	);
};

// -- SUB-COMPONENTS

const NoActiveAlertsText = () => (
	<text className='text-3xl fill-white'>No Active Alerts</text>
);
