import {configure} from '@storybook/react';

import './storybook.scss';

const loadStories = () => {
  require('./stories/index');
};

configure(loadStories, module);
