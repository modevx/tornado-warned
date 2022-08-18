import { useQuery } from "react-query";
import { fetchPublicInfoStatements } from "services/national-wx-service";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => fetchPublicInfoStatements());
};
