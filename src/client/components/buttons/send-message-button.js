import React from 'react';

import Button from '../../components/buttons/button';
import {PaperPlaneIcon} from '../../components/icons';

import cn from 'classnames';
import styles from './send-message-button.module.scss';

const SendMessageButton = (props) => {
  const {className, ...rest} = props;
  const classes = cn(styles.button, className);

  return (
    <Button className={classes} {...rest}>
      <PaperPlaneIcon className={styles.button__icon} />Send
    </Button>
  )
};

export default SendMessageButton;
