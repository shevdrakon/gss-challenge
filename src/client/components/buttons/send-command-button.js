import React from 'react';

import Button from '../../components/buttons/button';
import {TerminalIcon} from '../../components/icons';

import cn from 'classnames';
import styles from './send-command-button.module.scss';

const SendCommandButton = (props) => {
  const {className, ...rest} = props;
  const classes = cn(styles.button, className);

  return (
    <Button className={classes} {...rest}>
      <TerminalIcon className={styles.button__icon} />
    </Button>
  )
};

export default SendCommandButton;
