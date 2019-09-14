import React from 'react';
import {storiesOf} from '@storybook/react';

import Message from '../../../src/client/components/message/message';
import MessagesList from './massages-list';

import styles from './story.module.scss';

storiesOf('Message', module)
  .add('basic', () => (
    <div className={styles.container}>
      <Message>
        Some message styling demo here.
      </Message>
      <Message type={Message.types.right}>
        With inner html <strong>tags</strong>.
      </Message>
    </div>))
  .add('Messages list', () => (<MessagesList />));
