import React, {useContext} from "react";
import {createContext, useReducer} from "react";
import {initialState, AppReducer} from "./appReducer";
const noop = () => {};

const AppContext = createContext({
  state: initialState,
  dispatch: noop
});

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
