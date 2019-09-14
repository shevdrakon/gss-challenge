import React from 'react';
import PropTypes from 'prop-types';

import {widgetTypes} from '../../constants/widget-types';
import WidgetComplete from './widget-complete';
import WidgetDate from './widget-date';
import WidgetMap from './widget-map';
import WidgetRate from './widget-rate';

import connect from '../../store/connect';

const widgetsMap = {
  [widgetTypes.date]: WidgetDate,
  [widgetTypes.complete]: WidgetComplete,
  [widgetTypes.map]: WidgetMap,
  [widgetTypes.rate]: WidgetRate,
};

const WidgetMessage = (props) => {
  const {item: {command}, setAnswer, className} = props;
  const {type} = command;

  const Component = widgetsMap[type];

  const handleAnswer = (value) => {
    setAnswer(value);
  }

  return <div>
    <Component className={className} {...command} onAnswer={handleAnswer} />
  </div>
};


WidgetMessage.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    command: PropTypes.shape({
      type: PropTypes.oneOf(Object.keys(widgetTypes)),
    }),
  }),
  setAnswer: PropTypes.func,
};

export default connect(WidgetMessage);
