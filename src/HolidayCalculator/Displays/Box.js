import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
  if (props.error) {
    return null;
  }

  return (
    <div className="w-card u-text--center u-bg--silver u-padding--y-50 u-padding--x-25 u-pull--md-t-200">
      <h2 className="o-text--lead">{props.lead}</h2>
      <h1 className="o-text--headline u-margin--b-20">{props.headline}</h1>
      <p className="o-text--product">
        {props.icon}
        {props.text}
      </p>
    </div>
  );
};

Box.defaultProps = {
  lead: 'Lead',
  headline: 'Headline',
  text: 'text',
  error: false,
  icon: 'Icon',
};

Box.propTypes = {
  lead: PropTypes.node,
  headline: PropTypes.node,
  text: PropTypes.node,
  icon: PropTypes.node,
  error: PropTypes.bool,
};

export default Box;
