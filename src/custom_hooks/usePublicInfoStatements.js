import { useQuery } from "react-query";
import { getPublicInfoStatements } from "services/national_weather_service";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => getPublicInfoStatements());
};
