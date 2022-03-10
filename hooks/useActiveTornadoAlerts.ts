import { useQuery } from "react-query";
import axios from "axios";

const useActiveTornadoAlerts = () =>
	useQuery("activeTornadoAlerts", () => axios.get(""));
