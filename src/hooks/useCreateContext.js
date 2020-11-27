import React, {createContext, useContext, useReducer} from "react";

export const useCreateContext = (reducer, initialState) => {
  const StateContext = createContext(initialState);
  const DispatchContext = createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  const useStateContext = () => useContext(StateContext);
  const useDispatchContext = () => useContext(DispatchContext);
  return {useStateContext, useDispatchContext, Provider};
};
