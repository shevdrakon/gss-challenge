import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import connect from '../store/connect';
import Content from '../components/layout/content';
import Card from '../components/card/card';
import TextField, {UncontrolledTextField} from '../components/text-field/text-field';
import Button from '../components/buttons/button';

import styles from './login-card.module.scss';
import useLogin from '../hooks/useLogin';

const LoginCard = (props) => {
  const {signIn} = props;

  const {isAuthenticated} = useLogin();
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');

  const handleLoginButtonClick = () => {
    const loginValue = login.trim();

    if (loginValue) signIn(loginValue);
    if (!loginValue) setError('Please provide a value');
  };

  if (isAuthenticated)
    return <Redirect to="/" />

  return <Content className={styles.container}>
    <Card className={styles.login__card}>
      <header className={styles.login__card__header}>
        <h4 className={styles.login__card__title}>Login</h4>
      </header>
      <TextField label="Your email address"
                 placeholder="you@example.com"
                 value={login}
                 error={error}
                 onChange={setLogin} />
      <UncontrolledTextField label="Your password" placeholder="Your password" type="password" />
      <Button className={styles.login__button} onClick={handleLoginButtonClick}>Login</Button>
    </Card>
  </Content>
};

export default connect(LoginCard);
