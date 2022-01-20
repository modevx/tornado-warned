import { getSWDI } from "../xhr";

export const getTornadoVortexSignaturesInRange = (dateRange: string) => {
	getSWDI(`/json/nx3tvs/${dateRange}`);
};
