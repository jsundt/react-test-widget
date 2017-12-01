import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = props => (
  <div className="col-xs-12">
    <label
      htmlFor={props.name}
      className="o-text--product u-display--block"
    >
      {props.description}
      <input
        className="e-input u-display--block u-width--full u-margin--b-50 u-margin--t-20"
        id={props.name}
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
    <p className="u-color--danger">{props.error}</p>
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
