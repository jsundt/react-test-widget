import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
  if (props.error) {
    return null;
  }

  return (
    <section className="charliehr-card charliehr-text--center charliehr-bg--silver u-pull--md-t-200">
      <h2 className="charliehr-text--lead">{props.lead}</h2>
      <h1 className="charliehr-text--headline u-margin--b-20">{props.headline}</h1>
      <p className="charliehr-text--body">
        {props.icon}
        {props.text}
      </p>
    </section>
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
