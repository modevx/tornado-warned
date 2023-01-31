import { Footer as DaisyFooter } from "react-daisyui";
import { Link } from "./Link";

export const Footer = () => {
	const year = new Date().getFullYear();

	const URLS = Object.freeze({
		DEVS: {},
		NWS: {
			api_web_service: "https://www.weather.gov/documentation/services-web-api",
			awips_basemaps: "https://www.weather.gov/gis/AWIPSShapefiles",
			cloud_web_services: "https://www.weather.gov/gis/cloudgiswebservices",
			idpgis_rest_meta: "https://www.weather.gov/gis/IDP-GISRestMetadata",
		},
		SPC: {
			forecast_products: "https://www.spc.noaa.gov/products/",
			outlook_mapserver:
				"https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/SPC_wx_outlks/MapServer",
		},
		NOAA: {
			base_reflectivity_imgserver:
				"https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer",
		},
	});

	return (
		<DaisyFooter className='p-10 bg-neutral text-neutral-content'>
			<div>
				<DaisyFooter.Title>National Weather Service</DaisyFooter.Title>
				<Link href={URLS.NWS.api_web_service}>API Web Service</Link>
				<Link href={URLS.NWS.awips_basemaps}>AWIPS Basemaps</Link>
				<Link href={URLS.NWS.cloud_web_services}>Cloud Web Services</Link>
				<Link href={URLS.NWS.idpgis_rest_meta}>IDP-GIS REST</Link>
			</div>
			<div>
				<DaisyFooter.Title>Storm Prediction Center</DaisyFooter.Title>
				<Link href={URLS.SPC.forecast_products}>Forecast Products</Link>
				<Link href={URLS.SPC.outlook_mapserver}>
					Convective Outlook MapServer
				</Link>
			</div>
			<div>
				<DaisyFooter.Title>NOAA</DaisyFooter.Title>
				<Link href={URLS.NOAA.base_reflectivity_imgserver}>
					Base Reflectivity ImageServer
				</Link>
			</div>
			<div>
				<DaisyFooter.Title>DEVELOPERS</DaisyFooter.Title>
				<Link href={URLS.NOAA.base_reflectivity_imgserver}>
					Base Reflectivity ImageServer
				</Link>
			</div>
			<p className='text-center text-xs mb-3'>
				&copy; {year} MODEVX, LLC. &nbsp; All Rights Reserved.
			</p>
		</DaisyFooter>
	);
};
