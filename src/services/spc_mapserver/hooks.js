import { useQuery } from "react-query";
import {
	getSpcConvectiveOutlooks,
	getSpcDay1ConvectiveOutlook,
} from "./service";

export const useSpcConvectiveOutlooks = () => {
	return useQuery(["SPC_MapServer", "AllLayers"], () =>
		getSpcConvectiveOutlooks()
	);
};

export const useSpcConvectiveOutlookDay1 = () => {
	return useQuery(["SPC_MapServer", "Day1"], () =>
		getSpcDay1ConvectiveOutlook()
	);
};
