import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Layout from '../../../src/client/components/layout/layout';

import {
  Container,
  Row,
  Column
} from '../../../src/client/components/layout/responsive';

import {AppStoreContext, AppDispatchContext} from '../../../src/client/contexts/AppStoreContext';

import LoginPage from '../../../src/client/login/login-page';
import ChatPage from '../../../src/client/chat/chat-page';

import styles from './story.module.scss';
import {messageTypes} from "../../../src/client/constants/message-types";

storiesOf('Layout', module)
  .add('Responsive rendering', () => (
    <Container>
      <Row>
        <Column xs={12} sm={6} md={8}>
          <div className={styles.cell}>
            md: 8, sm: 6, xs: 12
          </div>
        </Column>
        <Column xs={6} md={4}>
          <div className={styles.cell}>
            md: 4, xs: 6
          </div>
        </Column>
      </Row>
      <Row>
        <Column sm={4}>
          <div className={styles.cell}>
            sm: 4
          </div>
        </Column>
        <Column sm={8}>
          <div className={styles.cell}>
            <Row>
              <Column xs={6}>
                <div className={styles.cell}>
                  xs: 6
                </div>
              </Column>
              <Column xs={6}>
                <div className={styles.cell}>
                  xs: 6
                </div>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  ))
  .add('LoginPage', () => (
    <AppDispatchContext.Provider value={action('dispatch')}>
      <AppStoreContext.Provider value={{login: null}}>
        <LoginPage className={styles.layout} />
      </AppStoreContext.Provider>
    </AppDispatchContext.Provider>
  ))
  .add('ChatPage', () => (
    <AppDispatchContext.Provider value={action('dispatch')}>
      <AppStoreContext.Provider value={{
        messages: [
          {id: 1, type: messageTypes.sent, message: 'Hello!', date: new Date(), author: 'VadimS'},
          {id: 2, type: messageTypes.sent, message: 'Why u keeping silence?!?', date: new Date(), author: 'VadimS'},
          {id: 3, type: messageTypes.received, message: 'Im here, stay cool! =)', date: new Date(), author: 'Bot'}
        ]
      }}>
        <ChatPage />
      </AppStoreContext.Provider>
    </AppDispatchContext.Provider>
  ));
