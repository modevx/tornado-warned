export const createContext = ({ reducer, dispatchReducerFuncs, initState }) => {
	const Context = React.createContext();
	const Dispatch = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = React.useReducer(reducer, initState);

		const actions = {};

		for (let key in dispatchReducerFuncs) {
			actions[key] = dispatchReducerFuncs[key](dispatch);
		}

		return (
			<Dispatch.Provider value={{ ...actions }}>
				<Context.Provider value={{ state }}>{children}</Context.Provider>
			</Dispatch.Provider>
		);
	};

	return { Context, Dispatch, Provider };
};
