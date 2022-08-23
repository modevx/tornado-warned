import axios from "axios";
import { ALERT_TYPE } from "./constants";
import { getNwsAlerts } from "./service";

describe("National Weather Service Alerts", () => {
	beforeAll(() => {
		jest.mock("axios");
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("returns array of TORNADO WARNINGS", () => {
		axios.get.mockResolvedValue({ data: [] });

		const { data } = getNwsAlerts(ALERT_TYPE.tornadoWarning);
		expect(data).toEqual({});
	});

	it("returns array of TORNADO WATCHES", () => {
		axios.get.mockResolvedValue({ data: [] });

		const { data } = getNwsAlerts(ALERT_TYPE.tornadoWatch);
		expect(data).toEqual({});
	});

	it("returns array of SEVERE THUNDERSTORM WARNINGS", () => {
		axios.get.mockResolvedValue({ data: [] });

		const { data } = getNwsAlerts(ALERT_TYPE.severeStormWarning);
		expect(data).toEqual({});
	});

	it("returns array of SEVERE THUNDERSTORM WATCHES", () => {
		axios.get.mockResolvedValue({ data: [] });

		const { data } = getNwsAlerts(ALERT_TYPE.severeStormWatch);
		expect(data).toEqual({});
	});
});
