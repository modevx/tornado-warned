import React from "react";
import { loadModules } from "esri-loader";

export const OutlookMapImageLayer = (props) => {
	const [mapImageLayer, setMapImageLayer] = React.useState(null);

	React.useEffect(() => {
		loadModules(["esri/layers/MapImageLayer"])
			.then(([MapImageLayer]) => {
				const layer = new MapImageLayer({
					url: props.layerProps.url,
				});

				setMapImageLayer(layer);
				props.map.add(layer);
			})
			.catch((err) => console.error(err));

		return function cleanup() {
			props.map.remove(layer);
		};
	}, [props]);

	return null;
};
