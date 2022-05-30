import { useQuery } from "react-query";
import { fetchPublicInfoStatements } from "services/national-ws";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => fetchPublicInfoStatements());
};
