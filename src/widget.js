// This bundle is used to generate the embedable JS of a widget

import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

import TestWidget from './Widgets/Test/Test';

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
              <TestWidget
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
