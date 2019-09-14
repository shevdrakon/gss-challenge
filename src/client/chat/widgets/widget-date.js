import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Message from '../../components/message/message';
import Button from '../../components/buttons/button';

import styles from './widget-date.module.scss';
import generateDayRange from "../../utils/generate-day-range";

const Answer = (props) => {
  const {value, onClick} = props;

  const handleClick = () => {
    onClick && onClick(value);
  };

  return <Button className={styles.controls__button} onClick={handleClick}>{value}</Button>
}
const WidgetDate = (props) => {
  const {data, className, onAnswer} = props;
  const [answered, setAnswered] = useState(false);
  const dates = generateDayRange(data);

  const handleAnswer = (value) => {
    setAnswered(true);
    onAnswer && onAnswer(value);
  };

  return <div className={className}>
    <Message type={Message.types.right}>
      <div className={styles.title}>
        We are looking forward to meet you! What day do You prefer?
      </div>
      {
        !answered && <div className={styles.controls}>
          {
            dates.map(date => <Answer key={date} onClick={handleAnswer} value={date.format('dddd')} />)
          }
        </div>
      }
    </Message>
  </div>
};

WidgetDate.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
  onAnswer: PropTypes.func,
};

export default WidgetDate;
