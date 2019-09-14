import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Message from '../../components/message/message';

import styles from './chat-message.module.scss';

const ChatSentMessage = (props) => {
  const {item: {date, message, author}, className} = props;

  return <Message type={Message.types.left} className={className}>
    <div>
      {message}
    </div>
    <div className={styles.message__date}>
      {moment(date).format('L LT')} ({author})
    </div>
  </Message>
}

ChatSentMessage.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    message: PropTypes.string,
  }),
};

export default ChatSentMessage;
