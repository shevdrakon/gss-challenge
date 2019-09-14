import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ChatPage from './chat/chat-page';
import LoginPage from './login/login-page';

import {AppStoreContextProvider} from './contexts/AppStoreContext';
import PrivateRoute from './components/routes/private-route';

const Root = () => {
  return (
    <Router>
      <div>
        <AppStoreContextProvider>
          <PrivateRoute path="/" exact component={ChatPage} />
          <Route path="/login" component={LoginPage} />
        </AppStoreContextProvider>
      </div>
    </Router>
  );
};

export default Root;
