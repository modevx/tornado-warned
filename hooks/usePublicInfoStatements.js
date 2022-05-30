import { useQuery } from "react-query";
import { fetchPublicInfoStatements } from "services/nws";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => fetchPublicInfoStatements());
};
