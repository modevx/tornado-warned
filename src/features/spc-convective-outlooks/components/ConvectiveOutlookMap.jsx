import { AlbersStateMap } from "components/AlbersStateMap";
import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";
import { ConvectiveOutlookFeatures } from "./ConvectiveOutlookFeatures";

export const ConvectiveOutlookMap = ({ arrFeatures }) => {
	console.log(">> arrFeatures\n", arrFeatures);

	return (
		<AlbersStateMap>
			{/* {arrFeatures.length && (
				<ConvectiveOutlookFeatures arrFeatures={arrFeatures} />
			)} */}
		</AlbersStateMap>
	);
};
