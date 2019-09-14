import React from 'react';
import useThunkReducer from '../hooks/useThunkReducer';

const AppStoreContext = React.createContext();
const AppDispatchContext = React.createContext();

import {reducer, initialState} from '../store/reducer';

const AppStoreContextProvider = (props) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStoreContext.Provider value={state}>
        {props.children}
      </AppStoreContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export {AppStoreContext, AppDispatchContext, AppStoreContextProvider}
