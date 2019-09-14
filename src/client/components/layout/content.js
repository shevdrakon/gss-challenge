import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './content.module.scss';

const Content = (props) => {
  const {className} = props;
  const classes = cn(styles.content, className);

  return <div className={classes}>
    {props.children}
  </div>
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Content;
