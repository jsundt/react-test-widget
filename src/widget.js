import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

import App from './App';

let CharlieHRConfig = {};

export default {
  config: (config) => {
    CharlieHRConfig = { ...CharlieHRConfig, config };
  },
  widgets: {
    testWidget: {
      new: (config) => {
        const uid = uniqueid({ prefix: 'widget_id_' });

        return {
          render: (args) => {
            const widgetConfig = {
              ...CharlieHRConfig,
              ...config,
              ...args,
            };

            ReactDOM.render(
              <App
                uid={uid}
                title={widgetConfig.title}
              />,
              document.querySelector(config.selector),
            );
          },
          unmount: () => {
            ReactDOM.unmountComponentAtNode(document.querySelector(config.selector));
          },
        };
      },
    },
  },
};
