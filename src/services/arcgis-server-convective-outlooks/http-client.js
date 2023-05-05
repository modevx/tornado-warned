import { createHTTPClient } from "services/create-http-client";
import { urls } from "./constants";

export const convectiveOutlookHTTPClient = createHTTPClient({
	baseURL: urls.outlookMapServer,
});
