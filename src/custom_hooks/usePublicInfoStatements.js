import { useQuery } from "react-query";
import { getPublicInfoStatements } from "services/nws-alerts-service";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => getPublicInfoStatements());
};
