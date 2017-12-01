import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

// import './index.css';
import App from './App';

const CharlieHRConfig = {
  selector: '#root',
  uid: uniqueid({ prefix: 'widget_id_' }),
  title: 'Default Widget',
};

ReactDOM.render(
  <App
    uid={CharlieHRConfig.uid}
    title={CharlieHRConfig.title}
  />,
  document.querySelector(CharlieHRConfig.selector),
);
