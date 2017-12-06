// This bundle is used to generate the embedable JS of a widget

import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

import TestWidget from './Widgets/Test/Test';

let CharlieHRConfig = {};

const CharlieHR = {
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
    setup: (elementID) => {
      // Add widget css to page
      const styles = document.createElement('link');
      styles.href = 'https://s3-eu-west-1.amazonaws.com/charlie-production/downloads/widget.css';
      styles.type = 'text/css';
      styles.rel = 'stylesheet';

      document.getElementsByTagName('head')[0].appendChild(styles);

      // Setup wrapper
      const widgetWrapper = document.createElement('div');
      const wrapperID = 'TestWrapperID';
      widgetWrapper.id = wrapperID;

      const script = document.getElementById(elementID);
      script.parentNode.insertBefore(widgetWrapper, script);

      // Setup a new widget
      const widget = CharlieHR.widgets.testWidget.new({ selector: `#${wrapperID}` });
      widget.render();
    },
  },
};

export default CharlieHR;
