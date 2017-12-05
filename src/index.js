import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const CharlieHRConfig = {
  selector: '#widget',
  uid: 0,
  title: 'Test Config title',
};

ReactDOM.render(
  <App
    uid={CharlieHRConfig.uid}
    title={CharlieHRConfig.title}
  />,
  document.querySelector(CharlieHRConfig.selector),
);
