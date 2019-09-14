import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {useUncontrolled} from 'uncontrollable';
import useDebounce from '../../hooks/useDebounce';

import styles from './text-field.module.scss';

const TextField = (props) => {
  const {
    value = '',
    disabled,
    label,
    placeholder = '',
    error,
    debounceTimeout = null,
    onChange,
    type = 'text',
    ...rest
  } = props;

  const [inputText, setInputText] = useState(value);
  useDebounce(onChange, debounceTimeout, inputText);

  useEffect(() => {
    setInputText(value);
  }, [value])

  const handleInputChange = (e) => {
    e.stopPropagation();

    if (disabled || !onChange) return;

    const nextValue = e.target.value;
    setInputText(nextValue);

    if (!debounceTimeout)
      onChange(nextValue);
  };

  const inputProps = {
    disabled,
    placeholder,
    onChange: handleInputChange,
    value: inputText,
    type,
  };

  return (
    <div {...rest}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...inputProps} />
      <span className={styles.error}>{error}</span>
    </div>
  )
}

TextField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  debounceTimeout: PropTypes.number,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password']),
};

export default TextField;

export const UncontrolledTextField = props => {
  const controlledProps = useUncontrolled(props, {
    value: 'onChange',
  })

  return <TextField {...controlledProps} />
}
