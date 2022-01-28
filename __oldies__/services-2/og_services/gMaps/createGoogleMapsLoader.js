import { Loader } from '@googlemaps/js-api-loader';

export const createGoogleMapsLoader = (apiKey, version, libraries) => {
	return new Loader({
		apiKey,
		version,
		libraries,
	});
};
