/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import omit from 'lodash/omit';

import 'react-dates/initialize';
import { SingleDatePicker, SingleDatePickerShape, OrientationShape, anchorDirectionShape, SingleDatePickerPhrases } from 'react-dates';
import './single_date_picker_wrapper.scss';


const propTypes = {
  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,

  ...omit(SingleDatePickerShape, [
    'date',
    'onDateChange',
    'focused',
    'onFocusChange',
  ]),
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  initialDate: null,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  customInputIcon: null,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: OrientationShape,
  anchorDirection: anchorDirectionShape,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day presentation and interaction related props
  renderDay: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: date => date.year() !== new Date().getFullYear(),
  isDayHighlighted: () => {},

  // internationalization props
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: SingleDatePickerPhrases,
};

class SingleDatePickerWrapper extends Component {
  state = {
    focused: this.props.autoFocus,
  }

  onDateChange = this.props.onDateChange;

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  }

  render() {
    const { focused } = this.state;

    // autoFocus and initialDate are helper props for the example wrapper but are not
    // props on the SingleDatePicker itself and thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocus',
      'initialDate',
    ]);

    return (
      <SingleDatePicker
        {...props}
        id="date_input"
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
