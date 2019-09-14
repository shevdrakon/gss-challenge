import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import '../../styles/_globals.scss';

import cn from 'classnames';
import styles from './layout.module.scss';

const Layout = (props) => {
  const {children, className} = props;

  return (
    <div className={cn(styles.body, className)}>
      <Header />
      <div className={styles.body__content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Layout;
