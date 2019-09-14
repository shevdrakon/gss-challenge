import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import LoginCard from './login-card';

import layoutStyles from '../components/layout/layout.module.scss';
import styles from './login-page.module.scss';

const LoginPage = ({className}) => {
  return (
    <div className={cn(layoutStyles.body, styles.container, className)}>
      <div className={layoutStyles.body__content}>
        <LoginCard />
      </div>
    </div>
  )
};

LoginPage.propTypes = {
  className: PropTypes.string,
};

export default LoginPage;
