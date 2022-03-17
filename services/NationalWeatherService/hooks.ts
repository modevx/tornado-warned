import { useQuery } from "react-query";
import { fetchActiveAlerts, fetchTestAlerts } from "./requests";

export const useActiveAlerts = () => {
  return useQuery(["activeAlerts"], () => fetchActiveAlerts());
};

export const useTestAlerts = () => {
  return useQuery(["testAlerts"], () => fetchTestAlerts());
};
