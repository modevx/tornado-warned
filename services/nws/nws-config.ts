export interface NwsApiConfig {
  baseURL: string;
  timeout?: number;
}

export const DEFAULT_NWS_API_CONFIG: NwsApiConfig = {
  baseURL: "",
  timeout: 5000,
};
