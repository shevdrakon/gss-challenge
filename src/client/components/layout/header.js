import React from 'react';
import Content from './content';

import styles from './header.module.scss';
import {UserCircleIcon} from "../icons";
import useLogin from '../../hooks/useLogin';

const Header = () => {
  const {login} = useLogin();

  return (
    <header className={styles.header}>
      <Content>
        <h2 className={styles.header__title}>
          <span>Global Scale Solutions GmbH</span>
          <div className={styles.header__login}>
            Welcome back, {login}! <UserCircleIcon className={styles.header__login__avatar} />
          </div>
        </h2>
      </Content>
    </header>
  )
};

export default Header;
