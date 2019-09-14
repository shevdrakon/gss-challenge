import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from '../../../src/client/components/buttons/button';
import SendMessageButton from '../../../src/client/components/buttons/send-message-button';
import SendCommandButton from '../../../src/client/components/buttons/send-command-button';

import styles from './story.module.scss';

storiesOf('Buttons', module)
  .add('Primary button', () => (
    <div className={styles.container}>
      <Button onClick={action('click')}>Button</Button>
    </div>))
  .add('Primary disabled button', () => (
    <div className={styles.container}>
      <Button disabled onClick={action('disabled click')}>Disabled Button</Button>
    </div>
  ))
  .add('Controls button', () => (
    <div className={styles.container}>
      <div className={styles.container__button}>
        <SendMessageButton onClick={action('send button click')} />
      </div>
      <div className={styles.container__button}>
        <SendCommandButton onClick={action('command button click')} />
      </div>
    </div>
  ))
;
