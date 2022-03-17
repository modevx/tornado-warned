import { useQuery } from "react-query";
import { fetchActiveAlerts } from "./requests";

export const useActiveAlerts = () => {
  return useQuery(["activeAlerts"], () => fetchActiveAlerts());
};
