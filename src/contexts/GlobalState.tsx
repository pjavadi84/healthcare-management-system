import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface State {
  // Define your state properties here
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  // Initialize your state here
};

const GlobalStateContext = createContext<State | undefined>(undefined);
// to find these what they return..more granularity into what can be definded to be a global context..ultimate state: To me...The unicorn homepage of all"
debugger
const DispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);
debugger

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Define your state transitions here
    default:
      return state;
  }
};

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): State => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const useDispatch = (): React.Dispatch<Action> => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useDispatch must be used within a GlobalStateProvider');
  }
  return context;
};
