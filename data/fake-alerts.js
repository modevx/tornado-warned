export const TORNADO_WARNINGS = [
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fe2d389fd9e8b764205abb1565bc1dc6dae7a45d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fe2d389fd9e8b764205abb1565bc1dc6dae7a45d.001.1",
		areaDesc: "Daviess, MO; Grundy, MO; Harrison, MO",
		geocode: {
			SAME: ["029061", "029079", "029081"],
			UGC: ["MOC061", "MOC079", "MOC081"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/MOC061",
			"https://api.weather.gov/zones/county/MOC079",
			"https://api.weather.gov/zones/county/MOC081",
		],
		references: [],
		sent: "2022-03-29T22:14:00-05:00",
		effective: "2022-03-29T22:14:00-05:00",
		onset: "2022-03-29T22:14:00-05:00",
		expires: "2022-03-29T22:24:00-05:00",
		ends: "2022-03-29T22:15:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 10:14PM CDT until March 29 at 10:15PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.\n\nA Severe Thunderstorm Watch remains in effect until midnight CDT for\nnorth central Missouri.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300314"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN DAVIESS...GRUNDY AND SOUTHEASTERN HARRISON COUNTIES WILL EXPIRE AT 1015 PM CDT",
			],
			eventMotionDescription: [
				"2022-03-30T03:14:00-00:00...storm...229DEG...47KT...40.13,-93.62",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KEAX.TO.W.0007.000000T0000Z-220330T0315Z/"],
			eventEndingTime: ["2022-03-30T03:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.656cde22d46bf2b4d895df74ef7a014e189cede2.001.1,2022-03-29T22:03:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.087e3b0f44d61cc93b68dc8f357fe9c2da200a08.001.1,2022-03-29T21:50:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.166b516e7004eaf2d9652681664f301ab419ff8f.001.1,2021-03-15T18:13:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a239c4a11f1a238c44ab7139d41b2a1117a4673b.001.1,2021-03-15T17:47:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1bf6965d7c86f7fca2a89d7d8088c17e3de7c625.001.1,2021-03-15T17:56:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e2f119efd6cf148485f9b0bf2fc9f713876c50b5.001.1,2021-03-15T17:38:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.656cde22d46bf2b4d895df74ef7a014e189cede2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.656cde22d46bf2b4d895df74ef7a014e189cede2.001.1",
		areaDesc: "Daviess, MO; Grundy, MO; Harrison, MO",
		geocode: {
			SAME: ["029061", "029079", "029081"],
			UGC: ["MOC061", "MOC079", "MOC081"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/MOC061",
			"https://api.weather.gov/zones/county/MOC079",
			"https://api.weather.gov/zones/county/MOC081",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.087e3b0f44d61cc93b68dc8f357fe9c2da200a08.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.087e3b0f44d61cc93b68dc8f357fe9c2da200a08.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T21:50:00-05:00",
			},
		],
		sent: "2022-03-29T22:03:00-05:00",
		effective: "2022-03-29T22:03:00-05:00",
		onset: "2022-03-29T22:03:00-05:00",
		expires: "2022-03-29T22:15:00-05:00",
		ends: "2022-03-29T22:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 10:03PM CDT until March 29 at 10:15PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"At 1003 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Jamesport, or 7 miles west of Trenton, moving\nnortheast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nTrenton, Gilman City, Tindall and Brimson.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300303"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1015 PM CDT FOR NORTHEASTERN DAVIESS...GRUNDY AND SOUTHEASTERN HARRISON COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-30T03:03:00-00:00...storm...229DEG...45KT...40.04,-93.75",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KEAX.TO.W.0007.000000T0000Z-220330T0315Z/"],
			eventEndingTime: ["2022-03-30T03:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.166b516e7004eaf2d9652681664f301ab419ff8f.001.1,2021-03-15T18:13:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a239c4a11f1a238c44ab7139d41b2a1117a4673b.001.1,2021-03-15T17:47:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1bf6965d7c86f7fca2a89d7d8088c17e3de7c625.001.1,2021-03-15T17:56:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e2f119efd6cf148485f9b0bf2fc9f713876c50b5.001.1,2021-03-15T17:38:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.726a3213a99b8ecfb32d057021b86034d5e9870d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.726a3213a99b8ecfb32d057021b86034d5e9870d.001.1",
		areaDesc: "Daviess, MO",
		geocode: {
			SAME: ["029061"],
			UGC: ["MOC061"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/MOC061"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T21:28:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T21:33:00-05:00",
			},
		],
		sent: "2022-03-29T21:54:00-05:00",
		effective: "2022-03-29T21:54:00-05:00",
		onset: "2022-03-29T21:54:00-05:00",
		expires: "2022-03-29T22:04:00-05:00",
		ends: "2022-03-29T22:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 9:54PM CDT until March 29 at 10:00PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The storm which prompted the warning has moved out of the area.\nTherefore, the warning will be allowed to expire.\n\nA Severe Thunderstorm Watch remains in effect until midnight CDT for\nnorth central Missouri.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300254"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN DAVIESS COUNTY WILL EXPIRE AT 1000 PM CDT",
			],
			eventMotionDescription: [
				"2022-03-30T02:54:00-00:00...storm...230DEG...49KT...40.03,-93.82",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KEAX.TO.W.0006.000000T0000Z-220330T0300Z/"],
			eventEndingTime: ["2022-03-30T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.15ae594614d5aef3b7dc2d54a42ef7a555874a64.001.1,2021-03-15T17:39:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9bd243acaa88dce1e44d6fa6a88d4bcf09aaf28f.001.1,2021-03-15T17:23:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8b5cdbf2cb79a6e5e1cb5cd37e2d1ee37f5b7c5b.001.1,2021-03-15T17:14:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.087e3b0f44d61cc93b68dc8f357fe9c2da200a08.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.087e3b0f44d61cc93b68dc8f357fe9c2da200a08.001.1",
		areaDesc: "Daviess, MO; Grundy, MO; Harrison, MO",
		geocode: {
			SAME: ["029061", "029079", "029081"],
			UGC: ["MOC061", "MOC079", "MOC081"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/MOC061",
			"https://api.weather.gov/zones/county/MOC079",
			"https://api.weather.gov/zones/county/MOC081",
		],
		references: [],
		sent: "2022-03-29T21:50:00-05:00",
		effective: "2022-03-29T21:50:00-05:00",
		onset: "2022-03-29T21:50:00-05:00",
		expires: "2022-03-29T22:15:00-05:00",
		ends: "2022-03-29T22:15:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 9:50PM CDT until March 29 at 10:15PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nNortheastern Daviess County in north central Missouri...\nGrundy County in north central Missouri...\nSoutheastern Harrison County in north central Missouri...\n\n* Until 1015 PM CDT.\n\n* At 949 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Jamesport, or near Gallatin, moving northeast at\n55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nTrenton, Jamesport, Gilman City, Jameson, Tindall and Brimson.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300250"],
			eventMotionDescription: [
				"2022-03-30T02:49:00-00:00...storm...229DEG...47KT...39.97,-93.89",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0007.220330T0250Z-220330T0315Z/"],
			eventEndingTime: ["2022-03-30T03:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 10:15 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 10:15 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.001.1",
		areaDesc: "Caldwell, MO; DeKalb, MO",
		geocode: {
			SAME: ["029025", "029063"],
			UGC: ["MOC025", "MOC063"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/MOC025",
			"https://api.weather.gov/zones/county/MOC063",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T21:28:00-05:00",
			},
		],
		sent: "2022-03-29T21:33:00-05:00",
		effective: "2022-03-29T21:33:00-05:00",
		onset: "2022-03-29T21:33:00-05:00",
		expires: "2022-03-29T21:49:02-05:00",
		ends: "2022-03-29T22:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300233"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN CALDWELL AND SOUTHEASTERN DEKALB COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-30T02:33:00-00:00...storm...230DEG...49KT...39.85,-94.1",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KEAX.TO.W.0006.000000T0000Z-220330T0300Z/"],
			eventEndingTime: ["2022-03-30T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.15ae594614d5aef3b7dc2d54a42ef7a555874a64.001.1,2021-03-15T17:39:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8b5cdbf2cb79a6e5e1cb5cd37e2d1ee37f5b7c5b.001.1,2021-03-15T17:14:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9bd243acaa88dce1e44d6fa6a88d4bcf09aaf28f.001.1,2021-03-15T17:23:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c5301709e0505393c1e7ab087c4ece8801130fd2.002.1",
		areaDesc: "Daviess, MO",
		geocode: {
			SAME: ["029061"],
			UGC: ["MOC061"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/MOC061"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T21:28:00-05:00",
			},
		],
		sent: "2022-03-29T21:33:00-05:00",
		effective: "2022-03-29T21:33:00-05:00",
		onset: "2022-03-29T21:33:00-05:00",
		expires: "2022-03-29T22:00:00-05:00",
		ends: "2022-03-29T22:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 9:33PM CDT until March 29 at 10:00PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"At 933 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles southwest of Gallatin, moving northeast at 55\nmph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGallatin, Winston, Altamont and Jameson.\n\nThis includes Interstate 35 in Missouri between mile markers 60 and\n62.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300233"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1000 PM CDT FOR SOUTHEASTERN DAVIESS COUNTY",
			],
			eventMotionDescription: [
				"2022-03-30T02:33:00-00:00...storm...230DEG...49KT...39.85,-94.1",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KEAX.TO.W.0006.000000T0000Z-220330T0300Z/"],
			eventEndingTime: ["2022-03-30T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.15ae594614d5aef3b7dc2d54a42ef7a555874a64.001.1,2021-03-15T17:39:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8b5cdbf2cb79a6e5e1cb5cd37e2d1ee37f5b7c5b.001.1,2021-03-15T17:14:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9bd243acaa88dce1e44d6fa6a88d4bcf09aaf28f.001.1,2021-03-15T17:23:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f1e7a5a8265f593b40874a4090dd881a36bb4093.001.1",
		areaDesc: "Caldwell, MO; Daviess, MO; DeKalb, MO",
		geocode: {
			SAME: ["029025", "029061", "029063"],
			UGC: ["MOC025", "MOC061", "MOC063"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/MOC025",
			"https://api.weather.gov/zones/county/MOC061",
			"https://api.weather.gov/zones/county/MOC063",
		],
		references: [],
		sent: "2022-03-29T21:28:00-05:00",
		effective: "2022-03-29T21:28:00-05:00",
		onset: "2022-03-29T21:28:00-05:00",
		expires: "2022-03-29T22:00:00-05:00",
		ends: "2022-03-29T22:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 9:28PM CDT until March 29 at 10:00PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nSoutheastern Daviess County in north central Missouri...\nNorthwestern Caldwell County in north central Missouri...\nSoutheastern DeKalb County in northwestern Missouri...\n\n* Until 1000 PM CDT.\n\n* At 928 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Cameron, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nCameron, Gallatin, Kidder, Winston, Altamont and Jameson.\n\nThis includes Interstate 35 in Missouri between mile markers 54 and\n68.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300228"],
			eventMotionDescription: [
				"2022-03-30T02:28:00-00:00...storm...230DEG...49KT...39.8,-94.18",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0006.220330T0228Z-220330T0300Z/"],
			eventEndingTime: ["2022-03-30T03:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 10:00 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 10:00 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.48094775c96a1f3be19d2c3b2c0a527f33541b7f.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.48094775c96a1f3be19d2c3b2c0a527f33541b7f.002.1",
		areaDesc: "Doniphan, KS; Buchanan, MO",
		geocode: {
			SAME: ["020043", "029021"],
			UGC: ["KSC043", "MOC021"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KSC043",
			"https://api.weather.gov/zones/county/MOC021",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T20:32:00-05:00",
			},
		],
		sent: "2022-03-29T20:47:00-05:00",
		effective: "2022-03-29T20:47:00-05:00",
		onset: "2022-03-29T20:47:00-05:00",
		expires: "2022-03-29T21:00:00-05:00",
		ends: "2022-03-29T21:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 8:47PM CDT until March 29 at 9:00PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"At 846 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Elwood, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nSt. Joseph, Wathena, Elwood and St. Joseph Airport.\n\nThis includes the following highways...\nInterstate 29 between mile markers 43 and 50.\nInterstate 229 between mile markers 0 and 9.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300147"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 900 PM CDT FOR SOUTHEASTERN DONIPHAN AND NORTHWESTERN BUCHANAN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-30T01:46:00-00:00...storm...218DEG...48KT...39.78,-94.87",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KEAX.TO.W.0005.000000T0000Z-220330T0200Z/"],
			eventEndingTime: ["2022-03-30T02:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.99d48b6eed2e6d8def270f8d2002ea9855bd4651.001.1,2021-03-15T17:35:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d65ed9891ce74a12d3ecc206f542f88779128b74.002.1,2021-03-15T17:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9966ea655b2a2c1145e1c95ab6375623883386b5.001.1,2021-03-15T17:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d65ed9891ce74a12d3ecc206f542f88779128b74.001.1,2021-03-15T17:21:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.48094775c96a1f3be19d2c3b2c0a527f33541b7f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.48094775c96a1f3be19d2c3b2c0a527f33541b7f.001.1",
		areaDesc: "Atchison, KS",
		geocode: {
			SAME: ["020005"],
			UGC: ["KSC005"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KSC005"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T20:32:00-05:00",
			},
		],
		sent: "2022-03-29T20:47:00-05:00",
		effective: "2022-03-29T20:47:00-05:00",
		onset: "2022-03-29T20:47:00-05:00",
		expires: "2022-03-29T21:02:29-05:00",
		ends: "2022-03-29T21:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSEAX"],
			WMOidentifier: ["WWUS53 KEAX 300147"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN ATCHISON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-30T01:46:00-00:00...storm...218DEG...48KT...39.78,-94.87",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KEAX.TO.W.0005.000000T0000Z-220330T0200Z/"],
			eventEndingTime: ["2022-03-30T02:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.99d48b6eed2e6d8def270f8d2002ea9855bd4651.001.1,2021-03-15T17:35:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d65ed9891ce74a12d3ecc206f542f88779128b74.002.1,2021-03-15T17:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9966ea655b2a2c1145e1c95ab6375623883386b5.001.1,2021-03-15T17:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d65ed9891ce74a12d3ecc206f542f88779128b74.001.1,2021-03-15T17:21:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7dbd81ec4bb7de2b7072cee2a0114b1bfac21d1c.001.1",
		areaDesc: "Atchison, KS; Doniphan, KS; Buchanan, MO",
		geocode: {
			SAME: ["020005", "020043", "029021"],
			UGC: ["KSC005", "KSC043", "MOC021"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KSC005",
			"https://api.weather.gov/zones/county/KSC043",
			"https://api.weather.gov/zones/county/MOC021",
		],
		references: [],
		sent: "2022-03-29T20:32:00-05:00",
		effective: "2022-03-29T20:32:00-05:00",
		onset: "2022-03-29T20:32:00-05:00",
		expires: "2022-03-29T21:00:00-05:00",
		ends: "2022-03-29T21:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 8:32PM CDT until March 29 at 9:00PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nSoutheastern Doniphan County in northeastern Kansas...\nNortheastern Atchison County in northeastern Kansas...\nCentral Buchanan County in northwestern Missouri...\n\n* Until 900 PM CDT.\n\n* At 831 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Rushville, or near Atchison, moving northeast at\n55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nSt. Joseph, Atchison, Wathena, Elwood, Rushville, Lewis And Clark\nVillage, Doniphan, De Kalb, St. Joseph Airport and Lewis And Clark\nVi.\n\nThis includes the following highways...\nInterstate 29 between mile markers 43 and 50.\nInterstate 229 between mile markers 0 and 9.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300132"],
			eventMotionDescription: [
				"2022-03-30T01:31:00-00:00...storm...218DEG...48KT...39.61,-95.04",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0005.220330T0132Z-220330T0200Z/"],
			eventEndingTime: ["2022-03-30T02:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 9:00 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 9:00 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1759f5d47ddf4a6d5733f4f77262eba972fd8262.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1759f5d47ddf4a6d5733f4f77262eba972fd8262.001.1",
		areaDesc: "Leavenworth, KS; Platte, MO",
		geocode: {
			SAME: ["020103", "029165"],
			UGC: ["KSC103", "MOC165"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KSC103",
			"https://api.weather.gov/zones/county/MOC165",
		],
		references: [],
		sent: "2022-03-29T20:28:00-05:00",
		effective: "2022-03-29T20:28:00-05:00",
		onset: "2022-03-29T20:28:00-05:00",
		expires: "2022-03-29T20:45:00-05:00",
		ends: "2022-03-29T20:45:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 8:28PM CDT until March 29 at 8:45PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nNorth central Leavenworth County in northeastern Kansas...\nNorth central Platte County in west central Missouri...\n\n* Until 845 PM CDT.\n\n* At 828 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Leavenworth, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nLeavenworth, Platte City, Weston, Dearborn, Camden Point, Tracy,\nFort Leavenworth and Beverly.\n\nThis includes Interstate 29 between mile markers 20 and 30.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300128"],
			eventMotionDescription: [
				"2022-03-30T01:28:00-00:00...storm...238DEG...44KT...39.36,-95.0",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0004.220330T0128Z-220330T0145Z/"],
			eventEndingTime: ["2022-03-30T01:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:45 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:45 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77b755a2ee1e166269add8f6da37be9c3e4e8498.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.77b755a2ee1e166269add8f6da37be9c3e4e8498.001.1",
		areaDesc: "Jefferson, KS",
		geocode: {
			SAME: ["020087"],
			UGC: ["KSC087"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KSC087"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T20:00:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6e66c38b954ad0d8a3812bf7f4dcf8c6379ea259.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.6e66c38b954ad0d8a3812bf7f4dcf8c6379ea259.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T20:11:00-05:00",
			},
		],
		sent: "2022-03-29T20:21:00-05:00",
		effective: "2022-03-29T20:21:00-05:00",
		onset: "2022-03-29T20:21:00-05:00",
		expires: "2022-03-29T20:30:00-05:00",
		ends: "2022-03-29T20:30:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Topeka KS",
		headline:
			"Tornado Warning issued March 29 at 8:21PM CDT until March 29 at 8:30PM CDT by NWS Topeka KS",
		description:
			"The storms which prompted the warning have moved out of the area.\nTherefore, the warning will be allowed to expire.\n\nA Severe Thunderstorm Watch remains in effect until midnight CDT for\nnortheastern Kansas.\n\nRemember, a Severe Thunderstorm Warning still remains in effect.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSTOP"],
			WMOidentifier: ["WWUS53 KTOP 300121"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN JEFFERSON COUNTY WILL EXPIRE AT 830 PM CDT",
			],
			eventMotionDescription: [
				"2022-03-30T01:20:00-00:00...storm...239DEG...45KT...39.45,-95.16 39.29,-95.13",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KTOP.TO.W.0001.000000T0000Z-220330T0130Z/"],
			eventEndingTime: ["2022-03-30T01:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5d5a28744ea84de5251010bb099c362f3ce7e21e.001.1,2021-03-02T09:59:00-06:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.003933c6d579527445b4815a707460ed458d6723.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.003933c6d579527445b4815a707460ed458d6723.001.1",
		areaDesc: "Leavenworth, KS",
		geocode: {
			SAME: ["020103"],
			UGC: ["KSC103"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KSC103"],
		references: [],
		sent: "2022-03-29T20:13:00-05:00",
		effective: "2022-03-29T20:13:00-05:00",
		onset: "2022-03-29T20:13:00-05:00",
		expires: "2022-03-29T20:30:00-05:00",
		ends: "2022-03-29T20:30:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 8:13PM CDT until March 29 at 8:30PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nNorthwestern Leavenworth County in northeastern Kansas...\n\n* Until 830 PM CDT.\n\n* At 812 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near McLouth, or 7 miles northeast of Oskaloosa, moving\nnortheast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nLeavenworth, Easton and Lowemont.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300113"],
			eventMotionDescription: [
				"2022-03-30T01:12:00-00:00...storm...236DEG...43KT...39.27,-95.2",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0003.220330T0113Z-220330T0130Z/"],
			eventEndingTime: ["2022-03-30T01:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:30 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:30 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6e66c38b954ad0d8a3812bf7f4dcf8c6379ea259.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.6e66c38b954ad0d8a3812bf7f4dcf8c6379ea259.001.1",
		areaDesc: "Jefferson, KS",
		geocode: {
			SAME: ["020087"],
			UGC: ["KSC087"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KSC087"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-29T20:00:00-05:00",
			},
		],
		sent: "2022-03-29T20:11:00-05:00",
		effective: "2022-03-29T20:11:00-05:00",
		onset: "2022-03-29T20:11:00-05:00",
		expires: "2022-03-29T20:30:00-05:00",
		ends: "2022-03-29T20:30:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Topeka KS",
		headline:
			"Tornado Warning issued March 29 at 8:11PM CDT until March 29 at 8:30PM CDT by NWS Topeka KS",
		description:
			"At 811 PM CDT, a severe squall line capable of producing both\ntornadoes and extensive straight line wind damage was located along a\nline extending from 3 miles east of Nortonville to near McLouth,\nmoving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nMcLouth and Winchester.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSTOP"],
			WMOidentifier: ["WWUS53 KTOP 300111"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 830 PM CDT FOR NORTHEASTERN JEFFERSON COUNTY",
			],
			eventMotionDescription: [
				"2022-03-30T01:11:00-00:00...storm...235DEG...44KT...39.4,-95.26 39.24,-95.23",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KTOP.TO.W.0001.000000T0000Z-220330T0130Z/"],
			eventEndingTime: ["2022-03-30T01:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5d5a28744ea84de5251010bb099c362f3ce7e21e.001.1,2021-03-02T09:59:00-06:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.548e9b5ec9ba76802e68975cecbede1a41f61422.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.548e9b5ec9ba76802e68975cecbede1a41f61422.001.1",
		areaDesc: "Atchison, KS; Leavenworth, KS",
		geocode: {
			SAME: ["020005", "020103"],
			UGC: ["KSC005", "KSC103"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KSC005",
			"https://api.weather.gov/zones/county/KSC103",
		],
		references: [],
		sent: "2022-03-29T20:10:00-05:00",
		effective: "2022-03-29T20:10:00-05:00",
		onset: "2022-03-29T20:10:00-05:00",
		expires: "2022-03-29T20:30:00-05:00",
		ends: "2022-03-29T20:30:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Kansas City/Pleasant Hill MO",
		headline:
			"Tornado Warning issued March 29 at 8:10PM CDT until March 29 at 8:30PM CDT by NWS Kansas City/Pleasant Hill MO",
		description:
			"The National Weather Service in Pleasant Hill has issued a\n\n* Tornado Warning for...\nNorthwestern Leavenworth County in northeastern Kansas...\nSoutheastern Atchison County in northeastern Kansas...\n\n* Until 830 PM CDT.\n\n* At 810 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Nortonville, or 10 miles northeast of Valley\nFalls, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nAtchison, Cummings and Potter.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TOREAX"],
			WMOidentifier: ["WFUS53 KEAX 300110"],
			eventMotionDescription: [
				"2022-03-30T01:10:00-00:00...storm...232DEG...44KT...39.43,-95.32",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KEAX.TO.W.0002.220330T0110Z-220330T0130Z/"],
			eventEndingTime: ["2022-03-30T01:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:30 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:30 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.30d4dd7e41ff214013e7ad3cb3198aec04dddcd3.001.1",
		areaDesc: "Jefferson, KS",
		geocode: {
			SAME: ["020087"],
			UGC: ["KSC087"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KSC087"],
		references: [],
		sent: "2022-03-29T20:00:00-05:00",
		effective: "2022-03-29T20:00:00-05:00",
		onset: "2022-03-29T20:00:00-05:00",
		expires: "2022-03-29T20:30:00-05:00",
		ends: "2022-03-29T20:30:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Topeka KS",
		headline:
			"Tornado Warning issued March 29 at 8:00PM CDT until March 29 at 8:30PM CDT by NWS Topeka KS",
		description:
			"The National Weather Service in Topeka has issued a\n\n* Tornado Warning for...\nNortheastern Jefferson County in northeastern Kansas...\n\n* Until 830 PM CDT.\n\n* At 759 PM CDT, severe thunderstorms capable of producing both\ntornadoes and extensive straight line wind damage were located\nalong a line extending from 4 miles southeast of Valley Falls to 4\nmiles east of Perry Lake, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nOskaloosa, McLouth and Winchester.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORTOP"],
			WMOidentifier: ["WFUS53 KTOP 300100"],
			eventMotionDescription: [
				"2022-03-30T00:59:00-00:00...storm...239DEG...45KT...39.29,-95.39 39.17,-95.37",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KTOP.TO.W.0001.220330T0100Z-220330T0130Z/"],
			eventEndingTime: ["2022-03-30T01:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:30 PM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:30 PM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c6a0a1d24a3d77bdb177c77c3395625981cff58d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c6a0a1d24a3d77bdb177c77c3395625981cff58d.001.1",
		areaDesc: "Volusia, FL",
		geocode: {
			SAME: ["012127"],
			UGC: ["FLC127"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC127"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ec807f9fb0a2053f89ded5774329fabce261ed57.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ec807f9fb0a2053f89ded5774329fabce261ed57.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T12:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T12:21:00-04:00",
			},
		],
		sent: "2022-03-24T12:49:00-04:00",
		effective: "2022-03-24T12:49:00-04:00",
		onset: "2022-03-24T12:49:00-04:00",
		expires: "2022-03-24T13:05:00-04:00",
		ends: "2022-03-24T13:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Melbourne FL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSMLB"],
			WMOidentifier: ["WWUS52 KMLB 241649"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL VOLUSIA COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T16:48:00-00:00...storm...226DEG...30KT...28.99,-80.81",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMLB.TO.W.0009.000000T0000Z-220324T1700Z/"],
			eventEndingTime: ["2022-03-24T17:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ec807f9fb0a2053f89ded5774329fabce261ed57.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ec807f9fb0a2053f89ded5774329fabce261ed57.001.1",
		areaDesc: "Volusia, FL",
		geocode: {
			SAME: ["012127"],
			UGC: ["FLC127"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC127"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T12:21:00-04:00",
			},
		],
		sent: "2022-03-24T12:34:00-04:00",
		effective: "2022-03-24T12:34:00-04:00",
		onset: "2022-03-24T12:34:00-04:00",
		expires: "2022-03-24T13:00:00-04:00",
		ends: "2022-03-24T13:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Melbourne FL",
		headline:
			"Tornado Warning issued March 24 at 12:34PM EDT until March 24 at 1:00PM EDT by NWS Melbourne FL",
		description:
			"At 1233 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Oak Hill, moving northeast at 35 mph. This cell\nwill move across I-95 shortly.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nEdgewater, Bethune Beach and Apollo Beach around 1240 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include Turtle\nMound.",
		instruction:
			"TAKE COVER NOW! Move to an interior room on the lowest floor of a\nsturdy building. Avoid windows. If you are outdoors, in a mobile\nhome, or in a vehicle, move to the closest substantial shelter and\nprotect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMLB"],
			WMOidentifier: ["WWUS52 KMLB 241634"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 100 PM EDT FOR EAST CENTRAL VOLUSIA COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T16:33:00-00:00...storm...226DEG...30KT...28.89,-80.92",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMLB.TO.W.0009.000000T0000Z-220324T1700Z/"],
			eventEndingTime: ["2022-03-24T17:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ba8b00a4530c96d6d7c973937ecebd7528e23405.001.1",
		areaDesc: "Volusia, FL",
		geocode: {
			SAME: ["012127"],
			UGC: ["FLC127"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC127"],
		references: [],
		sent: "2022-03-24T12:21:00-04:00",
		effective: "2022-03-24T12:21:00-04:00",
		onset: "2022-03-24T12:21:00-04:00",
		expires: "2022-03-24T13:00:00-04:00",
		ends: "2022-03-24T13:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Melbourne FL",
		headline:
			"Tornado Warning issued March 24 at 12:21PM EDT until March 24 at 1:00PM EDT by NWS Melbourne FL",
		description:
			"The National Weather Service in Melbourne has issued a\n\n* Tornado Warning for...\nSoutheastern Volusia County in east central Florida...\n\n* Until 100 PM EDT.\n\n* At 1221 PM EDT, a severe thunderstorm capable of producing a\ntornado was located near Maytown, or 8 miles northeast of Geneva,\nmoving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nEdgewater, Oak Hill and Bethune Beach around 1240 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nFarmton.",
		instruction:
			"TAKE COVER NOW! Move to an interior room on the lowest floor of a\nsturdy building. Avoid windows. If you are outdoors, in a mobile\nhome, or in a vehicle, move to the closest substantial shelter and\nprotect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORMLB"],
			WMOidentifier: ["WFUS52 KMLB 241621"],
			eventMotionDescription: [
				"2022-03-24T16:21:00-00:00...storm...226DEG...30KT...28.82,-81.01",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KMLB.TO.W.0009.220324T1621Z-220324T1700Z/"],
			eventEndingTime: ["2022-03-24T17:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 1:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 1:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.112c154e4f56816ca44b72095cab315c90e0650d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.112c154e4f56816ca44b72095cab315c90e0650d.001.1",
		areaDesc: "Isle of Wight, VA; Southampton, VA; Surry, VA",
		geocode: {
			SAME: ["051093", "051175", "051181"],
			UGC: ["VAC093", "VAC175", "VAC181"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC093",
			"https://api.weather.gov/zones/county/VAC175",
			"https://api.weather.gov/zones/county/VAC181",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T08:41:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T08:49:00-04:00",
			},
		],
		sent: "2022-03-24T08:54:00-04:00",
		effective: "2022-03-24T08:54:00-04:00",
		onset: "2022-03-24T08:54:00-04:00",
		expires: "2022-03-24T09:09:51-04:00",
		ends: "2022-03-24T09:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wakefield VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSAKQ"],
			WMOidentifier: ["WWUS51 KAKQ 241254"],
			NWSheadline: [
				"THE TORNADO WARNING FOR WEST CENTRAL ISLE OF WIGHT...NORTHEASTERN SOUTHAMPTON AND SOUTH CENTRAL SURRY COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T12:52:00-00:00...storm...240DEG...22KT...36.98,-76.87",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KAKQ.TO.W.0001.000000T0000Z-220324T1315Z/"],
			eventEndingTime: ["2022-03-24T13:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.18edf4661a1609b0431d23e3924180e07a3e17e8.001.1,2021-03-18T17:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.002.1,2021-03-18T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.01646ef057063be4588533993174b2ea0666d4d4.001.1,2021-03-18T17:18:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.001.1,2021-03-18T17:27:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.002.1",
		areaDesc: "Isle of Wight, VA; Southampton, VA; Surry, VA",
		geocode: {
			SAME: ["051093", "051175", "051181"],
			UGC: ["VAC093", "VAC175", "VAC181"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC093",
			"https://api.weather.gov/zones/county/VAC175",
			"https://api.weather.gov/zones/county/VAC181",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T08:41:00-04:00",
			},
		],
		sent: "2022-03-24T08:49:00-04:00",
		effective: "2022-03-24T08:49:00-04:00",
		onset: "2022-03-24T08:49:00-04:00",
		expires: "2022-03-24T09:15:00-04:00",
		ends: "2022-03-24T09:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wakefield VA",
		headline:
			"Tornado Warning issued March 24 at 8:49AM EDT until March 24 at 9:15AM EDT by NWS Wakefield VA",
		description:
			"At 848 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Ivor, or near Wakefield, moving northeast at 25 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nwest central Isle of Wight, northeastern Southampton and south\ncentral Surry Counties, including the following locations... Ellis\nFork, Pons, Raynor, Runnymede, Beachland and Delk Crossroads.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSAKQ"],
			WMOidentifier: ["WWUS51 KAKQ 241249"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 915 AM EDT FOR WEST CENTRAL ISLE OF WIGHT...NORTHEASTERN SOUTHAMPTON AND SOUTH CENTRAL SURRY COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T12:48:00-00:00...storm...229DEG...24KT...36.96,-76.91",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KAKQ.TO.W.0001.000000T0000Z-220324T1315Z/"],
			eventEndingTime: ["2022-03-24T13:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.18edf4661a1609b0431d23e3924180e07a3e17e8.001.1,2021-03-18T17:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.002.1,2021-03-18T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.01646ef057063be4588533993174b2ea0666d4d4.001.1,2021-03-18T17:18:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.001.1,2021-03-18T17:27:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e802f077f2f5ca4c27f3a9b042fac0d6c4166a6d.001.1",
		areaDesc: "Sussex, VA",
		geocode: {
			SAME: ["051183"],
			UGC: ["VAC183"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/VAC183"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T08:41:00-04:00",
			},
		],
		sent: "2022-03-24T08:49:00-04:00",
		effective: "2022-03-24T08:49:00-04:00",
		onset: "2022-03-24T08:49:00-04:00",
		expires: "2022-03-24T09:04:31-04:00",
		ends: "2022-03-24T09:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wakefield VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSAKQ"],
			WMOidentifier: ["WWUS51 KAKQ 241249"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EASTERN SUSSEX COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T12:48:00-00:00...storm...229DEG...24KT...36.96,-76.91",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KAKQ.TO.W.0001.000000T0000Z-220324T1315Z/"],
			eventEndingTime: ["2022-03-24T13:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.18edf4661a1609b0431d23e3924180e07a3e17e8.001.1,2021-03-18T17:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.002.1,2021-03-18T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.01646ef057063be4588533993174b2ea0666d4d4.001.1,2021-03-18T17:18:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7750fe1ceecd1282375a3e7daa44a4f9653703.001.1,2021-03-18T17:27:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.24d08140c328464bd996f6dc62eb08fd5ea8a65c.001.1",
		areaDesc: "Isle of Wight, VA; Southampton, VA; Surry, VA; Sussex, VA",
		geocode: {
			SAME: ["051093", "051175", "051181", "051183"],
			UGC: ["VAC093", "VAC175", "VAC181", "VAC183"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC093",
			"https://api.weather.gov/zones/county/VAC175",
			"https://api.weather.gov/zones/county/VAC181",
			"https://api.weather.gov/zones/county/VAC183",
		],
		references: [],
		sent: "2022-03-24T08:41:00-04:00",
		effective: "2022-03-24T08:41:00-04:00",
		onset: "2022-03-24T08:41:00-04:00",
		expires: "2022-03-24T09:15:00-04:00",
		ends: "2022-03-24T09:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wakefield VA",
		headline:
			"Tornado Warning issued March 24 at 8:41AM EDT until March 24 at 9:15AM EDT by NWS Wakefield VA",
		description:
			"The National Weather Service in Wakefield has issued a\n\n* Tornado Warning for...\nWest central Isle of Wight County in southeastern Virginia...\nNortheastern Southampton County in southeastern Virginia...\nEastern Sussex County in southeastern Virginia...\nSouth central Surry County in southeastern Virginia...\n\n* Until 915 AM EDT.\n\n* At 841 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Wakefield, moving northeast at 25 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nIvor around 845 AM EDT.\nDendron around 855 AM EDT.\n\nOther locations impacted by this tornadic thunderstorm include Booth\nFork, Pons, Ellis Fork, Raynor, Runnymede, Beachland and Delk\nCrossroads.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report severe weather by calling 757-899-2415, posting to the\nNWS Wakefield Facebook page, or using Twitter @NWSWAKEFIELDVA.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORAKQ"],
			WMOidentifier: ["WFUS51 KAKQ 241241"],
			eventMotionDescription: [
				"2022-03-24T12:41:00-00:00...storm...240DEG...22KT...36.93,-76.95",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KAKQ.TO.W.0001.220324T1241Z-220324T1315Z/"],
			eventEndingTime: ["2022-03-24T13:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 9:15 AM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 9:15 AM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c4213d4d6b78cd15d3f8fc26d5f6cb4e4a62cb80.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c4213d4d6b78cd15d3f8fc26d5f6cb4e4a62cb80.001.1",
		areaDesc: "Johnston, NC",
		geocode: {
			SAME: ["037101"],
			UGC: ["NCC101"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC101"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:32:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:51:00-04:00",
			},
		],
		sent: "2022-03-24T08:08:00-04:00",
		effective: "2022-03-24T08:08:00-04:00",
		onset: "2022-03-24T08:08:00-04:00",
		expires: "2022-03-24T08:16:00-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 24 at 8:08AM EDT until March 24 at 8:15AM EDT by NWS Raleigh NC",
		description:
			"The storm which prompted the warning has weakened. Therefore, the\nwarning will be allowed to expire.\n\nRemember, a Severe Thunderstorm Warning still remains in effect for\nJohnston County until 9 AM.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 241208"],
			NWSheadline: [
				"THE TORNADO WARNING FOR WEST CENTRAL JOHNSTON COUNTY WILL EXPIRE AT 815 AM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T12:06:00-00:00...storm...241DEG...24KT...35.52,-78.49",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRAH.TO.W.0002.000000T0000Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8c81daab7c7e79f75ba6d34b83c6a67103b348c7.001.1,2021-03-18T17:51:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1b2e6529a293188c2acbda7b3483319e7175a7e8.001.1,2021-03-18T17:42:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7c026ab1f83a4d94f8789e92169985974a2a49.001.1,2021-03-18T17:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.002.1,2021-03-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.88f3d2c782e242959da46c4fdfbc029ac2808a38.001.1,2021-03-18T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.001.1,2021-03-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.001.1",
		areaDesc: "Harnett, NC",
		geocode: {
			SAME: ["037085"],
			UGC: ["NCC085"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC085"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:32:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:44:00-04:00",
			},
		],
		sent: "2022-03-24T07:51:00-04:00",
		effective: "2022-03-24T07:51:00-04:00",
		onset: "2022-03-24T07:51:00-04:00",
		expires: "2022-03-24T08:06:47-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 241151"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL HARNETT COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T11:51:00-00:00...storm...234DEG...31KT...35.47,-78.59",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRAH.TO.W.0002.000000T0000Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8c81daab7c7e79f75ba6d34b83c6a67103b348c7.001.1,2021-03-18T17:51:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1b2e6529a293188c2acbda7b3483319e7175a7e8.001.1,2021-03-18T17:42:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7c026ab1f83a4d94f8789e92169985974a2a49.001.1,2021-03-18T17:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.002.1,2021-03-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.88f3d2c782e242959da46c4fdfbc029ac2808a38.001.1,2021-03-18T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.001.1,2021-03-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.92daefa2eb8ce447f02c241a44cecdfdbc5e1f02.002.1",
		areaDesc: "Johnston, NC",
		geocode: {
			SAME: ["037101"],
			UGC: ["NCC101"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC101"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:32:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:44:00-04:00",
			},
		],
		sent: "2022-03-24T07:51:00-04:00",
		effective: "2022-03-24T07:51:00-04:00",
		onset: "2022-03-24T07:51:00-04:00",
		expires: "2022-03-24T08:15:00-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 24 at 7:51AM EDT until March 24 at 8:15AM EDT by NWS Raleigh NC",
		description:
			"At 751 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Benson, or 13 miles west of Smithfield, moving\nnortheast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nCoats Crossroads.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 241151"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 815 AM EDT FOR WEST CENTRAL JOHNSTON COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T11:51:00-00:00...storm...234DEG...31KT...35.47,-78.59",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0002.000000T0000Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8c81daab7c7e79f75ba6d34b83c6a67103b348c7.001.1,2021-03-18T17:51:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1b2e6529a293188c2acbda7b3483319e7175a7e8.001.1,2021-03-18T17:42:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7c026ab1f83a4d94f8789e92169985974a2a49.001.1,2021-03-18T17:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.002.1,2021-03-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.88f3d2c782e242959da46c4fdfbc029ac2808a38.001.1,2021-03-18T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.001.1,2021-03-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.107d2dd89b567bc887076b2edb459c7b1465c13c.001.1",
		areaDesc: "Harnett, NC; Johnston, NC",
		geocode: {
			SAME: ["037085", "037101"],
			UGC: ["NCC085", "NCC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC085",
			"https://api.weather.gov/zones/county/NCC101",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:32:00-04:00",
			},
		],
		sent: "2022-03-24T07:44:00-04:00",
		effective: "2022-03-24T07:44:00-04:00",
		onset: "2022-03-24T07:44:00-04:00",
		expires: "2022-03-24T08:15:00-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 24 at 7:44AM EDT until March 24 at 8:15AM EDT by NWS Raleigh NC",
		description:
			"At 744 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Angier, or 10 miles east of Lillington, moving\nnortheast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nCoats and Coats Crossroads.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 241144"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 815 AM EDT FOR EAST CENTRAL HARNETT AND WEST CENTRAL JOHNSTON COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T11:44:00-00:00...storm...232DEG...33KT...35.45,-78.65",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0002.000000T0000Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8c81daab7c7e79f75ba6d34b83c6a67103b348c7.001.1,2021-03-18T17:51:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1b2e6529a293188c2acbda7b3483319e7175a7e8.001.1,2021-03-18T17:42:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7c026ab1f83a4d94f8789e92169985974a2a49.001.1,2021-03-18T17:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.002.1,2021-03-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.88f3d2c782e242959da46c4fdfbc029ac2808a38.001.1,2021-03-18T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.001.1,2021-03-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e8936011754fab8942748b7d226c6517405fc004.001.1",
		areaDesc: "Harnett, NC; Johnston, NC",
		geocode: {
			SAME: ["037085", "037101"],
			UGC: ["NCC085", "NCC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC085",
			"https://api.weather.gov/zones/county/NCC101",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T07:22:00-04:00",
			},
		],
		sent: "2022-03-24T07:32:00-04:00",
		effective: "2022-03-24T07:32:00-04:00",
		onset: "2022-03-24T07:32:00-04:00",
		expires: "2022-03-24T08:15:00-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 24 at 7:32AM EDT until March 24 at 8:15AM EDT by NWS Raleigh NC",
		description:
			"At 732 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Lillington, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nLillington, Benson, Erwin, Coats, Coats Crossroads and Buies Creek.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 241132"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 815 AM EDT FOR NORTHEASTERN HARNETT AND SOUTHWESTERN JOHNSTON COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T11:32:00-00:00...storm...229DEG...31KT...35.38,-78.75",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0002.000000T0000Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8c81daab7c7e79f75ba6d34b83c6a67103b348c7.001.1,2021-03-18T17:51:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6b7c026ab1f83a4d94f8789e92169985974a2a49.001.1,2021-03-18T17:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.002.1,2021-03-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.88f3d2c782e242959da46c4fdfbc029ac2808a38.001.1,2021-03-18T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1b2e6529a293188c2acbda7b3483319e7175a7e8.001.1,2021-03-18T17:42:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.548b117c2a86db309f6957d5df8faedc384f315a.001.1,2021-03-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.77a25a96097b4ad8b5bb4e2252a3b05ec380bdcd.001.1",
		areaDesc: "Harnett, NC; Johnston, NC",
		geocode: {
			SAME: ["037085", "037101"],
			UGC: ["NCC085", "NCC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC085",
			"https://api.weather.gov/zones/county/NCC101",
		],
		references: [],
		sent: "2022-03-24T07:22:00-04:00",
		effective: "2022-03-24T07:22:00-04:00",
		onset: "2022-03-24T07:22:00-04:00",
		expires: "2022-03-24T08:15:00-04:00",
		ends: "2022-03-24T08:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 24 at 7:22AM EDT until March 24 at 8:15AM EDT by NWS Raleigh NC",
		description:
			"The National Weather Service in Raleigh has issued a\n\n* Tornado Warning for...\nEastern Harnett County in central North Carolina...\nSouthwestern Johnston County in central North Carolina...\n\n* Until 815 AM EDT.\n\n* At 722 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Lillington, moving northeast at 25 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nLillington around 735 AM EDT.\nDunn around 750 AM EDT.\nBenson around 800 AM EDT.\n\nOther locations impacted by this tornadic thunderstorm include Coats,\nCoats Crossroads, Buies Creek and Erwin.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRAH"],
			WMOidentifier: ["WFUS52 KRAH 241122"],
			eventMotionDescription: [
				"2022-03-24T11:22:00-00:00...storm...241DEG...24KT...35.33,-78.85",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRAH.TO.W.0002.220324T1122Z-220324T1215Z/"],
			eventEndingTime: ["2022-03-24T12:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:15 AM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:15 AM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cdde65159f8b90b7ca8d2daaedb3623896359920.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.cdde65159f8b90b7ca8d2daaedb3623896359920.001.1",
		areaDesc: "Stokes, NC; Surry, NC",
		geocode: {
			SAME: ["037169", "037171"],
			UGC: ["NCC169", "NCC171"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC169",
			"https://api.weather.gov/zones/county/NCC171",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.499aac51097b8f271eefa68df4cdc25226c174ee.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.499aac51097b8f271eefa68df4cdc25226c174ee.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T00:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T00:10:00-04:00",
			},
		],
		sent: "2022-03-24T00:23:00-04:00",
		effective: "2022-03-24T00:23:00-04:00",
		onset: "2022-03-24T00:23:00-04:00",
		expires: "2022-03-24T00:38:29-04:00",
		ends: "2022-03-24T00:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240423"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN SURRY AND NORTHWESTERN STOKES COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T04:21:00-00:00...storm...230DEG...37KT...36.48,-80.47",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRNK.TO.W.0006.000000T0000Z-220324T0445Z/"],
			eventEndingTime: ["2022-03-24T04:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7652173ce11449a9ac6fe9b0ad77865a70af33e9.001.1,2021-04-09T18:10:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.961e2382684c4096cc88a95d454b2ef6aba78a84.001.1,2021-04-09T18:01:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a632ea145595068efdac310d01c707867d5ee532.002.1,2021-04-09T17:48:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.cf56b829c44c496e8cdf78c5dd83436ff3825e5a.001.1,2021-04-09T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a632ea145595068efdac310d01c707867d5ee532.001.1,2021-04-09T17:48:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.499aac51097b8f271eefa68df4cdc25226c174ee.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.499aac51097b8f271eefa68df4cdc25226c174ee.001.1",
		areaDesc: "Stokes, NC; Surry, NC",
		geocode: {
			SAME: ["037169", "037171"],
			UGC: ["NCC169", "NCC171"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC169",
			"https://api.weather.gov/zones/county/NCC171",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T00:10:00-04:00",
			},
		],
		sent: "2022-03-24T00:17:00-04:00",
		effective: "2022-03-24T00:17:00-04:00",
		onset: "2022-03-24T00:17:00-04:00",
		expires: "2022-03-24T00:45:00-04:00",
		ends: "2022-03-24T00:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 24 at 12:17AM EDT until March 24 at 12:45AM EDT by NWS Blacksburg VA",
		description:
			"At 1216 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Ararat, or near Pilot Mountain, moving northeast at\n45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nMount Airy...\nFlat Rock...\nPilot Mountain...\nWoodville...\nArarat...\nand Westfield.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240417"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1245 AM EDT FOR NORTHEASTERN SURRY AND NORTHWESTERN STOKES COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T04:16:00-00:00...storm...230DEG...37KT...36.43,-80.54",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0006.000000T0000Z-220324T0445Z/"],
			eventEndingTime: ["2022-03-24T04:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7652173ce11449a9ac6fe9b0ad77865a70af33e9.001.1,2021-04-09T18:10:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a632ea145595068efdac310d01c707867d5ee532.002.1,2021-04-09T17:48:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.961e2382684c4096cc88a95d454b2ef6aba78a84.001.1,2021-04-09T18:01:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.cf56b829c44c496e8cdf78c5dd83436ff3825e5a.001.1,2021-04-09T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a632ea145595068efdac310d01c707867d5ee532.001.1,2021-04-09T17:48:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4d2233be4f6670ba4366dfd0bdc98ade8493e1ee.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4d2233be4f6670ba4366dfd0bdc98ade8493e1ee.001.1",
		areaDesc: "Surry, NC",
		geocode: {
			SAME: ["037171"],
			UGC: ["NCC171"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC171"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:52:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-24T00:01:00-04:00",
			},
		],
		sent: "2022-03-24T00:13:00-04:00",
		effective: "2022-03-24T00:13:00-04:00",
		onset: "2022-03-24T00:13:00-04:00",
		expires: "2022-03-24T00:21:00-04:00",
		ends: "2022-03-24T00:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 24 at 12:13AM EDT until March 24 at 12:15AM EDT by NWS Blacksburg VA",
		description:
			"The storm which prompted the warning has moved out of the area.\nTherefore, the warning will be allowed to expire.\n\nA new Tornado Warning is in effect for northeast Surry County until\n1245 AM.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240413"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN SURRY COUNTY WILL EXPIRE AT 1215 AM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T04:11:00-00:00...storm...229DEG...37KT...36.38,-80.62",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRNK.TO.W.0005.000000T0000Z-220324T0415Z/"],
			eventEndingTime: ["2022-03-24T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.05819b66b9de957a4b80943e2058f33b05ed7be6.001.1,2021-04-09T17:46:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b55bd185ff9a7f3e7b3b28d1f4335462fb781009.001.1,2021-04-09T17:21:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ce7ba5106df45ea20432154a01f5052e1556df0f.001.1,2021-04-09T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.404b8a78601472a165546295699f6eddb3059334.001.1,2021-04-09T17:13:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4612eb2e66bd19befe092abbb775711928d468b9.001.1",
		areaDesc: "Stokes, NC; Surry, NC",
		geocode: {
			SAME: ["037169", "037171"],
			UGC: ["NCC169", "NCC171"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC169",
			"https://api.weather.gov/zones/county/NCC171",
		],
		references: [],
		sent: "2022-03-24T00:10:00-04:00",
		effective: "2022-03-24T00:10:00-04:00",
		onset: "2022-03-24T00:10:00-04:00",
		expires: "2022-03-24T00:45:00-04:00",
		ends: "2022-03-24T00:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 24 at 12:10AM EDT until March 24 at 12:45AM EDT by NWS Blacksburg VA",
		description:
			"The National Weather Service in BLACKSBURG has issued a\n\n* Tornado Warning for...\nNortheastern Surry County in northwestern North Carolina...\nNorthwestern Stokes County in north central North Carolina...\n\n* Until 1245 AM EDT.\n\n* At 1210 AM EDT, a severe thunderstorm capable of producing a\ntornado was located over Ararat, or near Dobson, moving northeast\nat 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nMount Airy...\nFlat Rock...\nDobson...\nPilot Mountain...\nToast...\nLevel Cross...\nand Woodville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRNK"],
			WMOidentifier: ["WFUS51 KRNK 240410"],
			eventMotionDescription: [
				"2022-03-24T04:10:00-00:00...storm...230DEG...37KT...36.39,-80.61",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.W.0006.220324T0410Z-220324T0445Z/"],
			eventEndingTime: ["2022-03-24T04:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 12:45 AM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 12:45 AM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.002.1",
		areaDesc: "Surry, NC",
		geocode: {
			SAME: ["037171"],
			UGC: ["NCC171"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC171"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:52:00-04:00",
			},
		],
		sent: "2022-03-24T00:01:00-04:00",
		effective: "2022-03-24T00:01:00-04:00",
		onset: "2022-03-24T00:01:00-04:00",
		expires: "2022-03-24T00:15:00-04:00",
		ends: "2022-03-24T00:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 24 at 12:01AM EDT until March 24 at 12:15AM EDT by NWS Blacksburg VA",
		description:
			"At 1201 AM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Fairview, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nFairview...\nDobson...\nCrutchfield...\nBurch...\nand Level Cross.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240401"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1215 AM EDT FOR SOUTHEASTERN SURRY COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T04:01:00-00:00...storm...231DEG...34KT...36.33,-80.7",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0005.000000T0000Z-220324T0415Z/"],
			eventEndingTime: ["2022-03-24T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.05819b66b9de957a4b80943e2058f33b05ed7be6.001.1,2021-04-09T17:46:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ce7ba5106df45ea20432154a01f5052e1556df0f.001.1,2021-04-09T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.404b8a78601472a165546295699f6eddb3059334.001.1,2021-04-09T17:13:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b55bd185ff9a7f3e7b3b28d1f4335462fb781009.001.1,2021-04-09T17:21:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7e49a010f5f04105323d6e339ac94021f5de720e.001.1",
		areaDesc: "Yadkin, NC",
		geocode: {
			SAME: ["037197"],
			UGC: ["NCC197"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC197"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:52:00-04:00",
			},
		],
		sent: "2022-03-24T00:01:00-04:00",
		effective: "2022-03-24T00:01:00-04:00",
		onset: "2022-03-24T00:01:00-04:00",
		expires: "2022-03-24T00:17:08-04:00",
		ends: "2022-03-24T00:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240401"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN YADKIN COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T04:01:00-00:00...storm...231DEG...34KT...36.33,-80.7",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRNK.TO.W.0005.000000T0000Z-220324T0415Z/"],
			eventEndingTime: ["2022-03-24T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.05819b66b9de957a4b80943e2058f33b05ed7be6.001.1,2021-04-09T17:46:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ce7ba5106df45ea20432154a01f5052e1556df0f.001.1,2021-04-09T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.404b8a78601472a165546295699f6eddb3059334.001.1,2021-04-09T17:13:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b55bd185ff9a7f3e7b3b28d1f4335462fb781009.001.1,2021-04-09T17:21:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c7d8e20d3ae1c8517f5b4194bae3566f144eeca5.001.1",
		areaDesc: "Surry, NC; Yadkin, NC",
		geocode: {
			SAME: ["037171", "037197"],
			UGC: ["NCC171", "NCC197"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/NCC197",
		],
		references: [],
		sent: "2022-03-23T23:52:00-04:00",
		effective: "2022-03-23T23:52:00-04:00",
		onset: "2022-03-23T23:52:00-04:00",
		expires: "2022-03-24T00:15:00-04:00",
		ends: "2022-03-24T00:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:52PM EDT until March 24 at 12:15AM EDT by NWS Blacksburg VA",
		description:
			"The National Weather Service in BLACKSBURG has issued a\n\n* Tornado Warning for...\nSoutheastern Surry County in northwestern North Carolina...\nNorthwestern Yadkin County in northwestern North Carolina...\n\n* Until 1215 AM EDT.\n\n* At 1151 PM EDT, a severe thunderstorm capable of producing a\ntornado was located over Burch, or near Elkin, moving northeast at\n45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nElkin...\nFairview...\nJonesville...\nDobson...\nLevel Cross...\nCrutchfield...\nand Burch.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRNK"],
			WMOidentifier: ["WFUS51 KRNK 240352"],
			eventMotionDescription: [
				"2022-03-24T03:51:00-00:00...storm...229DEG...37KT...36.28,-80.79",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.W.0005.220324T0352Z-220324T0415Z/"],
			eventEndingTime: ["2022-03-24T04:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 12:15 AM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 12:15 AM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b85b585d0a9c4821fc9124fd402d81ac7dcb8fe7.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b85b585d0a9c4821fc9124fd402d81ac7dcb8fe7.001.1",
		areaDesc: "Patrick, VA",
		geocode: {
			SAME: ["051141"],
			UGC: ["VAC141"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/VAC141"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:44:00-04:00",
			},
		],
		sent: "2022-03-23T23:49:00-04:00",
		effective: "2022-03-23T23:49:00-04:00",
		onset: "2022-03-23T23:49:00-04:00",
		expires: "2022-03-24T00:04:52-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240349"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHWESTERN PATRICK COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T03:47:00-00:00...storm...231DEG...37KT...36.63,-80.41",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRNK.TO.W.0004.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.79c2b59754fe4e204b0eb9deacc0a35b4bd35feb.001.1,2021-04-09T16:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b230065081c554eb52205c18d63d4ee2a458529e.001.1,2021-04-09T16:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3507cf2340d0997251a8f384abc4c465a5034a21.001.1,2021-04-09T16:38:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6fde0fd16d55a240735624cb329414177977d257.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.6fde0fd16d55a240735624cb329414177977d257.001.1",
		areaDesc: "Alexander, NC; Caldwell, NC",
		geocode: {
			SAME: ["037003", "037027"],
			UGC: ["NCC003", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [],
		sent: "2022-03-23T23:44:00-04:00",
		effective: "2022-03-23T23:44:00-04:00",
		onset: "2022-03-23T23:44:00-04:00",
		expires: "2022-03-23T23:53:00-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 11:44PM EDT until March 23 at 11:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits. Therefore, the warning will be allowed to expire.\n\nA Tornado Watch remains in effect until midnight EDT for western and\nthe Piedmont of North Carolina.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240344"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN ALEXANDER AND EAST CENTRAL CALDWELL COUNTIES WILL EXPIRE AT 1145 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T03:43:00-00:00...storm...236DEG...38KT...36.19,-80.87",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KGSP.TO.W.0011.000000T0000Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1cb937e5575bcc868288afa30369426dbea2e872.001.1,2022-03-23T22:58:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f8aefc8f47a640e975c56371faefdd625c9ab2b9.001.1,2021-03-25T18:31:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db3ad5251f568b383fbbfcd9cacc1e6418f4de44.001.1,2021-03-25T18:13:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.002.1",
		areaDesc: "Patrick, VA",
		geocode: {
			SAME: ["051141"],
			UGC: ["VAC141"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/VAC141"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:35:00-04:00",
			},
		],
		sent: "2022-03-23T23:44:00-04:00",
		effective: "2022-03-23T23:44:00-04:00",
		onset: "2022-03-23T23:44:00-04:00",
		expires: "2022-03-24T00:00:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:44PM EDT until March 24 at 12:00AM EDT by NWS Blacksburg VA",
		description:
			"At 1143 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Ararat, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nArarat.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240344"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL MIDNIGHT EDT FOR SOUTHWESTERN PATRICK COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T03:43:00-00:00...storm...231DEG...37KT...36.59,-80.48",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0004.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.79c2b59754fe4e204b0eb9deacc0a35b4bd35feb.001.1,2021-04-09T16:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b230065081c554eb52205c18d63d4ee2a458529e.001.1,2021-04-09T16:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3507cf2340d0997251a8f384abc4c465a5034a21.001.1,2021-04-09T16:38:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ea3448e819e998d46f0d0ae931cda1e037abb326.001.1",
		areaDesc: "Surry, NC; Carroll, VA",
		geocode: {
			SAME: ["037171", "051035"],
			UGC: ["NCC171", "VAC035"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/VAC035",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:35:00-04:00",
			},
		],
		sent: "2022-03-23T23:44:00-04:00",
		effective: "2022-03-23T23:44:00-04:00",
		onset: "2022-03-23T23:44:00-04:00",
		expires: "2022-03-23T23:59:26-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240344"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN SURRY AND SOUTHEASTERN CARROLL COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T03:43:00-00:00...storm...231DEG...37KT...36.59,-80.48",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRNK.TO.W.0004.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.79c2b59754fe4e204b0eb9deacc0a35b4bd35feb.001.1,2021-04-09T16:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b230065081c554eb52205c18d63d4ee2a458529e.001.1,2021-04-09T16:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3507cf2340d0997251a8f384abc4c465a5034a21.001.1,2021-04-09T16:38:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f4933b0fd60de6fa0a6614aa160cc18d413f8212.001.1",
		areaDesc: "Surry, NC; Carroll, VA; Patrick, VA",
		geocode: {
			SAME: ["037171", "051035", "051141"],
			UGC: ["NCC171", "VAC035", "VAC141"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/VAC035",
			"https://api.weather.gov/zones/county/VAC141",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:29:00-04:00",
			},
		],
		sent: "2022-03-23T23:35:00-04:00",
		effective: "2022-03-23T23:35:00-04:00",
		onset: "2022-03-23T23:35:00-04:00",
		expires: "2022-03-24T00:00:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:35PM EDT until March 24 at 12:00AM EDT by NWS Blacksburg VA",
		description:
			"At 1134 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Flat Rock, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nMount Airy...\nFlat Rock...\nArarat...\nCana...\nand Toast.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240335"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL MIDNIGHT EDT FOR NORTHEASTERN SURRY...SOUTHEASTERN CARROLL AND SOUTHWESTERN PATRICK COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T03:34:00-00:00...storm...230DEG...34KT...36.53,-80.58",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0004.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.79c2b59754fe4e204b0eb9deacc0a35b4bd35feb.001.1,2021-04-09T16:45:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3507cf2340d0997251a8f384abc4c465a5034a21.001.1,2021-04-09T16:38:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b230065081c554eb52205c18d63d4ee2a458529e.001.1,2021-04-09T16:20:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.df03e012bd9951498c45684154dfe43733666fb6.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.df03e012bd9951498c45684154dfe43733666fb6.001.1",
		areaDesc: "Burke, NC; Caldwell, NC",
		geocode: {
			SAME: ["037023", "037027"],
			UGC: ["NCC023", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:04:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:24:00-04:00",
			},
		],
		sent: "2022-03-23T23:34:00-04:00",
		effective: "2022-03-23T23:34:00-04:00",
		onset: "2022-03-23T23:34:00-04:00",
		expires: "2022-03-23T23:49:58-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240334"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN CALDWELL AND EAST CENTRAL BURKE COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T03:33:00-00:00...storm...231DEG...38KT...35.87,-81.31",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0012.000000T0000Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7b8364989650aca4a0f1a7d4ce1c1150cc2eae8f.001.1,2021-04-10T18:37:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6ce28388d45d838cc306afb71c719853ea0940cb.001.1,2021-04-10T18:46:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.d2913a62b86befa10da98fa31030b86967b11d18.001.1",
		areaDesc: "Surry, NC; Carroll, VA; Patrick, VA",
		geocode: {
			SAME: ["037171", "051035", "051141"],
			UGC: ["NCC171", "VAC035", "VAC141"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/VAC035",
			"https://api.weather.gov/zones/county/VAC141",
		],
		references: [],
		sent: "2022-03-23T23:29:00-04:00",
		effective: "2022-03-23T23:29:00-04:00",
		onset: "2022-03-23T23:29:00-04:00",
		expires: "2022-03-24T00:00:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:29PM EDT until March 24 at 12:00AM EDT by NWS Blacksburg VA",
		description:
			"The National Weather Service in BLACKSBURG has issued a\n\n* Tornado Warning for...\nNortheastern Surry County in northwestern North Carolina...\nSoutheastern Carroll County in southwestern Virginia...\nSouthwestern Patrick County in southwestern Virginia...\n\n* Until midnight EDT.\n\n* At 1129 PM EDT, a severe thunderstorm capable of producing a\ntornado was located over Mount Airy, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nMount Airy...\nFlat Rock...\nArarat...\nCana...\nPine Ridge...\nToast...\nand White Plains.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRNK"],
			WMOidentifier: ["WFUS51 KRNK 240329"],
			eventMotionDescription: [
				"2022-03-24T03:29:00-00:00...storm...231DEG...37KT...36.51,-80.62",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.W.0004.220324T0329Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 12:00 AM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 12:00 AM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5ef191fc0a32a3ad48923eabb8f0f2fa5baf4969.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5ef191fc0a32a3ad48923eabb8f0f2fa5baf4969.001.1",
		areaDesc: "Wilkes, NC",
		geocode: {
			SAME: ["037193"],
			UGC: ["NCC193"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC193"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:02:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5fea80ca78ff56aef0e51baa24cc8fb464202d78.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5fea80ca78ff56aef0e51baa24cc8fb464202d78.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:21:00-04:00",
			},
		],
		sent: "2022-03-23T23:28:00-04:00",
		effective: "2022-03-23T23:28:00-04:00",
		onset: "2022-03-23T23:28:00-04:00",
		expires: "2022-03-23T23:37:00-04:00",
		ends: "2022-03-23T23:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:28PM EDT until March 23 at 11:30PM EDT by NWS Blacksburg VA",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.\n\nA Tornado Watch remains in effect until midnight EDT for northwestern\nNorth Carolina.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240328"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN WILKES COUNTY WILL EXPIRE AT 1130 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T03:27:00-00:00...storm...232DEG...37KT...36.14,-81.02",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRNK.TO.W.0003.000000T0000Z-220324T0330Z/"],
			eventEndingTime: ["2022-03-24T03:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.dfe319564ff18f50e3c2856b35b8705c8ae1360b.001.1,2021-03-18T18:00:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ccaa487867332eefb07dd4a3031ae9b87734fee.001.1,2021-03-18T18:11:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2b28e1dd1ac4c4797995fb374ff488ad46e6a586.001.1,2021-03-18T18:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.001.1",
		areaDesc: "Catawba, NC",
		geocode: {
			SAME: ["037035"],
			UGC: ["NCC035"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC035"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:04:00-04:00",
			},
		],
		sent: "2022-03-23T23:24:00-04:00",
		effective: "2022-03-23T23:24:00-04:00",
		onset: "2022-03-23T23:24:00-04:00",
		expires: "2022-03-23T23:39:41-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240324"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN CATAWBA COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T03:24:00-00:00...storm...231DEG...38KT...35.8,-81.42",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0012.000000T0000Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6ce28388d45d838cc306afb71c719853ea0940cb.001.1,2021-04-10T18:46:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7b8364989650aca4a0f1a7d4ce1c1150cc2eae8f.001.1,2021-04-10T18:37:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c5ab965c0f8c93edb25aa68a0bf2c999ce11a695.002.1",
		areaDesc: "Burke, NC; Caldwell, NC",
		geocode: {
			SAME: ["037023", "037027"],
			UGC: ["NCC023", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:04:00-04:00",
			},
		],
		sent: "2022-03-23T23:24:00-04:00",
		effective: "2022-03-23T23:24:00-04:00",
		onset: "2022-03-23T23:24:00-04:00",
		expires: "2022-03-23T23:45:00-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 11:24PM EDT until March 23 at 11:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 1124 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 6 miles northwest of Hickory, or over Granite Falls,\nmoving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nsoutheastern Caldwell and east central Burke Counties, including the\nfollowing locations... Northlakes.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nflash flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240324"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1145 PM EDT FOR SOUTHEASTERN CALDWELL AND EAST CENTRAL BURKE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T03:24:00-00:00...storm...231DEG...38KT...35.8,-81.42",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0012.000000T0000Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6ce28388d45d838cc306afb71c719853ea0940cb.001.1,2021-04-10T18:46:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7b8364989650aca4a0f1a7d4ce1c1150cc2eae8f.001.1,2021-04-10T18:37:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5fea80ca78ff56aef0e51baa24cc8fb464202d78.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5fea80ca78ff56aef0e51baa24cc8fb464202d78.001.1",
		areaDesc: "Wilkes, NC",
		geocode: {
			SAME: ["037193"],
			UGC: ["NCC193"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC193"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:02:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:13:00-04:00",
			},
		],
		sent: "2022-03-23T23:21:00-04:00",
		effective: "2022-03-23T23:21:00-04:00",
		onset: "2022-03-23T23:21:00-04:00",
		expires: "2022-03-23T23:30:00-04:00",
		ends: "2022-03-23T23:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:21PM EDT until March 23 at 11:30PM EDT by NWS Blacksburg VA",
		description:
			"At 1121 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Windy Gap, or near Wilkesboro, moving northeast at\n45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nNorth Wilkesboro...\nWilkesboro...\nWindy Gap...\nWilkes County Airport...\nMoravian Falls...\nFairplains...\nand Roaring River.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240321"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1130 PM EDT FOR SOUTHEASTERN WILKES COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T03:21:00-00:00...storm...232DEG...37KT...36.11,-81.07",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0003.000000T0000Z-220324T0330Z/"],
			eventEndingTime: ["2022-03-24T03:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.dfe319564ff18f50e3c2856b35b8705c8ae1360b.001.1,2021-03-18T18:00:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ccaa487867332eefb07dd4a3031ae9b87734fee.001.1,2021-03-18T18:11:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2b28e1dd1ac4c4797995fb374ff488ad46e6a586.001.1,2021-03-18T18:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.608cd72bcd4b0f89c1b0a9ff64701fb092263b01.001.1",
		areaDesc: "Wilkes, NC",
		geocode: {
			SAME: ["037193"],
			UGC: ["NCC193"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC193"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T23:02:00-04:00",
			},
		],
		sent: "2022-03-23T23:13:00-04:00",
		effective: "2022-03-23T23:13:00-04:00",
		onset: "2022-03-23T23:13:00-04:00",
		expires: "2022-03-23T23:30:00-04:00",
		ends: "2022-03-23T23:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:13PM EDT until March 23 at 11:30PM EDT by NWS Blacksburg VA",
		description:
			"At 1113 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Moravian Falls, or near Wilkesboro, moving northeast\nat 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nNorth Wilkesboro...\nWilkesboro...\nBoomer...\nWindy Gap...\nWilkesboro Reservoir...\nBuck...\nand Fairplains.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240313"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1130 PM EDT FOR SOUTHEASTERN WILKES COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T03:13:00-00:00...storm...232DEG...37KT...36.06,-81.15",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0003.000000T0000Z-220324T0330Z/"],
			eventEndingTime: ["2022-03-24T03:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.dfe319564ff18f50e3c2856b35b8705c8ae1360b.001.1,2021-03-18T18:00:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ccaa487867332eefb07dd4a3031ae9b87734fee.001.1,2021-03-18T18:11:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2b28e1dd1ac4c4797995fb374ff488ad46e6a586.001.1,2021-03-18T18:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a36745a1fdad365fa572bb1d3dbebca4de7f7de2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.a36745a1fdad365fa572bb1d3dbebca4de7f7de2.001.1",
		areaDesc: "Alexander, NC; Burke, NC; Caldwell, NC",
		geocode: {
			SAME: ["037003", "037023", "037027"],
			UGC: ["NCC003", "NCC023", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dedf940ce295a157f18e37ee1a188fc41d720147.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dedf940ce295a157f18e37ee1a188fc41d720147.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:36:00-04:00",
			},
		],
		sent: "2022-03-23T23:09:00-04:00",
		effective: "2022-03-23T23:09:00-04:00",
		onset: "2022-03-23T23:09:00-04:00",
		expires: "2022-03-23T23:19:00-04:00",
		ends: "2022-03-23T23:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 11:09PM EDT until March 23 at 11:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and has exited the warned area. Therefore, the warning will\nbe allowed to expire.\n\nA Tornado Watch remains in effect until midnight EDT for western and\nthe Piedmont of North Carolina.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240309"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN ALEXANDER...CALDWELL AND CENTRAL BURKE COUNTIES WILL EXPIRE AT 1115 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T03:09:00-00:00...storm...223DEG...31KT...36.1,-81.32",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KGSP.TO.W.0010.000000T0000Z-220324T0315Z/"],
			eventEndingTime: ["2022-03-24T03:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9cc9f4bd513efae486c77eaa02d77d2aab972f8e.002.1,2021-03-25T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9318d21d283a16f195fb5d5e75a3a87503fc006.002.1,2021-03-25T17:09:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e8aa9b96a15fd8469129d62b327ca64f778441eb.001.1,2021-03-25T16:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9cc9f4bd513efae486c77eaa02d77d2aab972f8e.001.1,2021-03-25T17:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9318d21d283a16f195fb5d5e75a3a87503fc006.001.1,2021-03-25T17:09:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c02ce31223ce28552e79284c0baabf7f1dd251ad.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c02ce31223ce28552e79284c0baabf7f1dd251ad.001.1",
		areaDesc: "Burke, NC; McDowell, NC; Rutherford, NC",
		geocode: {
			SAME: ["037023", "037111", "037161"],
			UGC: ["NCC023", "NCC111", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC111",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.de3cdef034969a39406f7fe38834fff9090308c3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.de3cdef034969a39406f7fe38834fff9090308c3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:43:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:23:00-04:00",
			},
		],
		sent: "2022-03-23T23:05:00-04:00",
		effective: "2022-03-23T23:05:00-04:00",
		onset: "2022-03-23T23:05:00-04:00",
		expires: "2022-03-23T23:15:00-04:00",
		ends: "2022-03-23T23:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 11:05PM EDT until March 23 at 11:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The storm which prompted the warning has moved out of the area.\nTherefore, the warning will be allowed to expire.\n\nA Tornado Watch remains in effect until midnight EDT for western and\nthe Piedmont of North Carolina.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240305"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN MCDOWELL...NORTHEASTERN RUTHERFORD AND SOUTHWESTERN BURKE COUNTIES WILL EXPIRE AT 1115 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T03:05:00-00:00...storm...223DEG...31KT...35.67,-81.72",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KGSP.TO.W.0009.000000T0000Z-220324T0315Z/"],
			eventEndingTime: ["2022-03-24T03:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6dc55cd2d55329ecb6302bed043776e038c2749d.001.1,2021-03-25T16:14:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.203b172dad3f43e27dce36f8890d115abd76286c.002.1,2021-03-25T16:25:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c717e8212c6192627cea82568c0d0bc747e4d2d.001.1,2021-03-25T16:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.203b172dad3f43e27dce36f8890d115abd76286c.001.1,2021-03-25T16:25:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.a13d675b0e7abedf8486e738800eb3a8ac8d5654.001.1",
		areaDesc: "Burke, NC; Caldwell, NC; Catawba, NC",
		geocode: {
			SAME: ["037023", "037027", "037035"],
			UGC: ["NCC023", "NCC027", "NCC035"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
			"https://api.weather.gov/zones/county/NCC035",
		],
		references: [],
		sent: "2022-03-23T23:04:00-04:00",
		effective: "2022-03-23T23:04:00-04:00",
		onset: "2022-03-23T23:04:00-04:00",
		expires: "2022-03-23T23:45:00-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 11:04PM EDT until March 23 at 11:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nNorthwestern Catawba County in the Piedmont of North Carolina...\nSoutheastern Caldwell County in western North Carolina...\nSoutheastern Burke County in western North Carolina...\n\n* Until 1145 PM EDT.\n\n* At 1104 PM EDT, a severe thunderstorm capable of producing a\ntornado was located 6 miles southeast of Morganton, or 5 miles\nnorth of South Mountains State Park, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nDrexel, Connelly Springs and Valdese around 1110 PM EDT.\nLenoir, Lake Rhodhiss, Rhodhiss, Granite Falls and Icard around\n1120 PM EDT.\nSt. Stephens around 1130 PM EDT.\nLake Hickory around 1140 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nNorthlakes and Pleasant Grove.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240304"],
			eventMotionDescription: [
				"2022-03-24T03:04:00-00:00...storm...231DEG...38KT...35.67,-81.62",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0012.220324T0304Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.6d668291fb2b03387445aaee5a1b2d88ee495def.001.1",
		areaDesc: "Wilkes, NC",
		geocode: {
			SAME: ["037193"],
			UGC: ["NCC193"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC193"],
		references: [],
		sent: "2022-03-23T23:02:00-04:00",
		effective: "2022-03-23T23:02:00-04:00",
		onset: "2022-03-23T23:02:00-04:00",
		expires: "2022-03-23T23:30:00-04:00",
		ends: "2022-03-23T23:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 11:02PM EDT until March 23 at 11:30PM EDT by NWS Blacksburg VA",
		description:
			"The National Weather Service in BLACKSBURG has issued a\n\n* Tornado Warning for...\nSoutheastern Wilkes County in northwestern North Carolina...\n\n* Until 1130 PM EDT.\n\n* At 1102 PM EDT, a severe thunderstorm capable of producing a\ntornado was located near Boomer, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nNorth Wilkesboro...\nWilkesboro...\nBoomer...\nWindy Gap...\nWilkesboro Reservoir...\nBuck...\nand Fairplains.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRNK"],
			WMOidentifier: ["WFUS51 KRNK 240302"],
			eventMotionDescription: [
				"2022-03-24T03:02:00-00:00...storm...232DEG...37KT...35.99,-81.26",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.W.0003.220324T0302Z-220324T0330Z/"],
			eventEndingTime: ["2022-03-24T03:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1cb937e5575bcc868288afa30369426dbea2e872.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1cb937e5575bcc868288afa30369426dbea2e872.001.1",
		areaDesc: "Alexander, NC; Caldwell, NC",
		geocode: {
			SAME: ["037003", "037027"],
			UGC: ["NCC003", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [],
		sent: "2022-03-23T22:58:00-04:00",
		effective: "2022-03-23T22:58:00-04:00",
		onset: "2022-03-23T22:58:00-04:00",
		expires: "2022-03-23T23:45:00-04:00",
		ends: "2022-03-23T23:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:58PM EDT until March 23 at 11:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nNorthwestern Alexander County in the Piedmont of North Carolina...\nEast central Caldwell County in western North Carolina...\n\n* Until 1145 PM EDT.\n\n* At 1057 PM EDT, a severe thunderstorm capable of producing a\ntornado was located 7 miles west of Taylorsville, moving northeast\nat 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous thunderstorm will remain over mainly rural areas of\nnorthwestern Alexander and east central Caldwell Counties,\nincluding the following locations... Ellendale, Kings Creek and\nLittle River In Alexander County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240258"],
			eventMotionDescription: [
				"2022-03-24T02:57:00-00:00...storm...236DEG...38KT...35.95,-81.31",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0011.220324T0258Z-220324T0345Z/"],
			eventEndingTime: ["2022-03-24T03:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.47ec9c6e3ab574acea6e6d81b3b0648d541fb07e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.47ec9c6e3ab574acea6e6d81b3b0648d541fb07e.001.1",
		areaDesc: "Burke, NC; Caldwell, NC; McDowell, NC",
		geocode: {
			SAME: ["037023", "037027", "037111"],
			UGC: ["NCC023", "NCC027", "NCC111"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
			"https://api.weather.gov/zones/county/NCC111",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2d6fcd336ac1224b814a56ce1f29aa8a70699272.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2d6fcd336ac1224b814a56ce1f29aa8a70699272.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:10:00-04:00",
			},
		],
		sent: "2022-03-23T22:55:00-04:00",
		effective: "2022-03-23T22:55:00-04:00",
		onset: "2022-03-23T22:55:00-04:00",
		expires: "2022-03-23T23:05:00-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:55PM EDT until March 23 at 11:00PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and has exited the warned area. Therefore, the warning will\nbe allowed to expire.\n\nA Tornado Watch remains in effect until midnight EDT for western\nNorth Carolina.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240255"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN MCDOWELL...SOUTHERN CALDWELL AND CENTRAL BURKE COUNTIES WILL EXPIRE AT 1100 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-24T02:55:00-00:00...storm...227DEG...31KT...35.87,-81.53",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KGSP.TO.W.0008.000000T0000Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ba4b2a37224b2887ca9939a0d1f77e0f9130ce27.001.1,2021-03-25T16:43:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a86917bc8c77ff7681f6d2bfa4360401b6e52c57.001.1,2021-03-25T16:33:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c67eb3cdccb1b5fa80c2ed84cf06ef94a01609ef.002.1,2021-03-25T16:19:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.018419a36ad375c16b481a9d5346b97057bf321e.001.1,2021-03-25T16:01:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c67eb3cdccb1b5fa80c2ed84cf06ef94a01609ef.001.1,2021-03-25T16:19:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.de3cdef034969a39406f7fe38834fff9090308c3.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.de3cdef034969a39406f7fe38834fff9090308c3.001.1",
		areaDesc: "Burke, NC; McDowell, NC; Rutherford, NC",
		geocode: {
			SAME: ["037023", "037111", "037161"],
			UGC: ["NCC023", "NCC111", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC111",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:23:00-04:00",
			},
		],
		sent: "2022-03-23T22:43:00-04:00",
		effective: "2022-03-23T22:43:00-04:00",
		onset: "2022-03-23T22:43:00-04:00",
		expires: "2022-03-23T23:15:00-04:00",
		ends: "2022-03-23T23:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:43PM EDT until March 23 at 11:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 1043 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 12 miles southeast of Marion, or 12 miles west of South\nMountains State Park, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nSouth Mountains State Park around 1100 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nGlenwood, Thermal City, Fero, Dysartsville and Union Mills.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nflash flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240243"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1115 PM EDT FOR SOUTHEASTERN MCDOWELL...NORTHEASTERN RUTHERFORD AND SOUTHWESTERN BURKE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T02:43:00-00:00...storm...223DEG...31KT...35.55,-81.86",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0009.000000T0000Z-220324T0315Z/"],
			eventEndingTime: ["2022-03-24T03:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6dc55cd2d55329ecb6302bed043776e038c2749d.001.1,2021-03-25T16:14:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c717e8212c6192627cea82568c0d0bc747e4d2d.001.1,2021-03-25T16:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.203b172dad3f43e27dce36f8890d115abd76286c.002.1,2021-03-25T16:25:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.203b172dad3f43e27dce36f8890d115abd76286c.001.1,2021-03-25T16:25:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.43fa1a058645c598825db68bc6e417c046f147aa.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.43fa1a058645c598825db68bc6e417c046f147aa.001.1",
		areaDesc: "Henderson, NC; Greenville, SC; Pickens, SC",
		geocode: {
			SAME: ["037089", "045045", "045077"],
			UGC: ["NCC089", "SCC045", "SCC077"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC089",
			"https://api.weather.gov/zones/county/SCC045",
			"https://api.weather.gov/zones/county/SCC077",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:08:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:24:00-04:00",
			},
		],
		sent: "2022-03-23T22:41:00-04:00",
		effective: "2022-03-23T22:41:00-04:00",
		onset: "2022-03-23T22:41:00-04:00",
		expires: "2022-03-23T22:57:01-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240241"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTH CENTRAL HENDERSON...NORTHERN GREENVILLE AND NORTHEASTERN PICKENS COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T02:35:00-00:00...storm...232DEG...35KT...35.19,-82.35",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0007.000000T0000Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.002.1,2021-03-25T15:48:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.13680038e8ebbacc9376cd625e7f00877f5b26ef.001.1,2021-03-25T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f102def4e15744fe309386f1bc04fc3a92040a2a.001.1,2021-03-25T15:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.001.1,2021-03-25T15:48:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dedf940ce295a157f18e37ee1a188fc41d720147.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.dedf940ce295a157f18e37ee1a188fc41d720147.001.1",
		areaDesc: "Alexander, NC; Burke, NC; Caldwell, NC",
		geocode: {
			SAME: ["037003", "037023", "037027"],
			UGC: ["NCC003", "NCC023", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [],
		sent: "2022-03-23T22:36:00-04:00",
		effective: "2022-03-23T22:36:00-04:00",
		onset: "2022-03-23T22:36:00-04:00",
		expires: "2022-03-23T23:15:00-04:00",
		ends: "2022-03-23T23:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:36PM EDT until March 23 at 11:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nNorthwestern Alexander County in the Piedmont of North Carolina...\nCaldwell County in western North Carolina...\nCentral Burke County in western North Carolina...\n\n* Until 1115 PM EDT.\n\n* At 1036 PM EDT, a severe thunderstorm capable of producing a\ntornado was located over Lenoir, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nCedar Rock around 1050 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include Kings\nCreek and Patterson.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240236"],
			eventMotionDescription: [
				"2022-03-24T02:36:00-00:00...storm...223DEG...31KT...35.9,-81.55",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0010.220324T0236Z-220324T0315Z/"],
			eventEndingTime: ["2022-03-24T03:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8f7055ccc2d10927622b44253bb66d098a37dbea.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8f7055ccc2d10927622b44253bb66d098a37dbea.001.1",
		areaDesc: "Polk, NC; Rutherford, NC",
		geocode: {
			SAME: ["037149", "037161"],
			UGC: ["NCC149", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC149",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:03:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bdbb1d76bf6854d98a9f6cb659054119b2570905.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bdbb1d76bf6854d98a9f6cb659054119b2570905.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:16:00-04:00",
			},
		],
		sent: "2022-03-23T22:26:00-04:00",
		effective: "2022-03-23T22:26:00-04:00",
		onset: "2022-03-23T22:26:00-04:00",
		expires: "2022-03-23T22:41:51-04:00",
		ends: "2022-03-23T22:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240226"],
			NWSheadline: [
				"THE TORNADO WARNING FOR CENTRAL RUTHERFORD AND CENTRAL POLK COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T02:24:00-00:00...storm...240DEG...31KT...35.36,-81.99",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0006.000000T0000Z-220324T0245Z/"],
			eventEndingTime: ["2022-03-24T02:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2557f95e6588a897020c773921b4a83b214099c1.001.1,2021-03-25T15:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bea0300a2ddd77ece8546e7a17ca675e9257b715.002.1,2021-03-25T15:16:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8568a02f9880218c0b9547b2dc18c4c7ebe8cc3e.001.1,2021-03-25T14:56:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bea0300a2ddd77ece8546e7a17ca675e9257b715.001.1,2021-03-25T15:16:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.001.1",
		areaDesc: "Transylvania, NC",
		geocode: {
			SAME: ["037175"],
			UGC: ["NCC175"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC175"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:08:00-04:00",
			},
		],
		sent: "2022-03-23T22:24:00-04:00",
		effective: "2022-03-23T22:24:00-04:00",
		onset: "2022-03-23T22:24:00-04:00",
		expires: "2022-03-23T22:39:37-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240224"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN TRANSYLVANIA COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T02:24:00-00:00...storm...232DEG...35KT...35.08,-82.52",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0007.000000T0000Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.002.1,2021-03-25T15:48:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f102def4e15744fe309386f1bc04fc3a92040a2a.001.1,2021-03-25T15:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.13680038e8ebbacc9376cd625e7f00877f5b26ef.001.1,2021-03-25T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.001.1,2021-03-25T15:48:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.61f201c0f30a7855804b9d2597df6146901a4b11.002.1",
		areaDesc: "Henderson, NC; Greenville, SC; Pickens, SC",
		geocode: {
			SAME: ["037089", "045045", "045077"],
			UGC: ["NCC089", "SCC045", "SCC077"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC089",
			"https://api.weather.gov/zones/county/SCC045",
			"https://api.weather.gov/zones/county/SCC077",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:08:00-04:00",
			},
		],
		sent: "2022-03-23T22:24:00-04:00",
		effective: "2022-03-23T22:24:00-04:00",
		onset: "2022-03-23T22:24:00-04:00",
		expires: "2022-03-23T23:00:00-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:24PM EDT until March 23 at 11:00PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 1024 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 16 miles southeast of Brevard, or near Pleasant Ridge\nState Park, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nTigerville around 1030 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nCleveland and Crab Creek.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nflash flooding. Do not drive your vehicle through flooded roadways.\n\nLife-threatening flash flooding is also occurring or is imminent.\nAvoid taking shelter in flooded or flood prone areas. If indoors,\nmove to an interior room on the lowest dry floor. If in a car, seek\nshelter in a sturdy building away from flooding.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240224"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1100 PM EDT FOR SOUTH CENTRAL HENDERSON...NORTHERN GREENVILLE AND NORTHEASTERN PICKENS COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T02:24:00-00:00...storm...232DEG...35KT...35.08,-82.52",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0007.000000T0000Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.002.1,2021-03-25T15:48:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f102def4e15744fe309386f1bc04fc3a92040a2a.001.1,2021-03-25T15:27:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.13680038e8ebbacc9376cd625e7f00877f5b26ef.001.1,2021-03-25T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e9f47db663713432a83cc3da36003d849cd9b221.001.1,2021-03-25T15:48:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b1d5968f5bbf6c96e521fa53ac9b790084635cb9.001.1",
		areaDesc: "Burke, NC; McDowell, NC; Rutherford, NC",
		geocode: {
			SAME: ["037023", "037111", "037161"],
			UGC: ["NCC023", "NCC111", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC111",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [],
		sent: "2022-03-23T22:23:00-04:00",
		effective: "2022-03-23T22:23:00-04:00",
		onset: "2022-03-23T22:23:00-04:00",
		expires: "2022-03-23T23:15:00-04:00",
		ends: "2022-03-23T23:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:23PM EDT until March 23 at 11:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nSoutheastern McDowell County in western North Carolina...\nNortheastern Rutherford County in western North Carolina...\nSouthwestern Burke County in western North Carolina...\n\n* Until 1115 PM EDT.\n\n* At 1023 PM EDT, a severe thunderstorm capable of producing a\ntornado was located 4 miles northwest of Rutherfordton, moving\nnortheast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nSouth Mountains State Park around 1100 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nGlenwood, Green Hill, Thermal City, Fero and Dysartsville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240223"],
			eventMotionDescription: [
				"2022-03-24T02:23:00-00:00...storm...223DEG...31KT...35.42,-82.01",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0009.220324T0223Z-220324T0315Z/"],
			eventEndingTime: ["2022-03-24T03:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bdbb1d76bf6854d98a9f6cb659054119b2570905.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.bdbb1d76bf6854d98a9f6cb659054119b2570905.001.1",
		areaDesc: "Polk, NC; Rutherford, NC",
		geocode: {
			SAME: ["037149", "037161"],
			UGC: ["NCC149", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC149",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T22:03:00-04:00",
			},
		],
		sent: "2022-03-23T22:16:00-04:00",
		effective: "2022-03-23T22:16:00-04:00",
		onset: "2022-03-23T22:16:00-04:00",
		expires: "2022-03-23T22:45:00-04:00",
		ends: "2022-03-23T22:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:16PM EDT until March 23 at 10:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 1016 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles northeast of Columbus, moving northeast at 35\nmph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nLake Adger and Mill Spring.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nflash flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240216"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1045 PM EDT FOR CENTRAL RUTHERFORD AND CENTRAL POLK COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T02:16:00-00:00...storm...240DEG...31KT...35.31,-82.09",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0006.000000T0000Z-220324T0245Z/"],
			eventEndingTime: ["2022-03-24T02:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2557f95e6588a897020c773921b4a83b214099c1.001.1,2021-03-25T15:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bea0300a2ddd77ece8546e7a17ca675e9257b715.002.1,2021-03-25T15:16:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8568a02f9880218c0b9547b2dc18c4c7ebe8cc3e.001.1,2021-03-25T14:56:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bea0300a2ddd77ece8546e7a17ca675e9257b715.001.1,2021-03-25T15:16:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2d6fcd336ac1224b814a56ce1f29aa8a70699272.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2d6fcd336ac1224b814a56ce1f29aa8a70699272.001.1",
		areaDesc: "Burke, NC; Caldwell, NC; McDowell, NC",
		geocode: {
			SAME: ["037023", "037027", "037111"],
			UGC: ["NCC023", "NCC027", "NCC111"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
			"https://api.weather.gov/zones/county/NCC111",
		],
		references: [],
		sent: "2022-03-23T22:10:00-04:00",
		effective: "2022-03-23T22:10:00-04:00",
		onset: "2022-03-23T22:10:00-04:00",
		expires: "2022-03-23T23:00:00-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:10PM EDT until March 23 at 11:00PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nSoutheastern McDowell County in western North Carolina...\nSouthern Caldwell County in western North Carolina...\nCentral Burke County in western North Carolina...\n\n* Until 1100 PM EDT.\n\n* At 1010 PM EDT, a severe thunderstorm capable of producing a\ntornado was located 9 miles east of Marion, or 7 miles southeast of\nLake James State Park, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nGlen Alpine and South Mountains State Park around 1020 PM EDT.\nMorganton around 1030 PM EDT.\nValdese, Drexel, Rutherford College and Connelly Springs around\n1040 PM EDT.\nLenoir, Cajah's Mountain, Gamewell, Sawmills and Hudson around\n1050 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nCollettsville, Oak Hill and Dysartsville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240210"],
			eventMotionDescription: [
				"2022-03-24T02:10:00-00:00...storm...227DEG...31KT...35.63,-81.85",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0008.220324T0210Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.dbc5de38dbda877dec01d9429e3f7ed17e578625.001.1",
		areaDesc: "Henderson, NC; Transylvania, NC; Greenville, SC; Pickens, SC",
		geocode: {
			SAME: ["037089", "037175", "045045", "045077"],
			UGC: ["NCC089", "NCC175", "SCC045", "SCC077"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC089",
			"https://api.weather.gov/zones/county/NCC175",
			"https://api.weather.gov/zones/county/SCC045",
			"https://api.weather.gov/zones/county/SCC077",
		],
		references: [],
		sent: "2022-03-23T22:08:00-04:00",
		effective: "2022-03-23T22:08:00-04:00",
		onset: "2022-03-23T22:08:00-04:00",
		expires: "2022-03-23T23:00:00-04:00",
		ends: "2022-03-23T23:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:08PM EDT until March 23 at 11:00PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nSoutheastern Transylvania County in western North Carolina...\nSouth central Henderson County in western North Carolina...\nNorthern Greenville County in Upstate South Carolina...\nNortheastern Pickens County in Upstate South Carolina...\n\n* Until 1100 PM EDT.\n\n* At 1008 PM EDT, a severe thunderstorm capable of producing a\ntornado was located 6 miles north of Pickens, or 4 miles south of\nTable Rock State Park, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nCaesars Head State Park around 1020 PM EDT.\nPleasant Ridge State Park, Slater-Marietta and Jones Gap State\nPark around 1030 PM EDT.\nTigerville around 1040 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nSunset, Pumpkintown, Crab Creek, Cleveland and Cedar Mountain.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nLife-threatening flash flooding is also occurring or is imminent.\nAvoid taking shelter in flooded or flood prone areas. If indoors,\nmove to an interior room on the lowest dry floor. If in a car, seek\nshelter in a sturdy building away from flooding.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240208"],
			eventMotionDescription: [
				"2022-03-24T02:08:00-00:00...storm...232DEG...35KT...34.98,-82.67",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0007.220324T0208Z-220324T0300Z/"],
			eventEndingTime: ["2022-03-24T03:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 11:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 11:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.34f811af774e35346a963a1e5b93559eef7bef68.001.1",
		areaDesc: "Polk, NC; Rutherford, NC",
		geocode: {
			SAME: ["037149", "037161"],
			UGC: ["NCC149", "NCC161"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC149",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [],
		sent: "2022-03-23T22:03:00-04:00",
		effective: "2022-03-23T22:03:00-04:00",
		onset: "2022-03-23T22:03:00-04:00",
		expires: "2022-03-23T22:45:00-04:00",
		ends: "2022-03-23T22:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 10:03PM EDT until March 23 at 10:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nCentral Rutherford County in western North Carolina...\nPolk County in western North Carolina...\n\n* Until 1045 PM EDT.\n\n* At 1003 PM EDT, a severe thunderstorm capable of producing a\ntornado was located over Columbus, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous thunderstorm will remain over mainly rural areas of\ncentral Rutherford and Polk Counties, including the following\nlocations... Lake Adger and Mill Spring.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240203"],
			eventMotionDescription: [
				"2022-03-24T02:03:00-00:00...storm...240DEG...31KT...35.25,-82.22",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0006.220324T0203Z-220324T0245Z/"],
			eventEndingTime: ["2022-03-24T02:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 10:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 10:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.892e96e8eb8ba746e732b63f67eeb1e8d5f18ea7.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.892e96e8eb8ba746e732b63f67eeb1e8d5f18ea7.002.1",
		areaDesc: "Pickens, SC",
		geocode: {
			SAME: ["045077"],
			UGC: ["SCC077"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/SCC077"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:27:00-04:00",
			},
		],
		sent: "2022-03-23T21:48:00-04:00",
		effective: "2022-03-23T21:48:00-04:00",
		onset: "2022-03-23T21:48:00-04:00",
		expires: "2022-03-23T22:15:00-04:00",
		ends: "2022-03-23T22:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 9:48PM EDT until March 23 at 10:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 948 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 5 miles northwest of Pickens, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorthwestern Pickens County, including the following locations...\nNine Times and Sunset.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nflash flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240148"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1015 PM EDT FOR NORTHWESTERN PICKENS COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T01:48:00-00:00...storm...228DEG...27KT...34.95,-82.75",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0005.000000T0000Z-220324T0215Z/"],
			eventEndingTime: ["2022-03-24T02:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1ddc73e53166bee6265db2c17926d9ca14bdec5e.001.1,2021-03-25T15:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ab10e0a46b4bf2026c41607d79d3b50b2e8fc330.002.1,2021-03-25T15:03:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f654a034e6ff3893fc8db7297bb586c42f19621a.001.1,2021-03-25T14:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ab10e0a46b4bf2026c41607d79d3b50b2e8fc330.001.1,2021-03-25T15:03:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.892e96e8eb8ba746e732b63f67eeb1e8d5f18ea7.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.892e96e8eb8ba746e732b63f67eeb1e8d5f18ea7.001.1",
		areaDesc: "Oconee, SC",
		geocode: {
			SAME: ["045073"],
			UGC: ["SCC073"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/SCC073"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:27:00-04:00",
			},
		],
		sent: "2022-03-23T21:48:00-04:00",
		effective: "2022-03-23T21:48:00-04:00",
		onset: "2022-03-23T21:48:00-04:00",
		expires: "2022-03-23T22:03:39-04:00",
		ends: "2022-03-23T22:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240148"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL OCONEE COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T01:48:00-00:00...storm...228DEG...27KT...34.95,-82.75",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0005.000000T0000Z-220324T0215Z/"],
			eventEndingTime: ["2022-03-24T02:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1ddc73e53166bee6265db2c17926d9ca14bdec5e.001.1,2021-03-25T15:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ab10e0a46b4bf2026c41607d79d3b50b2e8fc330.002.1,2021-03-25T15:03:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f654a034e6ff3893fc8db7297bb586c42f19621a.001.1,2021-03-25T14:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ab10e0a46b4bf2026c41607d79d3b50b2e8fc330.001.1,2021-03-25T15:03:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3890e390739aaaff2d51826464a3eec39cd14a1f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3890e390739aaaff2d51826464a3eec39cd14a1f.001.1",
		areaDesc: "Bedford, VA; Franklin, VA",
		geocode: {
			SAME: ["051019", "051067"],
			UGC: ["VAC019", "VAC067"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC019",
			"https://api.weather.gov/zones/county/VAC067",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:27:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.13350f5cdd1db1721416d89201126ff3e80d7c3f.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.13350f5cdd1db1721416d89201126ff3e80d7c3f.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:41:00-04:00",
			},
		],
		sent: "2022-03-23T21:47:00-04:00",
		effective: "2022-03-23T21:47:00-04:00",
		onset: "2022-03-23T21:47:00-04:00",
		expires: "2022-03-23T22:03:03-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240147"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHWESTERN BEDFORD AND NORTHEASTERN FRANKLIN COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T01:46:00-00:00...storm...219DEG...27KT...37.15,-79.71",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRNK.TO.W.0002.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bf44513b30c08ece26d98cf273035da0fe88b24.001.1,2021-03-18T17:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bf44513b30c08ece26d98cf273035da0fe88b24.002.1,2021-03-18T17:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9f4f89a485b415ad6a009712a4da1a5f39bb5ccd.001.1,2021-03-18T17:37:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.13350f5cdd1db1721416d89201126ff3e80d7c3f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.13350f5cdd1db1721416d89201126ff3e80d7c3f.001.1",
		areaDesc: "Bedford, VA; Franklin, VA",
		geocode: {
			SAME: ["051019", "051067"],
			UGC: ["VAC019", "VAC067"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC019",
			"https://api.weather.gov/zones/county/VAC067",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:27:00-04:00",
			},
		],
		sent: "2022-03-23T21:41:00-04:00",
		effective: "2022-03-23T21:41:00-04:00",
		onset: "2022-03-23T21:41:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 9:41PM EDT until March 23 at 10:00PM EDT by NWS Blacksburg VA",
		description:
			"At 940 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Burnt Chimney, or 9 miles southwest of Moneta,\nmoving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nNorthwest Smith Mountain Lake...\nWestlake Corner...\nGoodview...\nand North Shore.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nHeavy rainfall may hide this tornado. Do not wait to see or hear the\ntornado. TAKE COVER NOW!\n\nLocally heavy rain will quickly reduce visibility and result in\nponding of water on roadways, standing water in low lying areas, and\nminor flooding of creeks, streams, and areas of poor drainage.\nDrivers are urged to slow down and use extra caution to avoid\nhydroplaning.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRNK"],
			WMOidentifier: ["WWUS51 KRNK 240141"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1000 PM EDT FOR SOUTHWESTERN BEDFORD AND NORTHEASTERN FRANKLIN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-24T01:40:00-00:00...storm...216DEG...31KT...37.1,-79.76",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRNK.TO.W.0002.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bf44513b30c08ece26d98cf273035da0fe88b24.001.1,2021-03-18T17:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bf44513b30c08ece26d98cf273035da0fe88b24.002.1,2021-03-18T17:54:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.9f4f89a485b415ad6a009712a4da1a5f39bb5ccd.001.1,2021-03-18T17:37:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.19657b8830af0a48f58d5224f572f627f83d3ee2.001.1",
		areaDesc: "Oconee, SC; Pickens, SC",
		geocode: {
			SAME: ["045073", "045077"],
			UGC: ["SCC073", "SCC077"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/SCC073",
			"https://api.weather.gov/zones/county/SCC077",
		],
		references: [],
		sent: "2022-03-23T21:27:00-04:00",
		effective: "2022-03-23T21:27:00-04:00",
		onset: "2022-03-23T21:27:00-04:00",
		expires: "2022-03-23T22:15:00-04:00",
		ends: "2022-03-23T22:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 9:27PM EDT until March 23 at 10:15PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nNorthwestern Pickens County in Upstate South Carolina...\nEast central Oconee County in Upstate South Carolina...\n\n* Until 1015 PM EDT.\n\n* At 926 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 10 miles northeast of Walhalla, or near Lake Keowee,\nmoving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nKeowee Toxaway State Park around 940 PM EDT.\nPickens around 950 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include Nine\nTimes and Sunset.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTorrential rainfall is occurring with this storm, and may lead to\nminor flooding. Do not drive your vehicle through flooded roadways.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240127"],
			eventMotionDescription: [
				"2022-03-24T01:26:00-00:00...storm...228DEG...27KT...34.84,-82.9",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0005.220324T0127Z-220324T0215Z/"],
			eventEndingTime: ["2022-03-24T02:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 10:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 10:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.bee9d69c46830d9ab56bee0134975b12882f5b09.001.1",
		areaDesc: "Bedford, VA; Franklin, VA",
		geocode: {
			SAME: ["051019", "051067"],
			UGC: ["VAC019", "VAC067"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/VAC019",
			"https://api.weather.gov/zones/county/VAC067",
		],
		references: [],
		sent: "2022-03-23T21:27:00-04:00",
		effective: "2022-03-23T21:27:00-04:00",
		onset: "2022-03-23T21:27:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Warning issued March 23 at 9:27PM EDT until March 23 at 10:00PM EDT by NWS Blacksburg VA",
		description:
			"The National Weather Service in BLACKSBURG has issued a\n\n* Tornado Warning for...\nSouthwestern Bedford County in south central Virginia...\nNortheastern Franklin County in west central Virginia...\n\n* Until 1000 PM EDT.\n\n* At 927 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Rocky Mount, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nRocky Mount...\nSmith Mountain Lake State Park...\nBurnt Chimney...\nWestern Smith Mountain Lake...\nNorthwest Smith Mountain Lake...\nNorth Shore...\nand Westlake Corner.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nHeavy rainfall may hide this tornado. Do not wait to see or hear the\ntornado. TAKE COVER NOW!\n\nLocally heavy rain will quickly reduce visibility and result in\nponding of water on roadways, standing water in low lying areas, and\nminor flooding of creeks, streams, and areas of poor drainage.\nDrivers are urged to slow down and use extra caution to avoid\nhydroplaning.\n\nWhen it is safe to do so, please send your reports of hail of any\nsize, as well as reports of any wind damage, including downed trees\nor large limbs, to the National Weather Service by calling toll free\nat 1...8 6 6...2 1 5...4 3 2 4. Reports and pictures can also be\nshared on the National Weather Service Blacksburg Facebook page and\non Twitter.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRNK"],
			WMOidentifier: ["WFUS51 KRNK 240127"],
			eventMotionDescription: [
				"2022-03-24T01:27:00-00:00...storm...219DEG...27KT...37.0,-79.84",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.W.0002.220324T0127Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 10:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 10:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.67a2d29cd226a659b8dafa45cd207e12d50417f2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.67a2d29cd226a659b8dafa45cd207e12d50417f2.001.1",
		areaDesc: "Caldwell, NC",
		geocode: {
			SAME: ["037027"],
			UGC: ["NCC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC027"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:06:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:23:00-04:00",
			},
		],
		sent: "2022-03-23T20:30:00-04:00",
		effective: "2022-03-23T20:30:00-04:00",
		onset: "2022-03-23T20:30:00-04:00",
		expires: "2022-03-23T20:46:04-04:00",
		ends: "2022-03-23T20:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240030"],
			NWSheadline: [
				"THE TORNADO WARNING FOR WEST CENTRAL CALDWELL COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T00:29:00-00:00...storm...227DEG...26KT...36.01,-81.5",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0004.000000T0000Z-220324T0045Z/"],
			eventEndingTime: ["2022-03-24T00:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.002.1,2021-03-18T17:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.97e53c548ebf9a0af5c2edca84be333d62ad3e73.001.1,2021-03-18T17:13:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bbede02e419d6bd2417edc98d76c821129486f4.001.1,2021-03-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.001.1,2021-03-18T17:30:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.002.1",
		areaDesc: "Caldwell, NC",
		geocode: {
			SAME: ["037027"],
			UGC: ["NCC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC027"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:06:00-04:00",
			},
		],
		sent: "2022-03-23T20:23:00-04:00",
		effective: "2022-03-23T20:23:00-04:00",
		onset: "2022-03-23T20:23:00-04:00",
		expires: "2022-03-23T20:45:00-04:00",
		ends: "2022-03-23T20:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 8:23PM EDT until March 23 at 8:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 822 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 4 miles north of Lenoir, moving northeast at 40 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nwest central Caldwell County, including the following locations...\nCollettsville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240023"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 845 PM EDT FOR WEST CENTRAL CALDWELL COUNTY",
			],
			eventMotionDescription: [
				"2022-03-24T00:22:00-00:00...storm...233DEG...35KT...35.97,-81.56",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0004.000000T0000Z-220324T0045Z/"],
			eventEndingTime: ["2022-03-24T00:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.002.1,2021-03-18T17:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.97e53c548ebf9a0af5c2edca84be333d62ad3e73.001.1,2021-03-18T17:13:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bbede02e419d6bd2417edc98d76c821129486f4.001.1,2021-03-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.001.1,2021-03-18T17:30:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.d680305eb4e73e2e4efa9c254988841bcb856c16.001.1",
		areaDesc: "Burke, NC",
		geocode: {
			SAME: ["037023"],
			UGC: ["NCC023"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC023"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:06:00-04:00",
			},
		],
		sent: "2022-03-23T20:23:00-04:00",
		effective: "2022-03-23T20:23:00-04:00",
		onset: "2022-03-23T20:23:00-04:00",
		expires: "2022-03-23T20:38:27-04:00",
		ends: "2022-03-23T20:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240023"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTH CENTRAL BURKE COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T00:22:00-00:00...storm...233DEG...35KT...35.97,-81.56",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0004.000000T0000Z-220324T0045Z/"],
			eventEndingTime: ["2022-03-24T00:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.002.1,2021-03-18T17:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.97e53c548ebf9a0af5c2edca84be333d62ad3e73.001.1,2021-03-18T17:13:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5bbede02e419d6bd2417edc98d76c821129486f4.001.1,2021-03-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.e296055fabf3f0cf1d1a9869315bfd3146b543b0.001.1,2021-03-18T17:30:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cc499f5310791f9a269841399247cba206fcee6.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5cc499f5310791f9a269841399247cba206fcee6.001.1",
		areaDesc: "Burke, NC; McDowell, NC",
		geocode: {
			SAME: ["037023", "037111"],
			UGC: ["NCC023", "NCC111"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC111",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2a5c546541f5076c1a09eed059d74fbf2eba9a8c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2a5c546541f5076c1a09eed059d74fbf2eba9a8c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:44:00-04:00",
			},
		],
		sent: "2022-03-23T20:08:00-04:00",
		effective: "2022-03-23T20:08:00-04:00",
		onset: "2022-03-23T20:08:00-04:00",
		expires: "2022-03-23T20:23:06-04:00",
		ends: "2022-03-23T20:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240008"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL MCDOWELL AND NORTHWESTERN BURKE COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T00:07:00-00:00...storm...227DEG...23KT...35.89,-81.79",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0003.000000T0000Z-220324T0030Z/"],
			eventEndingTime: ["2022-03-24T00:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.87ca839955838b9fe2a16a901322e4741c957691.001.1,2021-03-18T17:15:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8a7708400923f978ce1a0d9621443fa1732bc703.002.1,2021-03-18T16:59:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.34f606542bb66f9a50f6034ac4a9b859fd03d2b2.001.1,2021-03-18T16:38:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8a7708400923f978ce1a0d9621443fa1732bc703.001.1,2021-03-18T16:59:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fe0d9ba59d8a5ed3db8047cddd014ece3fa1bcf0.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fe0d9ba59d8a5ed3db8047cddd014ece3fa1bcf0.001.1",
		areaDesc: "Caldwell, NC",
		geocode: {
			SAME: ["037027"],
			UGC: ["NCC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC027"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:41:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a0484d3630d4c23663eef7522ed0cd674731a89a.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a0484d3630d4c23663eef7522ed0cd674731a89a.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:58:00-04:00",
			},
		],
		sent: "2022-03-23T20:07:00-04:00",
		effective: "2022-03-23T20:07:00-04:00",
		onset: "2022-03-23T20:07:00-04:00",
		expires: "2022-03-23T20:22:21-04:00",
		ends: "2022-03-23T20:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 240007"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHERN CALDWELL COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-24T00:06:00-00:00...storm...227DEG...23KT...36.15,-81.47",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0002.000000T0000Z-220324T0030Z/"],
			eventEndingTime: ["2022-03-24T00:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d0aa69ba9aac395d12f008c86592c8d78fdd4bad.001.1,2021-03-18T15:00:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aad4e342100ed9dd6e06b31613b2fbdacd0c3c10.002.1,2021-03-18T14:53:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.923b76333c5a3c13fde5d807a95b27a62c258ec4.001.1,2021-03-18T14:37:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aad4e342100ed9dd6e06b31613b2fbdacd0c3c10.001.1,2021-03-18T14:53:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.bb4cbe9d767475fe034ed548ea6f32df098b4ae5.001.1",
		areaDesc: "Burke, NC; Caldwell, NC",
		geocode: {
			SAME: ["037023", "037027"],
			UGC: ["NCC023", "NCC027"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
		],
		references: [],
		sent: "2022-03-23T20:06:00-04:00",
		effective: "2022-03-23T20:06:00-04:00",
		onset: "2022-03-23T20:06:00-04:00",
		expires: "2022-03-23T20:45:00-04:00",
		ends: "2022-03-23T20:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 8:06PM EDT until March 23 at 8:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nWest central Caldwell County in western North Carolina...\nNorth central Burke County in western North Carolina...\n\n* Until 845 PM EDT.\n\n* At 805 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 10 miles north of Morganton, or 4 miles northeast of\nTable Rock, moving northeast at 30 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nGamewell around 820 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nCollettsville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 240006"],
			eventMotionDescription: [
				"2022-03-24T00:05:00-00:00...storm...227DEG...26KT...35.88,-81.74",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0004.220324T0006Z-220324T0045Z/"],
			eventEndingTime: ["2022-03-24T00:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a0484d3630d4c23663eef7522ed0cd674731a89a.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.a0484d3630d4c23663eef7522ed0cd674731a89a.001.1",
		areaDesc: "Caldwell, NC",
		geocode: {
			SAME: ["037027"],
			UGC: ["NCC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC027"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:41:00-04:00",
			},
		],
		sent: "2022-03-23T19:58:00-04:00",
		effective: "2022-03-23T19:58:00-04:00",
		onset: "2022-03-23T19:58:00-04:00",
		expires: "2022-03-23T20:30:00-04:00",
		ends: "2022-03-23T20:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 7:58PM EDT until March 23 at 8:30PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 757 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles east of Blowing Rock, or near Darby, moving\nnortheast at 30 mph.\n\nHAZARD...Tornado and half dollar size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorthern Caldwell County, including the following locations... Globe,\nPatterson and Upton.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 232358"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 830 PM EDT FOR NORTHERN CALDWELL COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T23:57:00-00:00...storm...227DEG...26KT...36.11,-81.53",
			],
			maxHailSize: ["1.25"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0002.000000T0000Z-220324T0030Z/"],
			eventEndingTime: ["2022-03-24T00:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d0aa69ba9aac395d12f008c86592c8d78fdd4bad.001.1,2021-03-18T15:00:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.923b76333c5a3c13fde5d807a95b27a62c258ec4.001.1,2021-03-18T14:37:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aad4e342100ed9dd6e06b31613b2fbdacd0c3c10.002.1,2021-03-18T14:53:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aad4e342100ed9dd6e06b31613b2fbdacd0c3c10.001.1,2021-03-18T14:53:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2a5c546541f5076c1a09eed059d74fbf2eba9a8c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2a5c546541f5076c1a09eed059d74fbf2eba9a8c.001.1",
		areaDesc: "Burke, NC; McDowell, NC",
		geocode: {
			SAME: ["037023", "037111"],
			UGC: ["NCC023", "NCC111"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC111",
		],
		references: [],
		sent: "2022-03-23T19:44:00-04:00",
		effective: "2022-03-23T19:44:00-04:00",
		onset: "2022-03-23T19:44:00-04:00",
		expires: "2022-03-23T20:30:00-04:00",
		ends: "2022-03-23T20:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 7:44PM EDT until March 23 at 8:30PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nEast central McDowell County in western North Carolina...\nNorthwestern Burke County in western North Carolina...\n\n* Until 830 PM EDT.\n\n* At 743 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles northeast of Marion, or near Lake James, moving\nnortheast at 25 mph.\n\nHAZARD...Tornado and half dollar size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nTable Rock around 800 PM EDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 232344"],
			eventMotionDescription: [
				"2022-03-23T23:43:00-00:00...storm...227DEG...23KT...35.78,-81.93",
			],
			maxHailSize: ["1.25"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0003.220323T2344Z-220324T0030Z/"],
			eventEndingTime: ["2022-03-24T00:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e40e84a1e0bb67b3e12f36fafb1af162178875ad.001.1",
		areaDesc: "Caldwell, NC",
		geocode: {
			SAME: ["037027"],
			UGC: ["NCC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC027"],
		references: [],
		sent: "2022-03-23T19:41:00-04:00",
		effective: "2022-03-23T19:41:00-04:00",
		onset: "2022-03-23T19:41:00-04:00",
		expires: "2022-03-23T20:30:00-04:00",
		ends: "2022-03-23T20:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 7:41PM EDT until March 23 at 8:30PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nNorthern Caldwell County in western North Carolina...\n\n* Until 830 PM EDT.\n\n* At 741 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 9 miles south of Blowing Rock, or 8 miles south of\nBlowing Rock In Caldwell County, moving northeast at 25 mph.\n\nHAZARD...Tornado and half dollar size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nBlowing Rock In Caldwell County around 800 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nEdgemont, Patterson, Upton and Globe.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 232341"],
			eventMotionDescription: [
				"2022-03-23T23:41:00-00:00...storm...227DEG...23KT...35.99,-81.69",
			],
			maxHailSize: ["1.25"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0002.220323T2341Z-220324T0030Z/"],
			eventEndingTime: ["2022-03-24T00:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 8:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 8:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b5c50165b70f846dca875d972acde76e11b672bd.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b5c50165b70f846dca875d972acde76e11b672bd.001.1",
		areaDesc: "Abbeville, SC",
		geocode: {
			SAME: ["045001"],
			UGC: ["SCC001"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/SCC001"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:57:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T18:14:00-04:00",
			},
		],
		sent: "2022-03-23T18:28:00-04:00",
		effective: "2022-03-23T18:28:00-04:00",
		onset: "2022-03-23T18:28:00-04:00",
		expires: "2022-03-23T18:43:59-04:00",
		ends: "2022-03-23T18:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 232228"],
			NWSheadline: [
				"THE TORNADO WARNING FOR CENTRAL ABBEVILLE COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T22:21:00-00:00...storm...232DEG...34KT...34.32,-82.34",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0001.000000T0000Z-220323T2245Z/"],
			eventEndingTime: ["2022-03-23T22:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.30186ffc43923b9af8e8a743cdf5a568270a20ef.001.1,2021-03-10T09:00:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d0018d057f4b5fea1e426244f866f33ac3ea79e3.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.d0018d057f4b5fea1e426244f866f33ac3ea79e3.001.1",
		areaDesc: "Morgan, OH",
		geocode: {
			SAME: ["039115"],
			UGC: ["OHC115"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC115"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:55:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T18:15:00-04:00",
			},
		],
		sent: "2022-03-23T18:25:00-04:00",
		effective: "2022-03-23T18:25:00-04:00",
		onset: "2022-03-23T18:25:00-04:00",
		expires: "2022-03-23T18:35:00-04:00",
		ends: "2022-03-23T18:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Warning issued March 23 at 6:25PM EDT until March 23 at 6:30PM EDT by NWS Charleston WV",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.  However gusty\nwinds are still possible with this thunderstorm.\n\nA Tornado Watch remains in effect until 1000 PM EDT for southeastern\nOhio.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRLX"],
			WMOidentifier: ["WWUS51 KRLX 232225"],
			NWSheadline: [
				"THE TORNADO WARNING FOR MORGAN COUNTY WILL EXPIRE AT 630 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-23T22:25:00-00:00...storm...220DEG...48KT...39.76,-81.81",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRLX.TO.W.0002.000000T0000Z-220323T2230Z/"],
			eventEndingTime: ["2022-03-23T22:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c1432f966aee3b0efa5d157d2713d8cad0dd31ea.001.1,2021-03-16T11:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.002.1",
		areaDesc: "Morgan, OH",
		geocode: {
			SAME: ["039115"],
			UGC: ["OHC115"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC115"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:55:00-04:00",
			},
		],
		sent: "2022-03-23T18:15:00-04:00",
		effective: "2022-03-23T18:15:00-04:00",
		onset: "2022-03-23T18:15:00-04:00",
		expires: "2022-03-23T18:30:00-04:00",
		ends: "2022-03-23T18:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Warning issued March 23 at 6:15PM EDT until March 23 at 6:30PM EDT by NWS Charleston WV",
		description:
			"At 614 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near McConnelsville, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nMorgan County, including the following locations... Eagleport, Burr\nOak State Park, Bristol and Malta.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRLX"],
			WMOidentifier: ["WWUS51 KRLX 232215"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 630 PM EDT FOR MORGAN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T22:14:00-00:00...storm...220DEG...48KT...39.66,-81.92",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRLX.TO.W.0002.000000T0000Z-220323T2230Z/"],
			eventEndingTime: ["2022-03-23T22:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c1432f966aee3b0efa5d157d2713d8cad0dd31ea.001.1,2021-03-16T11:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5bc879bb803ef03ac03d810ab2ad8d51bbff4d1f.001.1",
		areaDesc: "Athens, OH; Perry, OH",
		geocode: {
			SAME: ["039009", "039127"],
			UGC: ["OHC009", "OHC127"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC009",
			"https://api.weather.gov/zones/county/OHC127",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:55:00-04:00",
			},
		],
		sent: "2022-03-23T18:15:00-04:00",
		effective: "2022-03-23T18:15:00-04:00",
		onset: "2022-03-23T18:15:00-04:00",
		expires: "2022-03-23T18:30:29-04:00",
		ends: "2022-03-23T18:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRLX"],
			WMOidentifier: ["WWUS51 KRLX 232215"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN PERRY AND NORTHWESTERN ATHENS COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T22:14:00-00:00...storm...220DEG...48KT...39.66,-81.92",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRLX.TO.W.0002.000000T0000Z-220323T2230Z/"],
			eventEndingTime: ["2022-03-23T22:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c1432f966aee3b0efa5d157d2713d8cad0dd31ea.001.1,2021-03-16T11:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.002.1",
		areaDesc: "Abbeville, SC",
		geocode: {
			SAME: ["045001"],
			UGC: ["SCC001"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/SCC001"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:57:00-04:00",
			},
		],
		sent: "2022-03-23T18:14:00-04:00",
		effective: "2022-03-23T18:14:00-04:00",
		onset: "2022-03-23T18:14:00-04:00",
		expires: "2022-03-23T18:45:00-04:00",
		ends: "2022-03-23T18:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 6:14PM EDT until March 23 at 6:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"At 612 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles northwest of Abbeville, or 7 miles southeast of\nLake Secession, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Abbeville County, including the following locations...\nAntreville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nIf on or near Lake Russell, get away from the water and move to safe\nshelter immediately. If you can hear thunder, you are close enough\nto be struck by lightning. Severe thunderstorms can produce large\ncapsizing waves, even on small bodies of water. Move into dock and\nseek safe shelter now! Do not be caught on the water in a\nthunderstorm.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 232214"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 645 PM EDT FOR CENTRAL ABBEVILLE COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T22:12:00-00:00...storm...233DEG...28KT...34.22,-82.49",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KGSP.TO.W.0001.000000T0000Z-220323T2245Z/"],
			eventEndingTime: ["2022-03-23T22:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.30186ffc43923b9af8e8a743cdf5a568270a20ef.001.1,2021-03-10T09:00:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.6b2ea745b97afb2fd287c0ca221361951e7fbaf8.001.1",
		areaDesc: "Anderson, SC",
		geocode: {
			SAME: ["045007"],
			UGC: ["SCC007"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/SCC007"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:57:00-04:00",
			},
		],
		sent: "2022-03-23T18:14:00-04:00",
		effective: "2022-03-23T18:14:00-04:00",
		onset: "2022-03-23T18:14:00-04:00",
		expires: "2022-03-23T18:29:13-04:00",
		ends: "2022-03-23T18:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSGSP"],
			WMOidentifier: ["WWUS52 KGSP 232214"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN ANDERSON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T22:12:00-00:00...storm...233DEG...28KT...34.22,-82.49",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KGSP.TO.W.0001.000000T0000Z-220323T2245Z/"],
			eventEndingTime: ["2022-03-23T22:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.30186ffc43923b9af8e8a743cdf5a568270a20ef.001.1,2021-03-10T09:00:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1f7f7c2a1e7fbbe961864ef92ede2f915eac7684.001.1",
		areaDesc: "Abbeville, SC; Anderson, SC",
		geocode: {
			SAME: ["045001", "045007"],
			UGC: ["SCC001", "SCC007"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/SCC001",
			"https://api.weather.gov/zones/county/SCC007",
		],
		references: [],
		sent: "2022-03-23T17:57:00-04:00",
		effective: "2022-03-23T17:57:00-04:00",
		onset: "2022-03-23T17:57:00-04:00",
		expires: "2022-03-23T18:45:00-04:00",
		ends: "2022-03-23T18:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Warning issued March 23 at 5:57PM EDT until March 23 at 6:45PM EDT by NWS Greenville-Spartanburg SC",
		description:
			"The National Weather Service in Greenville-Spartanburg has issued a\n\n* Tornado Warning for...\nSoutheastern Anderson County in Upstate South Carolina...\nAbbeville County in Upstate South Carolina...\n\n* Until 645 PM EDT.\n\n* At 556 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 11 miles west of Abbeville, or 4 miles southeast of\nLowndesville, moving northeast at 40 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nAbbeville and Lake Secession around 610 PM EDT.\n\nOther locations impacted by this dangerous thunderstorm include\nAntreville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nIf on or near Lake Russell, get away from the water and move to safe\nshelter immediately. If you can hear thunder, you are close enough\nto be struck by lightning. Severe thunderstorms can produce large\ncapsizing waves, even on small bodies of water. Move into dock and\nseek safe shelter now! Do not be caught on the water in a\nthunderstorm.\n\nPlease report damaging winds, hail, or flooding to the National\nWeather Service by calling toll free, 1, 800, 2 6 7, 8 1 0 1, or by\nposting on our Facebook page, or Tweet it using hashtag nwsgsp. Your\nmessage should describe the event and the specific location where it\noccurred.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORGSP"],
			WMOidentifier: ["WFUS52 KGSP 232157"],
			eventMotionDescription: [
				"2022-03-23T21:56:00-00:00...storm...232DEG...34KT...34.17,-82.59",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.W.0001.220323T2157Z-220323T2245Z/"],
			eventEndingTime: ["2022-03-23T22:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 6:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 6:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.301932b896092c336ea51a8cbfcc6a1976cbed60.001.1",
		areaDesc: "Athens, OH; Morgan, OH; Perry, OH",
		geocode: {
			SAME: ["039009", "039115", "039127"],
			UGC: ["OHC009", "OHC115", "OHC127"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC009",
			"https://api.weather.gov/zones/county/OHC115",
			"https://api.weather.gov/zones/county/OHC127",
		],
		references: [],
		sent: "2022-03-23T17:55:00-04:00",
		effective: "2022-03-23T17:55:00-04:00",
		onset: "2022-03-23T17:55:00-04:00",
		expires: "2022-03-23T18:30:00-04:00",
		ends: "2022-03-23T18:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Warning issued March 23 at 5:55PM EDT until March 23 at 6:30PM EDT by NWS Charleston WV",
		description:
			"The National Weather Service in Charleston West Virginia has issued a\n\n* Tornado Warning for...\nSoutheastern Perry County in southeastern Ohio...\nMorgan County in southeastern Ohio...\nNorthwestern Athens County in southeastern Ohio...\n\n* Until 630 PM EDT.\n\n* At 554 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Buchtel, or near Nelsonville, moving northeast at\n55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nGlouster around 600 PM EDT.\nMcConnelsville around 620 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nEagleport, Chauncey, Buchtel, Bristol, Trimble, Burr Oak State Park,\nRendville, Jacksonville, Malta and The Plains.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRLX"],
			WMOidentifier: ["WFUS51 KRLX 232155"],
			eventMotionDescription: [
				"2022-03-23T21:54:00-00:00...storm...220DEG...48KT...39.45,-82.15",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRLX.TO.W.0002.220323T2155Z-220323T2230Z/"],
			eventEndingTime: ["2022-03-23T22:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 6:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 6:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f0b3395d3a7a756b28b92ffc6248d9cf9ea2d14b.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f0b3395d3a7a756b28b92ffc6248d9cf9ea2d14b.002.1",
		areaDesc: "Glynn, GA",
		geocode: {
			SAME: ["013127"],
			UGC: ["GAC127"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC127"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:04:00-04:00",
			},
		],
		sent: "2022-03-23T17:24:00-04:00",
		effective: "2022-03-23T17:24:00-04:00",
		onset: "2022-03-23T17:24:00-04:00",
		expires: "2022-03-23T17:30:00-04:00",
		ends: "2022-03-23T17:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 5:24PM EDT until March 23 at 5:30PM EDT by NWS Jacksonville FL",
		description:
			"At 524 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Jekyll Island, or near Brunswick, moving east at 35\nmph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nsoutheastern Glynn County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232124"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 530 PM EDT FOR SOUTHEASTERN GLYNN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T21:24:00-00:00...storm...250DEG...29KT...31.1,-81.41",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0008.000000T0000Z-220323T2130Z/"],
			eventEndingTime: ["2022-03-23T21:30:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f0b3395d3a7a756b28b92ffc6248d9cf9ea2d14b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f0b3395d3a7a756b28b92ffc6248d9cf9ea2d14b.001.1",
		areaDesc: "Camden, GA",
		geocode: {
			SAME: ["013039"],
			UGC: ["GAC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC039"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:04:00-04:00",
			},
		],
		sent: "2022-03-23T17:24:00-04:00",
		effective: "2022-03-23T17:24:00-04:00",
		onset: "2022-03-23T17:24:00-04:00",
		expires: "2022-03-23T17:39:39-04:00",
		ends: "2022-03-23T17:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232124"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN CAMDEN COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T21:24:00-00:00...storm...250DEG...29KT...31.1,-81.41",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.W.0008.000000T0000Z-220323T2130Z/"],
			eventEndingTime: ["2022-03-23T21:30:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2589b32baaa3c9cd7c9ff357c3348a2a19b6cfed.001.1",
		areaDesc: "Camden, GA; Glynn, GA",
		geocode: {
			SAME: ["013039", "013127"],
			UGC: ["GAC039", "GAC127"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC127",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:04:00-04:00",
			},
		],
		sent: "2022-03-23T17:17:00-04:00",
		effective: "2022-03-23T17:17:00-04:00",
		onset: "2022-03-23T17:17:00-04:00",
		expires: "2022-03-23T17:30:00-04:00",
		ends: "2022-03-23T17:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 5:17PM EDT until March 23 at 5:30PM EDT by NWS Jacksonville FL",
		description:
			"At 517 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Jekyll Island, or near Brunswick, moving east at 35\nmph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nSt. Simons Island around 530 PM EDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232117"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 530 PM EDT FOR NORTHEASTERN CAMDEN AND SOUTHEASTERN GLYNN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T21:17:00-00:00...storm...250DEG...29KT...31.08,-81.47",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0008.000000T0000Z-220323T2130Z/"],
			eventEndingTime: ["2022-03-23T21:30:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.171392b61876b20fc80fda5b1f6ab509d2ca401d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.171392b61876b20fc80fda5b1f6ab509d2ca401d.001.1",
		areaDesc:
			"Belmont, OH; Harrison, OH; Jefferson, OH; Brooke, WV; Marshall, WV; Ohio, WV",
		geocode: {
			SAME: ["039013", "039067", "039081", "054009", "054051", "054069"],
			UGC: ["OHC013", "OHC067", "OHC081", "WVC009", "WVC051", "WVC069"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC069",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9a3b66fe4f537040b4f7593fc23dcce4ce535de5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9a3b66fe4f537040b4f7593fc23dcce4ce535de5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:06:00-04:00",
			},
		],
		sent: "2022-03-23T17:13:00-04:00",
		effective: "2022-03-23T17:13:00-04:00",
		onset: "2022-03-23T17:13:00-04:00",
		expires: "2022-03-23T17:29:06-04:00",
		ends: "2022-03-23T17:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSPBZ"],
			WMOidentifier: ["WWUS51 KPBZ 232113"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN HARRISON...SOUTH CENTRAL JEFFERSON...NORTHEASTERN BELMONT...OHIO...MARSHALL AND BROOKE COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T21:11:00-00:00...storm...247DEG...29KT...40.07,-80.88",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KPBZ.TO.W.0002.000000T0000Z-220323T2145Z/"],
			eventEndingTime: ["2022-03-23T21:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.67e41d4bc277b1fb586d296043ba8a62da824fe8.001.1,2021-05-03T21:17:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a406b7a98efd6f3642b2b453d175acdcd37ccccb.001.1,2021-05-03T21:05:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.235ac7e4398ddbbe39b8293cb7685497fea85b28.001.1,2021-05-03T20:54:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.50e4646dfa6f50bf98b7f84c358514dc609e6cde.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.50e4646dfa6f50bf98b7f84c358514dc609e6cde.001.1",
		areaDesc: "Guilford, NC",
		geocode: {
			SAME: ["037081"],
			UGC: ["NCC081"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC081"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.337dee38ed4d9b94c9749b6622de6a8b0cf7a1c8.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.337dee38ed4d9b94c9749b6622de6a8b0cf7a1c8.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:03:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:52:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:59:00-04:00",
			},
		],
		sent: "2022-03-23T17:06:00-04:00",
		effective: "2022-03-23T17:06:00-04:00",
		onset: "2022-03-23T17:06:00-04:00",
		expires: "2022-03-23T17:16:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 5:06PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232106"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN GUILFORD COUNTY WILL EXPIRE AT 515 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-23T21:06:00-00:00...storm...234DEG...30KT...36.03,-79.68",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9a3b66fe4f537040b4f7593fc23dcce4ce535de5.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9a3b66fe4f537040b4f7593fc23dcce4ce535de5.001.1",
		areaDesc:
			"Belmont, OH; Harrison, OH; Jefferson, OH; Brooke, WV; Marshall, WV; Ohio, WV",
		geocode: {
			SAME: ["039013", "039067", "039081", "054009", "054051", "054069"],
			UGC: ["OHC013", "OHC067", "OHC081", "WVC009", "WVC051", "WVC069"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC069",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T17:06:00-04:00",
		effective: "2022-03-23T17:06:00-04:00",
		onset: "2022-03-23T17:06:00-04:00",
		expires: "2022-03-23T17:45:00-04:00",
		ends: "2022-03-23T17:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Warning issued March 23 at 5:06PM EDT until March 23 at 5:45PM EDT by NWS Pittsburgh PA",
		description:
			"At 506 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near St. Clairsville, moving northeast at 35 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nSt. Clairsville around 515 PM EDT.\nBellaire around 525 PM EDT.\nWheeling, Martins Ferry, Warwood and Bethlehem around 530 PM EDT.\nTriadelphia, Clearview and Tiltonsville around 535 PM EDT.\nValley Grove around 540 PM EDT.\nWest Liberty around 545 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nBenwood, Windsor Heights, Barkcamp State Park, Neffs, Mount Pleasant,\nBelmont, Elm Grove, Dillonvale, Clinton and Harrisville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report severe weather by calling 412-262-1988, posting to\nthe NWS Pittsburgh Facebook page, or using Twitter @NWSPITTSBURGH.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSPBZ"],
			WMOidentifier: ["WWUS51 KPBZ 232106"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 545 PM EDT FOR SOUTHEASTERN HARRISON...SOUTH CENTRAL JEFFERSON...NORTHEASTERN BELMONT...OHIO...MARSHALL AND BROOKE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T21:06:00-00:00...storm...247DEG...29KT...40.05,-80.96",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KPBZ.TO.W.0002.000000T0000Z-220323T2145Z/"],
			eventEndingTime: ["2022-03-23T21:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.67e41d4bc277b1fb586d296043ba8a62da824fe8.001.1,2021-05-03T21:17:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a406b7a98efd6f3642b2b453d175acdcd37ccccb.001.1,2021-05-03T21:05:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.235ac7e4398ddbbe39b8293cb7685497fea85b28.001.1,2021-05-03T20:54:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.513916e882e1cee284b7013ad1b4faea12f6708d.001.1",
		areaDesc: "Camden, GA; Glynn, GA",
		geocode: {
			SAME: ["013039", "013127"],
			UGC: ["GAC039", "GAC127"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC127",
		],
		references: [],
		sent: "2022-03-23T17:04:00-04:00",
		effective: "2022-03-23T17:04:00-04:00",
		onset: "2022-03-23T17:04:00-04:00",
		expires: "2022-03-23T17:30:00-04:00",
		ends: "2022-03-23T17:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 5:04PM EDT until March 23 at 5:30PM EDT by NWS Jacksonville FL",
		description:
			"The National Weather Service in Jacksonville has issued a\n\n* Tornado Warning for...\nNortheastern Camden County in southeastern Georgia...\nSoutheastern Glynn County in southeastern Georgia...\n\n* Until 530 PM EDT.\n\n* At 503 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles southeast of Waverly, or 9 miles northeast of\nWoodbine, moving east at 35 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nBrunswick around 520 PM EDT.\nJekyll Island around 525 PM EDT.\nSt. Simons Island around 530 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include Dover\nBluff.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORJAX"],
			WMOidentifier: ["WFUS52 KJAX 232104"],
			eventMotionDescription: [
				"2022-03-23T21:03:00-00:00...storm...250DEG...29KT...31.04,-81.6",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.W.0008.220323T2104Z-220323T2130Z/"],
			eventEndingTime: ["2022-03-23T21:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 5:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 5:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.337dee38ed4d9b94c9749b6622de6a8b0cf7a1c8.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.337dee38ed4d9b94c9749b6622de6a8b0cf7a1c8.001.1",
		areaDesc: "Guilford, NC",
		geocode: {
			SAME: ["037081"],
			UGC: ["NCC081"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC081"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:59:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:52:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T17:03:00-04:00",
		effective: "2022-03-23T17:03:00-04:00",
		onset: "2022-03-23T17:03:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 5:03PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 503 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near McLeansville, or 7 miles southeast of Greensboro,\nmoving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nPleasant Garden and Forest Oaks.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232103"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR SOUTHEASTERN GUILFORD COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T21:03:00-00:00...storm...234DEG...30KT...36.02,-79.7",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.a449a0014b9def0ef6168e97ca85b3ed81005dd7.001.1",
		areaDesc: "Guilford, NC",
		geocode: {
			SAME: ["037081"],
			UGC: ["NCC081"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC081"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:52:00-04:00",
			},
		],
		sent: "2022-03-23T16:59:00-04:00",
		effective: "2022-03-23T16:59:00-04:00",
		onset: "2022-03-23T16:59:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:59PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 459 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles southeast of Greensboro, moving northeast at 35\nmph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGreensboro, Pleasant Garden and Forest Oaks.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232059"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR SOUTHEASTERN GUILFORD COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:59:00-00:00...storm...233DEG...29KT...36.0,-79.74",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.80bee410464e8af1602e678e6225ca2a53336207.001.1",
		areaDesc: "Guilford, NC",
		geocode: {
			SAME: ["037081"],
			UGC: ["NCC081"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC081"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:52:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
		],
		sent: "2022-03-23T16:56:00-04:00",
		effective: "2022-03-23T16:56:00-04:00",
		onset: "2022-03-23T16:56:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:56PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 455 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles south of Greensboro, moving northeast at 20 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGreensboro, Pleasant Garden, Climax and Forest Oaks.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232056"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR SOUTHEASTERN GUILFORD COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:55:00-00:00...storm...221DEG...17KT...35.96,-79.79",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.d31fd0ad5a32808ad6cf325ea7b74ef05f0c75d0.001.1",
		areaDesc:
			"Belmont, OH; Harrison, OH; Jefferson, OH; Brooke, WV; Marshall, WV; Ohio, WV",
		geocode: {
			SAME: ["039013", "039067", "039081", "054009", "054051", "054069"],
			UGC: ["OHC013", "OHC067", "OHC081", "WVC009", "WVC051", "WVC069"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC069",
		],
		references: [],
		sent: "2022-03-23T16:56:00-04:00",
		effective: "2022-03-23T16:56:00-04:00",
		onset: "2022-03-23T16:56:00-04:00",
		expires: "2022-03-23T17:45:00-04:00",
		ends: "2022-03-23T17:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Warning issued March 23 at 4:56PM EDT until March 23 at 5:45PM EDT by NWS Pittsburgh PA",
		description:
			"The National Weather Service in Pittsburgh has issued a\n\n* Tornado Warning for...\nSoutheastern Harrison County in east central Ohio...\nSouth central Jefferson County in east central Ohio...\nNorthern Belmont County in east central Ohio...\nOhio County in northern West Virginia...\nMarshall County in northern West Virginia...\nBrooke County in northern West Virginia...\n\n* Until 545 PM EDT.\n\n* At 456 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Barnesville, moving northeast at 35 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nSt. Clairsville around 515 PM EDT.\nBellaire around 525 PM EDT.\nWheeling and Bethlehem around 530 PM EDT.\nMartins Ferry, Warwood, Clearview and Tiltonsville around 535 PM\nEDT.\nTriadelphia and Valley Grove around 540 PM EDT.\nWest Liberty around 545 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nBenwood, Windsor Heights, Barkcamp State Park, Neffs, Mount Pleasant,\nBelmont, Elm Grove, Dillonvale, Clinton and Harrisville.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nPlease report severe weather by calling 412-262-1988, posting to\nthe NWS Pittsburgh Facebook page, or using Twitter @NWSPITTSBURGH.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORPBZ"],
			WMOidentifier: ["WFUS51 KPBZ 232056"],
			eventMotionDescription: [
				"2022-03-23T20:56:00-00:00...storm...247DEG...29KT...40.02,-81.06",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KPBZ.TO.W.0002.220323T2056Z-220323T2145Z/"],
			eventEndingTime: ["2022-03-23T21:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 5:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 5:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.001.1",
		areaDesc: "Randolph, NC",
		geocode: {
			SAME: ["037151"],
			UGC: ["NCC151"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC151"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
		],
		sent: "2022-03-23T16:52:00-04:00",
		effective: "2022-03-23T16:52:00-04:00",
		onset: "2022-03-23T16:52:00-04:00",
		expires: "2022-03-23T17:07:28-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232052"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN RANDOLPH COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:51:00-00:00...storm...215DEG...30KT...35.95,-79.8",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ada05c98df510f2588fe75a991f9ead168a4b274.002.1",
		areaDesc: "Guilford, NC",
		geocode: {
			SAME: ["037081"],
			UGC: ["NCC081"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC081"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:47:00-04:00",
			},
		],
		sent: "2022-03-23T16:52:00-04:00",
		effective: "2022-03-23T16:52:00-04:00",
		onset: "2022-03-23T16:52:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:52PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 451 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles south of Greensboro, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGreensboro, Pleasant Garden, Climax and Forest Oaks.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232052"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR SOUTHEASTERN GUILFORD COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:51:00-00:00...storm...215DEG...30KT...35.95,-79.8",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.753c42294b732e8038742a93dee332369045ad07.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.753c42294b732e8038742a93dee332369045ad07.001.1",
		areaDesc: "Camden, GA",
		geocode: {
			SAME: ["013039"],
			UGC: ["GAC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC039"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:26:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
		],
		sent: "2022-03-23T16:48:00-04:00",
		effective: "2022-03-23T16:48:00-04:00",
		onset: "2022-03-23T16:48:00-04:00",
		expires: "2022-03-23T17:00:00-04:00",
		ends: "2022-03-23T17:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 4:48PM EDT until March 23 at 5:00PM EDT by NWS Jacksonville FL",
		description:
			"At 448 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Woodbine, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorth central Camden County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232048"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 500 PM EDT FOR NORTH CENTRAL CAMDEN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:48:00-00:00...storm...238DEG...25KT...30.99,-81.75",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0007.000000T0000Z-220323T2100Z/"],
			eventEndingTime: ["2022-03-23T21:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e067820eb1b19f261cfda01cb0c29daaf6ae8bb0.001.1",
		areaDesc: "Guilford, NC; Randolph, NC",
		geocode: {
			SAME: ["037081", "037151"],
			UGC: ["NCC081", "NCC151"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC081",
			"https://api.weather.gov/zones/county/NCC151",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:44:00-04:00",
			},
		],
		sent: "2022-03-23T16:47:00-04:00",
		effective: "2022-03-23T16:47:00-04:00",
		onset: "2022-03-23T16:47:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:47PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 447 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles north of Randleman, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGreensboro, High Point, Pleasant Garden, Jamestown, Climax and Forest\nOaks.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232047"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR NORTHEASTERN RANDOLPH AND SOUTHERN GUILFORD COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:47:00-00:00...storm...222DEG...32KT...35.93,-79.83",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5cd04bc20a1b0ad9e5836d1e69be1f002e728037.001.1",
		areaDesc: "Guilford, NC; Randolph, NC",
		geocode: {
			SAME: ["037081", "037151"],
			UGC: ["NCC081", "NCC151"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC081",
			"https://api.weather.gov/zones/county/NCC151",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:39:00-04:00",
			},
		],
		sent: "2022-03-23T16:44:00-04:00",
		effective: "2022-03-23T16:44:00-04:00",
		onset: "2022-03-23T16:44:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:44PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 444 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Randleman, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nGreensboro, High Point, Archdale, Pleasant Garden, Jamestown, Climax,\nForest Oaks and Randleman Regional Reservior Marina.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232044"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR NORTHEASTERN RANDOLPH AND SOUTHERN GUILFORD COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:44:00-00:00...storm...226DEG...38KT...35.91,-79.85",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.002.1",
		areaDesc: "Camden, GA",
		geocode: {
			SAME: ["013039"],
			UGC: ["GAC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC039"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:26:00-04:00",
			},
		],
		sent: "2022-03-23T16:39:00-04:00",
		effective: "2022-03-23T16:39:00-04:00",
		onset: "2022-03-23T16:39:00-04:00",
		expires: "2022-03-23T17:00:00-04:00",
		ends: "2022-03-23T17:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 4:39PM EDT until March 23 at 5:00PM EDT by NWS Jacksonville FL",
		description:
			"At 439 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Woodbine, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nWoodbine around 450 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nColesburg.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232039"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 500 PM EDT FOR NORTHWESTERN CAMDEN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:39:00-00:00...storm...239DEG...26KT...30.95,-81.81",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0007.000000T0000Z-220323T2100Z/"],
			eventEndingTime: ["2022-03-23T21:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b214428233d98266e1c726aa221e4596c9b429ff.001.1",
		areaDesc: "Guilford, NC; Randolph, NC",
		geocode: {
			SAME: ["037081", "037151"],
			UGC: ["NCC081", "NCC151"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC081",
			"https://api.weather.gov/zones/county/NCC151",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:34:00-04:00",
			},
		],
		sent: "2022-03-23T16:39:00-04:00",
		effective: "2022-03-23T16:39:00-04:00",
		onset: "2022-03-23T16:39:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:39PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 439 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Randleman, moving northeast at 45 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorthern Randolph and southern Guilford Counties, including the\nfollowing locations... Climax, Jamestown, Trinity, Forest Oaks and\nPleasant Garden.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232039"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR NORTHERN RANDOLPH AND SOUTHERN GUILFORD COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:39:00-00:00...storm...225DEG...39KT...35.88,-79.89",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.21bb2710da8e07b0782dc62738c3eda597e31109.001.1",
		areaDesc: "Charlton, GA",
		geocode: {
			SAME: ["013049"],
			UGC: ["GAC049"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC049"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:26:00-04:00",
			},
		],
		sent: "2022-03-23T16:39:00-04:00",
		effective: "2022-03-23T16:39:00-04:00",
		onset: "2022-03-23T16:39:00-04:00",
		expires: "2022-03-23T16:54:46-04:00",
		ends: "2022-03-23T17:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232039"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHEASTERN CHARLTON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:39:00-00:00...storm...239DEG...26KT...30.95,-81.81",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.W.0007.000000T0000Z-220323T2100Z/"],
			eventEndingTime: ["2022-03-23T21:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.002.1",
		areaDesc: "Guilford, NC; Randolph, NC",
		geocode: {
			SAME: ["037081", "037151"],
			UGC: ["NCC081", "NCC151"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC081",
			"https://api.weather.gov/zones/county/NCC151",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
		],
		sent: "2022-03-23T16:34:00-04:00",
		effective: "2022-03-23T16:34:00-04:00",
		onset: "2022-03-23T16:34:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:34PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"At 433 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles west of Randleman, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nRandleman around 445 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nClimax, Jamestown, Trinity, Forest Oaks and Pleasant Garden.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232034"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 515 PM EDT FOR NORTHERN RANDOLPH AND SOUTHERN GUILFORD COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:33:00-00:00...storm...228DEG...35KT...35.83,-79.95",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4aa3a6f9dfbfb65a56601b0e72f148d84c899cdb.001.1",
		areaDesc: "Davidson, NC",
		geocode: {
			SAME: ["037057"],
			UGC: ["NCC057"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/NCC057"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:29:00-04:00",
			},
		],
		sent: "2022-03-23T16:34:00-04:00",
		effective: "2022-03-23T16:34:00-04:00",
		onset: "2022-03-23T16:34:00-04:00",
		expires: "2022-03-23T16:49:20-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSRAH"],
			WMOidentifier: ["WWUS52 KRAH 232034"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL DAVIDSON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:33:00-00:00...storm...228DEG...35KT...35.83,-79.95",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRAH.TO.W.0001.000000T0000Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.38953605e2e8bedd9968d78277dce59a13eccd45.001.1,2021-03-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.060bf41cc50b13277735a9bbe3b5faaf98515711.001.1,2021-03-18T16:49:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c0985fad01e8adda7215bc4d3cbf34c12dabdc24.001.1,2021-03-18T17:12:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.eb65b6a629adeeda130b6c68aec880e973361e34.001.1",
		areaDesc: "Davidson, NC; Guilford, NC; Randolph, NC",
		geocode: {
			SAME: ["037057", "037081", "037151"],
			UGC: ["NCC057", "NCC081", "NCC151"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC057",
			"https://api.weather.gov/zones/county/NCC081",
			"https://api.weather.gov/zones/county/NCC151",
		],
		references: [],
		sent: "2022-03-23T16:29:00-04:00",
		effective: "2022-03-23T16:29:00-04:00",
		onset: "2022-03-23T16:29:00-04:00",
		expires: "2022-03-23T17:15:00-04:00",
		ends: "2022-03-23T17:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Raleigh NC",
		headline:
			"Tornado Warning issued March 23 at 4:29PM EDT until March 23 at 5:15PM EDT by NWS Raleigh NC",
		description:
			"The National Weather Service in Raleigh has issued a\n\n* Tornado Warning for...\nEast central Davidson County in central North Carolina...\nNorthern Randolph County in central North Carolina...\nSouthern Guilford County in central North Carolina...\n\n* Until 515 PM EDT.\n\n* At 429 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles southeast of Thomasville, or 10 miles west of\nRandleman, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nRandleman around 445 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nClimax, Jamestown, Trinity, Forest Oaks and Pleasant Garden.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORRAH"],
			WMOidentifier: ["WFUS52 KRAH 232029"],
			eventMotionDescription: [
				"2022-03-23T20:29:00-00:00...storm...234DEG...30KT...35.8,-79.99",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRAH.TO.W.0001.220323T2029Z-220323T2115Z/"],
			eventEndingTime: ["2022-03-23T21:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 5:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 5:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.79aa73b44d4ee9935e13387fb894cf859f9522b7.001.1",
		areaDesc: "Camden, GA; Charlton, GA",
		geocode: {
			SAME: ["013039", "013049"],
			UGC: ["GAC039", "GAC049"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
		],
		references: [],
		sent: "2022-03-23T16:26:00-04:00",
		effective: "2022-03-23T16:26:00-04:00",
		onset: "2022-03-23T16:26:00-04:00",
		expires: "2022-03-23T17:00:00-04:00",
		ends: "2022-03-23T17:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 4:26PM EDT until March 23 at 5:00PM EDT by NWS Jacksonville FL",
		description:
			"The National Weather Service in Jacksonville has issued a\n\n* Tornado Warning for...\nNorthwestern Camden County in southeastern Georgia...\nNortheastern Charlton County in southeastern Georgia...\n\n* Until 500 PM EDT.\n\n* At 426 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Homeland, or 7 miles northeast of Folkston, moving\nnortheast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nWoodbine around 455 PM EDT.\nWaverly around 500 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nTarboro and Colesburg.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORJAX"],
			WMOidentifier: ["WFUS52 KJAX 232026"],
			eventMotionDescription: [
				"2022-03-23T20:26:00-00:00...storm...239DEG...25KT...30.9,-81.91",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.W.0007.220323T2026Z-220323T2100Z/"],
			eventEndingTime: ["2022-03-23T21:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 5:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 5:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9d5423b4f89df7fea42e917cb6239298fc3b7962.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9d5423b4f89df7fea42e917cb6239298fc3b7962.001.1",
		areaDesc: "Fayette, OH; Greene, OH",
		geocode: {
			SAME: ["039047", "039057"],
			UGC: ["OHC047", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC047",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:10:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:02:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5f3b5cd079f33856ee566d33c1805f29315e0dcc.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5f3b5cd079f33856ee566d33c1805f29315e0dcc.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:19:00-04:00",
			},
		],
		sent: "2022-03-23T16:22:00-04:00",
		effective: "2022-03-23T16:22:00-04:00",
		onset: "2022-03-23T16:22:00-04:00",
		expires: "2022-03-23T16:32:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 4:22PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.  However gusty\nwinds are still possible with this thunderstorm.\n\nA Severe Thunderstorm Watch remains in effect until 900 PM EDT for\ncentral and west central Ohio.\n\nPlease report previous tornadoes, wind damage or hail to the National\nWeather Service by going to our website at weather.gov/iln and\nsubmitting your report via social media.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232022"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN FAYETTE AND EAST CENTRAL GREENE COUNTIES WILL EXPIRE AT 430 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-23T20:22:00-00:00...storm...219DEG...35KT...39.67,-83.69",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KILN.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc6b54ef2850218b5044fc9f101e33990d3b0b6f.001.1,2021-06-18T18:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c62b8d4bfc6aa22e700be5bec196b890c16f7090.001.1,2021-06-18T18:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7588199b8d6185b3509df359cf030c5125030c18.001.1,2021-06-18T18:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ff3e6aa1b7103e559b6e79dd13e4e4ff5ba905a.001.1,2021-06-18T18:11:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5f3b5cd079f33856ee566d33c1805f29315e0dcc.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5f3b5cd079f33856ee566d33c1805f29315e0dcc.001.1",
		areaDesc: "Fayette, OH; Greene, OH",
		geocode: {
			SAME: ["039047", "039057"],
			UGC: ["OHC047", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC047",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:02:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:10:00-04:00",
			},
		],
		sent: "2022-03-23T16:19:00-04:00",
		effective: "2022-03-23T16:19:00-04:00",
		onset: "2022-03-23T16:19:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 4:19PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"At 419 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Jamestown, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nJamestown, New Jasper, Gladstone, Bell Center, Shady Grove and\nRosemoor.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232019"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 430 PM EDT FOR NORTHWESTERN FAYETTE AND EAST CENTRAL GREENE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:19:00-00:00...storm...219DEG...35KT...39.66,-83.7",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc6b54ef2850218b5044fc9f101e33990d3b0b6f.001.1,2021-06-18T18:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c62b8d4bfc6aa22e700be5bec196b890c16f7090.001.1,2021-06-18T18:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ff3e6aa1b7103e559b6e79dd13e4e4ff5ba905a.001.1,2021-06-18T18:11:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7588199b8d6185b3509df359cf030c5125030c18.001.1,2021-06-18T18:20:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.507a9d4ee0f692003294a1062148cacc0e8991b9.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.507a9d4ee0f692003294a1062148cacc0e8991b9.001.1",
		areaDesc: "Brantley, GA; Camden, GA; Charlton, GA",
		geocode: {
			SAME: ["013025", "013039", "013049"],
			UGC: ["GAC025", "GAC039", "GAC049"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:50:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.47c2b4bea57534be0270b5501048d9a4725a4a64.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.47c2b4bea57534be0270b5501048d9a4725a4a64.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:56:00-04:00",
			},
		],
		sent: "2022-03-23T16:13:00-04:00",
		effective: "2022-03-23T16:13:00-04:00",
		onset: "2022-03-23T16:13:00-04:00",
		expires: "2022-03-23T16:29:04-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 232013"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN CAMDEN...EASTERN BRANTLEY AND NORTHEASTERN CHARLTON COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:11:00-00:00...storm...226DEG...34KT...31.09,-81.86",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8ae0a39236ead4c0e45a039efce66ca98d5609fd.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8ae0a39236ead4c0e45a039efce66ca98d5609fd.001.1",
		areaDesc: "Champaign, OH",
		geocode: {
			SAME: ["039021"],
			UGC: ["OHC021"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC021"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:01:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:54:00-04:00",
			},
		],
		sent: "2022-03-23T16:11:00-04:00",
		effective: "2022-03-23T16:11:00-04:00",
		onset: "2022-03-23T16:11:00-04:00",
		expires: "2022-03-23T16:26:46-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232011"],
			NWSheadline: [
				"THE TORNADO WARNING FOR WESTERN CHAMPAIGN COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:10:00-00:00...storm...215DEG...30KT...40.13,-83.89",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0005.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3f81736b1d3952da21f47f667169533e8460b90e.001.1,2021-06-18T18:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.001.1",
		areaDesc: "Clinton, OH",
		geocode: {
			SAME: ["039027"],
			UGC: ["OHC027"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC027"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:02:00-04:00",
			},
		],
		sent: "2022-03-23T16:10:00-04:00",
		effective: "2022-03-23T16:10:00-04:00",
		onset: "2022-03-23T16:10:00-04:00",
		expires: "2022-03-23T16:25:51-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232010"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTH CENTRAL CLINTON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:10:00-00:00...storm...219DEG...35KT...39.59,-83.78",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc6b54ef2850218b5044fc9f101e33990d3b0b6f.001.1,2021-06-18T18:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c62b8d4bfc6aa22e700be5bec196b890c16f7090.001.1,2021-06-18T18:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7588199b8d6185b3509df359cf030c5125030c18.001.1,2021-06-18T18:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ff3e6aa1b7103e559b6e79dd13e4e4ff5ba905a.001.1,2021-06-18T18:11:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.5752bbdd76972a663746bac4709229f0620a2c47.002.1",
		areaDesc: "Fayette, OH; Greene, OH",
		geocode: {
			SAME: ["039047", "039057"],
			UGC: ["OHC047", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC047",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:02:00-04:00",
			},
		],
		sent: "2022-03-23T16:10:00-04:00",
		effective: "2022-03-23T16:10:00-04:00",
		onset: "2022-03-23T16:10:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 4:10PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"At 410 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Jamestown, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nJamestown, Jeffersonville, New Jasper, Bowersville, Octa,\nPaintersville, Rosemoor, Gladstone, Middleton Corner, Bell Center,\nShady Grove and Interstate 71 at US Route 35.\n\nThis includes I-71 in Ohio between mile markers 58 and 71.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232010"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 430 PM EDT FOR NORTHWESTERN FAYETTE AND SOUTHEASTERN GREENE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T20:10:00-00:00...storm...219DEG...35KT...39.59,-83.78",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc6b54ef2850218b5044fc9f101e33990d3b0b6f.001.1,2021-06-18T18:40:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c62b8d4bfc6aa22e700be5bec196b890c16f7090.001.1,2021-06-18T18:30:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7588199b8d6185b3509df359cf030c5125030c18.001.1,2021-06-18T18:20:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.8ff3e6aa1b7103e559b6e79dd13e4e4ff5ba905a.001.1,2021-06-18T18:11:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b7d37859727218e85a121a65e401ff49f0202cdb.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b7d37859727218e85a121a65e401ff49f0202cdb.001.1",
		areaDesc: "Miami, OH; Shelby, OH",
		geocode: {
			SAME: ["039109", "039149"],
			UGC: ["OHC109", "OHC149"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC149",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:43:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.434dc42d4ac732abc7267b46c157982122d10c7a.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.434dc42d4ac732abc7267b46c157982122d10c7a.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:53:00-04:00",
			},
		],
		sent: "2022-03-23T16:04:00-04:00",
		effective: "2022-03-23T16:04:00-04:00",
		onset: "2022-03-23T16:04:00-04:00",
		expires: "2022-03-23T16:19:25-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232004"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTH CENTRAL SHELBY AND NORTH CENTRAL MIAMI COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:02:00-00:00...storm...216DEG...32KT...40.23,-84.15",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0004.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4c940d1bd21c30164b31c7cf6a960ac5d7e00ca0.001.1,2021-06-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6babcba2c2c77577f52b636b72b92da10a5b7a93.001.1,2021-06-18T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.484bf10696ce436d2a8bba961be412580af2b733.001.1,2021-06-18T17:42:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ac227c8e898fe19f3c7667fdc9eac425b21466cf.001.1",
		areaDesc: "Clinton, OH; Fayette, OH; Greene, OH",
		geocode: {
			SAME: ["039027", "039047", "039057"],
			UGC: ["OHC027", "OHC047", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC027",
			"https://api.weather.gov/zones/county/OHC047",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [],
		sent: "2022-03-23T16:02:00-04:00",
		effective: "2022-03-23T16:02:00-04:00",
		onset: "2022-03-23T16:02:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 4:02PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nNorthwestern Fayette County in central Ohio...\nNorth central Clinton County in southwestern Ohio...\nSoutheastern Greene County in west central Ohio...\n\n* Until 430 PM EDT.\n\n* At 402 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Wilmington, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nJamestown, Jeffersonville, New Jasper, Bowersville, Port William,\nOcta, Paintersville, Rosemoor, Lumberton, Middleton Corner,\nGladstone, Bell Center, Shady Grove, Interstate 71 at US Route 35\nand Interstate 71 at US Route 68.\n\nThis includes I-71 in Ohio between mile markers 49 and 71.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 232002"],
			eventMotionDescription: [
				"2022-03-23T20:02:00-00:00...storm...219DEG...35KT...39.53,-83.85",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0006.220323T2002Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 4:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 4:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.76713eeb521e51462b23677d99462a4646738a5c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.76713eeb521e51462b23677d99462a4646738a5c.001.1",
		areaDesc: "Clinton, OH; Greene, OH",
		geocode: {
			SAME: ["039027", "039057"],
			UGC: ["OHC027", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC027",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:46:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:38:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9675f0b8057efe66749e353e709dadacbc54dd5b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9675f0b8057efe66749e353e709dadacbc54dd5b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:53:00-04:00",
			},
		],
		sent: "2022-03-23T16:01:00-04:00",
		effective: "2022-03-23T16:01:00-04:00",
		onset: "2022-03-23T16:01:00-04:00",
		expires: "2022-03-23T16:16:12-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232001"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN CLINTON AND SOUTHEASTERN GREENE COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T19:58:00-00:00...storm...231DEG...27KT...39.5,-83.87",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0003.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.001.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.002.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.002.1,2021-06-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aa21a700d077b756bd1873eeba49e5bc90c97c64.001.1,2021-06-18T17:09:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.001.1,2021-06-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.001.1",
		areaDesc: "Clark, OH",
		geocode: {
			SAME: ["039023"],
			UGC: ["OHC023"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC023"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:54:00-04:00",
			},
		],
		sent: "2022-03-23T16:01:00-04:00",
		effective: "2022-03-23T16:01:00-04:00",
		onset: "2022-03-23T16:01:00-04:00",
		expires: "2022-03-23T16:16:39-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232001 RRA"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN CLARK COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T20:01:00-00:00...storm...215DEG...30KT...40.06,-83.96",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0005.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3f81736b1d3952da21f47f667169533e8460b90e.001.1,2021-06-18T18:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1bd2237d08c2e9689abb57fe7c3e6a876fad0c0b.002.1",
		areaDesc: "Champaign, OH",
		geocode: {
			SAME: ["039021"],
			UGC: ["OHC021"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC021"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:54:00-04:00",
			},
		],
		sent: "2022-03-23T16:01:00-04:00",
		effective: "2022-03-23T16:01:00-04:00",
		onset: "2022-03-23T16:01:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 4:01PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"RRA\n\nAt 401 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near St. Paris, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nUrbana, St. Paris, Christiansburg, Thackery, Springhills, Kiser Lake\nState Park, Millerstown, Westville, Rosewood, Lippincott, Carysville\nand Terre Haute.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 232001 RRA"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 430 PM EDT FOR WESTERN CHAMPAIGN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T20:01:00-00:00...storm...215DEG...30KT...40.06,-83.96",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0005.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3f81736b1d3952da21f47f667169533e8460b90e.001.1,2021-06-18T18:00:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.47c2b4bea57534be0270b5501048d9a4725a4a64.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.47c2b4bea57534be0270b5501048d9a4725a4a64.001.1",
		areaDesc: "Brantley, GA; Camden, GA; Charlton, GA",
		geocode: {
			SAME: ["013025", "013039", "013049"],
			UGC: ["GAC025", "GAC039", "GAC049"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:50:00-04:00",
			},
		],
		sent: "2022-03-23T15:56:00-04:00",
		effective: "2022-03-23T15:56:00-04:00",
		onset: "2022-03-23T15:56:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:56PM EDT until March 23 at 4:30PM EDT by NWS Jacksonville FL",
		description:
			"At 356 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Race Pond, or 10 miles north of Folkston, moving\nnortheast at 30 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nHickox around 410 PM EDT.\nWaverly and Waynesville around 430 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nWinokur and Atkinson.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231956"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 430 PM EDT FOR NORTHWESTERN CAMDEN...EASTERN BRANTLEY AND NORTHEASTERN CHARLTON COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T19:56:00-00:00...storm...231DEG...28KT...30.99,-82.01",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0006.000000T0000Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.98fa47f091fb0cefe27636ede5e0857a9c642477.001.1",
		areaDesc: "Champaign, OH; Clark, OH",
		geocode: {
			SAME: ["039021", "039023"],
			UGC: ["OHC021", "OHC023"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC021",
			"https://api.weather.gov/zones/county/OHC023",
		],
		references: [],
		sent: "2022-03-23T15:54:00-04:00",
		effective: "2022-03-23T15:54:00-04:00",
		onset: "2022-03-23T15:54:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:54PM EDT until March 23 at 4:30PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nWestern Champaign County in west central Ohio...\nNorthwestern Clark County in west central Ohio...\n\n* Until 430 PM EDT.\n\n* At 354 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near New Carlisle, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nUrbana, St. Paris, Christiansburg, North Hampton, Thackery,\nWestville, Rosewood, Lippincott, Carysville, Springhills, Kiser\nLake State Park, Millerstown, Terre Haute, State Route 41 at State\nRoute 235 and Dialton.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 231954"],
			eventMotionDescription: [
				"2022-03-23T19:54:00-00:00...storm...215DEG...30KT...40.02,-83.99",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0005.220323T1954Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 4:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 4:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9675f0b8057efe66749e353e709dadacbc54dd5b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9675f0b8057efe66749e353e709dadacbc54dd5b.001.1",
		areaDesc: "Clinton, OH; Greene, OH",
		geocode: {
			SAME: ["039027", "039057"],
			UGC: ["OHC027", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC027",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:38:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:46:00-04:00",
			},
		],
		sent: "2022-03-23T15:53:00-04:00",
		effective: "2022-03-23T15:53:00-04:00",
		onset: "2022-03-23T15:53:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:53PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"At 352 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Wilmington, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nWilmington, Bowersville, Port William, Paintersville, Rosemoor,\nBloomington, Lumberton, Middleton Corner, Ogden, Oakland, Kingman and\nInterstate 71 at US Route 68.\n\nThis includes I-71 in Ohio between mile markers 44 and 61.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231953"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 415 PM EDT FOR NORTHWESTERN CLINTON AND SOUTHEASTERN GREENE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T19:52:00-00:00...storm...223DEG...26KT...39.46,-83.93",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0003.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.001.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.002.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.002.1,2021-06-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aa21a700d077b756bd1873eeba49e5bc90c97c64.001.1,2021-06-18T17:09:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.001.1,2021-06-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.434dc42d4ac732abc7267b46c157982122d10c7a.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.434dc42d4ac732abc7267b46c157982122d10c7a.001.1",
		areaDesc: "Miami, OH; Shelby, OH",
		geocode: {
			SAME: ["039109", "039149"],
			UGC: ["OHC109", "OHC149"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC149",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:43:00-04:00",
			},
		],
		sent: "2022-03-23T15:53:00-04:00",
		effective: "2022-03-23T15:53:00-04:00",
		onset: "2022-03-23T15:53:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:53PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"RRA\n\nAt 353 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Piqua, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nPiqua, Lockington, Ballou and Farrington.\n\nThis includes I-75 in Ohio between mile markers 79 and 87.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231953 RRA"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 415 PM EDT FOR SOUTH CENTRAL SHELBY AND NORTH CENTRAL MIAMI COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T19:53:00-00:00...storm...212DEG...29KT...40.15,-84.22",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0004.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6babcba2c2c77577f52b636b72b92da10a5b7a93.001.1,2021-06-18T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4c940d1bd21c30164b31c7cf6a960ac5d7e00ca0.001.1,2021-06-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.484bf10696ce436d2a8bba961be412580af2b733.001.1,2021-06-18T17:42:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4fd57ecb5c2f2570c3f743426e103e38a53c0b3b.001.1",
		areaDesc: "Brantley, GA; Camden, GA; Charlton, GA",
		geocode: {
			SAME: ["013025", "013039", "013049"],
			UGC: ["GAC025", "GAC039", "GAC049"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
		],
		references: [],
		sent: "2022-03-23T15:50:00-04:00",
		effective: "2022-03-23T15:50:00-04:00",
		onset: "2022-03-23T15:50:00-04:00",
		expires: "2022-03-23T16:30:00-04:00",
		ends: "2022-03-23T16:30:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:50PM EDT until March 23 at 4:30PM EDT by NWS Jacksonville FL",
		description:
			"The National Weather Service in Jacksonville has issued a\n\n* Tornado Warning for...\nNorthwestern Camden County in southeastern Georgia...\nEastern Brantley County in southeastern Georgia...\nNortheastern Charlton County in southeastern Georgia...\n\n* Until 430 PM EDT.\n\n* At 349 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Race Pond, or 9 miles north of Folkston, moving\nnortheast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nHickox around 405 PM EDT.\nWaverly around 420 PM EDT.\nWaynesville around 425 PM EDT.\n\nOther locations impacted by this tornadic thunderstorm include\nWinokur and Atkinson.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORJAX"],
			WMOidentifier: ["WFUS52 KJAX 231950"],
			eventMotionDescription: [
				"2022-03-23T19:49:00-00:00...storm...226DEG...34KT...30.97,-82.06",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.W.0006.220323T1950Z-220323T2030Z/"],
			eventEndingTime: ["2022-03-23T20:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 4:30 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 4:30 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.002.1",
		areaDesc: "Clinton, OH; Greene, OH",
		geocode: {
			SAME: ["039027", "039057"],
			UGC: ["OHC027", "OHC057"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC027",
			"https://api.weather.gov/zones/county/OHC057",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:38:00-04:00",
			},
		],
		sent: "2022-03-23T15:46:00-04:00",
		effective: "2022-03-23T15:46:00-04:00",
		onset: "2022-03-23T15:46:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:46PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"At 345 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles west of Wilmington, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nWilmington, Sabina, Clarksville, Bowersville, Port William,\nPaintersville, Melvin, Rosemoor, Bloomington, Lumberton, Middleton\nCorner, Oakland, Reesville, Ogden, Kingman, Burtonville, Interstate\n71 at US Route 68 and Cowan Lake State Park.\n\nThis includes I-71 in Ohio between mile markers 43 and 61.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231946"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 415 PM EDT FOR NORTHERN CLINTON AND SOUTHEASTERN GREENE COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T19:45:00-00:00...storm...231DEG...27KT...39.41,-83.96",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0003.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.001.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.002.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.002.1,2021-06-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aa21a700d077b756bd1873eeba49e5bc90c97c64.001.1,2021-06-18T17:09:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.001.1,2021-06-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b480a44b35e7170a832d8ab73df131c8449232fc.001.1",
		areaDesc: "Warren, OH",
		geocode: {
			SAME: ["039165"],
			UGC: ["OHC165"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC165"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:38:00-04:00",
			},
		],
		sent: "2022-03-23T15:46:00-04:00",
		effective: "2022-03-23T15:46:00-04:00",
		onset: "2022-03-23T15:46:00-04:00",
		expires: "2022-03-23T16:01:27-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231946"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN WARREN COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T19:45:00-00:00...storm...231DEG...27KT...39.41,-83.96",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0003.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.001.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.44242078c97aeadb9ca64fd39466628c29fb35dc.002.1,2021-06-18T17:36:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.002.1,2021-06-18T17:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.aa21a700d077b756bd1873eeba49e5bc90c97c64.001.1,2021-06-18T17:09:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.b9bf1ff6f3ee525f43b6dd560ad50b7432567895.001.1,2021-06-18T17:22:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.62536291a4c21f3c6d39e94b0421bbba8c0d718b.001.1",
		areaDesc: "Miami, OH; Shelby, OH",
		geocode: {
			SAME: ["039109", "039149"],
			UGC: ["OHC109", "OHC149"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC149",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:39:00-04:00",
			},
		],
		sent: "2022-03-23T15:43:00-04:00",
		effective: "2022-03-23T15:43:00-04:00",
		onset: "2022-03-23T15:43:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:43PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"At 343 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Troy, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nTroy, Piqua, Fletcher, Lockington, Ballou and Farrington.\n\nThis includes I-75 in Ohio between mile markers 76 and 87.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231943"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 415 PM EDT FOR SOUTH CENTRAL SHELBY AND NORTH CENTRAL MIAMI COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T19:43:00-00:00...storm...213DEG...30KT...40.08,-84.26",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0004.000000T0000Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4c940d1bd21c30164b31c7cf6a960ac5d7e00ca0.001.1,2021-06-18T17:44:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.6babcba2c2c77577f52b636b72b92da10a5b7a93.001.1,2021-06-18T17:34:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.484bf10696ce436d2a8bba961be412580af2b733.001.1,2021-06-18T17:42:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.03163ab73db56836180d6d128fb82a39f08c56b6.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.03163ab73db56836180d6d128fb82a39f08c56b6.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7b8c08ca6c9403657dced9651288d4dcc86e9caf.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7b8c08ca6c9403657dced9651288d4dcc86e9caf.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:36:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:19:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:25:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:31:00-04:00",
			},
		],
		sent: "2022-03-23T15:42:00-04:00",
		effective: "2022-03-23T15:42:00-04:00",
		onset: "2022-03-23T15:42:00-04:00",
		expires: "2022-03-23T15:52:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:42PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.  However gusty\nwinds are still possible with this thunderstorm.\n\nA Tornado Watch remains in effect until 900 PM EDT for southeastern\nGeorgia.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231942"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTH CENTRAL CLINCH COUNTY WILL EXPIRE AT 345 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-23T19:42:00-00:00...storm...225DEG...32KT...31.0,-82.63",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4ba381c3c91e4ac51c8b3e3406c998a50d3f770d.001.1",
		areaDesc: "Miami, OH; Shelby, OH",
		geocode: {
			SAME: ["039109", "039149"],
			UGC: ["OHC109", "OHC149"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC149",
		],
		references: [],
		sent: "2022-03-23T15:39:00-04:00",
		effective: "2022-03-23T15:39:00-04:00",
		onset: "2022-03-23T15:39:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:39PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nSouth central Shelby County in west central Ohio...\nNorthern Miami County in west central Ohio...\n\n* Until 415 PM EDT.\n\n* At 339 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Pleasant Hill, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nTroy, Piqua, Covington, Pleasant Hill, Fletcher, Lockington,\nFarrington and Ballou.\n\nThis includes I-75 in Ohio between mile markers 71 and 87.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 231939"],
			eventMotionDescription: [
				"2022-03-23T19:39:00-00:00...storm...216DEG...32KT...40.05,-84.28",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0004.220323T1939Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 4:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 4:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.228af04ca3ffb830efac27bd24a9afe434306e8d.001.1",
		areaDesc: "Clinton, OH; Greene, OH; Warren, OH",
		geocode: {
			SAME: ["039027", "039057", "039165"],
			UGC: ["OHC027", "OHC057", "OHC165"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC027",
			"https://api.weather.gov/zones/county/OHC057",
			"https://api.weather.gov/zones/county/OHC165",
		],
		references: [],
		sent: "2022-03-23T15:38:00-04:00",
		effective: "2022-03-23T15:38:00-04:00",
		onset: "2022-03-23T15:38:00-04:00",
		expires: "2022-03-23T16:15:00-04:00",
		ends: "2022-03-23T16:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:38PM EDT until March 23 at 4:15PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nSoutheastern Warren County in southwestern Ohio...\nNorthern Clinton County in southwestern Ohio...\nSoutheastern Greene County in west central Ohio...\n\n* Until 415 PM EDT.\n\n* At 338 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Morrow, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nWilmington, Sabina, Clarksville, Harveysburg, Bowersville, Port\nWilliam, Paintersville, Melvin, Fort Ancient, Rosemoor,\nBloomington, Lumberton, Middleton Corner, Middleboro, Oakland,\nReesville, State Route 350 at US Route 22, Ogden, Kingman and\nBurtonville.\n\nThis includes I-71 in Ohio between mile markers 36 and 61.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 231938"],
			eventMotionDescription: [
				"2022-03-23T19:38:00-00:00...storm...231DEG...27KT...39.37,-84.02",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0003.220323T1938Z-220323T2015Z/"],
			eventEndingTime: ["2022-03-23T20:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 4:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 4:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7b8c08ca6c9403657dced9651288d4dcc86e9caf.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7b8c08ca6c9403657dced9651288d4dcc86e9caf.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:31:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:19:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:25:00-04:00",
			},
		],
		sent: "2022-03-23T15:36:00-04:00",
		effective: "2022-03-23T15:36:00-04:00",
		onset: "2022-03-23T15:36:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:36PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"At 336 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles southeast of Homerville, moving northeast at 35\nmph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorth central Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231936"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 PM EDT FOR NORTH CENTRAL CLINCH COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T19:36:00-00:00...storm...225DEG...32KT...30.97,-82.66",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.bdda6deea8643c237510e444eaa824d9c1fb434f.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:19:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:25:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:22:00-04:00",
			},
		],
		sent: "2022-03-23T15:31:00-04:00",
		effective: "2022-03-23T15:31:00-04:00",
		onset: "2022-03-23T15:31:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:31PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"At 330 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 8 miles south of Homerville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231931"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 PM EDT FOR CENTRAL CLINCH COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T19:30:00-00:00...storm...225DEG...30KT...30.93,-82.71",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2beb76b509a84fd654fe55e703cd32d46aab043e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2beb76b509a84fd654fe55e703cd32d46aab043e.001.1",
		areaDesc: "Miami, OH; Montgomery, OH",
		geocode: {
			SAME: ["039109", "039113"],
			UGC: ["OHC109", "OHC113"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC113",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7c457e9deaa9e6344ace962e758974245cf3f333.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7c457e9deaa9e6344ace962e758974245cf3f333.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
		],
		sent: "2022-03-23T15:28:00-04:00",
		effective: "2022-03-23T15:28:00-04:00",
		onset: "2022-03-23T15:28:00-04:00",
		expires: "2022-03-23T15:43:43-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231928"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTHWESTERN MONTGOMERY AND SOUTHERN MIAMI COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T19:28:00-00:00...storm...227DEG...34KT...39.93,-84.27",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KILN.TO.W.0002.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db4776985224bf228e0a954546a224aa93abc219.001.1,2021-06-18T16:41:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ea58559930784da5078ba836c8d754479df914aa.001.1,2021-06-18T16:32:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.01fb127b2423c13849ebbe40302e821ebcd5fe06.001.1,2021-06-18T16:22:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.85a48c8c89f2968fc4b201629325169e66577d8e.001.1,2021-06-18T16:16:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ab1e2381d6593478105579d37f8fa543151f551e.001.1,2021-06-18T16:11:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3f15a78e57230164fbda73f1262dc22b034b2b00.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:19:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
		],
		sent: "2022-03-23T15:25:00-04:00",
		effective: "2022-03-23T15:25:00-04:00",
		onset: "2022-03-23T15:25:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:25PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"At 325 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 9 miles south of Homerville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231925"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 PM EDT FOR CENTRAL CLINCH COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T19:25:00-00:00...storm...226DEG...32KT...30.9,-82.74",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.aab75f7825195654bf33fe829d0281b93165c7c4.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:19:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
		],
		sent: "2022-03-23T15:22:00-04:00",
		effective: "2022-03-23T15:22:00-04:00",
		onset: "2022-03-23T15:22:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:22PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"At 322 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 9 miles southeast of Du Pont, or 10 miles south of\nHomerville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231922"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 PM EDT FOR CENTRAL CLINCH COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T19:22:00-00:00...storm...225DEG...32KT...30.89,-82.77",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8c344b7a9b8e81ff5d722fbd510d1f1f1384af77.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:17:00-04:00",
			},
		],
		sent: "2022-03-23T15:19:00-04:00",
		effective: "2022-03-23T15:19:00-04:00",
		onset: "2022-03-23T15:19:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:19PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"At 319 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 9 miles southeast of Du Pont, or 11 miles south of\nHomerville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231919"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 PM EDT FOR CENTRAL CLINCH COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T19:19:00-00:00...storm...225DEG...32KT...30.87,-82.79",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0005.000000T0000Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f829f502a3658561edde614d3bfeea5ffdf54089.001.1",
		areaDesc: "Clinch, GA",
		geocode: {
			SAME: ["013065"],
			UGC: ["GAC065"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/GAC065"],
		references: [],
		sent: "2022-03-23T15:17:00-04:00",
		effective: "2022-03-23T15:17:00-04:00",
		onset: "2022-03-23T15:17:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 3:17PM EDT until March 23 at 3:45PM EDT by NWS Jacksonville FL",
		description:
			"The National Weather Service in Jacksonville has issued a\n\n* Tornado Warning for...\nCentral Clinch County in southeastern Georgia...\n\n* Until 345 PM EDT.\n\n* At 317 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located 9 miles south of Du Pont, or 12 miles south of\nHomerville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This tornadic thunderstorm will remain over mainly rural areas of\ncentral Clinch County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORJAX"],
			WMOidentifier: ["WFUS52 KJAX 231917"],
			eventMotionDescription: [
				"2022-03-23T19:17:00-00:00...storm...225DEG...32KT...30.85,-82.81",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.W.0005.220323T1917Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 3:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 3:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7c457e9deaa9e6344ace962e758974245cf3f333.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7c457e9deaa9e6344ace962e758974245cf3f333.001.1",
		areaDesc: "Miami, OH; Montgomery, OH",
		geocode: {
			SAME: ["039109", "039113"],
			UGC: ["OHC109", "OHC113"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC109",
			"https://api.weather.gov/zones/county/OHC113",
		],
		references: [],
		sent: "2022-03-23T15:17:00-04:00",
		effective: "2022-03-23T15:17:00-04:00",
		onset: "2022-03-23T15:17:00-04:00",
		expires: "2022-03-23T15:45:00-04:00",
		ends: "2022-03-23T15:45:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 3:17PM EDT until March 23 at 3:45PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nNorthwestern Montgomery County in west central Ohio...\nSouthern Miami County in west central Ohio...\n\n* Until 345 PM EDT.\n\n* At 317 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Englewood, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nDayton, Huber Heights, Troy, Trotwood, Vandalia, Englewood, Tipp\nCity, West Milton, Clayton, Union, Brookville, Phillipsburg,\nCasstown, Ludlow Falls, Ginghamsburg, Phoneton, Northview, Pyrmont,\nDayton International Airport and Garland.\n\nThis includes the following Interstates...\nI-70 in Ohio between mile markers 18 and 34.\nI-75 in Ohio between mile markers 62 and 73.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 231917"],
			eventMotionDescription: [
				"2022-03-23T19:17:00-00:00...storm...227DEG...34KT...39.86,-84.37",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0002.220323T1917Z-220323T1945Z/"],
			eventEndingTime: ["2022-03-23T19:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 3:45 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 3:45 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.542045c449c554923bff49d89684972763804a6a.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.542045c449c554923bff49d89684972763804a6a.001.1",
		areaDesc: "Clinch, GA; Echols, GA",
		geocode: {
			SAME: ["013065", "013101"],
			UGC: ["GAC065", "GAC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC101",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98f1cfcc3d5f4e4c2ff16a703e178091c35f320d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.98f1cfcc3d5f4e4c2ff16a703e178091c35f320d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:57:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:45:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:51:00-04:00",
			},
		],
		sent: "2022-03-23T15:02:00-04:00",
		effective: "2022-03-23T15:02:00-04:00",
		onset: "2022-03-23T15:02:00-04:00",
		expires: "2022-03-23T15:17:54-04:00",
		ends: "2022-03-23T15:15:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231902"],
			NWSheadline: [
				"THE TORNADO WARNING FOR CENTRAL ECHOLS AND WEST CENTRAL CLINCH COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T18:59:00-00:00...storm...238DEG...30KT...30.76,-82.96",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.W.0004.000000T0000Z-220323T1915Z/"],
			eventEndingTime: ["2022-03-23T19:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.57c968cfff4097f09def86fce6b73e1cf7fa77b5.001.1,2021-02-06T18:08:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.002.1,2021-02-06T17:56:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.02cb2ef425f9f12abe3bd47a6f5e0a90758f89f0.001.1,2021-02-06T17:49:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a483223a333dd7d5ff446582c8c8c59378836447.001.1,2021-02-06T17:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.001.1,2021-02-06T17:56:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.98f1cfcc3d5f4e4c2ff16a703e178091c35f320d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.98f1cfcc3d5f4e4c2ff16a703e178091c35f320d.001.1",
		areaDesc: "Clinch, GA; Echols, GA",
		geocode: {
			SAME: ["013065", "013101"],
			UGC: ["GAC065", "GAC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC101",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:45:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:51:00-04:00",
			},
		],
		sent: "2022-03-23T14:57:00-04:00",
		effective: "2022-03-23T14:57:00-04:00",
		onset: "2022-03-23T14:57:00-04:00",
		expires: "2022-03-23T15:15:00-04:00",
		ends: "2022-03-23T15:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 2:57PM EDT until March 23 at 3:15PM EDT by NWS Jacksonville FL",
		description:
			"At 257 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Statenville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\ncentral Echols and west central Clinch Counties.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231857"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 315 PM EDT FOR CENTRAL ECHOLS AND WEST CENTRAL CLINCH COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T18:57:00-00:00...storm...238DEG...30KT...30.74,-82.99",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0004.000000T0000Z-220323T1915Z/"],
			eventEndingTime: ["2022-03-23T19:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.57c968cfff4097f09def86fce6b73e1cf7fa77b5.001.1,2021-02-06T18:08:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.002.1,2021-02-06T17:56:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a483223a333dd7d5ff446582c8c8c59378836447.001.1,2021-02-06T17:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.02cb2ef425f9f12abe3bd47a6f5e0a90758f89f0.001.1,2021-02-06T17:49:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.001.1,2021-02-06T17:56:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.456393da887b0344462871d67f590ecf09784a2b.001.1",
		areaDesc: "Clinch, GA; Echols, GA",
		geocode: {
			SAME: ["013065", "013101"],
			UGC: ["GAC065", "GAC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC101",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:45:00-04:00",
			},
		],
		sent: "2022-03-23T14:51:00-04:00",
		effective: "2022-03-23T14:51:00-04:00",
		onset: "2022-03-23T14:51:00-04:00",
		expires: "2022-03-23T15:15:00-04:00",
		ends: "2022-03-23T15:15:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 2:51PM EDT until March 23 at 3:15PM EDT by NWS Jacksonville FL",
		description:
			"At 251 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Statenville, moving northeast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nnorthwestern Echols and west central Clinch Counties.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSJAX"],
			WMOidentifier: ["WWUS52 KJAX 231851"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 315 PM EDT FOR NORTHWESTERN ECHOLS AND WEST CENTRAL CLINCH COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T18:51:00-00:00...storm...228DEG...28KT...30.71,-83.05",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.W.0004.000000T0000Z-220323T1915Z/"],
			eventEndingTime: ["2022-03-23T19:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.57c968cfff4097f09def86fce6b73e1cf7fa77b5.001.1,2021-02-06T18:08:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.002.1,2021-02-06T17:56:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a483223a333dd7d5ff446582c8c8c59378836447.001.1,2021-02-06T17:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.02cb2ef425f9f12abe3bd47a6f5e0a90758f89f0.001.1,2021-02-06T17:49:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.50d323354d5c8a8e8aa00a2784340984103d01ab.001.1,2021-02-06T17:56:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.74040d93c62c5d7755e1bdb66ca368ed6b154d66.001.1",
		areaDesc: "Clinch, GA; Echols, GA",
		geocode: {
			SAME: ["013065", "013101"],
			UGC: ["GAC065", "GAC101"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC101",
		],
		references: [],
		sent: "2022-03-23T14:45:00-04:00",
		effective: "2022-03-23T14:45:00-04:00",
		onset: "2022-03-23T14:45:00-04:00",
		expires: "2022-03-23T15:15:00-04:00",
		ends: "2022-03-23T15:15:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Warning issued March 23 at 2:45PM EDT until March 23 at 3:15PM EDT by NWS Jacksonville FL",
		description:
			"The National Weather Service in Jacksonville has issued a\n\n* Tornado Warning for...\nEchols County in southeastern Georgia...\nWest central Clinch County in southeastern Georgia...\n\n* Until 315 PM EDT.\n\n* At 245 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Statenville, moving northeast at 35 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nStatenville around 255 PM EDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORJAX"],
			WMOidentifier: ["WFUS52 KJAX 231845"],
			eventMotionDescription: [
				"2022-03-23T18:45:00-00:00...storm...238DEG...30KT...30.67,-83.1",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.W.0004.220323T1845Z-220323T1915Z/"],
			eventEndingTime: ["2022-03-23T19:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 3:15 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 3:15 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.70bc5128578136f7f982a97556649c41d97ee7e4.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.70bc5128578136f7f982a97556649c41d97ee7e4.001.1",
		areaDesc: "Dearborn, IN; Franklin, IN; Ripley, IN",
		geocode: {
			SAME: ["018029", "018047", "018137"],
			UGC: ["INC029", "INC047", "INC137"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/INC029",
			"https://api.weather.gov/zones/county/INC047",
			"https://api.weather.gov/zones/county/INC137",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:40:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dfe63fcc7915b06539e8142f7dc96c0511c5417b.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dfe63fcc7915b06539e8142f7dc96c0511c5417b.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:48:00-04:00",
			},
		],
		sent: "2022-03-23T13:56:00-04:00",
		effective: "2022-03-23T13:56:00-04:00",
		onset: "2022-03-23T13:56:00-04:00",
		expires: "2022-03-23T14:06:00-04:00",
		ends: "2022-03-23T14:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 1:56PM EDT until March 23 at 2:00PM EDT by NWS Wilmington OH",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.  However small hail\nand gusty winds are still possible with this thunderstorm.\n\nA Severe Thunderstorm Watch remains in effect until 900 PM EDT for\nsoutheastern Indiana.\n\nPlease report previous tornadoes, wind damage or hail to the National\nWeather Service by going to our website at weather.gov/iln and\nsubmitting your report via social media.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231756"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN FRANKLIN...NORTHEASTERN RIPLEY AND NORTHWESTERN DEARBORN COUNTIES WILL EXPIRE AT 200 PM EDT",
			],
			eventMotionDescription: [
				"2022-03-23T17:56:00-00:00...storm...221DEG...47KT...39.31,-85.04",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KILN.TO.W.0001.000000T0000Z-220323T1800Z/"],
			eventEndingTime: ["2022-03-23T18:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3c4e89c7bda57cdabd628c07b8de338a22673e46.001.1,2021-06-18T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.36f1a2b286fd0b138dd83283ad1d21e6e49407d6.001.1,2021-06-18T16:08:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0b1061c4e6b30fc622688ce30f7c1fa78f79252d.001.1,2021-06-18T15:59:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dfe63fcc7915b06539e8142f7dc96c0511c5417b.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.dfe63fcc7915b06539e8142f7dc96c0511c5417b.001.1",
		areaDesc: "Dearborn, IN; Franklin, IN; Ripley, IN",
		geocode: {
			SAME: ["018029", "018047", "018137"],
			UGC: ["INC029", "INC047", "INC137"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/INC029",
			"https://api.weather.gov/zones/county/INC047",
			"https://api.weather.gov/zones/county/INC137",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:40:00-04:00",
			},
		],
		sent: "2022-03-23T13:48:00-04:00",
		effective: "2022-03-23T13:48:00-04:00",
		onset: "2022-03-23T13:48:00-04:00",
		expires: "2022-03-23T14:00:00-04:00",
		ends: "2022-03-23T14:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 1:48PM EDT until March 23 at 2:00PM EDT by NWS Wilmington OH",
		description:
			"At 148 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Batesville, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nBatesville, Sunman, St. Leon, New Trenton, Penntown, Weisburg,\nLawrenceville, Saint Peter, Interstate 74 at State Route 101 and New\nAlsace.\n\nThis includes I-74 in Indiana between mile markers 150 and 165.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231748"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 200 PM EDT FOR SOUTHEASTERN FRANKLIN...NORTHEASTERN RIPLEY AND NORTHWESTERN DEARBORN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T17:48:00-00:00...storm...221DEG...47KT...39.24,-85.12",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0001.000000T0000Z-220323T1800Z/"],
			eventEndingTime: ["2022-03-23T18:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3c4e89c7bda57cdabd628c07b8de338a22673e46.001.1,2021-06-18T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.36f1a2b286fd0b138dd83283ad1d21e6e49407d6.001.1,2021-06-18T16:08:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0b1061c4e6b30fc622688ce30f7c1fa78f79252d.001.1,2021-06-18T15:59:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f575482be5f2d8e107a199333c9175a0035f42d3.001.1",
		areaDesc: "Dearborn, IN; Franklin, IN; Ripley, IN",
		geocode: {
			SAME: ["018029", "018047", "018137"],
			UGC: ["INC029", "INC047", "INC137"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/INC029",
			"https://api.weather.gov/zones/county/INC047",
			"https://api.weather.gov/zones/county/INC137",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:29:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:35:00-04:00",
			},
		],
		sent: "2022-03-23T13:40:00-04:00",
		effective: "2022-03-23T13:40:00-04:00",
		onset: "2022-03-23T13:40:00-04:00",
		expires: "2022-03-23T14:00:00-04:00",
		ends: "2022-03-23T14:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 1:40PM EDT until March 23 at 2:00PM EDT by NWS Wilmington OH",
		description:
			"At 140 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Milan, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nBatesville, Milan, Oldenburg, Sunman, St. Leon, Huntersville,\nBallstown, Penntown, Weisburg, Interstate 74 at State Route 101, New\nTrenton, Lawrenceville, Saint Peter and New Alsace.\n\nThis includes I-74 in Indiana between mile markers 149 and 165.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231740"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 200 PM EDT FOR SOUTHERN FRANKLIN...NORTHEASTERN RIPLEY AND NORTHWESTERN DEARBORN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T17:40:00-00:00...storm...219DEG...45KT...39.17,-85.2",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0001.000000T0000Z-220323T1800Z/"],
			eventEndingTime: ["2022-03-23T18:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3c4e89c7bda57cdabd628c07b8de338a22673e46.001.1,2021-06-18T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0b1061c4e6b30fc622688ce30f7c1fa78f79252d.001.1,2021-06-18T15:59:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.36f1a2b286fd0b138dd83283ad1d21e6e49407d6.001.1,2021-06-18T16:08:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.67d88ace44e3afffa607b4a2bd42612e5b37ab5e.001.1",
		areaDesc: "Dearborn, IN; Franklin, IN; Ripley, IN",
		geocode: {
			SAME: ["018029", "018047", "018137"],
			UGC: ["INC029", "INC047", "INC137"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/INC029",
			"https://api.weather.gov/zones/county/INC047",
			"https://api.weather.gov/zones/county/INC137",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T13:29:00-04:00",
			},
		],
		sent: "2022-03-23T13:35:00-04:00",
		effective: "2022-03-23T13:35:00-04:00",
		onset: "2022-03-23T13:35:00-04:00",
		expires: "2022-03-23T14:00:00-04:00",
		ends: "2022-03-23T14:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 1:35PM EDT until March 23 at 2:00PM EDT by NWS Wilmington OH",
		description:
			"At 135 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located near Osgood, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nLocations impacted include...\nBatesville, Milan, Osgood, Oldenburg, Sunman, St. Leon, Huntersville,\nBallstown, Penntown, Weisburg, Interstate 74 at State Route 101,\nVersailles Lake, New Trenton, Lawrenceville, Saint Peter and New\nAlsace.\n\nThis includes I-74 in Indiana between mile markers 147 and 165.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSILN"],
			WMOidentifier: ["WWUS51 KILN 231735"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 200 PM EDT FOR SOUTHERN FRANKLIN...NORTHEASTERN RIPLEY AND NORTHWESTERN DEARBORN COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T17:35:00-00:00...storm...221DEG...47KT...39.15,-85.21",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KILN.TO.W.0001.000000T0000Z-220323T1800Z/"],
			eventEndingTime: ["2022-03-23T18:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3c4e89c7bda57cdabd628c07b8de338a22673e46.001.1,2021-06-18T16:02:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.36f1a2b286fd0b138dd83283ad1d21e6e49407d6.001.1,2021-06-18T16:08:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0b1061c4e6b30fc622688ce30f7c1fa78f79252d.001.1,2021-06-18T15:59:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3d32e3f9465599e5aafaa7562317d7f2fac161bc.001.1",
		areaDesc: "Dearborn, IN; Franklin, IN; Ripley, IN",
		geocode: {
			SAME: ["018029", "018047", "018137"],
			UGC: ["INC029", "INC047", "INC137"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/INC029",
			"https://api.weather.gov/zones/county/INC047",
			"https://api.weather.gov/zones/county/INC137",
		],
		references: [],
		sent: "2022-03-23T13:29:00-04:00",
		effective: "2022-03-23T13:29:00-04:00",
		onset: "2022-03-23T13:29:00-04:00",
		expires: "2022-03-23T14:00:00-04:00",
		ends: "2022-03-23T14:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Wilmington OH",
		headline:
			"Tornado Warning issued March 23 at 1:29PM EDT until March 23 at 2:00PM EDT by NWS Wilmington OH",
		description:
			"The National Weather Service in Wilmington has issued a\n\n* Tornado Warning for...\nSouthern Franklin County in southeastern Indiana...\nNorthern Ripley County in southeastern Indiana...\nNorthwestern Dearborn County in southeastern Indiana...\n\n* Until 200 PM EDT.\n\n* At 129 PM EDT, a severe thunderstorm capable of producing a tornado\nwas located over Versailles, moving northeast at 55 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* Locations impacted include...\nBatesville, Versailles, Milan, Osgood, Oldenburg, Sunman, St. Leon,\nHolton, Napoleon, Huntersville, Ballstown, Penntown, Weisburg,\nInterstate 74 at State Route 101, Versailles Lake, Otter Village,\nNew Trenton, Lawrenceville, Saint Peter and New Alsace.\n\nThis includes I-74 in Indiana between mile markers 147 and 165.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTo report severe weather, go to our website at weather.gov/iln and\nsubmit your report via social media, when you can do so safely.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORILN"],
			WMOidentifier: ["WFUS51 KILN 231729"],
			eventMotionDescription: [
				"2022-03-23T17:29:00-00:00...storm...221DEG...47KT...39.09,-85.28",
			],
			maxHailSize: ["0.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KILN.TO.W.0001.220323T1729Z-220323T1800Z/"],
			eventEndingTime: ["2022-03-23T18:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 2:00 PM EDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 2:00 PM EDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.960c2e22a4c219294fb6907d5e4d0d0c5b5af3bb.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.960c2e22a4c219294fb6907d5e4d0d0c5b5af3bb.001.1",
		areaDesc: "Walton, FL",
		geocode: {
			SAME: ["012131"],
			UGC: ["FLC131"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC131"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T04:04:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d4f3b323582949f877292c4d22b38de69487656.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3d4f3b323582949f877292c4d22b38de69487656.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T04:39:00-05:00",
			},
		],
		sent: "2022-03-23T04:50:00-05:00",
		effective: "2022-03-23T04:50:00-05:00",
		onset: "2022-03-23T04:50:00-05:00",
		expires: "2022-03-23T05:00:00-05:00",
		ends: "2022-03-23T05:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Tallahassee FL",
		headline:
			"Tornado Warning issued March 23 at 4:50AM CDT until March 23 at 5:00AM CDT by NWS Tallahassee FL",
		description:
			"The storm which prompted the warning has weakened below severe\nlimits, and no longer appears capable of producing a tornado.\nTherefore, the warning will be allowed to expire.\n\nA Tornado Watch remains in effect until 600 AM CDT for the Panhandle\nof Florida.\n\nTo report severe weather, contact your nearest law enforcement\nagency. They will relay your report to the National Weather Service\nTallahassee.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSTAE"],
			WMOidentifier: ["WWUS52 KTAE 230950"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHEASTERN WALTON COUNTY WILL EXPIRE AT 500 AM CDT",
			],
			eventMotionDescription: [
				"2022-03-23T09:50:00-00:00...storm...221DEG...22KT...30.52,-86.09",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KTAE.TO.W.0017.000000T0000Z-220323T1000Z/"],
			eventEndingTime: ["2022-03-23T10:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.160b1659e53d1b58c13d2d773ab903b031e37503.001.1,2021-03-18T07:00:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.160b1659e53d1b58c13d2d773ab903b031e37503.002.1,2021-03-18T07:00:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c1b1faf684ca9eedaa1d9d668dd0a08055140379.001.1,2021-03-18T06:48:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3d4f3b323582949f877292c4d22b38de69487656.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3d4f3b323582949f877292c4d22b38de69487656.001.1",
		areaDesc: "Walton, FL",
		geocode: {
			SAME: ["012131"],
			UGC: ["FLC131"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC131"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T04:04:00-05:00",
			},
		],
		sent: "2022-03-23T04:39:00-05:00",
		effective: "2022-03-23T04:39:00-05:00",
		onset: "2022-03-23T04:39:00-05:00",
		expires: "2022-03-23T05:00:00-05:00",
		ends: "2022-03-23T05:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Tallahassee FL",
		headline:
			"Tornado Warning issued March 23 at 4:39AM CDT until March 23 at 5:00AM CDT by NWS Tallahassee FL",
		description:
			"At 439 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located 10 miles northeast of Santa Rosa Beach, moving northeast\nat 25 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nsoutheastern Walton County, including the following locations...\nBruce, Freeport, Portland and Rock Hill.",
		instruction:
			"If a tornado or other severe weather is spotted, report it to the\nNational Weather Service or your local nearest law enforcement agency\nwho will send your report. This act may save lives of others in the\npath of dangerous weather.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSTAE"],
			WMOidentifier: ["WWUS52 KTAE 230939"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 500 AM CDT FOR SOUTHEASTERN WALTON COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T09:39:00-00:00...storm...229DEG...23KT...30.48,-86.13",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KTAE.TO.W.0017.000000T0000Z-220323T1000Z/"],
			eventEndingTime: ["2022-03-23T10:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.160b1659e53d1b58c13d2d773ab903b031e37503.001.1,2021-03-18T07:00:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c1b1faf684ca9eedaa1d9d668dd0a08055140379.001.1,2021-03-18T06:48:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.160b1659e53d1b58c13d2d773ab903b031e37503.002.1,2021-03-18T07:00:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.97d4499dda8b4e82b20709133cbdb5876256e2c3.001.1",
		areaDesc: "Walton, FL",
		geocode: {
			SAME: ["012131"],
			UGC: ["FLC131"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC131"],
		references: [],
		sent: "2022-03-23T04:04:00-05:00",
		effective: "2022-03-23T04:04:00-05:00",
		onset: "2022-03-23T04:04:00-05:00",
		expires: "2022-03-23T05:00:00-05:00",
		ends: "2022-03-23T05:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Tallahassee FL",
		headline:
			"Tornado Warning issued March 23 at 4:04AM CDT until March 23 at 5:00AM CDT by NWS Tallahassee FL",
		description:
			"The National Weather Service in Tallahassee has issued a\n\n* Tornado Warning for...\nSouthern Walton County in the Panhandle of Florida...\n\n* Until 500 AM CDT.\n\n* At 404 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Santa Rosa Beach, moving northeast at 25 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nSanta Rosa Beach around 425 AM CDT.\n\nOther locations impacted by this tornadic thunderstorm include\nPortland, Port Washington, Blue Mountain Beach, Seaside, Rock Hill,\nMiramar Beach, Bruce, Gulf Pines, New Home and Freeport.",
		instruction:
			"To report severe weather contact your nearest law enforcement agency.\nThey will send your report to the National Weather Service office in\nTallahassee.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORTAE"],
			WMOidentifier: ["WFUS52 KTAE 230904"],
			eventMotionDescription: [
				"2022-03-23T09:04:00-00:00...storm...221DEG...22KT...30.33,-86.33",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KTAE.TO.W.0017.220323T0904Z-220323T1000Z/"],
			eventEndingTime: ["2022-03-23T10:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 5:00 AM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 5:00 AM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2321b47e4818097d363f679c62a2c9d57f7fa607.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2321b47e4818097d363f679c62a2c9d57f7fa607.001.1",
		areaDesc: "Covington, AL",
		geocode: {
			SAME: ["001039"],
			UGC: ["ALC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC039"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:55:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.71d901acec5d1e3387b3e1fc9db2986d00d027be.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.71d901acec5d1e3387b3e1fc9db2986d00d027be.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T03:10:00-05:00",
			},
		],
		sent: "2022-03-23T03:20:00-05:00",
		effective: "2022-03-23T03:20:00-05:00",
		onset: "2022-03-23T03:20:00-05:00",
		expires: "2022-03-23T03:35:19-05:00",
		ends: "2022-03-23T03:45:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230820"],
			NWSheadline: [
				"THE TORNADO WARNING FOR WESTERN COVINGTON COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T08:18:00-00:00...storm...200DEG...33KT...31.37,-86.48",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.W.0037.000000T0000Z-220323T0845Z/"],
			eventEndingTime: ["2022-03-23T08:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d5f99c3a5c49f519ed781d54a2a39fd0f30443b7.001.1,2021-06-19T08:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5e19c8ecd659a33ea9d7486832b31eb2c6ef8396.002.1,2021-06-19T07:54:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3bbd35473ea845c77167f363dc580fdc4fe6dbbd.001.1,2021-06-19T07:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c4d742c28bdbe0dbad634aef60fbca2849bdd25b.001.1,2021-06-19T07:37:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5e19c8ecd659a33ea9d7486832b31eb2c6ef8396.001.1,2021-06-19T07:54:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.71d901acec5d1e3387b3e1fc9db2986d00d027be.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.71d901acec5d1e3387b3e1fc9db2986d00d027be.001.1",
		areaDesc: "Covington, AL",
		geocode: {
			SAME: ["001039"],
			UGC: ["ALC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC039"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:55:00-05:00",
			},
		],
		sent: "2022-03-23T03:10:00-05:00",
		effective: "2022-03-23T03:10:00-05:00",
		onset: "2022-03-23T03:10:00-05:00",
		expires: "2022-03-23T03:45:00-05:00",
		ends: "2022-03-23T03:45:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 3:10AM CDT until March 23 at 3:45AM CDT by NWS Mobile AL",
		description:
			"At 308 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Carolina and Andalusia, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nHeath around 315 AM CDT.\nGantt around 320 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230810"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 345 AM CDT FOR WESTERN COVINGTON COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T08:08:00-00:00...storm...206DEG...42KT...31.27,-86.52",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0037.000000T0000Z-220323T0845Z/"],
			eventEndingTime: ["2022-03-23T08:45:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.d5f99c3a5c49f519ed781d54a2a39fd0f30443b7.001.1,2021-06-19T08:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5e19c8ecd659a33ea9d7486832b31eb2c6ef8396.002.1,2021-06-19T07:54:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c4d742c28bdbe0dbad634aef60fbca2849bdd25b.001.1,2021-06-19T07:37:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3bbd35473ea845c77167f363dc580fdc4fe6dbbd.001.1,2021-06-19T07:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5e19c8ecd659a33ea9d7486832b31eb2c6ef8396.001.1,2021-06-19T07:54:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9068322b862741ec710c22661af2a2c92b627842.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9068322b862741ec710c22661af2a2c92b627842.001.1",
		areaDesc: "Okaloosa, FL",
		geocode: {
			SAME: ["012091"],
			UGC: ["FLC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC091"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:44:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9b58346abb5cacb74a54615ec2512389dcbc5524.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9b58346abb5cacb74a54615ec2512389dcbc5524.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:54:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:28:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:52:00-05:00",
			},
		],
		sent: "2022-03-23T03:05:00-05:00",
		effective: "2022-03-23T03:05:00-05:00",
		onset: "2022-03-23T03:05:00-05:00",
		expires: "2022-03-23T03:15:00-05:00",
		ends: "2022-03-23T03:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 3:05AM CDT until March 23 at 3:15AM CDT by NWS Mobile AL",
		description:
			"The tornadic thunderstorm which prompted the warning has weakened.\nTherefore, the warning will be allowed to expire.\n\nA Tornado Watch remains in effect until 600 AM CDT for northwestern\nFlorida.",
		instruction: null,
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230805"],
			NWSheadline: [
				"THE TORNADO WARNING FOR SOUTHERN OKALOOSA COUNTY WILL EXPIRE AT 315 AM CDT",
			],
			eventMotionDescription: [
				"2022-03-23T08:05:00-00:00...storm...210DEG...33KT...30.56,-86.59",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KMOB.TO.W.0036.000000T0000Z-220323T0815Z/"],
			eventEndingTime: ["2022-03-23T08:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c08c9315071bc9bf1a91567892b290f536d2021a.001.1,2021-06-19T06:30:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db70d7840fb257bf8624d05f1e09c65c87a5ed96.001.1,2021-06-19T06:24:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4a67e588d4cc8be3bb2eec8bd865d692a7ce9fd7.001.1,2021-06-19T06:46:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3c616d2bc5509540268e4e6220589608f3eb1bdd.001.1",
		areaDesc: "Covington, AL",
		geocode: {
			SAME: ["001039"],
			UGC: ["ALC039"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC039"],
		references: [],
		sent: "2022-03-23T02:55:00-05:00",
		effective: "2022-03-23T02:55:00-05:00",
		onset: "2022-03-23T02:55:00-05:00",
		expires: "2022-03-23T03:45:00-05:00",
		ends: "2022-03-23T03:45:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 2:55AM CDT until March 23 at 3:45AM CDT by NWS Mobile AL",
		description:
			"The National Weather Service in Mobile has issued a\n\n* Tornado Warning for...\nWestern Covington County in south central Alabama...\n\n* Until 345 AM CDT.\n\n* At 255 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located 13 miles northwest of Laurel Hill, or 16 miles\nsouthwest of Andalusia, moving north at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nAndalusia around 320 AM CDT.\nRiver Falls, Red Level and Heath around 325 AM CDT.\nGantt around 330 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORMOB"],
			WMOidentifier: ["WFUS54 KMOB 230755"],
			eventMotionDescription: [
				"2022-03-23T07:55:00-00:00...storm...200DEG...33KT...31.11,-86.63",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KMOB.TO.W.0037.220323T0755Z-220323T0845Z/"],
			eventEndingTime: ["2022-03-23T08:45:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 3:45 AM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 3:45 AM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9b58346abb5cacb74a54615ec2512389dcbc5524.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9b58346abb5cacb74a54615ec2512389dcbc5524.001.1",
		areaDesc: "Okaloosa, FL",
		geocode: {
			SAME: ["012091"],
			UGC: ["FLC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC091"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:28:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:44:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:52:00-05:00",
			},
		],
		sent: "2022-03-23T02:54:00-05:00",
		effective: "2022-03-23T02:54:00-05:00",
		onset: "2022-03-23T02:54:00-05:00",
		expires: "2022-03-23T03:15:00-05:00",
		ends: "2022-03-23T03:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 2:54AM CDT until March 23 at 3:15AM CDT by NWS Mobile AL",
		description:
			"At 254 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Wright, moving northeast at 30 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Weather spotters reported a funnel cloud.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nsouthern Okaloosa County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230754"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 315 AM CDT FOR SOUTHERN OKALOOSA COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T07:54:00-00:00...storm...216DEG...26KT...30.48,-86.64",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0036.000000T0000Z-220323T0815Z/"],
			eventEndingTime: ["2022-03-23T08:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c08c9315071bc9bf1a91567892b290f536d2021a.001.1,2021-06-19T06:30:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db70d7840fb257bf8624d05f1e09c65c87a5ed96.001.1,2021-06-19T06:24:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4a67e588d4cc8be3bb2eec8bd865d692a7ce9fd7.001.1,2021-06-19T06:46:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8242e57778e56b96e15b8b47e90f5c9403f66f83.001.1",
		areaDesc: "Okaloosa, FL",
		geocode: {
			SAME: ["012091"],
			UGC: ["FLC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC091"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:28:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:44:00-05:00",
			},
		],
		sent: "2022-03-23T02:52:00-05:00",
		effective: "2022-03-23T02:52:00-05:00",
		onset: "2022-03-23T02:52:00-05:00",
		expires: "2022-03-23T03:15:00-05:00",
		ends: "2022-03-23T03:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 2:52AM CDT until March 23 at 3:15AM CDT by NWS Mobile AL",
		description:
			"At 251 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Wright, moving northeast at 35 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis tornadic thunderstorm will remain over mainly rural areas of\nsouthern Okaloosa County.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230752"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 315 AM CDT FOR SOUTHERN OKALOOSA COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T07:51:00-00:00...storm...216DEG...31KT...30.48,-86.65",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0036.000000T0000Z-220323T0815Z/"],
			eventEndingTime: ["2022-03-23T08:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c08c9315071bc9bf1a91567892b290f536d2021a.001.1,2021-06-19T06:30:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db70d7840fb257bf8624d05f1e09c65c87a5ed96.001.1,2021-06-19T06:24:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4a67e588d4cc8be3bb2eec8bd865d692a7ce9fd7.001.1,2021-06-19T06:46:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.817505b4c656ee6aec123195367764c050e05c7e.001.1",
		areaDesc: "Okaloosa, FL",
		geocode: {
			SAME: ["012091"],
			UGC: ["FLC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC091"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:28:00-05:00",
			},
		],
		sent: "2022-03-23T02:44:00-05:00",
		effective: "2022-03-23T02:44:00-05:00",
		onset: "2022-03-23T02:44:00-05:00",
		expires: "2022-03-23T03:15:00-05:00",
		ends: "2022-03-23T03:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 2:44AM CDT until March 23 at 3:15AM CDT by NWS Mobile AL",
		description:
			"At 243 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located over Mary Esther, moving northeast at 35 mph.\n\nHAZARD...Tornado and quarter size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nWright, Ocean City and Shalimar around 250 AM CDT.\nEglin AFB around 255 AM CDT.\nValparaiso around 300 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230744"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 315 AM CDT FOR SOUTHERN OKALOOSA COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T07:43:00-00:00...storm...206DEG...30KT...30.42,-86.7",
			],
			maxHailSize: ["1.00"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0036.000000T0000Z-220323T0815Z/"],
			eventEndingTime: ["2022-03-23T08:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c08c9315071bc9bf1a91567892b290f536d2021a.001.1,2021-06-19T06:30:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.db70d7840fb257bf8624d05f1e09c65c87a5ed96.001.1,2021-06-19T06:24:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.4a67e588d4cc8be3bb2eec8bd865d692a7ce9fd7.001.1,2021-06-19T06:46:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.94e6d2787060abe3fff4a94b60184c5811ffe78d.001.1",
		areaDesc: "Okaloosa, FL",
		geocode: {
			SAME: ["012091"],
			UGC: ["FLC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/FLC091"],
		references: [],
		sent: "2022-03-23T02:28:00-05:00",
		effective: "2022-03-23T02:28:00-05:00",
		onset: "2022-03-23T02:28:00-05:00",
		expires: "2022-03-23T03:15:00-05:00",
		ends: "2022-03-23T03:15:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 23 at 2:28AM CDT until March 23 at 3:15AM CDT by NWS Mobile AL",
		description:
			"The National Weather Service in Mobile has issued a\n\n* Tornado Warning for...\nSouthern Okaloosa County in northwestern Florida...\n\n* Until 315 AM CDT.\n\n* At 228 AM CDT, a severe thunderstorm capable of producing a tornado\nwas located 7 miles southeast of Navarre Beach, or 9 miles\nsouthwest of Mary Esther, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nFort Walton Beach, Mary Esther and Cinco Bayou around 245 AM CDT.\nWright, Ocean City, Lake Lorraine and Shalimar around 250 AM CDT.\nEglin AFB around 255 AM CDT.\nValparaiso around 300 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORMOB"],
			WMOidentifier: ["WFUS54 KMOB 230728"],
			eventMotionDescription: [
				"2022-03-23T07:28:00-00:00...storm...210DEG...33KT...30.3,-86.77",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KMOB.TO.W.0036.220323T0728Z-220323T0815Z/"],
			eventEndingTime: ["2022-03-23T08:15:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 3:15 AM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 3:15 AM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.552c7bfee194e92c4a30f4af1f4ba38652b03796.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.552c7bfee194e92c4a30f4af1f4ba38652b03796.001.1",
		areaDesc: "Monroe, AL; Wilcox, AL",
		geocode: {
			SAME: ["001099", "001131"],
			UGC: ["ALC099", "ALC131"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC099",
			"https://api.weather.gov/zones/county/ALC131",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:45:00-05:00",
			},
		],
		sent: "2022-03-23T00:13:00-05:00",
		effective: "2022-03-23T00:13:00-05:00",
		onset: "2022-03-23T00:13:00-05:00",
		expires: "2022-03-23T00:29:00-05:00",
		ends: "2022-03-23T00:30:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230513"],
			NWSheadline: [
				"THE TORNADO WARNING FOR NORTH CENTRAL MONROE AND SOUTH CENTRAL WILCOX COUNTIES IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T05:08:00-00:00...storm...204DEG...37KT...31.77,-87.43",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.W.0035.000000T0000Z-220323T0530Z/"],
			eventEndingTime: ["2022-03-23T05:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc39a0614b03ec6323736099e78b58be8baac38e.001.1,2021-06-19T05:55:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3588351ef2f266cb3953f582a4544abed415ce79.001.1,2021-06-19T06:03:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a47ff866b61c95827ff3dbde3cb6bbf9223fb20a.001.1,2021-06-19T06:29:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.002.1",
		areaDesc: "Monroe, AL; Wilcox, AL",
		geocode: {
			SAME: ["001099", "001131"],
			UGC: ["ALC099", "ALC131"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC099",
			"https://api.weather.gov/zones/county/ALC131",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:45:00-05:00",
			},
		],
		sent: "2022-03-22T23:57:00-05:00",
		effective: "2022-03-22T23:57:00-05:00",
		onset: "2022-03-22T23:57:00-05:00",
		expires: "2022-03-23T00:30:00-05:00",
		ends: "2022-03-23T00:30:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 11:57PM CDT until March 23 at 12:30AM CDT by NWS Mobile AL",
		description:
			"At 1156 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located 12 miles east of Whatley, or 12 miles northwest of\nMonroeville, moving northeast at 50 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nVredenburgh around 1215 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230457"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1230 AM CDT FOR NORTH CENTRAL MONROE AND SOUTH CENTRAL WILCOX COUNTIES",
			],
			eventMotionDescription: [
				"2022-03-23T04:56:00-00:00...storm...205DEG...42KT...31.64,-87.5",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0035.000000T0000Z-220323T0530Z/"],
			eventEndingTime: ["2022-03-23T05:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc39a0614b03ec6323736099e78b58be8baac38e.001.1,2021-06-19T05:55:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3588351ef2f266cb3953f582a4544abed415ce79.001.1,2021-06-19T06:03:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a47ff866b61c95827ff3dbde3cb6bbf9223fb20a.001.1,2021-06-19T06:29:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b255bef787c9d019338cadbfae1c61f94788a712.001.1",
		areaDesc: "Clarke, AL",
		geocode: {
			SAME: ["001025"],
			UGC: ["ALC025"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC025"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:45:00-05:00",
			},
		],
		sent: "2022-03-22T23:57:00-05:00",
		effective: "2022-03-22T23:57:00-05:00",
		onset: "2022-03-22T23:57:00-05:00",
		expires: "2022-03-23T00:12:46-05:00",
		ends: "2022-03-23T00:30:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230457"],
			NWSheadline: [
				"THE TORNADO WARNING FOR EAST CENTRAL CLARKE COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T04:56:00-00:00...storm...205DEG...42KT...31.64,-87.5",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.W.0035.000000T0000Z-220323T0530Z/"],
			eventEndingTime: ["2022-03-23T05:30:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.bc39a0614b03ec6323736099e78b58be8baac38e.001.1,2021-06-19T05:55:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.3588351ef2f266cb3953f582a4544abed415ce79.001.1,2021-06-19T06:03:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.a47ff866b61c95827ff3dbde3cb6bbf9223fb20a.001.1,2021-06-19T06:29:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ff271ea6a9e27b9627211706fba285f24e94fcd5.001.1",
		areaDesc: "Clarke, AL; Monroe, AL; Wilcox, AL",
		geocode: {
			SAME: ["001025", "001099", "001131"],
			UGC: ["ALC025", "ALC099", "ALC131"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC025",
			"https://api.weather.gov/zones/county/ALC099",
			"https://api.weather.gov/zones/county/ALC131",
		],
		references: [],
		sent: "2022-03-22T23:45:00-05:00",
		effective: "2022-03-22T23:45:00-05:00",
		onset: "2022-03-22T23:45:00-05:00",
		expires: "2022-03-23T00:30:00-05:00",
		ends: "2022-03-23T00:30:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 11:45PM CDT until March 23 at 12:30AM CDT by NWS Mobile AL",
		description:
			"The National Weather Service in Mobile has issued a\n\n* Tornado Warning for...\nNorthwestern Monroe County in south central Alabama...\nEast central Clarke County in southwestern Alabama...\nSouthwestern Wilcox County in south central Alabama...\n\n* Until 1230 AM CDT.\n\n* At 1145 PM CDT, a severe thunderstorm capable of producing a\ntornado was located 11 miles northwest of Frisco City, moving\nnortheast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This dangerous storm will be near...\nVredenburgh around 1225 AM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORMOB"],
			WMOidentifier: ["WFUS54 KMOB 230445"],
			eventMotionDescription: [
				"2022-03-23T04:45:00-00:00...storm...204DEG...37KT...31.5,-87.58",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KMOB.TO.W.0035.220323T0445Z-220323T0530Z/"],
			eventEndingTime: ["2022-03-23T05:30:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 12:30 AM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 12:30 AM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4ab6aabfc7f386e00d06569e8cce18067702186c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4ab6aabfc7f386e00d06569e8cce18067702186c.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:09:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e5421ad22f0a85e277c1e3041dad0f9233904b98.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e5421ad22f0a85e277c1e3041dad0f9233904b98.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:18:00-05:00",
			},
		],
		sent: "2022-03-22T23:28:00-05:00",
		effective: "2022-03-22T23:28:00-05:00",
		onset: "2022-03-22T23:28:00-05:00",
		expires: "2022-03-22T23:43:12-05:00",
		ends: "2022-03-23T00:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Warning has been cancelled.",
		description:
			"The Tornado Warning has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230428"],
			NWSheadline: [
				"THE TORNADO WARNING FOR CENTRAL BALDWIN COUNTY IS CANCELLED",
			],
			eventMotionDescription: [
				"2022-03-23T04:26:00-00:00...storm...199DEG...26KT...30.65,-87.67",
			],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.W.0034.000000T0000Z-220323T0500Z/"],
			eventEndingTime: ["2022-03-23T05:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.856a8419ffadfef851615340c62cf7fc6281b5df.001.1,2021-06-19T03:32:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0a351a7a058b4a04638b89f1b662d64c80ba2b03.001.1,2021-06-19T03:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.485a8e8c61201b369777c2bdec8c77c2c0563447.001.1,2021-06-19T03:21:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e5421ad22f0a85e277c1e3041dad0f9233904b98.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e5421ad22f0a85e277c1e3041dad0f9233904b98.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T23:09:00-05:00",
			},
		],
		sent: "2022-03-22T23:18:00-05:00",
		effective: "2022-03-22T23:18:00-05:00",
		onset: "2022-03-22T23:18:00-05:00",
		expires: "2022-03-23T00:00:00-05:00",
		ends: "2022-03-23T00:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 11:18PM CDT until March 23 at 12:00AM CDT by NWS Mobile AL",
		description:
			"At 1118 PM CDT, a confirmed tornado was located over Robertsdale,\nmoving north at 35 mph.\n\nHAZARD...Damaging tornado.\n\nSOURCE...Radar confirmed tornado.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.",
		instruction:
			"To repeat, a tornado is on the ground. TAKE COVER NOW! Move to a\nbasement or an interior room on the lowest floor of a sturdy\nbuilding. Avoid windows. If you are outdoors, in a mobile home, or in\na vehicle, move to the closest substantial shelter and protect\nyourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230418"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL MIDNIGHT CDT FOR CENTRAL BALDWIN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T04:18:00-00:00...storm...191DEG...30KT...30.58,-87.7",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["OBSERVED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0034.000000T0000Z-220323T0500Z/"],
			eventEndingTime: ["2022-03-23T05:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.856a8419ffadfef851615340c62cf7fc6281b5df.001.1,2021-06-19T03:32:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.485a8e8c61201b369777c2bdec8c77c2c0563447.001.1,2021-06-19T03:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.0a351a7a058b4a04638b89f1b662d64c80ba2b03.001.1,2021-06-19T03:07:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.891e4cbb5de62b7e9d5ac26e0ea5ead4f174e740.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [],
		sent: "2022-03-22T23:09:00-05:00",
		effective: "2022-03-22T23:09:00-05:00",
		onset: "2022-03-22T23:09:00-05:00",
		expires: "2022-03-23T00:00:00-05:00",
		ends: "2022-03-23T00:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 11:09PM CDT until March 23 at 12:00AM CDT by NWS Mobile AL",
		description:
			"The National Weather Service in Mobile has issued a\n\n* Tornado Warning for...\nCentral Baldwin County in southwestern Alabama...\n\n* Until midnight CDT.\n\n* At 1109 PM CDT, a tornado producing storm was located over\nSummerdale, or near Robertsdale, moving north at 30 mph.\n\nHAZARD...Damaging tornado.\n\nSOURCE...Radar confirmed tornado.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This tornadic storm will be near...\nRobertsdale around 1115 PM CDT.",
		instruction:
			"To repeat, a tornado is on the ground. TAKE COVER NOW! Move to a\nbasement or an interior room on the lowest floor of a sturdy\nbuilding. Avoid windows. If you are outdoors, in a mobile home, or in\na vehicle, move to the closest substantial shelter and protect\nyourself from flying debris.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["TORMOB"],
			WMOidentifier: ["WFUS54 KMOB 230409"],
			eventMotionDescription: [
				"2022-03-23T04:09:00-00:00...storm...199DEG...26KT...30.5,-87.72",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["OBSERVED"],
			BLOCKCHANNEL: ["EAS", "NWEM"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KMOB.TO.W.0034.220323T0409Z-220323T0500Z/"],
			eventEndingTime: ["2022-03-23T05:00:00+00:00"],
			WEAHandling: ["Imminent Threat"],
			CMAMtext: [
				"NWS: TORNADO WARNING in this area til 12:00 AM CDT. Take shelter now. Check media.",
			],
			CMAMlongtext: [
				"National Weather Service: TORNADO WARNING in this area until 12:00 AM CDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media.",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.94da7a766f1d6150b855b0604da5465940a8ba24.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.94da7a766f1d6150b855b0604da5465940a8ba24.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:31:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:36:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:46:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f1a4ab511144c0eb755aab816ea9f58e87e81c6.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2f1a4ab511144c0eb755aab816ea9f58e87e81c6.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:54:00-05:00",
			},
		],
		sent: "2022-03-22T23:04:00-05:00",
		effective: "2022-03-22T23:04:00-05:00",
		onset: "2022-03-22T23:04:00-05:00",
		expires: "2022-03-22T23:15:00-05:00",
		ends: "2022-03-22T23:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 11:04PM CDT until March 22 at 11:15PM CDT by NWS Mobile AL",
		description:
			"At 1104 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Summerdale, or 4 miles northwest of Foley, moving\nnortheast at 30 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nRobertsdale around 1115 PM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230404"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1115 PM CDT FOR SOUTHEASTERN BALDWIN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T04:04:00-00:00...storm...204DEG...28KT...30.46,-87.73",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0033.000000T0000Z-220323T0415Z/"],
			eventEndingTime: ["2022-03-23T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c5a2b9c8248516c12a7510d155e01ba7d977b009.001.1,2021-05-03T14:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.54c5f31c26230db615f9a42fa50cec498941af92.001.1,2021-05-03T14:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1c4d1a653b77a2e8b982c94c48101579d40a1869.001.1,2021-05-03T14:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2d031f254fdd8ad00122cfbf5d8fb76a754e1f90.001.1,2021-05-03T13:57:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f1a4ab511144c0eb755aab816ea9f58e87e81c6.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2f1a4ab511144c0eb755aab816ea9f58e87e81c6.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:36:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:46:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:31:00-05:00",
			},
		],
		sent: "2022-03-22T22:54:00-05:00",
		effective: "2022-03-22T22:54:00-05:00",
		onset: "2022-03-22T22:54:00-05:00",
		expires: "2022-03-22T23:15:00-05:00",
		ends: "2022-03-22T23:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 10:54PM CDT until March 22 at 11:15PM CDT by NWS Mobile AL",
		description:
			"At 1053 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located near Magnolia Springs, or 4 miles west of Foley, moving\nnortheast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nSummerdale around 1105 PM CDT.\nRobertsdale around 1110 PM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230354"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1115 PM CDT FOR SOUTHEASTERN BALDWIN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T03:53:00-00:00...storm...213DEG...36KT...30.39,-87.76",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0033.000000T0000Z-220323T0415Z/"],
			eventEndingTime: ["2022-03-23T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c5a2b9c8248516c12a7510d155e01ba7d977b009.001.1,2021-05-03T14:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.54c5f31c26230db615f9a42fa50cec498941af92.001.1,2021-05-03T14:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1c4d1a653b77a2e8b982c94c48101579d40a1869.001.1,2021-05-03T14:07:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2d031f254fdd8ad00122cfbf5d8fb76a754e1f90.001.1,2021-05-03T13:57:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.dd7424e27a77751ad5257f499c42b860c846b288.001.1",
		areaDesc: "Baldwin, AL",
		geocode: {
			SAME: ["001003"],
			UGC: ["ALC003"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC003"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.19ece99776962cff2552bc2eddaa90ec2c7add6c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:31:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.5d55909611e406ec28c556f14cec5d80134beae7.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:36:00-05:00",
			},
		],
		sent: "2022-03-22T22:46:00-05:00",
		effective: "2022-03-22T22:46:00-05:00",
		onset: "2022-03-22T22:46:00-05:00",
		expires: "2022-03-22T23:15:00-05:00",
		ends: "2022-03-22T23:15:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Observed",
		urgency: "Immediate",
		event: "Tornado Warning",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Warning issued March 22 at 10:46PM CDT until March 22 at 11:15PM CDT by NWS Mobile AL",
		description:
			"At 1045 PM CDT, a severe thunderstorm capable of producing a tornado\nwas located 4 miles west of Bon Secour, or 8 miles northwest of Gulf\nShores, moving northeast at 40 mph.\n\nHAZARD...Tornado.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed. Damage\nto roofs, windows, and vehicles will occur.  Tree damage is\nlikely.\n\nThis dangerous storm will be near...\nMagnolia Springs around 1055 PM CDT.\nFoley around 1100 PM CDT.\nSummerdale around 1105 PM CDT.\nRobertsdale and Silverhill around 1110 PM CDT.",
		instruction:
			"TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.\n\nTornadoes are extremely difficult to see and confirm at night. Do not\nwait to see or hear the tornado. TAKE COVER NOW!\n\nIf on or near Mobile Bay near the Fort Morgan peninsula, get away\nfrom the water and move to safe shelter immediately. If you can hear\nthunder, you are close enough to be struck by lightning. Severe\nthunderstorms can produce large capsizing waves, even on small\nbodies of water. Move into dock and seek safe shelter now! Do not be\ncaught on the water in a thunderstorm.",
		response: "Shelter",
		parameters: {
			AWIPSidentifier: ["SVSMOB"],
			WMOidentifier: ["WWUS54 KMOB 230346"],
			NWSheadline: [
				"A TORNADO WARNING REMAINS IN EFFECT UNTIL 1115 PM CDT FOR SOUTHEASTERN BALDWIN COUNTY",
			],
			eventMotionDescription: [
				"2022-03-23T03:45:00-00:00...storm...208DEG...34KT...30.31,-87.8",
			],
			maxHailSize: ["Up to .75"],
			tornadoDetection: ["RADAR INDICATED"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.W.0033.000000T0000Z-220323T0415Z/"],
			eventEndingTime: ["2022-03-23T04:15:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.c5a2b9c8248516c12a7510d155e01ba7d977b009.001.1,2021-05-03T14:41:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.54c5f31c26230db615f9a42fa50cec498941af92.001.1,2021-05-03T14:21:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2d031f254fdd8ad00122cfbf5d8fb76a754e1f90.001.1,2021-05-03T13:57:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.1c4d1a653b77a2e8b982c94c48101579d40a1869.001.1,2021-05-03T14:07:00-05:00",
			],
		},
	},
];

export const TORNADO_WATCHES = [
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1a9106b91d57a0a3ed5f147f62f8ae8962bad6f2.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.1a9106b91d57a0a3ed5f147f62f8ae8962bad6f2.001.1",
		areaDesc:
			"Stokes, NC; Surry, NC; Wilkes, NC; Yadkin, NC; Carroll, VA; Floyd, VA; Franklin, VA; Henry, VA; Patrick, VA; City of Martinsville, VA",
		geocode: {
			SAME: [
				"037169",
				"037171",
				"037193",
				"037197",
				"051035",
				"051063",
				"051067",
				"051089",
				"051141",
				"051690",
			],
			UGC: [
				"NCC169",
				"NCC171",
				"NCC193",
				"NCC197",
				"VAC035",
				"VAC063",
				"VAC067",
				"VAC089",
				"VAC141",
				"VAC690",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC169",
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/NCC193",
			"https://api.weather.gov/zones/county/NCC197",
			"https://api.weather.gov/zones/county/VAC035",
			"https://api.weather.gov/zones/county/VAC063",
			"https://api.weather.gov/zones/county/VAC067",
			"https://api.weather.gov/zones/county/VAC089",
			"https://api.weather.gov/zones/county/VAC141",
			"https://api.weather.gov/zones/county/VAC690",
		],
		references: [],
		sent: "2022-03-24T00:25:00-04:00",
		effective: "2022-03-24T00:25:00-04:00",
		onset: "2022-03-24T00:25:00-04:00",
		expires: "2022-03-24T01:30:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Watch issued March 24 at 12:25AM EDT until March 24 at 12:00AM EDT by NWS Blacksburg VA",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ALLOWED TORNADO WATCH 69 TO\nEXPIRE FOR THE FOLLOWING AREAS\n\nIN NORTH CAROLINA THIS ALLOWS TO EXPIRE 4 COUNTIES\n\nIN NORTH CENTRAL NORTH CAROLINA\n\nSTOKES                SURRY\n\nIN NORTHWEST NORTH CAROLINA\n\nWILKES                YADKIN\n\nIN VIRGINIA THIS ALLOWS TO EXPIRE 6 COUNTIES\n\nIN SOUTH CENTRAL VIRGINIA\n\nCITY OF MARTINSVILLE  HENRY\n\nIN SOUTHWEST VIRGINIA\n\nCARROLL               FLOYD                 PATRICK\n\nIN WEST CENTRAL VIRGINIA\n\nFRANKLIN",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRNK"],
			WMOidentifier: ["WWUS61 KRNK 240425"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRNK.TO.A.0069.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f249369633b5164ac48cbc7fd2311c3dcdbec6f6.001.1,2022-03-23T20:34:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2b38e42ab5e9018c6d9fdf07b2dc678ed10607ac.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2b38e42ab5e9018c6d9fdf07b2dc678ed10607ac.001.1",
		areaDesc:
			"Alexander, NC; Burke, NC; Caldwell, NC; Catawba, NC; Cleveland, NC; Gaston, NC; Iredell, NC; Lincoln, NC; Polk, NC; Rutherford, NC",
		geocode: {
			SAME: [
				"037003",
				"037023",
				"037027",
				"037035",
				"037045",
				"037071",
				"037097",
				"037109",
				"037149",
				"037161",
			],
			UGC: [
				"NCC003",
				"NCC023",
				"NCC027",
				"NCC035",
				"NCC045",
				"NCC071",
				"NCC097",
				"NCC109",
				"NCC149",
				"NCC161",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
			"https://api.weather.gov/zones/county/NCC035",
			"https://api.weather.gov/zones/county/NCC045",
			"https://api.weather.gov/zones/county/NCC071",
			"https://api.weather.gov/zones/county/NCC097",
			"https://api.weather.gov/zones/county/NCC109",
			"https://api.weather.gov/zones/county/NCC149",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [],
		sent: "2022-03-24T00:08:00-04:00",
		effective: "2022-03-24T00:08:00-04:00",
		onset: "2022-03-24T00:08:00-04:00",
		expires: "2022-03-24T01:15:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Watch issued March 24 at 12:08AM EDT until March 24 at 12:00AM EDT by NWS Greenville-Spartanburg SC",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ALLOWED TORNADO WATCH 69 TO\nEXPIRE FOR THE FOLLOWING AREAS\n\nIN NORTH CAROLINA THIS ALLOWS TO EXPIRE 10 COUNTIES\n\nIN PIEDMONT NORTH CAROLINA\n\nALEXANDER             CATAWBA               CLEVELAND\nGASTON                IREDELL               LINCOLN\n\nIN WESTERN NORTH CAROLINA\n\nBURKE                 CALDWELL              POLK\nRUTHERFORD\n\nTHIS INCLUDES THE CITIES OF BETHLEHEM, COLUMBUS, CROUSE,\nELLENDALE, FOREST CITY, GASTONIA, GRANITE FALLS, HICKORY,\nHIDDENITE, KINGS CREEK, KINGS MOUNTAIN, LENOIR, LINCOLNTON,\nMILL SPRING, MILLERSVILLE, MOORESVILLE, MORGANTON, NEWTON,\nPATTERSON, PLEASANT GROVE, RUTHERFORDTON, SALUDA, SAWMILLS,\nSHELBY, SPINDALE, ST. STEPHENS, STATESVILLE, STONY POINT,\nTAYLORSVILLE, TRYON, AND VALDESE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNGSP"],
			WMOidentifier: ["WWUS62 KGSP 240408"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KGSP.TO.A.0069.000000T0000Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.ddadc7e9e536777f2359f636e8a1b5769d1b5e45.001.1,2022-03-23T20:33:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f96940c0fc3a734e44a6f1bdfb0233208db19834.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f96940c0fc3a734e44a6f1bdfb0233208db19834.001.1",
		areaDesc:
			"Washington, OH; Boone, WV; Calhoun, WV; Clay, WV; Doddridge, WV; Gilmer, WV; Harrison, WV; Jackson, WV; Kanawha, WV; Lincoln, WV; Logan, WV; Mingo, WV; Pleasants, WV; Putnam, WV; Ritchie, WV; Roane, WV; Tyler, WV; Wirt, WV; Wood, WV",
		geocode: {
			SAME: [
				"039167",
				"054005",
				"054013",
				"054015",
				"054017",
				"054021",
				"054033",
				"054035",
				"054039",
				"054043",
				"054045",
				"054059",
				"054073",
				"054079",
				"054085",
				"054087",
				"054095",
				"054105",
				"054107",
			],
			UGC: [
				"OHC167",
				"WVC005",
				"WVC013",
				"WVC015",
				"WVC017",
				"WVC021",
				"WVC033",
				"WVC035",
				"WVC039",
				"WVC043",
				"WVC045",
				"WVC059",
				"WVC073",
				"WVC079",
				"WVC085",
				"WVC087",
				"WVC095",
				"WVC105",
				"WVC107",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC167",
			"https://api.weather.gov/zones/county/WVC005",
			"https://api.weather.gov/zones/county/WVC013",
			"https://api.weather.gov/zones/county/WVC015",
			"https://api.weather.gov/zones/county/WVC017",
			"https://api.weather.gov/zones/county/WVC021",
			"https://api.weather.gov/zones/county/WVC033",
			"https://api.weather.gov/zones/county/WVC035",
			"https://api.weather.gov/zones/county/WVC039",
			"https://api.weather.gov/zones/county/WVC043",
			"https://api.weather.gov/zones/county/WVC045",
			"https://api.weather.gov/zones/county/WVC059",
			"https://api.weather.gov/zones/county/WVC073",
			"https://api.weather.gov/zones/county/WVC079",
			"https://api.weather.gov/zones/county/WVC085",
			"https://api.weather.gov/zones/county/WVC087",
			"https://api.weather.gov/zones/county/WVC095",
			"https://api.weather.gov/zones/county/WVC105",
			"https://api.weather.gov/zones/county/WVC107",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:40:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:36:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:02:00-04:00",
			},
		],
		sent: "2022-03-23T21:50:00-04:00",
		effective: "2022-03-23T21:50:00-04:00",
		onset: "2022-03-23T21:50:00-04:00",
		expires: "2022-03-23T23:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Watch issued March 23 at 9:50PM EDT until March 23 at 10:00PM EDT by NWS Charleston WV",
		description:
			"THE NATIONAL WEATHER SERVICE WILL ALLOW TORNADO WATCH 67 TO\nEXPIRE AT 10 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN OHIO THIS ALLOWS TO EXPIRE 1 COUNTY\n\nIN SOUTHEAST OHIO\n\nWASHINGTON\n\nIN WEST VIRGINIA THIS ALLOWS TO EXPIRE 18 COUNTIES\n\nIN CENTRAL WEST VIRGINIA\n\nCALHOUN               CLAY                  GILMER\nJACKSON               ROANE\n\nIN NORTHERN WEST VIRGINIA\n\nDODDRIDGE             HARRISON              PLEASANTS\nRITCHIE               TYLER                 WIRT\nWOOD\n\nIN SOUTHERN WEST VIRGINIA\n\nBOONE                 KANAWHA               LINCOLN\nLOGAN                 MINGO                 PUTNAM\n\nTHIS INCLUDES THE CITIES OF ALUM CREEK, BELMONT, BELPRE,\nBRIDGEPORT, CHAPMANVILLE, CHARLESTON, CLARKSBURG, CLAY,\nELIZABETH, GLENVILLE, GRANTSVILLE, HAMLIN, HARRISVILLE, HARTS,\nHURRICANE, LOGAN, MADISON, MAN, MARIETTA, MIDDLEBOURNE,\nPADEN CITY, PARKERSBURG, PENNSBORO, RAVENSWOOD, RIPLEY,\nSAINT ALBANS, SISTERSVILLE, SOUTH CHARLESTON, SPENCER, ST. MARYS,\nTEAYS VALLEY, VIENNA, WEST UNION, AND WILLIAMSON.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 240150"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KRLX.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.da37cb5cdb675a0414fe231ed4630b2eff0b9a05.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.da37cb5cdb675a0414fe231ed4630b2eff0b9a05.001.1",
		areaDesc: "Allegheny, PA; Beaver, PA; Greene, PA; Washington, PA",
		geocode: {
			SAME: ["042003", "042007", "042059", "042125"],
			UGC: ["PAC003", "PAC007", "PAC059", "PAC125"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/PAC003",
			"https://api.weather.gov/zones/county/PAC007",
			"https://api.weather.gov/zones/county/PAC059",
			"https://api.weather.gov/zones/county/PAC125",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:55:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T21:24:00-04:00",
			},
		],
		sent: "2022-03-23T21:36:00-04:00",
		effective: "2022-03-23T21:36:00-04:00",
		onset: "2022-03-23T21:36:00-04:00",
		expires: "2022-03-23T21:51:45-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240136"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3e6df8b3f6382b80bd883c79b0e7f552d081c74e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3e6df8b3f6382b80bd883c79b0e7f552d081c74e.001.1",
		areaDesc: "Holmes, OH; Mahoning, OH; Stark, OH; Wayne, OH",
		geocode: {
			SAME: ["039075", "039099", "039151", "039169"],
			UGC: ["OHC075", "OHC099", "OHC151", "OHC169"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC075",
			"https://api.weather.gov/zones/county/OHC099",
			"https://api.weather.gov/zones/county/OHC151",
			"https://api.weather.gov/zones/county/OHC169",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:37:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:20:00-04:00",
			},
		],
		sent: "2022-03-23T21:24:00-04:00",
		effective: "2022-03-23T21:24:00-04:00",
		onset: "2022-03-23T21:24:00-04:00",
		expires: "2022-03-23T21:39:32-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Cleveland OH",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNCLE"],
			WMOidentifier: ["WWUS61 KCLE 240124"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KCLE.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.001.1",
		areaDesc:
			"Brooke, WV; Hancock, WV; Marion, WV; Marshall, WV; Monongalia, WV; Ohio, WV; Wetzel, WV",
		geocode: {
			SAME: [
				"054009",
				"054029",
				"054049",
				"054051",
				"054061",
				"054069",
				"054103",
			],
			UGC: [
				"WVC009",
				"WVC029",
				"WVC049",
				"WVC051",
				"WVC061",
				"WVC069",
				"WVC103",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC029",
			"https://api.weather.gov/zones/county/WVC049",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC061",
			"https://api.weather.gov/zones/county/WVC069",
			"https://api.weather.gov/zones/county/WVC103",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:55:00-04:00",
			},
		],
		sent: "2022-03-23T21:24:00-04:00",
		effective: "2022-03-23T21:24:00-04:00",
		onset: "2022-03-23T21:24:00-04:00",
		expires: "2022-03-23T21:39:40-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240124"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c911971761f5f1d1b50ca6601bdafa7fb0587230.002.1",
		areaDesc: "Allegheny, PA; Beaver, PA; Greene, PA; Washington, PA",
		geocode: {
			SAME: ["042003", "042007", "042059", "042125"],
			UGC: ["PAC003", "PAC007", "PAC059", "PAC125"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/PAC003",
			"https://api.weather.gov/zones/county/PAC007",
			"https://api.weather.gov/zones/county/PAC059",
			"https://api.weather.gov/zones/county/PAC125",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:55:00-04:00",
			},
		],
		sent: "2022-03-23T21:24:00-04:00",
		effective: "2022-03-23T21:24:00-04:00",
		onset: "2022-03-23T21:24:00-04:00",
		expires: "2022-03-23T22:30:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Watch issued March 23 at 9:24PM EDT until March 23 at 10:00PM EDT by NWS Pittsburgh PA",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN PENNSYLVANIA THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHWEST PENNSYLVANIA\n\nALLEGHENY             GREENE                WASHINGTON\n\nIN WESTERN PENNSYLVANIA\n\nBEAVER\n\nTHIS INCLUDES THE CITIES OF ALIQUIPPA, AMBRIDGE, BEAVER FALLS,\nCANONSBURG, MONACA, PITTSBURGH METRO AREA, WASHINGTON,\nAND WAYNESBURG.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240124"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.001.1",
		areaDesc:
			"Belmont, OH; Carroll, OH; Columbiana, OH; Harrison, OH; Jefferson, OH; Monroe, OH",
		geocode: {
			SAME: ["039013", "039019", "039029", "039067", "039081", "039111"],
			UGC: ["OHC013", "OHC019", "OHC029", "OHC067", "OHC081", "OHC111"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC019",
			"https://api.weather.gov/zones/county/OHC029",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/OHC111",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T20:55:00-04:00",
		effective: "2022-03-23T20:55:00-04:00",
		onset: "2022-03-23T20:55:00-04:00",
		expires: "2022-03-23T21:11:11-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240055"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2f0f7bc23b987ffa7c6dad9008ac0ea556118f94.002.1",
		areaDesc:
			"Allegheny, PA; Beaver, PA; Greene, PA; Washington, PA; Brooke, WV; Hancock, WV; Marion, WV; Marshall, WV; Monongalia, WV; Ohio, WV; Wetzel, WV",
		geocode: {
			SAME: [
				"042003",
				"042007",
				"042059",
				"042125",
				"054009",
				"054029",
				"054049",
				"054051",
				"054061",
				"054069",
				"054103",
			],
			UGC: [
				"PAC003",
				"PAC007",
				"PAC059",
				"PAC125",
				"WVC009",
				"WVC029",
				"WVC049",
				"WVC051",
				"WVC061",
				"WVC069",
				"WVC103",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/PAC003",
			"https://api.weather.gov/zones/county/PAC007",
			"https://api.weather.gov/zones/county/PAC059",
			"https://api.weather.gov/zones/county/PAC125",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC029",
			"https://api.weather.gov/zones/county/WVC049",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC061",
			"https://api.weather.gov/zones/county/WVC069",
			"https://api.weather.gov/zones/county/WVC103",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T20:22:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T20:55:00-04:00",
		effective: "2022-03-23T20:55:00-04:00",
		onset: "2022-03-23T20:55:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Watch issued March 23 at 8:55PM EDT until March 23 at 10:00PM EDT by NWS Pittsburgh PA",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN PENNSYLVANIA THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHWEST PENNSYLVANIA\n\nALLEGHENY             GREENE                WASHINGTON\n\nIN WESTERN PENNSYLVANIA\n\nBEAVER\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 7 COUNTIES\n\nIN NORTHERN WEST VIRGINIA\n\nMARION                MONONGALIA            WETZEL\n\nIN THE NORTHERN PANHANDLE OF WEST VIRGINIA\n\nBROOKE                HANCOCK               MARSHALL\nOHIO\n\nTHIS INCLUDES THE CITIES OF ALIQUIPPA, AMBRIDGE, BEAVER FALLS,\nCANONSBURG, FAIRMONT, FOLLANSBEE, MONACA, MORGANTOWN,\nMOUNDSVILLE, NEW MARTINSVILLE, PITTSBURGH METRO AREA, WASHINGTON,\nWAYNESBURG, WEIRTON, WELLSBURG, AND WHEELING.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240055"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.14fa93e5635783488d73412327b7ddeb28820a22.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.14fa93e5635783488d73412327b7ddeb28820a22.001.1",
		areaDesc: "Pike, KY",
		geocode: {
			SAME: ["021195"],
			UGC: ["KYC195"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KYC195"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:51:00-04:00",
			},
		],
		sent: "2022-03-23T20:47:00-04:00",
		effective: "2022-03-23T20:47:00-04:00",
		onset: "2022-03-23T20:47:00-04:00",
		expires: "2022-03-23T21:02:42-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jackson KY",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJKL"],
			WMOidentifier: ["WWUS63 KJKL 240047"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJKL.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f249369633b5164ac48cbc7fd2311c3dcdbec6f6.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.f249369633b5164ac48cbc7fd2311c3dcdbec6f6.001.1",
		areaDesc:
			"Stokes, NC; Surry, NC; Wilkes, NC; Yadkin, NC; Carroll, VA; Floyd, VA; Franklin, VA; Henry, VA; Patrick, VA; City of Martinsville, VA",
		geocode: {
			SAME: [
				"037169",
				"037171",
				"037193",
				"037197",
				"051035",
				"051063",
				"051067",
				"051089",
				"051141",
				"051690",
			],
			UGC: [
				"NCC169",
				"NCC171",
				"NCC193",
				"NCC197",
				"VAC035",
				"VAC063",
				"VAC067",
				"VAC089",
				"VAC141",
				"VAC690",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC169",
			"https://api.weather.gov/zones/county/NCC171",
			"https://api.weather.gov/zones/county/NCC193",
			"https://api.weather.gov/zones/county/NCC197",
			"https://api.weather.gov/zones/county/VAC035",
			"https://api.weather.gov/zones/county/VAC063",
			"https://api.weather.gov/zones/county/VAC067",
			"https://api.weather.gov/zones/county/VAC089",
			"https://api.weather.gov/zones/county/VAC141",
			"https://api.weather.gov/zones/county/VAC690",
		],
		references: [],
		sent: "2022-03-23T20:34:00-04:00",
		effective: "2022-03-23T20:34:00-04:00",
		onset: "2022-03-23T20:34:00-04:00",
		expires: "2022-03-24T00:00:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Blacksburg VA",
		headline:
			"Tornado Watch issued March 23 at 8:34PM EDT until March 24 at 12:00AM EDT by NWS Blacksburg VA",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 69 IN\nEFFECT UNTIL MIDNIGHT EDT TONIGHT FOR THE FOLLOWING AREAS\n\nIN NORTH CAROLINA THIS WATCH INCLUDES 4 COUNTIES\n\nIN NORTH CENTRAL NORTH CAROLINA\n\nSTOKES                SURRY\n\nIN NORTHWEST NORTH CAROLINA\n\nWILKES                YADKIN\n\nIN VIRGINIA THIS WATCH INCLUDES 6 COUNTIES\n\nIN SOUTH CENTRAL VIRGINIA\n\nCITY OF MARTINSVILLE  HENRY\n\nIN SOUTHWEST VIRGINIA\n\nCARROLL               FLOYD                 PATRICK\n\nIN WEST CENTRAL VIRGINIA\n\nFRANKLIN\n\nTHIS INCLUDES THE CITIES OF ARLINGTON, BOONVILLE, CANA,\nCOLLINSVILLE, CRICKET, ELKIN, FAIRVIEW, FERRUM, FLOYD,\nHILLSVILLE, HORSE PASTURE, JONESVILLE, KING, MARTINSVILLE CITY,\nMILLERS CREEK, MOUNT AIRY, MULBERRY, NORTH WILKESBORO,\nROCKY MOUNT, STUART, WILKESBORO, WOODLAWN, AND YADKINVILLE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRNK"],
			WMOidentifier: ["WWUS61 KRNK 240034"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRNK.TO.A.0069.220324T0034Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ddadc7e9e536777f2359f636e8a1b5769d1b5e45.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ddadc7e9e536777f2359f636e8a1b5769d1b5e45.001.1",
		areaDesc:
			"Alexander, NC; Burke, NC; Caldwell, NC; Catawba, NC; Cleveland, NC; Gaston, NC; Iredell, NC; Lincoln, NC; Polk, NC; Rutherford, NC",
		geocode: {
			SAME: [
				"037003",
				"037023",
				"037027",
				"037035",
				"037045",
				"037071",
				"037097",
				"037109",
				"037149",
				"037161",
			],
			UGC: [
				"NCC003",
				"NCC023",
				"NCC027",
				"NCC035",
				"NCC045",
				"NCC071",
				"NCC097",
				"NCC109",
				"NCC149",
				"NCC161",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/NCC003",
			"https://api.weather.gov/zones/county/NCC023",
			"https://api.weather.gov/zones/county/NCC027",
			"https://api.weather.gov/zones/county/NCC035",
			"https://api.weather.gov/zones/county/NCC045",
			"https://api.weather.gov/zones/county/NCC071",
			"https://api.weather.gov/zones/county/NCC097",
			"https://api.weather.gov/zones/county/NCC109",
			"https://api.weather.gov/zones/county/NCC149",
			"https://api.weather.gov/zones/county/NCC161",
		],
		references: [],
		sent: "2022-03-23T20:33:00-04:00",
		effective: "2022-03-23T20:33:00-04:00",
		onset: "2022-03-23T20:33:00-04:00",
		expires: "2022-03-24T00:00:00-04:00",
		ends: "2022-03-24T00:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Greenville-Spartanburg SC",
		headline:
			"Tornado Watch issued March 23 at 8:33PM EDT until March 24 at 12:00AM EDT by NWS Greenville-Spartanburg SC",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 69 IN\nEFFECT UNTIL MIDNIGHT EDT TONIGHT FOR THE FOLLOWING AREAS\n\nIN NORTH CAROLINA THIS WATCH INCLUDES 10 COUNTIES\n\nIN PIEDMONT NORTH CAROLINA\n\nALEXANDER             CATAWBA               CLEVELAND\nGASTON                IREDELL               LINCOLN\n\nIN WESTERN NORTH CAROLINA\n\nBURKE                 CALDWELL              POLK\nRUTHERFORD\n\nTHIS INCLUDES THE CITIES OF BETHLEHEM, COLUMBUS, CROUSE,\nELLENDALE, FOREST CITY, GASTONIA, GRANITE FALLS, HICKORY,\nHIDDENITE, KINGS CREEK, KINGS MOUNTAIN, LENOIR, LINCOLNTON,\nMILL SPRING, MILLERSVILLE, MOORESVILLE, MORGANTON, NEWTON,\nPATTERSON, PLEASANT GROVE, RUTHERFORDTON, SALUDA, SAWMILLS,\nSHELBY, SPINDALE, ST. STEPHENS, STATESVILLE, STONY POINT,\nTAYLORSVILLE, TRYON, AND VALDESE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNGSP"],
			WMOidentifier: ["WWUS62 KGSP 240033"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KGSP.TO.A.0069.220324T0033Z-220324T0400Z/"],
			eventEndingTime: ["2022-03-24T04:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.001.1",
		areaDesc:
			"Coshocton, OH; Guernsey, OH; Muskingum, OH; Noble, OH; Tuscarawas, OH",
		geocode: {
			SAME: ["039031", "039059", "039119", "039121", "039157"],
			UGC: ["OHC031", "OHC059", "OHC119", "OHC121", "OHC157"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC031",
			"https://api.weather.gov/zones/county/OHC059",
			"https://api.weather.gov/zones/county/OHC119",
			"https://api.weather.gov/zones/county/OHC121",
			"https://api.weather.gov/zones/county/OHC157",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T20:22:00-04:00",
		effective: "2022-03-23T20:22:00-04:00",
		onset: "2022-03-23T20:22:00-04:00",
		expires: "2022-03-23T20:38:11-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240022"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.974ad36c90aab45274210d979d93c62c9a33bd08.002.1",
		areaDesc:
			"Belmont, OH; Carroll, OH; Columbiana, OH; Harrison, OH; Jefferson, OH; Monroe, OH; Allegheny, PA; Beaver, PA; Greene, PA; Washington, PA; Brooke, WV; Hancock, WV; Marion, WV; Marshall, WV; Monongalia, WV; Ohio, WV; Wetzel, WV",
		geocode: {
			SAME: [
				"039013",
				"039019",
				"039029",
				"039067",
				"039081",
				"039111",
				"042003",
				"042007",
				"042059",
				"042125",
				"054009",
				"054029",
				"054049",
				"054051",
				"054061",
				"054069",
				"054103",
			],
			UGC: [
				"OHC013",
				"OHC019",
				"OHC029",
				"OHC067",
				"OHC081",
				"OHC111",
				"PAC003",
				"PAC007",
				"PAC059",
				"PAC125",
				"WVC009",
				"WVC029",
				"WVC049",
				"WVC051",
				"WVC061",
				"WVC069",
				"WVC103",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC019",
			"https://api.weather.gov/zones/county/OHC029",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/OHC111",
			"https://api.weather.gov/zones/county/PAC003",
			"https://api.weather.gov/zones/county/PAC007",
			"https://api.weather.gov/zones/county/PAC059",
			"https://api.weather.gov/zones/county/PAC125",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC029",
			"https://api.weather.gov/zones/county/WVC049",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC061",
			"https://api.weather.gov/zones/county/WVC069",
			"https://api.weather.gov/zones/county/WVC103",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T20:22:00-04:00",
		effective: "2022-03-23T20:22:00-04:00",
		onset: "2022-03-23T20:22:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Watch issued March 23 at 8:22PM EDT until March 23 at 10:00PM EDT by NWS Pittsburgh PA",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 6 COUNTIES\n\nIN EAST CENTRAL OHIO\n\nBELMONT               CARROLL               COLUMBIANA\nHARRISON              JEFFERSON OH          MONROE\n\nIN PENNSYLVANIA THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHWEST PENNSYLVANIA\n\nALLEGHENY             GREENE                WASHINGTON\n\nIN WESTERN PENNSYLVANIA\n\nBEAVER\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 7 COUNTIES\n\nIN NORTHERN WEST VIRGINIA\n\nMARION                MONONGALIA            WETZEL\n\nIN THE NORTHERN PANHANDLE OF WEST VIRGINIA\n\nBROOKE                HANCOCK               MARSHALL\nOHIO\n\nTHIS INCLUDES THE CITIES OF ALIQUIPPA, AMBRIDGE, BEAVER FALLS,\nCADIZ, CANONSBURG, CARROLLTON, COLUMBIANA, EAST LIVERPOOL,\nFAIRMONT, FOLLANSBEE, MARTINS FERRY, MONACA, MORGANTOWN,\nMOUNDSVILLE, NEW MARTINSVILLE, PITTSBURGH METRO AREA, SALEM,\nST. CLAIRSVILLE, STEUBENVILLE, WASHINGTON, WAYNESBURG, WEIRTON,\nWELLSBURG, WHEELING, AND WOODSFIELD.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 240022"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KPBZ.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.001.1",
		areaDesc:
			"Athens, OH; Meigs, OH; Morgan, OH; Cabell, WV; Mason, WV; Wayne, WV",
		geocode: {
			SAME: ["039009", "039105", "039115", "054011", "054053", "054099"],
			UGC: ["OHC009", "OHC105", "OHC115", "WVC011", "WVC053", "WVC099"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC009",
			"https://api.weather.gov/zones/county/OHC105",
			"https://api.weather.gov/zones/county/OHC115",
			"https://api.weather.gov/zones/county/WVC011",
			"https://api.weather.gov/zones/county/WVC053",
			"https://api.weather.gov/zones/county/WVC099",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:36:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:40:00-04:00",
			},
		],
		sent: "2022-03-23T20:02:00-04:00",
		effective: "2022-03-23T20:02:00-04:00",
		onset: "2022-03-23T20:02:00-04:00",
		expires: "2022-03-23T20:17:34-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 240002"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRLX.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.cf3f313a0a738f78f52dbd07c421f09548bec48d.002.1",
		areaDesc:
			"Washington, OH; Boone, WV; Calhoun, WV; Clay, WV; Doddridge, WV; Gilmer, WV; Harrison, WV; Jackson, WV; Kanawha, WV; Lincoln, WV; Logan, WV; Mingo, WV; Pleasants, WV; Putnam, WV; Ritchie, WV; Roane, WV; Tyler, WV; Wirt, WV; Wood, WV",
		geocode: {
			SAME: [
				"039167",
				"054005",
				"054013",
				"054015",
				"054017",
				"054021",
				"054033",
				"054035",
				"054039",
				"054043",
				"054045",
				"054059",
				"054073",
				"054079",
				"054085",
				"054087",
				"054095",
				"054105",
				"054107",
			],
			UGC: [
				"OHC167",
				"WVC005",
				"WVC013",
				"WVC015",
				"WVC017",
				"WVC021",
				"WVC033",
				"WVC035",
				"WVC039",
				"WVC043",
				"WVC045",
				"WVC059",
				"WVC073",
				"WVC079",
				"WVC085",
				"WVC087",
				"WVC095",
				"WVC105",
				"WVC107",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC167",
			"https://api.weather.gov/zones/county/WVC005",
			"https://api.weather.gov/zones/county/WVC013",
			"https://api.weather.gov/zones/county/WVC015",
			"https://api.weather.gov/zones/county/WVC017",
			"https://api.weather.gov/zones/county/WVC021",
			"https://api.weather.gov/zones/county/WVC033",
			"https://api.weather.gov/zones/county/WVC035",
			"https://api.weather.gov/zones/county/WVC039",
			"https://api.weather.gov/zones/county/WVC043",
			"https://api.weather.gov/zones/county/WVC045",
			"https://api.weather.gov/zones/county/WVC059",
			"https://api.weather.gov/zones/county/WVC073",
			"https://api.weather.gov/zones/county/WVC079",
			"https://api.weather.gov/zones/county/WVC085",
			"https://api.weather.gov/zones/county/WVC087",
			"https://api.weather.gov/zones/county/WVC095",
			"https://api.weather.gov/zones/county/WVC105",
			"https://api.weather.gov/zones/county/WVC107",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:36:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:40:00-04:00",
			},
		],
		sent: "2022-03-23T20:02:00-04:00",
		effective: "2022-03-23T20:02:00-04:00",
		onset: "2022-03-23T20:02:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Watch issued March 23 at 8:02PM EDT until March 23 at 10:00PM EDT by NWS Charleston WV",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 1 COUNTY\n\nIN SOUTHEAST OHIO\n\nWASHINGTON\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 18 COUNTIES\n\nIN CENTRAL WEST VIRGINIA\n\nCALHOUN               CLAY                  GILMER\nJACKSON               ROANE\n\nIN NORTHERN WEST VIRGINIA\n\nDODDRIDGE             HARRISON              PLEASANTS\nRITCHIE               TYLER                 WIRT\nWOOD\n\nIN SOUTHERN WEST VIRGINIA\n\nBOONE                 KANAWHA               LINCOLN\nLOGAN                 MINGO                 PUTNAM\n\nTHIS INCLUDES THE CITIES OF ALUM CREEK, BELMONT, BELPRE,\nBRIDGEPORT, CHAPMANVILLE, CHARLESTON, CLARKSBURG, CLAY,\nELIZABETH, GLENVILLE, GRANTSVILLE, HAMLIN, HARRISVILLE, HARTS,\nHURRICANE, LOGAN, MADISON, MAN, MARIETTA, MIDDLEBOURNE,\nPADEN CITY, PARKERSBURG, PENNSBORO, RAVENSWOOD, RIPLEY,\nSAINT ALBANS, SISTERSVILLE, SOUTH CHARLESTON, SPENCER, ST. MARYS,\nTEAYS VALLEY, VIENNA, WEST UNION, AND WILLIAMSON.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 240002"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRLX.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.002.1",
		areaDesc: "Pike, KY",
		geocode: {
			SAME: ["021195"],
			UGC: ["KYC195"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/KYC195"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T19:51:00-04:00",
		effective: "2022-03-23T19:51:00-04:00",
		onset: "2022-03-23T19:51:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jackson KY",
		headline:
			"Tornado Watch issued March 23 at 7:51PM EDT until March 23 at 10:00PM EDT by NWS Jackson KY",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN KENTUCKY THIS WATCH INCLUDES 1 COUNTY\n\nIN SOUTHEAST KENTUCKY\n\nPIKE\n\nTHIS INCLUDES THE CITIES OF COAL RUN, ELKHORN CITY, PIKEVILLE,\nAND SOUTH WILLIAMSON.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJKL"],
			WMOidentifier: ["WWUS63 KJKL 232351"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJKL.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e76a97fa304ce7ee65f11a4ee47d0a3ec898a17f.001.1",
		areaDesc:
			"Elliott, KY; Floyd, KY; Johnson, KY; Magoffin, KY; Martin, KY; Morgan, KY; Rowan, KY",
		geocode: {
			SAME: [
				"021063",
				"021071",
				"021115",
				"021153",
				"021159",
				"021175",
				"021205",
			],
			UGC: [
				"KYC063",
				"KYC071",
				"KYC115",
				"KYC153",
				"KYC159",
				"KYC175",
				"KYC205",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KYC063",
			"https://api.weather.gov/zones/county/KYC071",
			"https://api.weather.gov/zones/county/KYC115",
			"https://api.weather.gov/zones/county/KYC153",
			"https://api.weather.gov/zones/county/KYC159",
			"https://api.weather.gov/zones/county/KYC175",
			"https://api.weather.gov/zones/county/KYC205",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:35:00-04:00",
			},
		],
		sent: "2022-03-23T19:51:00-04:00",
		effective: "2022-03-23T19:51:00-04:00",
		onset: "2022-03-23T19:51:00-04:00",
		expires: "2022-03-23T20:06:54-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jackson KY",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJKL"],
			WMOidentifier: ["WWUS63 KJKL 232351"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJKL.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.003.1",
		areaDesc: "Holmes, OH; Mahoning, OH; Stark, OH; Wayne, OH",
		geocode: {
			SAME: ["039075", "039099", "039151", "039169"],
			UGC: ["OHC075", "OHC099", "OHC151", "OHC169"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC075",
			"https://api.weather.gov/zones/county/OHC099",
			"https://api.weather.gov/zones/county/OHC151",
			"https://api.weather.gov/zones/county/OHC169",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:37:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:20:00-04:00",
			},
		],
		sent: "2022-03-23T19:39:00-04:00",
		effective: "2022-03-23T19:39:00-04:00",
		onset: "2022-03-23T19:39:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Cleveland OH",
		headline:
			"Tornado Watch issued March 23 at 7:39PM EDT until March 23 at 10:00PM EDT by NWS Cleveland OH",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 4 COUNTIES\n\nIN NORTHEAST OHIO\n\nHOLMES                MAHONING              STARK\nWAYNE\n\nTHIS INCLUDES THE CITIES OF ALLIANCE, AUSTINTOWN, BOARDMAN,\nCANTON, KILLBUCK, MASSILLON, MILLERSBURG, ORRVILLE, RITTMAN,\nWOOSTER, AND YOUNGSTOWN.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNCLE"],
			WMOidentifier: ["WWUS61 KCLE 232339"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KCLE.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7cdb2b9729ed0050911bdd54de9da557f3b1819e.001.1",
		areaDesc: "Ashland, OH",
		geocode: {
			SAME: ["039005"],
			UGC: ["OHC005"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/OHC005"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:37:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T19:20:00-04:00",
			},
		],
		sent: "2022-03-23T19:39:00-04:00",
		effective: "2022-03-23T19:39:00-04:00",
		onset: "2022-03-23T19:39:00-04:00",
		expires: "2022-03-23T19:54:53-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Cleveland OH",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNCLE"],
			WMOidentifier: ["WWUS61 KCLE 232339"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KCLE.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.001.1",
		areaDesc:
			"Boyd, KY; Carter, KY; Greenup, KY; Lawrence, KY; Gallia, OH; Jackson, OH; Lawrence, OH; Perry, OH; Vinton, OH",
		geocode: {
			SAME: [
				"021019",
				"021043",
				"021089",
				"021127",
				"039053",
				"039079",
				"039087",
				"039127",
				"039163",
			],
			UGC: [
				"KYC019",
				"KYC043",
				"KYC089",
				"KYC127",
				"OHC053",
				"OHC079",
				"OHC087",
				"OHC127",
				"OHC163",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KYC019",
			"https://api.weather.gov/zones/county/KYC043",
			"https://api.weather.gov/zones/county/KYC089",
			"https://api.weather.gov/zones/county/KYC127",
			"https://api.weather.gov/zones/county/OHC053",
			"https://api.weather.gov/zones/county/OHC079",
			"https://api.weather.gov/zones/county/OHC087",
			"https://api.weather.gov/zones/county/OHC127",
			"https://api.weather.gov/zones/county/OHC163",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:40:00-04:00",
			},
		],
		sent: "2022-03-23T19:36:00-04:00",
		effective: "2022-03-23T19:36:00-04:00",
		onset: "2022-03-23T19:36:00-04:00",
		expires: "2022-03-23T19:51:31-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 232336"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KRLX.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.b01bb80ee29cfc47fd53c0f0d8bc25b11e7dbe97.002.1",
		areaDesc:
			"Athens, OH; Meigs, OH; Morgan, OH; Washington, OH; Boone, WV; Cabell, WV; Calhoun, WV; Clay, WV; Doddridge, WV; Gilmer, WV; Harrison, WV; Jackson, WV; Kanawha, WV; Lincoln, WV; Logan, WV; Mason, WV; Mingo, WV; Pleasants, WV; Putnam, WV; Ritchie, WV; Roane, WV; Tyler, WV; Wayne, WV; Wirt, WV; Wood, WV",
		geocode: {
			SAME: [
				"039009",
				"039105",
				"039115",
				"039167",
				"054005",
				"054011",
				"054013",
				"054015",
				"054017",
				"054021",
				"054033",
				"054035",
				"054039",
				"054043",
				"054045",
				"054053",
				"054059",
				"054073",
				"054079",
				"054085",
				"054087",
				"054095",
				"054099",
				"054105",
				"054107",
			],
			UGC: [
				"OHC009",
				"OHC105",
				"OHC115",
				"OHC167",
				"WVC005",
				"WVC011",
				"WVC013",
				"WVC015",
				"WVC017",
				"WVC021",
				"WVC033",
				"WVC035",
				"WVC039",
				"WVC043",
				"WVC045",
				"WVC053",
				"WVC059",
				"WVC073",
				"WVC079",
				"WVC085",
				"WVC087",
				"WVC095",
				"WVC099",
				"WVC105",
				"WVC107",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC009",
			"https://api.weather.gov/zones/county/OHC105",
			"https://api.weather.gov/zones/county/OHC115",
			"https://api.weather.gov/zones/county/OHC167",
			"https://api.weather.gov/zones/county/WVC005",
			"https://api.weather.gov/zones/county/WVC011",
			"https://api.weather.gov/zones/county/WVC013",
			"https://api.weather.gov/zones/county/WVC015",
			"https://api.weather.gov/zones/county/WVC017",
			"https://api.weather.gov/zones/county/WVC021",
			"https://api.weather.gov/zones/county/WVC033",
			"https://api.weather.gov/zones/county/WVC035",
			"https://api.weather.gov/zones/county/WVC039",
			"https://api.weather.gov/zones/county/WVC043",
			"https://api.weather.gov/zones/county/WVC045",
			"https://api.weather.gov/zones/county/WVC053",
			"https://api.weather.gov/zones/county/WVC059",
			"https://api.weather.gov/zones/county/WVC073",
			"https://api.weather.gov/zones/county/WVC079",
			"https://api.weather.gov/zones/county/WVC085",
			"https://api.weather.gov/zones/county/WVC087",
			"https://api.weather.gov/zones/county/WVC095",
			"https://api.weather.gov/zones/county/WVC099",
			"https://api.weather.gov/zones/county/WVC105",
			"https://api.weather.gov/zones/county/WVC107",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:40:00-04:00",
			},
		],
		sent: "2022-03-23T19:36:00-04:00",
		effective: "2022-03-23T19:36:00-04:00",
		onset: "2022-03-23T19:36:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Watch issued March 23 at 7:36PM EDT until March 23 at 10:00PM EDT by NWS Charleston WV",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHEAST OHIO\n\nATHENS                MEIGS                 MORGAN\nWASHINGTON\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 21 COUNTIES\n\nIN CENTRAL WEST VIRGINIA\n\nCALHOUN               CLAY                  GILMER\nJACKSON               ROANE\n\nIN NORTHERN WEST VIRGINIA\n\nDODDRIDGE             HARRISON              PLEASANTS\nRITCHIE               TYLER                 WIRT\nWOOD\n\nIN SOUTHERN WEST VIRGINIA\n\nBOONE                 KANAWHA               LINCOLN\nLOGAN                 MINGO                 PUTNAM\n\nIN WESTERN WEST VIRGINIA\n\nCABELL                MASON                 WAYNE\n\nTHIS INCLUDES THE CITIES OF ALUM CREEK, ATHENS, BELMONT, BELPRE,\nBRIDGEPORT, CEREDO, CHAPMANVILLE, CHARLESTON, CLARKSBURG, CLAY,\nELIZABETH, GLENVILLE, GRANTSVILLE, HAMLIN, HARRISVILLE, HARTS,\nHUNTINGTON, HURRICANE, KENOVA, LOGAN, MADISON, MAN, MARIETTA,\nMCCONNELSVILLE, MIDDLEBOURNE, NEW HAVEN, PADEN CITY, PARKERSBURG,\nPENNSBORO, POINT PLEASANT, POMEROY, RAVENSWOOD, RIPLEY,\nSAINT ALBANS, SISTERSVILLE, SOUTH CHARLESTON, SPENCER, ST. MARYS,\nSTOCKPORT, TEAYS VALLEY, VIENNA, WAYNE, WEST UNION,\nAND WILLIAMSON.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 232336"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KRLX.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.cd856e871cb94a2e12a9624f13a4410fbe33ac2e.002.1",
		areaDesc: "Ashland, OH; Holmes, OH; Mahoning, OH; Stark, OH; Wayne, OH",
		geocode: {
			SAME: ["039005", "039075", "039099", "039151", "039169"],
			UGC: ["OHC005", "OHC075", "OHC099", "OHC151", "OHC169"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC005",
			"https://api.weather.gov/zones/county/OHC075",
			"https://api.weather.gov/zones/county/OHC099",
			"https://api.weather.gov/zones/county/OHC151",
			"https://api.weather.gov/zones/county/OHC169",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T14:37:00-04:00",
			},
		],
		sent: "2022-03-23T19:20:00-04:00",
		effective: "2022-03-23T19:20:00-04:00",
		onset: "2022-03-23T19:20:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Cleveland OH",
		headline:
			"Tornado Watch issued March 23 at 7:20PM EDT until March 23 at 10:00PM EDT by NWS Cleveland OH",
		description:
			"TORNADO WATCH 67 REMAINS VALID UNTIL 10 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 5 COUNTIES\n\nIN NORTH CENTRAL OHIO\n\nASHLAND\n\nIN NORTHEAST OHIO\n\nHOLMES                MAHONING              STARK\nWAYNE\n\nTHIS INCLUDES THE CITIES OF ALLIANCE, ASHLAND, AUSTINTOWN,\nBOARDMAN, CANTON, KILLBUCK, MASSILLON, MILLERSBURG, ORRVILLE,\nRITTMAN, WOOSTER, AND YOUNGSTOWN.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNCLE"],
			WMOidentifier: ["WWUS61 KCLE 232320"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KCLE.TO.A.0067.000000T0000Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4fc81398a113ec0b5c6f8f8eafa42cd527953ef5.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4fc81398a113ec0b5c6f8f8eafa42cd527953ef5.002.1",
		areaDesc:
			"Coastal waters from Altamaha Sound to Fernandina Beach FL out 20 NM",
		geocode: {
			SAME: ["075450"],
			UGC: ["AMZ450"],
		},
		affectedZones: ["https://api.weather.gov/zones/forecast/AMZ450"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:39:00-04:00",
			},
		],
		sent: "2022-03-23T18:28:00-04:00",
		effective: "2022-03-23T18:28:00-04:00",
		onset: "2022-03-23T18:28:00-04:00",
		expires: "2022-03-23T18:43:29-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232228"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4fc81398a113ec0b5c6f8f8eafa42cd527953ef5.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4fc81398a113ec0b5c6f8f8eafa42cd527953ef5.001.1",
		areaDesc:
			"Duval, FL; Nassau, FL; Brantley, GA; Camden, GA; Glynn, GA; Wayne, GA",
		geocode: {
			SAME: ["012031", "012089", "013025", "013039", "013127", "013305"],
			UGC: ["FLC031", "FLC089", "GAC025", "GAC039", "GAC127", "GAC305"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/FLC031",
			"https://api.weather.gov/zones/county/FLC089",
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC127",
			"https://api.weather.gov/zones/county/GAC305",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T17:39:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T18:28:00-04:00",
		effective: "2022-03-23T18:28:00-04:00",
		onset: "2022-03-23T18:28:00-04:00",
		expires: "2022-03-23T18:43:29-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232228"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.003.1",
		areaDesc:
			"Coastal waters from Altamaha Sound to Fernandina Beach FL out 20 NM",
		geocode: {
			SAME: ["075450"],
			UGC: ["AMZ450"],
		},
		affectedZones: ["https://api.weather.gov/zones/forecast/AMZ450"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T17:39:00-04:00",
		effective: "2022-03-23T17:39:00-04:00",
		onset: "2022-03-23T17:39:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 5:39PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"TORNADO WATCH 68 REMAINS VALID UNTIL 9 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nCOASTAL WATERS FROM ALTAMAHA SOUND TO FERNANDINA BEACH FL OUT\n20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232139"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.001.1",
		areaDesc: "Baker, FL; Charlton, GA; Pierce, GA",
		geocode: {
			SAME: ["012003", "013049", "013229"],
			UGC: ["FLC003", "GAC049", "GAC229"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/FLC003",
			"https://api.weather.gov/zones/county/GAC049",
			"https://api.weather.gov/zones/county/GAC229",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T17:39:00-04:00",
		effective: "2022-03-23T17:39:00-04:00",
		onset: "2022-03-23T17:39:00-04:00",
		expires: "2022-03-23T17:54:53-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232139"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.7409b29380f3edd217e05ace838e99122733ee3e.002.1",
		areaDesc:
			"Duval, FL; Nassau, FL; Brantley, GA; Camden, GA; Glynn, GA; Wayne, GA",
		geocode: {
			SAME: ["012031", "012089", "013025", "013039", "013127", "013305"],
			UGC: ["FLC031", "FLC089", "GAC025", "GAC039", "GAC127", "GAC305"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/FLC031",
			"https://api.weather.gov/zones/county/FLC089",
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC127",
			"https://api.weather.gov/zones/county/GAC305",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T16:56:00-04:00",
			},
		],
		sent: "2022-03-23T17:39:00-04:00",
		effective: "2022-03-23T17:39:00-04:00",
		onset: "2022-03-23T17:39:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 5:39PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"TORNADO WATCH 68 REMAINS VALID UNTIL 9 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN FLORIDA THIS WATCH INCLUDES 2 COUNTIES\n\nIN NORTHEAST FLORIDA\n\nDUVAL                 NASSAU\n\nIN GEORGIA THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHEAST GEORGIA\n\nBRANTLEY              CAMDEN                GLYNN\nWAYNE\n\nTHIS INCLUDES THE CITIES OF AMELIA CITY, ARLINGTON, ATKINSON,\nCOUNTRY CLUB ESTATE, DOCK JUNCTION, DOCTORTOWN, DOVER BLUFF,\nDUNGENESS, FERNANDINA BEACH, GARDI, GLYNN HAVEN, HICKOX,\nHILLIARD, HOBOKEN, HORTENSE, JACKSONVILLE, JEKYLL ISLAND, JESUP,\nKINGS FERRY, KINGSLAND, NAHUNTA, NORMANDY, OCEANWAY, ORTEGA,\nRATLIFF, RAYBON, RIVERSIDE, SAN MARCO, SEA ISLAND, ST. SIMONS,\nTHALMANN, WAYNESVILLE, AND YULEE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232139"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.003.1",
		areaDesc:
			"Coastal waters from Altamaha Sound to Fernandina Beach FL out 20 NM",
		geocode: {
			SAME: ["075450"],
			UGC: ["AMZ450"],
		},
		affectedZones: ["https://api.weather.gov/zones/forecast/AMZ450"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
		],
		sent: "2022-03-23T16:56:00-04:00",
		effective: "2022-03-23T16:56:00-04:00",
		onset: "2022-03-23T16:56:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 4:56PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"TORNADO WATCH 68 REMAINS VALID UNTIL 9 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nCOASTAL WATERS FROM ALTAMAHA SOUND TO FERNANDINA BEACH FL OUT\n20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232056"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.002.1",
		areaDesc:
			"Baker, FL; Duval, FL; Nassau, FL; Brantley, GA; Camden, GA; Charlton, GA; Glynn, GA; Pierce, GA; Wayne, GA",
		geocode: {
			SAME: [
				"012003",
				"012031",
				"012089",
				"013025",
				"013039",
				"013049",
				"013127",
				"013229",
				"013305",
			],
			UGC: [
				"FLC003",
				"FLC031",
				"FLC089",
				"GAC025",
				"GAC039",
				"GAC049",
				"GAC127",
				"GAC229",
				"GAC305",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/FLC003",
			"https://api.weather.gov/zones/county/FLC031",
			"https://api.weather.gov/zones/county/FLC089",
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
			"https://api.weather.gov/zones/county/GAC127",
			"https://api.weather.gov/zones/county/GAC229",
			"https://api.weather.gov/zones/county/GAC305",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
		],
		sent: "2022-03-23T16:56:00-04:00",
		effective: "2022-03-23T16:56:00-04:00",
		onset: "2022-03-23T16:56:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 4:56PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"TORNADO WATCH 68 REMAINS VALID UNTIL 9 PM EDT THIS EVENING FOR\nTHE FOLLOWING AREAS\n\nIN FLORIDA THIS WATCH INCLUDES 3 COUNTIES\n\nIN NORTHEAST FLORIDA\n\nBAKER                 DUVAL                 NASSAU\n\nIN GEORGIA THIS WATCH INCLUDES 6 COUNTIES\n\nIN SOUTHEAST GEORGIA\n\nBRANTLEY              CAMDEN                CHARLTON\nGLYNN                 PIERCE                WAYNE\n\nTHIS INCLUDES THE CITIES OF AMELIA CITY, ARLINGTON, ATKINSON,\nBLACKSHEAR, COUNTRY CLUB ESTATE, DOCK JUNCTION, DOCTORTOWN,\nDOVER BLUFF, DUNGENESS, FERNANDINA BEACH, FOLKSTON, GARDI,\nGLYNN HAVEN, HICKOX, HILLIARD, HOBOKEN, HOMELAND, HORTENSE,\nJACKSONVILLE, JEKYLL ISLAND, JESUP, KINGS FERRY, KINGSLAND,\nMACCLENNY, NAHUNTA, NORMANDY, OCEANWAY, OLUSTEE, ORTEGA,\nRACE POND, RATLIFF, RAYBON, RIVERSIDE, SAN MARCO, SEA ISLAND,\nST. GEORGE, ST. SIMONS, STEPHEN FOSTER STATE PARK, THALMANN,\nWAYNESVILLE, WINOKUR, AND YULEE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232056"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.57432e1e0380dc704c53a80e7cbd9613860a8faf.001.1",
		areaDesc: "Clinch, GA; Ware, GA",
		geocode: {
			SAME: ["013065", "013299"],
			UGC: ["GAC065", "GAC299"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC299",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T15:13:00-04:00",
			},
		],
		sent: "2022-03-23T16:56:00-04:00",
		effective: "2022-03-23T16:56:00-04:00",
		onset: "2022-03-23T16:56:00-04:00",
		expires: "2022-03-23T17:11:41-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 232056"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KJAX.TO.A.0068.000000T0000Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.001.1",
		areaDesc:
			"Baker, FL; Duval, FL; Nassau, FL; Brantley, GA; Camden, GA; Charlton, GA; Clinch, GA; Glynn, GA; Pierce, GA; Ware, GA; Wayne, GA",
		geocode: {
			SAME: [
				"012003",
				"012031",
				"012089",
				"013025",
				"013039",
				"013049",
				"013065",
				"013127",
				"013229",
				"013299",
				"013305",
			],
			UGC: [
				"FLC003",
				"FLC031",
				"FLC089",
				"GAC025",
				"GAC039",
				"GAC049",
				"GAC065",
				"GAC127",
				"GAC229",
				"GAC299",
				"GAC305",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/FLC003",
			"https://api.weather.gov/zones/county/FLC031",
			"https://api.weather.gov/zones/county/FLC089",
			"https://api.weather.gov/zones/county/GAC025",
			"https://api.weather.gov/zones/county/GAC039",
			"https://api.weather.gov/zones/county/GAC049",
			"https://api.weather.gov/zones/county/GAC065",
			"https://api.weather.gov/zones/county/GAC127",
			"https://api.weather.gov/zones/county/GAC229",
			"https://api.weather.gov/zones/county/GAC299",
			"https://api.weather.gov/zones/county/GAC305",
		],
		references: [],
		sent: "2022-03-23T15:13:00-04:00",
		effective: "2022-03-23T15:13:00-04:00",
		onset: "2022-03-23T15:13:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 3:13PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 68 IN\nEFFECT UNTIL 9 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN FLORIDA THIS WATCH INCLUDES 3 COUNTIES\n\nIN NORTHEAST FLORIDA\n\nBAKER                 DUVAL                 NASSAU\n\nIN GEORGIA THIS WATCH INCLUDES 8 COUNTIES\n\nIN SOUTHEAST GEORGIA\n\nBRANTLEY              CAMDEN                CHARLTON\nCLINCH                GLYNN                 PIERCE\nWARE                  WAYNE\n\nTHIS INCLUDES THE CITIES OF AMELIA CITY, ARLINGTON, ATKINSON,\nBLACKSHEAR, COUNTRY CLUB ESTATE, DOCK JUNCTION, DOCTORTOWN,\nDOVER BLUFF, DUNGENESS, FERNANDINA BEACH, FOLKSTON, GARDI,\nGLYNN HAVEN, HICKOX, HILLIARD, HOBOKEN, HOMELAND, HOMERVILLE,\nHORTENSE, JACKSONVILLE, JEKYLL ISLAND, JESUP, KINGS FERRY,\nKINGSLAND, MACCLENNY, NAHUNTA, NEEDHAM, NORMANDY, OCEANWAY,\nOLUSTEE, ORTEGA, RACE POND, RATLIFF, RAYBON, RIVERSIDE,\nSAN MARCO, SEA ISLAND, ST. GEORGE, ST. SIMONS,\nSTEPHEN FOSTER STATE PARK, THALMANN, WAYCROSS, WAYNESVILLE,\nWINOKUR, AND YULEE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 231913"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.A.0068.220323T1913Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.2ef7aa6f13c849090ec5a1e956dffc28bebf4edb.002.1",
		areaDesc:
			"Coastal waters from Altamaha Sound to Fernandina Beach FL out 20 NM",
		geocode: {
			SAME: ["075450"],
			UGC: ["AMZ450"],
		},
		affectedZones: ["https://api.weather.gov/zones/forecast/AMZ450"],
		references: [],
		sent: "2022-03-23T15:13:00-04:00",
		effective: "2022-03-23T15:13:00-04:00",
		onset: "2022-03-23T15:13:00-04:00",
		expires: "2022-03-23T21:00:00-04:00",
		ends: "2022-03-23T21:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jacksonville FL",
		headline:
			"Tornado Watch issued March 23 at 3:13PM EDT until March 23 at 9:00PM EDT by NWS Jacksonville FL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 68 IN\nEFFECT UNTIL 9 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nCOASTAL WATERS FROM ALTAMAHA SOUND TO FERNANDINA BEACH FL OUT\n20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJAX"],
			WMOidentifier: ["WWUS62 KJAX 231913"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJAX.TO.A.0068.220323T1913Z-220324T0100Z/"],
			eventEndingTime: ["2022-03-24T01:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.762e3bc8b8e98cdd1e247d4837fbe9634a16813c.001.1",
		areaDesc:
			"Boyd, KY; Carter, KY; Greenup, KY; Lawrence, KY; Athens, OH; Gallia, OH; Jackson, OH; Lawrence, OH; Meigs, OH; Morgan, OH; Perry, OH; Vinton, OH; Washington, OH; Boone, WV; Cabell, WV; Calhoun, WV; Clay, WV; Doddridge, WV; Gilmer, WV; Harrison, WV; Jackson, WV; Kanawha, WV; Lincoln, WV; Logan, WV; Mason, WV; Mingo, WV; Pleasants, WV; Putnam, WV; Ritchie, WV; Roane, WV; Tyler, WV; Wayne, WV; Wirt, WV; Wood, WV",
		geocode: {
			SAME: [
				"021019",
				"021043",
				"021089",
				"021127",
				"039009",
				"039053",
				"039079",
				"039087",
				"039105",
				"039115",
				"039127",
				"039163",
				"039167",
				"054005",
				"054011",
				"054013",
				"054015",
				"054017",
				"054021",
				"054033",
				"054035",
				"054039",
				"054043",
				"054045",
				"054053",
				"054059",
				"054073",
				"054079",
				"054085",
				"054087",
				"054095",
				"054099",
				"054105",
				"054107",
			],
			UGC: [
				"KYC019",
				"KYC043",
				"KYC089",
				"KYC127",
				"OHC009",
				"OHC053",
				"OHC079",
				"OHC087",
				"OHC105",
				"OHC115",
				"OHC127",
				"OHC163",
				"OHC167",
				"WVC005",
				"WVC011",
				"WVC013",
				"WVC015",
				"WVC017",
				"WVC021",
				"WVC033",
				"WVC035",
				"WVC039",
				"WVC043",
				"WVC045",
				"WVC053",
				"WVC059",
				"WVC073",
				"WVC079",
				"WVC085",
				"WVC087",
				"WVC095",
				"WVC099",
				"WVC105",
				"WVC107",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KYC019",
			"https://api.weather.gov/zones/county/KYC043",
			"https://api.weather.gov/zones/county/KYC089",
			"https://api.weather.gov/zones/county/KYC127",
			"https://api.weather.gov/zones/county/OHC009",
			"https://api.weather.gov/zones/county/OHC053",
			"https://api.weather.gov/zones/county/OHC079",
			"https://api.weather.gov/zones/county/OHC087",
			"https://api.weather.gov/zones/county/OHC105",
			"https://api.weather.gov/zones/county/OHC115",
			"https://api.weather.gov/zones/county/OHC127",
			"https://api.weather.gov/zones/county/OHC163",
			"https://api.weather.gov/zones/county/OHC167",
			"https://api.weather.gov/zones/county/WVC005",
			"https://api.weather.gov/zones/county/WVC011",
			"https://api.weather.gov/zones/county/WVC013",
			"https://api.weather.gov/zones/county/WVC015",
			"https://api.weather.gov/zones/county/WVC017",
			"https://api.weather.gov/zones/county/WVC021",
			"https://api.weather.gov/zones/county/WVC033",
			"https://api.weather.gov/zones/county/WVC035",
			"https://api.weather.gov/zones/county/WVC039",
			"https://api.weather.gov/zones/county/WVC043",
			"https://api.weather.gov/zones/county/WVC045",
			"https://api.weather.gov/zones/county/WVC053",
			"https://api.weather.gov/zones/county/WVC059",
			"https://api.weather.gov/zones/county/WVC073",
			"https://api.weather.gov/zones/county/WVC079",
			"https://api.weather.gov/zones/county/WVC085",
			"https://api.weather.gov/zones/county/WVC087",
			"https://api.weather.gov/zones/county/WVC095",
			"https://api.weather.gov/zones/county/WVC099",
			"https://api.weather.gov/zones/county/WVC105",
			"https://api.weather.gov/zones/county/WVC107",
		],
		references: [],
		sent: "2022-03-23T14:40:00-04:00",
		effective: "2022-03-23T14:40:00-04:00",
		onset: "2022-03-23T14:40:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Charleston WV",
		headline:
			"Tornado Watch issued March 23 at 2:40PM EDT until March 23 at 10:00PM EDT by NWS Charleston WV",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 67 IN\nEFFECT UNTIL 10 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN KENTUCKY THIS WATCH INCLUDES 4 COUNTIES\n\nIN NORTHEAST KENTUCKY\n\nBOYD                  CARTER                GREENUP\nLAWRENCE\n\nIN OHIO THIS WATCH INCLUDES 9 COUNTIES\n\nIN SOUTHEAST OHIO\n\nATHENS                GALLIA                JACKSON\nLAWRENCE              MEIGS                 MORGAN\nPERRY                 VINTON                WASHINGTON\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 21 COUNTIES\n\nIN CENTRAL WEST VIRGINIA\n\nCALHOUN               CLAY                  GILMER\nJACKSON               ROANE\n\nIN NORTHERN WEST VIRGINIA\n\nDODDRIDGE             HARRISON              PLEASANTS\nRITCHIE               TYLER                 WIRT\nWOOD\n\nIN SOUTHERN WEST VIRGINIA\n\nBOONE                 KANAWHA               LINCOLN\nLOGAN                 MINGO                 PUTNAM\n\nIN WESTERN WEST VIRGINIA\n\nCABELL                MASON                 WAYNE\n\nTHIS INCLUDES THE CITIES OF ALUM CREEK, ASHLAND, ATHENS, BELMONT,\nBELPRE, BRIDGEPORT, CANNONSBURG, CARTER CAVES STATE PARK, CEREDO,\nCHAPMANVILLE, CHARLESTON, CLARKSBURG, CLAY, CROOKSVILLE,\nELIZABETH, FLATWOODS, GALLIPOLIS, GLENVILLE, GRANTSVILLE,\nGRAYSON, GRAYSON LAKE STATE PARK, HAMDEN, HAMLIN, HARRISVILLE,\nHARTS, HUNTINGTON, HURRICANE, IRONTON, JACKSON, KENOVA,\nLAKE VESUVIUS, LOGAN, LOUISA, MADISON, MAN, MARIETTA, MCARTHUR,\nMCCONNELSVILLE, MIDDLEBOURNE, NEW HAVEN, NEW LEXINGTON, OAK HILL,\nOLIVE HILL, PADEN CITY, PARKERSBURG, PENNSBORO, POINT PLEASANT,\nPOMEROY, RACELAND, RAVENSWOOD, RIPLEY, RUSSELL, SAINT ALBANS,\nSISTERSVILLE, SOMERSET, SOUTH CHARLESTON, SOUTH POINT, SPENCER,\nST. MARYS, STOCKPORT, TEAYS VALLEY, VIENNA, WAYNE, WELLSTON,\nWEST UNION, WILLIAMSON, AND YATESVILLE LAKE STATE PARK.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNRLX"],
			WMOidentifier: ["WWUS61 KRLX 231840"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KRLX.TO.A.0067.220323T1840Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.e9c3013b6247d116d7cceaa562f954d13eccdebd.001.1",
		areaDesc: "Ashland, OH; Holmes, OH; Mahoning, OH; Stark, OH; Wayne, OH",
		geocode: {
			SAME: ["039005", "039075", "039099", "039151", "039169"],
			UGC: ["OHC005", "OHC075", "OHC099", "OHC151", "OHC169"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC005",
			"https://api.weather.gov/zones/county/OHC075",
			"https://api.weather.gov/zones/county/OHC099",
			"https://api.weather.gov/zones/county/OHC151",
			"https://api.weather.gov/zones/county/OHC169",
		],
		references: [],
		sent: "2022-03-23T14:37:00-04:00",
		effective: "2022-03-23T14:37:00-04:00",
		onset: "2022-03-23T14:37:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Cleveland OH",
		headline:
			"Tornado Watch issued March 23 at 2:37PM EDT until March 23 at 10:00PM EDT by NWS Cleveland OH",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 67 IN\nEFFECT UNTIL 10 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 5 COUNTIES\n\nIN NORTH CENTRAL OHIO\n\nASHLAND\n\nIN NORTHEAST OHIO\n\nHOLMES                MAHONING              STARK\nWAYNE\n\nTHIS INCLUDES THE CITIES OF ALLIANCE, ASHLAND, AUSTINTOWN,\nBOARDMAN, CANTON, KILLBUCK, MASSILLON, MILLERSBURG, ORRVILLE,\nRITTMAN, WOOSTER, AND YOUNGSTOWN.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNCLE"],
			WMOidentifier: ["WWUS61 KCLE 231837"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KCLE.TO.A.0067.220323T1837Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.87d971c858be2843856f515c95e0d30eaa872a92.001.1",
		areaDesc:
			"Belmont, OH; Carroll, OH; Columbiana, OH; Coshocton, OH; Guernsey, OH; Harrison, OH; Jefferson, OH; Monroe, OH; Muskingum, OH; Noble, OH; Tuscarawas, OH; Allegheny, PA; Beaver, PA; Greene, PA; Washington, PA; Brooke, WV; Hancock, WV; Marion, WV; Marshall, WV; Monongalia, WV; Ohio, WV; Wetzel, WV",
		geocode: {
			SAME: [
				"039013",
				"039019",
				"039029",
				"039031",
				"039059",
				"039067",
				"039081",
				"039111",
				"039119",
				"039121",
				"039157",
				"042003",
				"042007",
				"042059",
				"042125",
				"054009",
				"054029",
				"054049",
				"054051",
				"054061",
				"054069",
				"054103",
			],
			UGC: [
				"OHC013",
				"OHC019",
				"OHC029",
				"OHC031",
				"OHC059",
				"OHC067",
				"OHC081",
				"OHC111",
				"OHC119",
				"OHC121",
				"OHC157",
				"PAC003",
				"PAC007",
				"PAC059",
				"PAC125",
				"WVC009",
				"WVC029",
				"WVC049",
				"WVC051",
				"WVC061",
				"WVC069",
				"WVC103",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/OHC013",
			"https://api.weather.gov/zones/county/OHC019",
			"https://api.weather.gov/zones/county/OHC029",
			"https://api.weather.gov/zones/county/OHC031",
			"https://api.weather.gov/zones/county/OHC059",
			"https://api.weather.gov/zones/county/OHC067",
			"https://api.weather.gov/zones/county/OHC081",
			"https://api.weather.gov/zones/county/OHC111",
			"https://api.weather.gov/zones/county/OHC119",
			"https://api.weather.gov/zones/county/OHC121",
			"https://api.weather.gov/zones/county/OHC157",
			"https://api.weather.gov/zones/county/PAC003",
			"https://api.weather.gov/zones/county/PAC007",
			"https://api.weather.gov/zones/county/PAC059",
			"https://api.weather.gov/zones/county/PAC125",
			"https://api.weather.gov/zones/county/WVC009",
			"https://api.weather.gov/zones/county/WVC029",
			"https://api.weather.gov/zones/county/WVC049",
			"https://api.weather.gov/zones/county/WVC051",
			"https://api.weather.gov/zones/county/WVC061",
			"https://api.weather.gov/zones/county/WVC069",
			"https://api.weather.gov/zones/county/WVC103",
		],
		references: [],
		sent: "2022-03-23T14:35:00-04:00",
		effective: "2022-03-23T14:35:00-04:00",
		onset: "2022-03-23T14:35:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Pittsburgh PA",
		headline:
			"Tornado Watch issued March 23 at 2:35PM EDT until March 23 at 10:00PM EDT by NWS Pittsburgh PA",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 67 IN\nEFFECT UNTIL 10 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN OHIO THIS WATCH INCLUDES 11 COUNTIES\n\nIN EAST CENTRAL OHIO\n\nBELMONT               CARROLL               COLUMBIANA\nCOSHOCTON             GUERNSEY              HARRISON\nJEFFERSON OH          MONROE                MUSKINGUM\nNOBLE                 TUSCARAWAS\n\nIN PENNSYLVANIA THIS WATCH INCLUDES 4 COUNTIES\n\nIN SOUTHWEST PENNSYLVANIA\n\nALLEGHENY             GREENE                WASHINGTON\n\nIN WESTERN PENNSYLVANIA\n\nBEAVER\n\nIN WEST VIRGINIA THIS WATCH INCLUDES 7 COUNTIES\n\nIN NORTHERN WEST VIRGINIA\n\nMARION                MONONGALIA            WETZEL\n\nIN THE NORTHERN PANHANDLE OF WEST VIRGINIA\n\nBROOKE                HANCOCK               MARSHALL\nOHIO\n\nTHIS INCLUDES THE CITIES OF ALIQUIPPA, AMBRIDGE, BEAVER FALLS,\nCADIZ, CALDWELL, CAMBRIDGE, CANONSBURG, CARROLLTON, COLUMBIANA,\nCOSHOCTON, DOVER, EAST LIVERPOOL, FAIRMONT, FOLLANSBEE,\nMARTINS FERRY, MONACA, MORGANTOWN, MOUNDSVILLE, NEW MARTINSVILLE,\nNEW PHILADELPHIA, PITTSBURGH METRO AREA, SALEM, ST. CLAIRSVILLE,\nSTEUBENVILLE, WASHINGTON, WAYNESBURG, WEIRTON, WELLSBURG,\nWHEELING, WOODSFIELD, AND ZANESVILLE.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNPBZ"],
			WMOidentifier: ["WWUS61 KPBZ 231835"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KPBZ.TO.A.0067.220323T1835Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.9de6a7a14a8a3bf18503bda57af39ef7fb2af6e8.001.1",
		areaDesc:
			"Elliott, KY; Floyd, KY; Johnson, KY; Magoffin, KY; Martin, KY; Morgan, KY; Pike, KY; Rowan, KY",
		geocode: {
			SAME: [
				"021063",
				"021071",
				"021115",
				"021153",
				"021159",
				"021175",
				"021195",
				"021205",
			],
			UGC: [
				"KYC063",
				"KYC071",
				"KYC115",
				"KYC153",
				"KYC159",
				"KYC175",
				"KYC195",
				"KYC205",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/KYC063",
			"https://api.weather.gov/zones/county/KYC071",
			"https://api.weather.gov/zones/county/KYC115",
			"https://api.weather.gov/zones/county/KYC153",
			"https://api.weather.gov/zones/county/KYC159",
			"https://api.weather.gov/zones/county/KYC175",
			"https://api.weather.gov/zones/county/KYC195",
			"https://api.weather.gov/zones/county/KYC205",
		],
		references: [],
		sent: "2022-03-23T14:35:00-04:00",
		effective: "2022-03-23T14:35:00-04:00",
		onset: "2022-03-23T14:35:00-04:00",
		expires: "2022-03-23T22:00:00-04:00",
		ends: "2022-03-23T22:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Jackson KY",
		headline:
			"Tornado Watch issued March 23 at 2:35PM EDT until March 23 at 10:00PM EDT by NWS Jackson KY",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 67 IN\nEFFECT UNTIL 10 PM EDT THIS EVENING FOR THE FOLLOWING AREAS\n\nIN KENTUCKY THIS WATCH INCLUDES 8 COUNTIES\n\nIN EAST CENTRAL KENTUCKY\n\nELLIOTT               ROWAN\n\nIN NORTHEAST KENTUCKY\n\nJOHNSON               MARTIN\n\nIN SOUTHEAST KENTUCKY\n\nFLOYD                 MAGOFFIN              MORGAN\nPIKE\n\nTHIS INCLUDES THE CITIES OF COAL RUN, ELKHORN CITY, INEZ,\nMOREHEAD, PAINTSVILLE, PIKEVILLE, PRESTONSBURG, SALYERSVILLE,\nSANDY HOOK, SOUTH WILLIAMSON, WEST LIBERTY, AND WHEELWRIGHT.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNJKL"],
			WMOidentifier: ["WWUS63 KJKL 231835"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KJKL.TO.A.0067.220323T1835Z-220324T0200Z/"],
			eventEndingTime: ["2022-03-24T02:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.619d269d1fe064a02cf713eef6f4c74ef3c6bb11.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.619d269d1fe064a02cf713eef6f4c74ef3c6bb11.002.1",
		areaDesc:
			"Coastal waters from Okaloosa-Walton County Line to Mexico Beach out 20 NM; Coastal Waters from Mexico Beach to Apalachicola out 20 NM",
		geocode: {
			SAME: ["077750", "077752"],
			UGC: ["GMZ750", "GMZ752"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ750",
			"https://api.weather.gov/zones/forecast/GMZ752",
		],
		references: [],
		sent: "2022-03-23T07:01:00-04:00",
		effective: "2022-03-23T07:01:00-04:00",
		onset: "2022-03-23T07:01:00-04:00",
		expires: "2022-03-23T08:15:00-04:00",
		ends: "2022-03-23T07:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Tallahassee FL",
		headline:
			"Tornado Watch issued March 23 at 7:01AM EDT until March 23 at 7:00AM EDT by NWS Tallahassee FL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ALLOWED TORNADO WATCH 65 TO\nEXPIRE FOR THE FOLLOWING AREAS\n\nTHIS ALLOWS TO EXPIRE THE FOLLOWING ADJACENT COASTAL WATERS\n\nCOASTAL WATERS FROM MEXICO BEACH TO OKALOOSA WALTON COUNTY LINE\nFL OUT 20 NM\nCOASTAL WATERS FROM MEXICO BEACH TO APALACHICOLA FL OUT 20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNTAE"],
			WMOidentifier: ["WWUS62 KTAE 231101"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KTAE.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.65a209f0220a336930fc4fd213b90449ff9a85b5.002.1,2022-03-22T23:45:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.619d269d1fe064a02cf713eef6f4c74ef3c6bb11.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.619d269d1fe064a02cf713eef6f4c74ef3c6bb11.001.1",
		areaDesc:
			"Coffee, AL; Dale, AL; Geneva, AL; Henry, AL; Houston, AL; Bay, FL; Calhoun, FL; Gulf, FL; Holmes, FL; Jackson, FL; Walton, FL; Washington, FL",
		geocode: {
			SAME: [
				"001031",
				"001045",
				"001061",
				"001067",
				"001069",
				"012005",
				"012013",
				"012045",
				"012059",
				"012063",
				"012131",
				"012133",
			],
			UGC: [
				"ALC031",
				"ALC045",
				"ALC061",
				"ALC067",
				"ALC069",
				"FLC005",
				"FLC013",
				"FLC045",
				"FLC059",
				"FLC063",
				"FLC131",
				"FLC133",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC031",
			"https://api.weather.gov/zones/county/ALC045",
			"https://api.weather.gov/zones/county/ALC061",
			"https://api.weather.gov/zones/county/ALC067",
			"https://api.weather.gov/zones/county/ALC069",
			"https://api.weather.gov/zones/county/FLC005",
			"https://api.weather.gov/zones/county/FLC013",
			"https://api.weather.gov/zones/county/FLC045",
			"https://api.weather.gov/zones/county/FLC059",
			"https://api.weather.gov/zones/county/FLC063",
			"https://api.weather.gov/zones/county/FLC131",
			"https://api.weather.gov/zones/county/FLC133",
		],
		references: [],
		sent: "2022-03-23T07:01:00-04:00",
		effective: "2022-03-23T07:01:00-04:00",
		onset: "2022-03-23T07:01:00-04:00",
		expires: "2022-03-23T08:15:00-04:00",
		ends: "2022-03-23T07:00:00-04:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Tallahassee FL",
		headline:
			"Tornado Watch issued March 23 at 7:01AM EDT until March 23 at 7:00AM EDT by NWS Tallahassee FL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ALLOWED TORNADO WATCH 65 TO\nEXPIRE FOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS ALLOWS TO EXPIRE 5 COUNTIES\n\nIN SOUTHEAST ALABAMA\n\nCOFFEE                DALE                  GENEVA\nHENRY                 HOUSTON\n\nIN FLORIDA THIS ALLOWS TO EXPIRE 7 COUNTIES\n\nIN PANHANDLE FLORIDA\n\nBAY                   CALHOUN               GULF\nHOLMES                JACKSON               WALTON\nWASHINGTON\n\nTHIS INCLUDES THE CITIES OF ABBEVILLE, ABBEVILLE MUNICIPAL A/P,\nABE SPRINGS, ALPINE HEIGHTS, ARGYLE, ASBURY, BARKER STORE,\nBATTENS CROSSROADS, BEAMON, BENNETT, BLACKWELL FIELD A/P,\nBLACKWOOD, BLOUNTSTOWN, BONIFAY, BROWNS CROSSROADS, BROWNTOWN,\nCAIRO, CALLAWAY, CENTER RIDGE, CHIPLEY,\nCHIPLEY MUNICIPAL AIRPORT, CLARKSVILLE, CLUSTER SPRINGS,\nCOBB CROSSROADS, COTTONWOOD, CRYSTAL LAKE, DALEVILLE, DALKEITH,\nDE FUNIAK SPRING AIRPORT, DE FUNIAK SPRINGS, DILL, DOTHAN,\nDURHAM, ECONFINA, ENTERPRISE, ENTERPRISE MUNICIPAL A/P,\nEUCHEEANNA, EWELL, FADETTE, FIVE POINTS, FORT RUCKER, FRINK,\nGANER, GENEVA, GENEVA MUNICIPAL A/P, GRACEVILLE, HACODA,\nHARTFORD, HEADLAND, HEADLAND MUNICIPAL A/P,\nHOLMES COUNTY AIRPORT, HONEYVILLE, HOWARD CREEK, KEYTON,\nLAWRENCEVILLE, LEONIA, LOGAN FIELD MUNICIPAL A/P, LYNN HAVEN,\nMABSON, MALONE, MARIANNA, MARYSVILLE, NEW HOPE, NIXON, OAK GROVE,\nODENA, ORANGE HILL, OZARK, PANAMA CITY, POPLAR HEAD,\nPORT ST. JOE, RICHTER CROSSROADS, SCOTTS FERRY, SCREAMER,\nSIMSVILLE, SNEADS, WEWAHITCHKA, AND WHITE CITY.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNTAE"],
			WMOidentifier: ["WWUS62 KTAE 231101"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.EXP.KTAE.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.65a209f0220a336930fc4fd213b90449ff9a85b5.001.1,2022-03-22T23:45:00-04:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ceed2628b7a400dcc567c79fe9177dde68d9ffdf.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.ceed2628b7a400dcc567c79fe9177dde68d9ffdf.001.1",
		areaDesc:
			"Eastern Choctawhatchee Bay; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM",
		geocode: {
			SAME: ["077636", "077655"],
			UGC: ["GMZ636", "GMZ655"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ636",
			"https://api.weather.gov/zones/forecast/GMZ655",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T03:59:00-05:00",
			},
		],
		sent: "2022-03-23T05:31:00-05:00",
		effective: "2022-03-23T05:31:00-05:00",
		onset: "2022-03-23T05:31:00-05:00",
		expires: "2022-03-23T05:46:24-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 231031"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fa629b5efaafa401d78eb62395d70d09267344f4.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fa629b5efaafa401d78eb62395d70d09267344f4.001.1",
		areaDesc:
			"Barbour, AL; Bullock, AL; Chambers, AL; Clay, AL; Coosa, AL; Elmore, AL; Lee, AL; Macon, AL; Montgomery, AL; Pike, AL; Randolph, AL; Russell, AL; Tallapoosa, AL",
		geocode: {
			SAME: [
				"001005",
				"001011",
				"001017",
				"001027",
				"001037",
				"001051",
				"001081",
				"001087",
				"001101",
				"001109",
				"001111",
				"001113",
				"001123",
			],
			UGC: [
				"ALC005",
				"ALC011",
				"ALC017",
				"ALC027",
				"ALC037",
				"ALC051",
				"ALC081",
				"ALC087",
				"ALC101",
				"ALC109",
				"ALC111",
				"ALC113",
				"ALC123",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC005",
			"https://api.weather.gov/zones/county/ALC011",
			"https://api.weather.gov/zones/county/ALC017",
			"https://api.weather.gov/zones/county/ALC027",
			"https://api.weather.gov/zones/county/ALC037",
			"https://api.weather.gov/zones/county/ALC051",
			"https://api.weather.gov/zones/county/ALC081",
			"https://api.weather.gov/zones/county/ALC087",
			"https://api.weather.gov/zones/county/ALC101",
			"https://api.weather.gov/zones/county/ALC109",
			"https://api.weather.gov/zones/county/ALC111",
			"https://api.weather.gov/zones/county/ALC113",
			"https://api.weather.gov/zones/county/ALC123",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:03:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T03:23:00-05:00",
			},
		],
		sent: "2022-03-23T04:14:00-05:00",
		effective: "2022-03-23T04:14:00-05:00",
		onset: "2022-03-23T04:14:00-05:00",
		expires: "2022-03-23T04:29:22-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230914"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.002.1",
		areaDesc: "Western Choctawhatchee Bay",
		geocode: {
			SAME: ["077635"],
			UGC: ["GMZ635"],
		},
		affectedZones: ["https://api.weather.gov/zones/forecast/GMZ635"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T03:59:00-05:00",
		effective: "2022-03-23T03:59:00-05:00",
		onset: "2022-03-23T03:59:00-05:00",
		expires: "2022-03-23T04:14:58-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230859"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.003.1",
		areaDesc:
			"Eastern Choctawhatchee Bay; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM",
		geocode: {
			SAME: ["077636", "077655"],
			UGC: ["GMZ636", "GMZ655"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ636",
			"https://api.weather.gov/zones/forecast/GMZ655",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T03:59:00-05:00",
		effective: "2022-03-23T03:59:00-05:00",
		onset: "2022-03-23T03:59:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Watch issued March 23 at 3:59AM CDT until March 23 at 6:00AM CDT by NWS Mobile AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nEASTERN CHOCTAWHATCHEE BAY\nCOASTAL WATERS FROM OKALOOSA WALTON COUNTY LINE FL TO PENSACOLA\nFL OUT 20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230859"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.c2e91ed84496189313ff1947d2a6a18d459fbc59.001.1",
		areaDesc: "Butler, AL; Covington, AL; Crenshaw, AL; Okaloosa, FL",
		geocode: {
			SAME: ["001013", "001039", "001041", "012091"],
			UGC: ["ALC013", "ALC039", "ALC041", "FLC091"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC013",
			"https://api.weather.gov/zones/county/ALC039",
			"https://api.weather.gov/zones/county/ALC041",
			"https://api.weather.gov/zones/county/FLC091",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T02:57:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T03:59:00-05:00",
		effective: "2022-03-23T03:59:00-05:00",
		onset: "2022-03-23T03:59:00-05:00",
		expires: "2022-03-23T04:14:58-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230859"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.002.1",
		areaDesc:
			"Barbour, AL; Bullock, AL; Chambers, AL; Clay, AL; Coosa, AL; Elmore, AL; Lee, AL; Macon, AL; Montgomery, AL; Pike, AL; Randolph, AL; Russell, AL; Tallapoosa, AL",
		geocode: {
			SAME: [
				"001005",
				"001011",
				"001017",
				"001027",
				"001037",
				"001051",
				"001081",
				"001087",
				"001101",
				"001109",
				"001111",
				"001113",
				"001123",
			],
			UGC: [
				"ALC005",
				"ALC011",
				"ALC017",
				"ALC027",
				"ALC037",
				"ALC051",
				"ALC081",
				"ALC087",
				"ALC101",
				"ALC109",
				"ALC111",
				"ALC113",
				"ALC123",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC005",
			"https://api.weather.gov/zones/county/ALC011",
			"https://api.weather.gov/zones/county/ALC017",
			"https://api.weather.gov/zones/county/ALC027",
			"https://api.weather.gov/zones/county/ALC037",
			"https://api.weather.gov/zones/county/ALC051",
			"https://api.weather.gov/zones/county/ALC081",
			"https://api.weather.gov/zones/county/ALC087",
			"https://api.weather.gov/zones/county/ALC101",
			"https://api.weather.gov/zones/county/ALC109",
			"https://api.weather.gov/zones/county/ALC111",
			"https://api.weather.gov/zones/county/ALC113",
			"https://api.weather.gov/zones/county/ALC123",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:03:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:57:00-05:00",
			},
		],
		sent: "2022-03-23T03:23:00-05:00",
		effective: "2022-03-23T03:23:00-05:00",
		onset: "2022-03-23T03:23:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline:
			"Tornado Watch issued March 23 at 3:23AM CDT until March 23 at 6:00AM CDT by NWS Birmingham AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 13 COUNTIES\n\nIN CENTRAL ALABAMA\n\nBARBOUR               BULLOCK               CHAMBERS\nCLAY                  COOSA                 ELMORE\nLEE                   MACON                 MONTGOMERY\nPIKE                  RANDOLPH              RUSSELL\nTALLAPOOSA\n\nTHIS INCLUDES THE CITIES OF ALEXANDER CITY, ASHLAND, AUBURN,\nEUFAULA, LANETT, LINEVILLE, MILLBROOK, MONTGOMERY, OPELIKA,\nPHENIX CITY, ROANOKE, ROCKFORD, TROY, TUSKEGEE, UNION SPRINGS,\nVALLEY, AND WETUMPKA.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230823"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.8cce334f86ddffa9f8c4e5aa4191df4ff239cf2e.001.1",
		areaDesc: "Autauga, AL; Lowndes, AL; Talladega, AL",
		geocode: {
			SAME: ["001001", "001085", "001121"],
			UGC: ["ALC001", "ALC085", "ALC121"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC001",
			"https://api.weather.gov/zones/county/ALC085",
			"https://api.weather.gov/zones/county/ALC121",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:03:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:57:00-05:00",
			},
		],
		sent: "2022-03-23T03:23:00-05:00",
		effective: "2022-03-23T03:23:00-05:00",
		onset: "2022-03-23T03:23:00-05:00",
		expires: "2022-03-23T03:39:09-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230823"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.002.1",
		areaDesc:
			"Perdido Bay Area; Pensacola Bay Area including Santa Rosa Sound; Coastal waters from Pensacola FL to Pascagoula MS out 20 NM",
		geocode: {
			SAME: ["077633", "077634", "077650"],
			UGC: ["GMZ633", "GMZ634", "GMZ650"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ633",
			"https://api.weather.gov/zones/forecast/GMZ634",
			"https://api.weather.gov/zones/forecast/GMZ650",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T02:57:00-05:00",
		effective: "2022-03-23T02:57:00-05:00",
		onset: "2022-03-23T02:57:00-05:00",
		expires: "2022-03-23T03:13:04-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230757"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.004.1",
		areaDesc:
			"Western Choctawhatchee Bay; Eastern Choctawhatchee Bay; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM",
		geocode: {
			SAME: ["077635", "077636", "077655"],
			UGC: ["GMZ635", "GMZ636", "GMZ655"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ635",
			"https://api.weather.gov/zones/forecast/GMZ636",
			"https://api.weather.gov/zones/forecast/GMZ655",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T02:57:00-05:00",
		effective: "2022-03-23T02:57:00-05:00",
		onset: "2022-03-23T02:57:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Watch issued March 23 at 2:57AM CDT until March 23 at 6:00AM CDT by NWS Mobile AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nWESTERN CHOCTAWHATCHEE BAY\nEASTERN CHOCTAWHATCHEE BAY\nCOASTAL WATERS FROM OKALOOSA WALTON COUNTY LINE FL TO PENSACOLA\nFL OUT 20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230757"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.003.1",
		areaDesc: "Butler, AL; Covington, AL; Crenshaw, AL; Okaloosa, FL",
		geocode: {
			SAME: ["001013", "001039", "001041", "012091"],
			UGC: ["ALC013", "ALC039", "ALC041", "FLC091"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC013",
			"https://api.weather.gov/zones/county/ALC039",
			"https://api.weather.gov/zones/county/ALC041",
			"https://api.weather.gov/zones/county/FLC091",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T02:57:00-05:00",
		effective: "2022-03-23T02:57:00-05:00",
		onset: "2022-03-23T02:57:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Watch issued March 23 at 2:57AM CDT until March 23 at 6:00AM CDT by NWS Mobile AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 3 COUNTIES\n\nIN SOUTH CENTRAL ALABAMA\n\nBUTLER                COVINGTON             CRENSHAW\n\nIN FLORIDA THIS WATCH INCLUDES 1 COUNTY\n\nIN NORTHWEST FLORIDA\n\nOKALOOSA\n\nTHIS INCLUDES THE CITIES OF ANDALUSIA, BRANTLEY, CRESTVIEW,\nDESTIN, EGLIN AFB, FORT WALTON BEACH, GREENVILLE, LUVERNE,\nNICEVILLE, OPP, SEMINOLE, AND WRIGHT.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230757"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.63487f4e172ce0bf256650343e5ecbcdafa43199.001.1",
		areaDesc:
			"Baldwin, AL; Conecuh, AL; Escambia, AL; Monroe, AL; Wilcox, AL; Escambia, FL; Santa Rosa, FL",
		geocode: {
			SAME: [
				"001003",
				"001035",
				"001053",
				"001099",
				"001131",
				"012033",
				"012113",
			],
			UGC: [
				"ALC003",
				"ALC035",
				"ALC053",
				"ALC099",
				"ALC131",
				"FLC033",
				"FLC113",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC003",
			"https://api.weather.gov/zones/county/ALC035",
			"https://api.weather.gov/zones/county/ALC053",
			"https://api.weather.gov/zones/county/ALC099",
			"https://api.weather.gov/zones/county/ALC131",
			"https://api.weather.gov/zones/county/FLC033",
			"https://api.weather.gov/zones/county/FLC113",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:20:00-05:00",
			},
		],
		sent: "2022-03-23T02:57:00-05:00",
		effective: "2022-03-23T02:57:00-05:00",
		onset: "2022-03-23T02:57:00-05:00",
		expires: "2022-03-23T03:13:04-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230757"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.002.1",
		areaDesc:
			"Autauga, AL; Barbour, AL; Bullock, AL; Chambers, AL; Clay, AL; Coosa, AL; Elmore, AL; Lee, AL; Lowndes, AL; Macon, AL; Montgomery, AL; Pike, AL; Randolph, AL; Russell, AL; Talladega, AL; Tallapoosa, AL",
		geocode: {
			SAME: [
				"001001",
				"001005",
				"001011",
				"001017",
				"001027",
				"001037",
				"001051",
				"001081",
				"001085",
				"001087",
				"001101",
				"001109",
				"001111",
				"001113",
				"001121",
				"001123",
			],
			UGC: [
				"ALC001",
				"ALC005",
				"ALC011",
				"ALC017",
				"ALC027",
				"ALC037",
				"ALC051",
				"ALC081",
				"ALC085",
				"ALC087",
				"ALC101",
				"ALC109",
				"ALC111",
				"ALC113",
				"ALC121",
				"ALC123",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC001",
			"https://api.weather.gov/zones/county/ALC005",
			"https://api.weather.gov/zones/county/ALC011",
			"https://api.weather.gov/zones/county/ALC017",
			"https://api.weather.gov/zones/county/ALC027",
			"https://api.weather.gov/zones/county/ALC037",
			"https://api.weather.gov/zones/county/ALC051",
			"https://api.weather.gov/zones/county/ALC081",
			"https://api.weather.gov/zones/county/ALC085",
			"https://api.weather.gov/zones/county/ALC087",
			"https://api.weather.gov/zones/county/ALC101",
			"https://api.weather.gov/zones/county/ALC109",
			"https://api.weather.gov/zones/county/ALC111",
			"https://api.weather.gov/zones/county/ALC113",
			"https://api.weather.gov/zones/county/ALC121",
			"https://api.weather.gov/zones/county/ALC123",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:03:00-05:00",
			},
		],
		sent: "2022-03-23T01:57:00-05:00",
		effective: "2022-03-23T01:57:00-05:00",
		onset: "2022-03-23T01:57:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline:
			"Tornado Watch issued March 23 at 1:57AM CDT until March 23 at 6:00AM CDT by NWS Birmingham AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 16 COUNTIES\n\nIN CENTRAL ALABAMA\n\nAUTAUGA               BARBOUR               BULLOCK\nCHAMBERS              CLAY                  COOSA\nELMORE                LEE                   LOWNDES\nMACON                 MONTGOMERY            PIKE\nRANDOLPH              RUSSELL               TALLADEGA\nTALLAPOOSA\n\nTHIS INCLUDES THE CITIES OF ALEXANDER CITY, ASHLAND, AUBURN,\nEUFAULA, FORT DEPOSIT, LANETT, LINEVILLE, LOWNDESBORO, MILLBROOK,\nMONTGOMERY, OPELIKA, PHENIX CITY, PRATTVILLE, ROANOKE, ROCKFORD,\nSYLACAUGA, TALLADEGA, TROY, TUSKEGEE, UNION SPRINGS, VALLEY,\nAND WETUMPKA.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230657"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3853b3fab1c386521f87be80af023fbc18a34659.001.1",
		areaDesc: "Chilton, AL; Dallas, AL",
		geocode: {
			SAME: ["001021", "001047"],
			UGC: ["ALC021", "ALC047"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC021",
			"https://api.weather.gov/zones/county/ALC047",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-23T01:03:00-05:00",
			},
		],
		sent: "2022-03-23T01:57:00-05:00",
		effective: "2022-03-23T01:57:00-05:00",
		onset: "2022-03-23T01:57:00-05:00",
		expires: "2022-03-23T02:12:26-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230657"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.002.1",
		areaDesc: "North Mobile Bay; South Mobile Bay; Mississippi Sound",
		geocode: {
			SAME: ["077630", "077631", "077632"],
			UGC: ["GMZ630", "GMZ631", "GMZ632"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ630",
			"https://api.weather.gov/zones/forecast/GMZ631",
			"https://api.weather.gov/zones/forecast/GMZ632",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
		],
		sent: "2022-03-23T01:20:00-05:00",
		effective: "2022-03-23T01:20:00-05:00",
		onset: "2022-03-23T01:20:00-05:00",
		expires: "2022-03-23T01:35:24-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230620"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.001.1",
		areaDesc: "Clarke, AL; Mobile, AL; Washington, AL",
		geocode: {
			SAME: ["001025", "001097", "001129"],
			UGC: ["ALC025", "ALC097", "ALC129"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC025",
			"https://api.weather.gov/zones/county/ALC097",
			"https://api.weather.gov/zones/county/ALC129",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.003.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.003.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
		],
		sent: "2022-03-23T01:20:00-05:00",
		effective: "2022-03-23T01:20:00-05:00",
		onset: "2022-03-23T01:20:00-05:00",
		expires: "2022-03-23T01:35:24-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230620"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.004.1",
		areaDesc:
			"Perdido Bay Area; Pensacola Bay Area including Santa Rosa Sound; Western Choctawhatchee Bay; Eastern Choctawhatchee Bay; Coastal waters from Pensacola FL to Pascagoula MS out 20 NM; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM",
		geocode: {
			SAME: ["077633", "077634", "077635", "077636", "077650", "077655"],
			UGC: ["GMZ633", "GMZ634", "GMZ635", "GMZ636", "GMZ650", "GMZ655"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/forecast/GMZ633",
			"https://api.weather.gov/zones/forecast/GMZ634",
			"https://api.weather.gov/zones/forecast/GMZ635",
			"https://api.weather.gov/zones/forecast/GMZ636",
			"https://api.weather.gov/zones/forecast/GMZ650",
			"https://api.weather.gov/zones/forecast/GMZ655",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.007.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.002.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
		],
		sent: "2022-03-23T01:20:00-05:00",
		effective: "2022-03-23T01:20:00-05:00",
		onset: "2022-03-23T01:20:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Watch issued March 23 at 1:20AM CDT until March 23 at 6:00AM CDT by NWS Mobile AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nTHIS WATCH INCLUDES THE FOLLOWING ADJACENT COASTAL WATERS\n\nPERDIDO BAY           PENSACOLA BAY SYSTEM\nWESTERN CHOCTAWHATCHEE BAY\nEASTERN CHOCTAWHATCHEE BAY\nCOASTAL WATERS FROM PENSACOLA FL TO PASCAGOULA MS OUT 20 NM\nCOASTAL WATERS FROM OKALOOSA WALTON COUNTY LINE FL TO PENSACOLA\nFL OUT 20 NM",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230620"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.fef82bcf852306d7f7c882dd726d7c60799ced57.003.1",
		areaDesc:
			"Baldwin, AL; Butler, AL; Conecuh, AL; Covington, AL; Crenshaw, AL; Escambia, AL; Monroe, AL; Wilcox, AL; Escambia, FL; Okaloosa, FL; Santa Rosa, FL",
		geocode: {
			SAME: [
				"001003",
				"001013",
				"001035",
				"001039",
				"001041",
				"001053",
				"001099",
				"001131",
				"012033",
				"012091",
				"012113",
			],
			UGC: [
				"ALC003",
				"ALC013",
				"ALC035",
				"ALC039",
				"ALC041",
				"ALC053",
				"ALC099",
				"ALC131",
				"FLC033",
				"FLC091",
				"FLC113",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC003",
			"https://api.weather.gov/zones/county/ALC013",
			"https://api.weather.gov/zones/county/ALC035",
			"https://api.weather.gov/zones/county/ALC039",
			"https://api.weather.gov/zones/county/ALC041",
			"https://api.weather.gov/zones/county/ALC053",
			"https://api.weather.gov/zones/county/ALC099",
			"https://api.weather.gov/zones/county/ALC131",
			"https://api.weather.gov/zones/county/FLC033",
			"https://api.weather.gov/zones/county/FLC091",
			"https://api.weather.gov/zones/county/FLC113",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.8a7d463bf36d94a23dd0c960dcae52e093e53f1d.006.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:45:00-05:00",
			},
		],
		sent: "2022-03-23T01:20:00-05:00",
		effective: "2022-03-23T01:20:00-05:00",
		onset: "2022-03-23T01:20:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Mobile AL",
		headline:
			"Tornado Watch issued March 23 at 1:20AM CDT until March 23 at 6:00AM CDT by NWS Mobile AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 8 COUNTIES\n\nIN SOUTH CENTRAL ALABAMA\n\nBUTLER                CONECUH               COVINGTON\nCRENSHAW              ESCAMBIA              MONROE\nWILCOX\n\nIN SOUTHWEST ALABAMA\n\nBALDWIN\n\nIN FLORIDA THIS WATCH INCLUDES 3 COUNTIES\n\nIN NORTHWEST FLORIDA\n\nESCAMBIA              OKALOOSA              SANTA ROSA\n\nTHIS INCLUDES THE CITIES OF ANDALUSIA, ATMORE, BAY MINETTE,\nBELLVIEW, BRANTLEY, BRENT, BREWTON, CAMDEN, CRESTVIEW, DAPHNE,\nDESTIN, EGLIN AFB, ENSLEY, EVERGREEN, FERRY PASS, FLOMATON,\nFORT WALTON BEACH, GREENVILLE, GULF BREEZE, GULF SHORES,\nHOMEWOOD, LUVERNE, MILTON, MONROEVILLE, MYRTLE GROVE, NICEVILLE,\nOPP, PACE, PENSACOLA, PINE HILL, SEMINOLE, AND WRIGHT.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNMOB"],
			WMOidentifier: ["WWUS64 KMOB 230620"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KMOB.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.001.1",
		areaDesc: "Perry, AL",
		geocode: {
			SAME: ["001105"],
			UGC: ["ALC105"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC105"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
		],
		sent: "2022-03-23T01:03:00-05:00",
		effective: "2022-03-23T01:03:00-05:00",
		onset: "2022-03-23T01:03:00-05:00",
		expires: "2022-03-23T01:18:29-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230603"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.3f09d5bea20b4984df86d26fe544d5764bc23538.002.1",
		areaDesc:
			"Autauga, AL; Barbour, AL; Bullock, AL; Chambers, AL; Chilton, AL; Clay, AL; Coosa, AL; Dallas, AL; Elmore, AL; Lee, AL; Lowndes, AL; Macon, AL; Montgomery, AL; Pike, AL; Randolph, AL; Russell, AL; Talladega, AL; Tallapoosa, AL",
		geocode: {
			SAME: [
				"001001",
				"001005",
				"001011",
				"001017",
				"001021",
				"001027",
				"001037",
				"001047",
				"001051",
				"001081",
				"001085",
				"001087",
				"001101",
				"001109",
				"001111",
				"001113",
				"001121",
				"001123",
			],
			UGC: [
				"ALC001",
				"ALC005",
				"ALC011",
				"ALC017",
				"ALC021",
				"ALC027",
				"ALC037",
				"ALC047",
				"ALC051",
				"ALC081",
				"ALC085",
				"ALC087",
				"ALC101",
				"ALC109",
				"ALC111",
				"ALC113",
				"ALC121",
				"ALC123",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC001",
			"https://api.weather.gov/zones/county/ALC005",
			"https://api.weather.gov/zones/county/ALC011",
			"https://api.weather.gov/zones/county/ALC017",
			"https://api.weather.gov/zones/county/ALC021",
			"https://api.weather.gov/zones/county/ALC027",
			"https://api.weather.gov/zones/county/ALC037",
			"https://api.weather.gov/zones/county/ALC047",
			"https://api.weather.gov/zones/county/ALC051",
			"https://api.weather.gov/zones/county/ALC081",
			"https://api.weather.gov/zones/county/ALC085",
			"https://api.weather.gov/zones/county/ALC087",
			"https://api.weather.gov/zones/county/ALC101",
			"https://api.weather.gov/zones/county/ALC109",
			"https://api.weather.gov/zones/county/ALC111",
			"https://api.weather.gov/zones/county/ALC113",
			"https://api.weather.gov/zones/county/ALC121",
			"https://api.weather.gov/zones/county/ALC123",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:47:00-05:00",
			},
		],
		sent: "2022-03-23T01:03:00-05:00",
		effective: "2022-03-23T01:03:00-05:00",
		onset: "2022-03-23T01:03:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Update",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline:
			"Tornado Watch issued March 23 at 1:03AM CDT until March 23 at 6:00AM CDT by NWS Birmingham AL",
		description:
			"TORNADO WATCH 65 REMAINS VALID UNTIL 6 AM CDT EARLY THIS MORNING\nFOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 18 COUNTIES\n\nIN CENTRAL ALABAMA\n\nAUTAUGA               BARBOUR               BULLOCK\nCHAMBERS              CHILTON               CLAY\nCOOSA                 DALLAS                ELMORE\nLEE                   LOWNDES               MACON\nMONTGOMERY            PIKE                  RANDOLPH\nRUSSELL               TALLADEGA             TALLAPOOSA\n\nTHIS INCLUDES THE CITIES OF ALEXANDER CITY, ASHLAND, AUBURN,\nCLANTON, EUFAULA, FORT DEPOSIT, LANETT, LINEVILLE, LOWNDESBORO,\nMILLBROOK, MONTGOMERY, OPELIKA, PHENIX CITY, PRATTVILLE, ROANOKE,\nROCKFORD, SELMA, SYLACAUGA, TALLADEGA, TROY, TUSKEGEE,\nUNION SPRINGS, VALLEY, AND WETUMPKA.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230603"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CON.KBMX.TO.A.0065.000000T0000Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
			expiredReferences: [
				"w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.003.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.002.1,2021-03-28T05:06:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5c77221b0344518983c115ed1c59773763bac1ff.001.1,2021-03-28T05:45:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2eabff99ccc60442995e31a46adc9d8f57f2b21e.001.1,2021-03-27T23:27:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7c8a49a58c75b2e22cd16c59229a2dda6d340262.001.1,2021-03-28T05:10:00-05:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.417a860b1727fa6bd6330c37bf65613edf120bc4.001.1,2021-03-28T05:06:00-05:00",
			],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.004.1",
		areaDesc:
			"Barbour, AL; Bullock, AL; Chambers, AL; Clay, AL; Coosa, AL; Elmore, AL; Lee, AL; Macon, AL; Montgomery, AL; Pike, AL; Randolph, AL; Russell, AL; Talladega, AL; Tallapoosa, AL",
		geocode: {
			SAME: [
				"001005",
				"001011",
				"001017",
				"001027",
				"001037",
				"001051",
				"001081",
				"001087",
				"001101",
				"001109",
				"001111",
				"001113",
				"001121",
				"001123",
			],
			UGC: [
				"ALC005",
				"ALC011",
				"ALC017",
				"ALC027",
				"ALC037",
				"ALC051",
				"ALC081",
				"ALC087",
				"ALC101",
				"ALC109",
				"ALC111",
				"ALC113",
				"ALC121",
				"ALC123",
			],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC005",
			"https://api.weather.gov/zones/county/ALC011",
			"https://api.weather.gov/zones/county/ALC017",
			"https://api.weather.gov/zones/county/ALC027",
			"https://api.weather.gov/zones/county/ALC037",
			"https://api.weather.gov/zones/county/ALC051",
			"https://api.weather.gov/zones/county/ALC081",
			"https://api.weather.gov/zones/county/ALC087",
			"https://api.weather.gov/zones/county/ALC101",
			"https://api.weather.gov/zones/county/ALC109",
			"https://api.weather.gov/zones/county/ALC111",
			"https://api.weather.gov/zones/county/ALC113",
			"https://api.weather.gov/zones/county/ALC121",
			"https://api.weather.gov/zones/county/ALC123",
		],
		references: [],
		sent: "2022-03-22T22:47:00-05:00",
		effective: "2022-03-22T22:47:00-05:00",
		onset: "2022-03-22T22:47:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline:
			"Tornado Watch issued March 22 at 10:47PM CDT until March 23 at 6:00AM CDT by NWS Birmingham AL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 65 IN\nEFFECT UNTIL 6 AM CDT WEDNESDAY FOR THE FOLLOWING AREAS\n\nIN ALABAMA THIS WATCH INCLUDES 14 COUNTIES\n\nIN CENTRAL ALABAMA\n\nBARBOUR               BULLOCK               CHAMBERS\nCLAY                  COOSA                 ELMORE\nLEE                   MACON                 MONTGOMERY\nPIKE                  RANDOLPH              RUSSELL\nTALLADEGA             TALLAPOOSA\n\nTHIS INCLUDES THE CITIES OF ALEXANDER CITY, ASHLAND, AUBURN,\nEUFAULA, LANETT, LINEVILLE, MILLBROOK, MONTGOMERY, OPELIKA,\nPHENIX CITY, ROANOKE, ROCKFORD, SYLACAUGA, TALLADEGA, TROY,\nTUSKEGEE, UNION SPRINGS, VALLEY, AND WETUMPKA.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230347"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KBMX.TO.A.0065.220323T0347Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.2",
		areaDesc: "Autauga, AL; Chilton, AL; Dallas, AL; Lowndes, AL; Perry, AL",
		geocode: {
			SAME: ["001001", "001021", "001047", "001085", "001105"],
			UGC: ["ALC001", "ALC021", "ALC047", "ALC085", "ALC105"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC001",
			"https://api.weather.gov/zones/county/ALC021",
			"https://api.weather.gov/zones/county/ALC047",
			"https://api.weather.gov/zones/county/ALC085",
			"https://api.weather.gov/zones/county/ALC105",
		],
		references: [],
		sent: "2022-03-22T22:47:00-05:00",
		effective: "2022-03-22T22:47:00-05:00",
		onset: "2022-03-22T22:47:00-05:00",
		expires: "2022-03-23T06:00:00-05:00",
		ends: "2022-03-23T06:00:00-05:00",
		status: "Actual",
		messageType: "Alert",
		category: "Met",
		severity: "Extreme",
		certainty: "Possible",
		urgency: "Future",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline:
			"Tornado Watch issued March 22 at 10:47PM CDT until March 23 at 6:00AM CDT by NWS Birmingham AL",
		description:
			"THE NATIONAL WEATHER SERVICE HAS ISSUED TORNADO WATCH 65 UNTIL\n6 AM CDT WEDNESDAY WHICH REPLACES A PORTION OF TORNADO WATCH 63.\nTHE NEW WATCH IS VALID FOR THE FOLLOWING AREAS\n\nIN ALABAMA THE NEW WATCH INCLUDES 5 COUNTIES\n\nIN CENTRAL ALABAMA\n\nAUTAUGA               CHILTON               DALLAS\nLOWNDES               PERRY\n\nTHIS INCLUDES THE CITIES OF CLANTON, FORT DEPOSIT, LOWNDESBORO,\nMARION, PRATTVILLE, SELMA, AND UNIONTOWN.",
		instruction: null,
		response: "Monitor",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230347"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.NEW.KBMX.TO.A.0065.220323T0347Z-220323T1100Z/"],
			eventEndingTime: ["2022-03-23T11:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.001.1",
		areaDesc: "Autauga, AL; Chilton, AL; Dallas, AL; Lowndes, AL; Perry, AL",
		geocode: {
			SAME: ["001001", "001021", "001047", "001085", "001105"],
			UGC: ["ALC001", "ALC021", "ALC047", "ALC085", "ALC105"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC001",
			"https://api.weather.gov/zones/county/ALC021",
			"https://api.weather.gov/zones/county/ALC047",
			"https://api.weather.gov/zones/county/ALC085",
			"https://api.weather.gov/zones/county/ALC105",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3097447957a1140841350f353b7ac1aab3180746.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3097447957a1140841350f353b7ac1aab3180746.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T16:10:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c9662c9ac1044f3d5c2b0976356b48d1af77f517.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c9662c9ac1044f3d5c2b0976356b48d1af77f517.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T18:15:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.29ec1ea9bb489cb3377b4707658e37991dfb82bf.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.29ec1ea9bb489cb3377b4707658e37991dfb82bf.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T17:03:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cecd54364236f8410a9a803fbc232e9a54650259.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cecd54364236f8410a9a803fbc232e9a54650259.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T16:12:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T19:02:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T21:29:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T20:31:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:14:00-05:00",
			},
		],
		sent: "2022-03-22T22:47:00-05:00",
		effective: "2022-03-22T22:47:00-05:00",
		onset: "2022-03-22T22:47:00-05:00",
		expires: "2022-03-22T23:02:34-05:00",
		ends: "2022-03-22T23:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230347"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0063.000000T0000Z-220323T0400Z/"],
			eventEndingTime: ["2022-03-23T04:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.002.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.002.1",
		areaDesc: "St. Clair, AL; Shelby, AL",
		geocode: {
			SAME: ["001115", "001117"],
			UGC: ["ALC115", "ALC117"],
		},
		affectedZones: [
			"https://api.weather.gov/zones/county/ALC115",
			"https://api.weather.gov/zones/county/ALC117",
		],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3097447957a1140841350f353b7ac1aab3180746.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.3097447957a1140841350f353b7ac1aab3180746.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T16:10:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.c9662c9ac1044f3d5c2b0976356b48d1af77f517.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.c9662c9ac1044f3d5c2b0976356b48d1af77f517.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T18:15:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.29ec1ea9bb489cb3377b4707658e37991dfb82bf.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.29ec1ea9bb489cb3377b4707658e37991dfb82bf.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T17:03:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.cecd54364236f8410a9a803fbc232e9a54650259.001.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.cecd54364236f8410a9a803fbc232e9a54650259.001.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T16:12:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T19:02:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T21:29:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T20:31:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.002.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.002.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:14:00-05:00",
			},
		],
		sent: "2022-03-22T22:47:00-05:00",
		effective: "2022-03-22T22:47:00-05:00",
		onset: "2022-03-22T22:47:00-05:00",
		expires: "2022-03-22T23:02:34-05:00",
		ends: "2022-03-22T23:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230347"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0063.000000T0000Z-220323T0400Z/"],
			eventEndingTime: ["2022-03-23T04:00:00+00:00"],
		},
	},
	{
		"@id":
			"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.003.1",
		"@type": "wx:Alert",
		id: "urn:oid:2.49.0.1.840.0.4a0dc5eee546c567536b09b62eb16fa37de9370c.003.1",
		areaDesc: "Marengo, AL",
		geocode: {
			SAME: ["001091"],
			UGC: ["ALC091"],
		},
		affectedZones: ["https://api.weather.gov/zones/county/ALC091"],
		references: [
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.001.2",
				identifier:
					"urn:oid:2.49.0.1.840.0.f9372ce498debd6f99e4d5072a43a86a84a11e27.001.2",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T19:02:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.e19004d57bc7b69afe5171f438dd552651095374.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T20:31:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.82c0e3b40ab0f9ee71d757980b8baf954c6f5f16.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T21:29:00-05:00",
			},
			{
				"@id":
					"https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.003.1",
				identifier:
					"urn:oid:2.49.0.1.840.0.4a1234a90400619f1b12d51402046b5e553066ee.003.1",
				sender: "w-nws.webmaster@noaa.gov",
				sent: "2022-03-22T22:14:00-05:00",
			},
		],
		sent: "2022-03-22T22:47:00-05:00",
		effective: "2022-03-22T22:47:00-05:00",
		onset: "2022-03-22T22:47:00-05:00",
		expires: "2022-03-22T23:02:34-05:00",
		ends: "2022-03-22T23:00:00-05:00",
		status: "Actual",
		messageType: "Cancel",
		category: "Met",
		severity: "Minor",
		certainty: "Observed",
		urgency: "Past",
		event: "Tornado Watch",
		sender: "w-nws.webmaster@noaa.gov",
		senderName: "NWS Birmingham AL",
		headline: "The Tornado Watch has been cancelled.",
		description:
			"The Tornado Watch has been cancelled and is no longer in effect.",
		instruction: null,
		response: "AllClear",
		parameters: {
			AWIPSidentifier: ["WCNBMX"],
			WMOidentifier: ["WWUS64 KBMX 230347"],
			BLOCKCHANNEL: ["EAS", "NWEM", "CMAS"],
			"EAS-ORG": ["WXR"],
			VTEC: ["/O.CAN.KBMX.TO.A.0064.000000T0000Z-220323T0400Z/"],
			eventEndingTime: ["2022-03-23T04:00:00+00:00"],
		},
	},
];
