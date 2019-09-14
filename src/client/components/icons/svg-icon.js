import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  const {viewBox, children, size, ...rest} = props;

  return (
    <svg style={{height: size}} {...rest} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  )
};

Icon.propTypes = {
  viewBox: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.node,
};

Icon.defaultProps = {
  size: 24,
}

export default Icon;
