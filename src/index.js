// This bundle is used to Test widget in dev, available at localhost:3000

import React from 'react';
import ReactDOM from 'react-dom';

import TestWidget from './Widgets/Test/Test';

const CharlieHRConfig = {
  selector: '#widget',
  uid: 0,
  title: 'Test Config title',
};

ReactDOM.render(
  <TestWidget
    uid={CharlieHRConfig.uid}
    title={CharlieHRConfig.title}
  />,
  document.querySelector(CharlieHRConfig.selector),
);
