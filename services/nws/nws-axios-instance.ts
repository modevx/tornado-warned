import axios from "axios";

const API_BASE_URL = "https://api.weather.gov";

interface ApiConfig {
	baseUrl: string;
	timeout: number;
	url?: string | undefined;
}

export const DEFAULT_API_CONFIG = axios.create({
	baseUrl: API_BASE_URL || "https://jsonplaceholder.typicode.com",
	timeout: 5000,
});
