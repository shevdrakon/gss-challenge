import React from 'react';

import * as icons from '../../../src/client/components/icons';
import styles from './story.module.scss';

const IconRow = (props) => {
  const {name, component: Icon, ...rest} = props;

  return (
    <div className={styles.icon__row}>
      <span className={styles.icon__title}>
        {name}
      </span>
      <div>
        <Icon {...rest} />
      </div>
    </div>
  )
};

const IconsList = () => {
  const iconsList = Object.entries(icons);

  return (
    <>
      {iconsList.map(([name, component]) => <IconRow key={name} name={name} component={component} />)}
    </>
  );
};

export default IconsList;
