export const signIn = (login) => {
  return {
    type: 'SIGN_IN',
    payload: login,
  }
}

export const sendMessage = (message) => {
  return (dispatch, state, service) => {
    const {login} = state;

    dispatch({
      type: 'MESSAGE_SENT',
      payload: message,
    });

    service.sendMessage({author: login, message});
  }
}

export const setAnswer = (value) => {
  return {
    type: 'ANSWER_SET',
    payload: value.toString(),
  };
}

export const sendCommand = () => {
  return (dispatch, state, service) => {
    service.sendCommand();
  }
}

export const connected = () => {
  return {
    type: 'SOCKET_CONNECTED',
  }
}

export const receiveMessage = ({author, message}) => {
  return {
    type: 'SOCKET_MESSAGE_RECEIVED',
    payload: {
      author,
      message,
    }
  }
}

export const receiveWidget = ({author, command}) => {
  return {
    type: 'SOCKET_WIDGET_RECEIVED',
    payload: {
      author,
      command,
    }
  }
}
