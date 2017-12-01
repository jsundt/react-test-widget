import React from 'react';
import PropTypes from 'prop-types';

function SvgSwitcher() {
  return (
    <svg viewBox="0 0 50 50" className="charliehr-icon">
      <title>Toggle switch Icon</title>
      <path className="onoff_bg" d="M33.3,36.6H17.1c-6.4,0-11.6-5.2-11.6-11.6v0c0-6.4,5.2-11.6,11.6-11.6h16.2c6.4,0,11.6,5.2,11.6,11.6v0 C44.9,31.4,39.7,36.6,33.3,36.6z" />

      <polyline className="onoff_stroke" points="21.4,21.6 16.4,28.4 13,25.9  " />
      <line className="onoff_stroke" x1="30.2" y1="21.8" x2="36.5" y2="28.2" />
      <line className="onoff_stroke" x1="36.5" y1="21.8" x2="30.2" y2="28.2" />

      <circle className="onoff_check" cx="33.3" cy="25" r="8.1" />
    </svg>
  );
}

const ToggleButton = props => (
  <div className="charliehr-pos--relative">
    <input
      className="charliehr-radio-input"
      id={props.id}
      name={props.name}
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
    />
    <SvgSwitcher />
  </div>
);

ToggleButton.defaultProps = {
  checked: false,
};

ToggleButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ToggleButton;
