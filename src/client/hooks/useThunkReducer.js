import React, {useReducer, useEffect} from 'react';

import * as Actions from '../store/actions';
import ChatService from '../api/ChatService';

const service = new ChatService((window.appConfig || {}).chatUrl);

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = action => {
    if (typeof action === 'function') {
      return action(dispatch, state, service);
    }

    return dispatch(action);
  };

  useEffect(() => {
    service.connect().then(thunkDispatch(Actions.connected()));
    service.onMessage(message => thunkDispatch(Actions.receiveMessage(message)));
    service.onCommand(command => thunkDispatch(Actions.receiveWidget(command)));

    return () => service.disconnect();
  }, []);

  return [state, thunkDispatch];
}

export default useThunkReducer;
