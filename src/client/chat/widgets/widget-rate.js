import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Message from '../../components/message/message';
import Button from '../../components/buttons/button';

import styles from './widget-rate.module.scss';
import generateRange from '../../utils/generate-range';

const Answer = (props) => {
  const {value, onClick} = props;

  const handleClick = () => {
    onClick && onClick(value);
  }

  return <Button className={styles.controls__button} onClick={handleClick}>{value}</Button>
};

const WidgetRate = (props) => {
  const {data: [min, max], className, onAnswer} = props;
  const [answered, setAnswered] = useState(false);

  const keys = generateRange(min, max);

  const handleAnswer = (value) => {
    setAnswered(true);
    onAnswer && onAnswer(value);
  };

  return <div className={className}>
    <Message type={Message.types.right}>
      <div className={styles.title}>Can You rate the app?</div>
      {
        !answered && <div className={styles.controls}>
          {keys.map(key => <Answer key={key} value={key} onClick={handleAnswer} />)}
        </div>
      }
    </Message>
  </div>
};

WidgetRate.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.number),
  onAnswer: PropTypes.func,
};

export default WidgetRate;
