/* eslint-disable */

import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';

import './HolidayCalculator.css';

import Input from './Input/Input';
import ConditionalDatePicker from './ConditionalSingleDatePicker/ConditionalSingleDatePicker';
import Box from './Displays/Box';
import TimeOffIcon from './Icons/TimeOff';


function yearStart() {
  return moment().startOf('year');
}

function yearEnd() {
  return moment().endOf('year');
}

function numberOfDaysBetween(startDate, endDate) {
  if ((startDate === null) || (endDate === null)) {
    return -1;
  }
  return endDate.diff(startDate, 'days') + 1;
}

function allowanceCalc(daysWorking, daysWorkingWeek, daysFullTimeAllowance, daysWorkedYear) {
  const dW = _.parseInt(daysWorking);
  const dWW = _.parseInt(daysWorkingWeek);
  const dFTA = _.parseInt(daysFullTimeAllowance);
  const fullTimeAllowance = (dW / dWW) * dFTA;
  const totalDaysYear = numberOfDaysBetween(yearStart(), yearEnd());

  if ((daysWorkedYear < 0) || (dW < 0) || (dWW < 0) || (dFTA < 0) ||
    (dW > 7) || (dWW > 7) || (dFTA > 365)) {
    return -1;
  }
  return ((daysWorkedYear / totalDaysYear) * fullTimeAllowance).toFixed(2);
}

function daysWorkedText(daysWorkedYear) {
  if (daysWorkedYear === 365) {
    return 'For the full year.';
  }

  return `Pro rated for ${daysWorkedYear} days of employment.`;
}

function HolidayCalculatorResult(props) {
  const daysWorkedYear = numberOfDaysBetween(props.startDate, props.endDate);
  const daysAllowance = allowanceCalc(
    props.daysWorking,
    props.daysWorkingWeek,
    props.daysFullTimeAllowance,
    daysWorkedYear,
  );

  const error = ((daysWorkedYear < 0) || (daysAllowance < 0) ||
    Number.isNaN(daysAllowance) || !isFinite(daysAllowance));

  const headlineJSX = <span><span className="u-text--bold">{daysAllowance}</span> days</span>;

  return (
    <Box
      lead={`The holiday entitlement for ${new Date().getFullYear()} is`}
      headline={headlineJSX}
      text={daysWorkedText(daysWorkedYear)}
      icon={TimeOffIcon()}
      error={error}
    />
  );
}

HolidayCalculatorResult.defaultProps = {
  startDate: yearStart(),
  endDate: yearEnd(),
};

HolidayCalculatorResult.propTypes = {
  startDate: momentPropTypes.momentObj,
  endDate: momentPropTypes.momentObj,
  daysWorking: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  daysWorkingWeek: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  daysFullTimeAllowance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function handleErrorState(value, min, max) {
  const v = _.parseInt(value);
  let r = '';

  if ((v < min) || (v > max) || Number.isNaN(v)) {
    r += `Value must be between ${min} and ${max}.`;
  }
  return r;
}

function handleDateErrorState(date) {
  let r = '';
  const currentYear = new Date().getFullYear();

  if (!date || (!date.isValid()) || (date.year() !== currentYear)) {
    r += `Date must be a valid date of year ${currentYear}.`;
  }
  return r;
}


export default class HolidayCalculator extends Component {
  state = {
    daysWorking: 5,
    daysWorkingWeek: 5,
    daysFullTimeAllowance: 28,
    startDate: yearStart(),
    endDate: yearEnd(),
    startDateChecked: false,
    endDateChecked: false,
  };

  handleInputChange = ({ target }) => {
    const {
      type,
      checked,
      value,
      name,
    } = target;

    const v = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: v,
    });
  }

  render() {
    return (
      <div className="u-bg--white u-padding--b-50">
        <div className="container">
          <section className="row">
            <div className="col-xs-12 col-md-6">
              <div className="w-card u-bg--white-115 u-padding--y-25 u-padding--x-25 u-pull--md-t-200">
                <h1 className="o-text--body u-text--bold u-color--charcoal">{this.props.title}</h1>

                <form className="row">
                  <Input
                    name="daysWorking"
                    description={this.props.working_days_label}
                    value={this.state.daysWorking}
                    error={handleErrorState(this.state.daysWorking, 0, 7)}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    name="daysWorkingWeek"
                    description={this.props.working_week_label}
                    value={this.state.daysWorkingWeek}
                    error={handleErrorState(this.state.daysWorkingWeek, 1, 7)}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    name="daysFullTimeAllowance"
                    description={this.props.allowance_label}
                    value={this.state.daysFullTimeAllowance}
                    error={handleErrorState(this.state.daysFullTimeAllowance, 0, 365)}
                    onChange={this.handleInputChange}
                  />

                  <ConditionalDatePicker
                    id="start-date"
                    checkboxName="startDateChecked"
                    checked={this.state.startDateChecked}
                    description={this.props.has_start_date_label}
                    hint={this.props.has_start_date_hint}
                    date={this.state.startDate}
                    error={handleDateErrorState(this.state.startDate)}
                    onChange={this.handleInputChange}
                    onDateChange={startDate => this.setState({ startDate })}
                  />

                  <ConditionalDatePicker
                    id="end-date"
                    checkboxName="endDateChecked"
                    checked={this.state.endDateChecked}
                    description={this.props.has_end_date_label}
                    hint={this.props.has_end_date_hint}
                    date={this.state.endDate}
                    error={handleDateErrorState(this.state.endDate)}
                    onChange={this.handleInputChange}
                    onDateChange={endDate => this.setState({ endDate })}
                  />
                </form>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <HolidayCalculatorResult
                startDate={this.state.startDateChecked ? this.state.startDate : yearStart()}
                endDate={this.state.endDateChecked ? this.state.endDate : yearEnd()}
                daysWorking={this.state.daysWorking}
                daysWorkingWeek={this.state.daysWorkingWeek}
                daysFullTimeAllowance={this.state.daysFullTimeAllowance}
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <div className="w-card u-bg--white u-padding--y-25 u-padding--x-25">
                <h2 className="o-text--product u-text--bold">{this.props.blurb_title}</h2>
                <p className="o-text--body">{this.props.blurb_text_1}</p>
                <p className="o-text--body">{this.props.blurb_text_2}</p>
                <ul>
                  {this.props.blurb_items.map((item, index) => (
                    <li className="o-text--body" key={index}>{item}</li>
                  ))}
                </ul>
                <p className="o-text--body">{this.props.blurb_text_3}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

HolidayCalculator.propTypes = {
  title: PropTypes.string.isRequired,
  working_days_label: PropTypes.string.isRequired,
  working_week_label: PropTypes.string.isRequired,
  allowance_label: PropTypes.string.isRequired,
  has_start_date_label: PropTypes.string.isRequired,
  has_start_date_hint: PropTypes.string.isRequired,
  has_end_date_label: PropTypes.string.isRequired,
  has_end_date_hint: PropTypes.string.isRequired,
  blurb_title: PropTypes.string.isRequired,
  blurb_text_1: PropTypes.string.isRequired,
  blurb_text_2: PropTypes.string.isRequired,
  blurb_items: PropTypes.array.isRequired,
  blurb_text_3: PropTypes.string.isRequired,
};
