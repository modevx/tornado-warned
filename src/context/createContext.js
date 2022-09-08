export const createContext = (reducer, dispatchActions, initState) => {
	const StateContext = React.createContext();
	const DispatchContext = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initState);

		const actions = {};

		/**
		 * {
		 * 		functionName: functionName(dispatch)
		 * }
		 */

		for (let key in dispatchActions) {
			actions[key] = dispatchActions[key](dispatch);
		}

		return (
			<DispatchContext.Provider value={{ ...dispatchActions }}>
				<StateContext.Provider value={{ state }}>
					{children}
				</StateContext.Provider>
			</DispatchContext.Provider>
		);
	};

	return { StateContext, DispatchContext, Provider };
};
