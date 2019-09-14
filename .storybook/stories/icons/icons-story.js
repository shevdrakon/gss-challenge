import React from 'react';
import {storiesOf} from '@storybook/react';

import IconsList from './icons-list';
import styles from './story.module.scss';

storiesOf('Icons', module)
  .add('Icons list', () => (
    <div className={styles.container}>
      <IconsList />
    </div>)
  );
