import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {messageTypes} from '../constants/message-types';
import {AppStoreContext} from '../contexts/AppStoreContext';

import ChatServiceMessage from './messages/chat-service-message';
import ChatSentMessage from './messages/chat-sent-message';
import ChatReceivedMessage from './messages/chat-received-message';
import WidgetMessage from './widgets/widget-message';

import cn from 'classnames';
import styles from './chat-messages.module.scss';

const messageComponentByTpe = {
  [messageTypes.service]: ChatServiceMessage,
  [messageTypes.sent]: ChatSentMessage,
  [messageTypes.received]: ChatReceivedMessage,
  [messageTypes.widget]: WidgetMessage,
};

const ChatMessages = (props) => {
  const {messages} = useContext(AppStoreContext);

  const {className} = props;
  const classes = cn(styles.chat__messages, className);

  return <div className={classes}>
    {
      messages.map(x => {
        const Component = messageComponentByTpe[x.type];
        return <Component key={x.id} className={styles.chat__message} item={x} />
      })
    }
  </div>
}

ChatMessages.propTypes = {
  className: PropTypes.string,
}

export default ChatMessages;
