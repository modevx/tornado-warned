export const FAKE_TORNADO_WARNING_RESPONSE = {
	"@context": [
		"https://geojson.org/geojson-ld/geojson-context.jsonld",
		{
			"@version": "1.1",
			wx: "https://api.weather.gov/ontology#",
			"@vocab": "https://api.weather.gov/ontology#",
		},
	],
	type: "FeatureCollection",
	features: [
		{
			id: "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cfc4a659785586647af6c1966e98b739cd93ba67.001.1",
			type: "Feature",
			geometry: {
				type: "Polygon",
				coordinates: [
					[
						[-92.370000000000005, 30.699999999999999],
						[-92.340000000000003, 30.82],
						[-92.079999999999998, 30.850000000000001],
						[-92.140000000000001, 30.59],
						[-92.370000000000005, 30.699999999999999],
					],
				],
			},
			properties: {
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cfc4a659785586647af6c1966e98b739cd93ba67.001.1",
				"@type": "wx:Alert",
				id: "urn:oid:2.49.0.1.840.0.cfc4a659785586647af6c1966e98b739cd93ba67.001.1",
				areaDesc: "Evangeline, LA; St. Landry, LA",
				geocode: {
					SAME: ["022039", "022097"],
					UGC: ["LAC039", "LAC097"],
				},
				affectedZones: [
					"https://api.weather.gov/zones/county/LAC039",
					"https://api.weather.gov/zones/county/LAC097",
				],
				references: [],
				sent: "2022-08-22T19:14:00-05:00",
				effective: "2022-08-22T19:14:00-05:00",
				onset: "2022-08-22T19:14:00-05:00",
				expires: "2022-08-22T19:45:00-05:00",
				ends: "2022-08-22T19:45:00-05:00",
				status: "Actual",
				messageType: "Alert",
				category: "Met",
				severity: "Extreme",
				certainty: "Observed",
				urgency: "Immediate",
				event: "Tornado Warning",
				sender: "w-nws.webmaster@noaa.gov",
				senderName: "NWS Lake Charles LA",
				headline:
					"Tornado Warning issued August 22 at 7:14PM CDT until August 22 at 7:45PM CDT by NWS Lake Charles LA",
				description:
					"The National Weather Service in Lake Charles has issued a\n\n* Tornado Warning for...\nEast central Evangeline Parish in central Louisiana...\nNorth central St. Landry Parish in central Louisiana...\n\n* Until 745 PM CDT.\n\n* At 714 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Chicot State Park, or near Ville Platte, moving\neast at 10 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nVille Platte around 725 PM CDT.\nIndian Lake around 735 PM CDT.\nWhiteville and Grand Prairie around 745 PM CDT.\n\nThis includes Interstate 49 between mile markers 34 and 44.",
				instruction:
					"TAKE COVER NOW! Move to an interior room on the lowest floor of a\nsturdy building. Avoid windows. If you are outdoors, in a mobile\nhome, or in a vehicle, move to the closest substantial shelter and\nprotect yourself from flying debris.",
				response: "Shelter",
				parameters: {
					AWIPSidentifier: ["TORLCH"],
					WMOidentifier: ["WFUS54 KLCH 230014"],
					eventMotionDescription: [
						"2022-08-23T00:14:00-00:00...storm...279DEG...7KT...30.75,-92.29",
					],
					maxHailSize: ["Up to .75"],
					tornadoDetection: ["RADAR INDICATED"],
					BLOCKCHANNEL: ["EAS", "NWEM"],
					"EAS-ORG": ["WXR"],
					VTEC: ["/O.NEW.KLCH.TO.W.0023.220823T0014Z-220823T0045Z/"],
					eventEndingTime: ["2022-08-23T00:45:00+00:00"],
					WEAHandling: ["Imminent Threat"],
					CMAMtext: [
						"NWS: TORNADO WARNING in this area til 7:45 PM CDT. Take shelter now. Check media.",
					],
					CMAMlongtext: [
						"National Weather Service: TORNADO WARNING in this area until 7:45 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
					],
				},
			},
		},
	],
	title:
		"Tornado Warning events issued between Tue, Aug 16, 2022 12:00:00 AM +0000 and Tue, Aug 30, 2022 12:00:00 AM +0000",
	updated: "2022-08-23T00:16:40+00:00",
	pagination: {
		next: "https://api.weather.gov/alerts?start=2022-08-16T00:00:00Z&end=2022-08-30T00:00:00Z&message_type%5B0%5D=alert&event%5B0%5D=Tornado%20Warning&cursor=eyJ0IjoxNjYwNjkwNTAwLCJpIjoidXJuOm9pZDoyLjQ5LjAuMS44NDAuMC5lOGE2YjhkYWZiNDNlZWIzYWY1NGNlMDE0OTZhNjUwNzI1MWQ0NTQ3LjAwMS4xIn0%3D",
	},
};

export const FAKE_TORNADO_WATCH_RESPONSE = {
	"@context": [
		"https://geojson.org/geojson-ld/geojson-context.jsonld",
		{
			"@version": "1.1",
			wx: "https://api.weather.gov/ontology#",
			"@vocab": "https://api.weather.gov/ontology#",
		},
	],
	type: "FeatureCollection",
	features: [
		{
			id: "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cfc4a659785586647af6c1966e98b739cd93ba67.001.1",
			type: "Feature",
			geometry: {
				type: "Polygon",
				coordinates: [
					[
						[-92.370000000000005, 30.699999999999999],
						[-92.340000000000003, 30.82],
						[-92.079999999999998, 30.850000000000001],
						[-92.140000000000001, 30.59],
						[-92.370000000000005, 30.699999999999999],
					],
				],
			},
			properties: {
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9a59fbcd6a91f92f66bccb44ae51a0eb5176bff8.001.1",
				"@type": "wx:Alert",
				id: "urn:oid:2.49.0.1.840.0.9a59fbcd6a91f92f66bccb44ae51a0eb5176bff8.001.1",
				areaDesc:
					"Durham, NC; Edgecombe, NC; Franklin, NC; Granville, NC; Halifax, NC; Harnett, NC; Johnston, NC; Nash, NC; Vance, NC; Wake, NC; Warren, NC; Wayne, NC; Wilson, NC",
				geocode: {
					SAME: [
						"037063",
						"037065",
						"037069",
						"037077",
						"037083",
						"037085",
						"037101",
						"037127",
						"037181",
						"037183",
						"037185",
						"037191",
						"037195",
					],
					UGC: [
						"NCC063",
						"NCC065",
						"NCC069",
						"NCC077",
						"NCC083",
						"NCC085",
						"NCC101",
						"NCC127",
						"NCC181",
						"NCC183",
						"NCC185",
						"NCC191",
						"NCC195",
					],
				},
				affectedZones: [
					"https://api.weather.gov/zones/county/NCC063",
					"https://api.weather.gov/zones/county/NCC065",
					"https://api.weather.gov/zones/county/NCC069",
					"https://api.weather.gov/zones/county/NCC077",
					"https://api.weather.gov/zones/county/NCC083",
					"https://api.weather.gov/zones/county/NCC085",
					"https://api.weather.gov/zones/county/NCC101",
					"https://api.weather.gov/zones/county/NCC127",
					"https://api.weather.gov/zones/county/NCC181",
					"https://api.weather.gov/zones/county/NCC183",
					"https://api.weather.gov/zones/county/NCC185",
					"https://api.weather.gov/zones/county/NCC191",
					"https://api.weather.gov/zones/county/NCC195",
				],
				references: [],
				sent: "2022-04-07T15:12:00-04:00",
				effective: "2022-04-07T15:12:00-04:00",
				onset: "2022-04-07T15:12:00-04:00",
				expires: "2022-04-07T21:00:00-04:00",
				ends: "2022-04-07T21:00:00-04:00",
				status: "Actual",
				messageType: "Alert",
				category: "Met",
				severity: "Extreme",
				certainty: "Possible",
				urgency: "Future",
				event: "Tornado Watch",
				sender: "w-nws.webmaster@noaa.gov",
				senderName: "NWS Raleigh NC",
				headline:
					"Tornado Watch issued April 7 at 3:12PM EDT until April 7 at 9:00PM EDT by NWS Raleigh NC",
				description:
					"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 104 IN\nEFFECT UNTIL 9 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN NORTH CAROLINA THIS WATCH INCLUDES 13 COUNTIES\n\nIN CENTRAL NORTH CAROLINA\n\nDURHAM                EDGECOMBE             FRANKLIN\nGRANVILLE             HALIFAX               HARNETT\nJOHNSTON              NASH                  VANCE\nWAKE                  WARREN                WAYNE\nWILSON\n\nTHIS INCLUDES THE CITIES OF ANGIER, APEX, BUIES CREEK, CARY,\nCLAYTON, CREEDMOOR, DUNN, DURHAM, ENFIELD, ERWIN, FRANKLINTON,\nGOLDSBORO, HENDERSON, KITTRELL, KNIGHTDALE, LILLINGTON,\nLOUISBURG, NASHVILLE, NORLINA, OXFORD, PRINCEVILLE, RALEIGH,\nROANOKE RAPIDS, ROCKY MOUNT, ROUGEMONT, SCOTLAND NECK, SELMA,\nSMITHFIELD, SPRING HOPE, TARBORO, WAKE FOREST, WARRENTON,\nAND WILSON.",
				instruction: null,
				response: "Monitor",
				parameters: {
					AWIPSidentifier: ["WCNRAH"],
					WMOidentifier: ["WWUS62 KRAH 071912"],
					BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
					"EAS-ORG": ["WXR"],
					VTEC: ["/O.NEW.KRAH.TO.A.0104.220407T1912Z-220408T0100Z/"],
					eventEndingTime: ["2022-04-08T01:00:00+00:00"],
				},
			},
		},
	],
	title:
		"Tornado Watch events issued between Tue, Aug 16, 2022 12:00:00 AM +0000 and Tue, Aug 30, 2022 12:00:00 AM +0000",
	updated: "2022-08-23T00:16:40+00:00",
	pagination: {
		next: "https://api.weather.gov/alerts?start=2022-08-16T00:00:00Z&end=2022-08-30T00:00:00Z&message_type%5B0%5D=alert&event%5B0%5D=Tornado%20Warning&cursor=eyJ0IjoxNjYwNjkwNTAwLCJpIjoidXJuOm9pZDoyLjQ5LjAuMS44NDAuMC5lOGE2YjhkYWZiNDNlZWIzYWY1NGNlMDE0OTZhNjUwNzI1MWQ0NTQ3LjAwMS4xIn0%3D",
	},
};
