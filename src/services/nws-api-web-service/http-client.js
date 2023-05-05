import { createHTTPClient } from "services/create-http-client";
import { urls } from "./constants";

export const nwsApiWebServiceHTTPClient = createHTTPClient({
	baseURL: urls.apiWebServiceBaseURL,
});
