import React, {useContext} from 'react';

import {sendMessage, sendCommand, setAnswer, signIn} from './actions';
import {AppDispatchContext} from '../contexts/AppStoreContext';

const bindActionCreators = (actionCreators, dispatch) => {
  const keys = Object.keys(actionCreators);
  const boundActionCreators = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        dispatch(actionCreator.apply(this, arguments));
      }
    }
  }
  return boundActionCreators
}


const connect = (WrappedComponent) => {
  const WithActions = (props) => {
    const dispatch = useContext(AppDispatchContext);

    const actionProps = bindActionCreators({
      sendMessage,
      sendCommand,
      setAnswer,
      signIn
    }, dispatch);

    return <WrappedComponent {...actionProps} {...props} />;
  };

  return WithActions;
};

export default connect;
