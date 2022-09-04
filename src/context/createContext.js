export const createContext = (reducer, dispatchActions, initState) => {
	const Context = React.createContext();
	const Dispatch = React.createContext();

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
			<Dispatch.Provider value={{ ...dispatchActions }}>
				<Context.Provider value={{ state }}>{children}</Context.Provider>
			</Dispatch.Provider>
		);
	};

	return { Context, Dispatch, Provider };
};
