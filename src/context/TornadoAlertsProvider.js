import { createContext } from "./createContext";

export const TornadoAlertsProvider = createContext(
	reducer,
	dispatchers,
	initState
);
const TornadoAlertsReducer = (state,action) => {
	switch() {}
}
const useTornadoAlertsContext = useContext(TornadoAlertsContext);
const useTornadoAlertsDispatch = useContext(TornadoAlertsDispatch);
