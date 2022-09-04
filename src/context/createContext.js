export const createContext = (reducer, dispatchActions, initState) => {
	const StateContext = React.createContext();
	const DispatchContext = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initState);

		const actions = {};

		// every passed dispatch action becomes key in new actions {}
		// dispatch gets passed as callback to newly assigned action funcs
		for (let key in dispatchActions) {
			actions[key] = dispatchActions[key](dispatch);
		}

		return (
			// return separate providers to cut down on..
			// ..re-renders from dispatch-only components
			<DispatchContext.Provider value={{ ...dispatchActions }}>
				<StateContext.Provider value={{ state }}>
					{children}
				</StateContext.Provider>
			</DispatchContext.Provider>
		);
	};

	return { StateContext, DispatchContext, Provider };
};
