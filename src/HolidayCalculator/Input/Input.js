import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = props => (
  <div className="col-xs-12">
    <label
      htmlFor={props.name}
      className="charliehr-input__label"
    >
      {props.description}
      <input
        className="charliehr-input"
        id={props.name}
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
    <p className="charliehr-color--danger">{props.error}</p>
  </div>
);

Input.defaultProps = {
  error: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
