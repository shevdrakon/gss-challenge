import {messageTypes} from '../constants/message-types';

const generateId = () => new Date().getTime();

export const initialState = {
  login: null,
  messages: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        login: action.payload
      }
    }

    case 'SOCKET_CONNECTED': {
      const nextMessage = {
        id: generateId(),
        date: new Date(),
        message: 'Connected',
        type: messageTypes.service
      };

      return {
        ...state,
        messages: [...state.messages, nextMessage]
      };
    }

    case 'MESSAGE_SENT':
    case 'ANSWER_SET': {
      const nextMessage = {
        id: generateId(),
        date: new Date(),
        message: action.payload,
        type: messageTypes.sent,
        author: state.login,
      };

      return {
        ...state,
        messages: [...state.messages, nextMessage]
      };
    }

    case 'SOCKET_MESSAGE_RECEIVED': {
      const {author, message} = action.payload;
      const nextMessage = {
        id: generateId(),
        date: new Date(),
        message,
        author,
        type: messageTypes.received,
      };

      return {
        ...state,
        messages: [...state.messages, nextMessage]
      };
    }

    case 'SOCKET_WIDGET_RECEIVED': {
      const {author, command} = action.payload;
      const nextMessage = {
        id: generateId(),
        date: new Date(),
        command,
        author,
        type: messageTypes.widget,
      }

      return {
        ...state,
        messages: [...state.messages, nextMessage]
      };
    }

    default: {
      throw new Error(`Unknown action : ${action.type}`);
    }
  }
}
