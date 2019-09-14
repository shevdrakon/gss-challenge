import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Message from '../../components/message/message';
import Button from '../../components/buttons/button';

import styles from './widget-complete.module.scss';

const Answer = (props) => {
  const {label, onClick} = props;

  const handleClick = () => {
    onClick && onClick(label);
  }

  return <Button className={styles.controls__button} onClick={handleClick}>
    {label}
  </Button>
}

const WidgetComplete = (props) => {
  const {data, className, onAnswer} = props;
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (value) => {
    setAnswered(true);
    onAnswer && onAnswer(value);
  };

  return <div className={className}>
    <Message type={Message.types.right}>
      We suggest to finish our conversation. Are You ok with that?
      {
        !answered && <div className={styles.controls}>
          {
            data.map(label => <Answer key={label}
                                      data-label={label}
                                      label={label}
                                      className={styles.controls__button}
                                      onClick={handleAnswer}
            />)
          }
        </div>
      }
    </Message>
  </div>
};

WidgetComplete.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  onAnswer: PropTypes.func,
};

export default WidgetComplete;
