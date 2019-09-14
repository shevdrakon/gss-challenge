import React from 'react';
import PropTypes from 'prop-types'

import cn from 'classnames';
import styles from './responsive.module.scss';

export const Container = ({children, className}) => {
  return <div className={cn(className, styles.container)}>{children}</div>
}

export const Row = ({children, className}) => {
  return <div className={cn(className, styles.row)}>{children}</div>
}

export const Column = ({children, className, xs, sm, md}) => {
  const classes = cn(
    styles.column,
    className,
    styles[`column__xs${xs}`],
    styles[`column__sm${sm}`],
    styles[`column__md${md}`],
  );

  return <div className={classes}>{children}</div>
}

Column.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
};

export const TableColumn = ({children, className}) => {
  return <col className={cn(className, styles.tableColumn)}>{children}</col>
}

TableColumn.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
};
