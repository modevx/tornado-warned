import { useQuery } from "react-query";
import { usePublicInfoStatements } from "services/spc";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => usePublicInfoStatements());
};
