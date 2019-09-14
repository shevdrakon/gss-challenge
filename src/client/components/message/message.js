import React from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames';
import styles from './message.module.scss';

const Message = (props) => {
  const {type, children, className, ...rest} = props;

  const classes = cn(
    styles.message,
    className,
    {
      [styles.message__left]: type === types.left,
      [styles.message__right]: type === types.right,
    });

  return (
    <div className={styles.row}>
      <div className={classes} {...rest}>
        {children}
      </div>
    </div>
  )
};

const types = (Message.types = {
  left: 'left',
  right: 'right',
});

Message.propTypes = {
  type: PropTypes.oneOf(Object.values(Message.types).map(x => x))
};

Message.defaultProps = {
  type: types.left,
};

export default Message;
