import React from "react";

// -- CONSTANTS
const TYPES = {
  GET_LOCAL_STORAGE: "get_ls",
  GET_SESSION_STORAGE: "get_ss",
  SET_LOCAL_STORAGE: "set_ls",
  SET_SESSION_STORAGE: "set_ss",
  REMOVE_FROM_LOCAL_STORAGE: "remove_ls",
  REMOVE_FROM_SESSION_STORAGE: "remove_ss",
};

// -- CONTEXTS
const StateContext = React.createContext();
const DispatchContext = React.createContext();

// -- ACTIONS MAP (reducer)
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.GET_LOCAL_STORAGE: {
      return localStorage.getItem(action.payload);
    }
    case TYPES.GET_SESSION_STORAGE: {
      return sessionStorage.getItem(action.payload);
    }
    case TYPES.SET_LOCAL_STORAGE: {
      return localStorage.setItem(action.payload);
    }
    case TYPES.SET_SESSION_STORAGE: {
      return sessionStorage.setItem(action.payload);
    }
    case TYPES.REMOVE_LOCAL_STORAGE: {
      return localStorage.removeItem(action.payload);
    }
    case TYPES.REMOVE_SESSION_STORAGE: {
      return sessionStorage.removeItem(action.payload);
    }
    default: {
      throw new Error("Invalid action type.");
    }
  }
};

// -- SERVICE (Context) PROVIDER
export const LocalSessionStorageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {});

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// -- USE HOOKS
export const useLocalSessionStorageState = () => {
  const stateContext = React.useContext(StateContext);
  if (stateContext === undefined) {
    throw new Error("CONTEXT ERROR >> context must be used inside provider...");
  }
  return stateContext;
};
export const useLocalSessionStorageDispatch = () => {
  const dispatchContext = React.useContext(DispatchContext);
  if (dispatchContext === undefined) {
    throw new Error(
      "CONTEXT ERROR >> context must be used inside dispatch provider..."
    );
  }
  return dispatchContext;
};
