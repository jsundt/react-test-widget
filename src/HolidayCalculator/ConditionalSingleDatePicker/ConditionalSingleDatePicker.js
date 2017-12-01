/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import ToggleButton from '../ToggleButton/ToggleButton';
import SingleDatePickerWrapper from '../SingleDatePicker/SingleDatePickerWrapper';

const ConditionalSingleDatePicker = (props) => {
  // const { date, onDateChange, hint } = props;

  const picker = () => {
    if (props.checked) {
      return (
        <SingleDatePickerWrapper
          id={props.id}
          date={props.date}
          onDateChange={props.onDateChange}
        />
      );
    }

    return null;
  };

  const hint = () => {
    if (props.hint !== '') {
      return <p className="hint o-text--note">{props.hint}</p>;
    }

    return null;
  };

  return (
    <div key={props.id} className="col-xs-12">
      <label htmlFor={`toggle-button-${props.id}`} className="o-text--product u-margin--b-20">
        {props.description}
        {hint()}
      </label>

      <div className="u-display--flex u-margin--b-50">
        <ToggleButton
          id={`toggle-button-${props.id}`}
          name={props.checkboxName}
          checked={props.checked}
          onChange={props.onChange}
        />
        {picker()}
        <p className="u-color--danger">{props.error}</p>
      </div>
    </div>
  );
};

ConditionalSingleDatePicker.defaultProps = {
  date: null,
  error: '',
  hint: '',
};

ConditionalSingleDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hint: PropTypes.string,
  date: momentPropTypes.momentObj,
  checked: PropTypes.bool.isRequired,
  checkboxName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default ConditionalSingleDatePicker;
