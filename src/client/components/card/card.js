import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './card.module.scss';

const Card = (props) => {
  const {className, children} = props;

  return <div className={cn(styles.card, className)}>
    {children}
  </div>
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
