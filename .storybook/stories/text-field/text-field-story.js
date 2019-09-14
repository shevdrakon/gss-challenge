import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TextField from '../../../src/client/components/text-field/text-field';

import styles from './story.module.scss';

storiesOf('TextField', module)
  .add('basic', () => (
    <div className={styles.container}>
      <TextField
        label="Email Address"
        placeholder="Email address"
        onChange={action('change')}
        error="Email address cannot be blank"
      />
    </div>))
  .add('with debounce', () => (
    <div className={styles.container}>
      <TextField
        debounceTimeout={300}
        label="With debounce = 300"
        placeholder="Email address"
        onChange={action('change')}
      />
    </div>
  ))
  .add('disabled', () => (
    <div className={styles.container}>
      <TextField
        disabled
        label="Disabled TextField"
        placeholder="Email address"
        onChange={action('change')}
      />
    </div>
  ))
  .add('password', () => (
    <div className={styles.container}>
      <TextField
        label="Your password"
        placeholder="Your password"
        onChange={action('change')}
        type="password"
      />
    </div>));
