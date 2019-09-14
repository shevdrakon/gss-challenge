import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import cn from 'classnames';
import styles from './chat-service-message.module.scss';

const ChatServiceMessage = (props) => {
  const {item: {date, message}, className} = props;
  const classes = cn(styles.serviceMessage, className);
  const display = `${moment(date).format('L LT')} ${message}`;

  return <div className={classes}>
    {display}
  </div>
};


ChatServiceMessage.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    message: PropTypes.string,
  }),
};

export default ChatServiceMessage;
