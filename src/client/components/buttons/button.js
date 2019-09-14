import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './button.module.scss';

const Button = (props) => {
  const {disabled, children, className, ...rest} = props;

  return <button className={cn(className, styles.button, styles.button__primary)}
                 disabled={disabled} {...rest}>
    {children}
  </button>;
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

export default Button;
