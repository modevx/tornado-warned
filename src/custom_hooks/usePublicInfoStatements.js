import { useQuery } from "react-query";
import { getPublicInfoStatements } from "services/nws_api_web_service";

export const usePublicInfoStatementQuery = () => {
	return useQuery(["nws-pub-info-stmt"], () => getPublicInfoStatements());
};
