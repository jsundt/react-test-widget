import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

// import './index.css';
import HolidayCalculator from './HolidayCalculator/HolidayCalculator';

let CharlieHRConfig = {
  selector: '#widget',
  uid: uniqueid({ prefix: 'widget_id_' }),
  title: 'Use this holiday entitlement calculator to work out employee holiday allowances',
  working_days_label: 'How many days a week does this employee work?',
  working_week_label: 'How many days are in a full time working week for your company?',
  allowance_label: 'What is your holiday entitlement for a full time employee?',
  has_start_date_label: 'Did this team member start part way through the holiday year?',
  has_start_date_hint: 'For pro rata holiday calculation.',
  has_end_date_label: 'Is this team member leaving part way through the holiday year?',
  has_end_date_hint: 'For pro rata holiday calculation.',
  blurb_title: 'Get the answers you need quickly',
  blurb_text_1: 'This annual leave calculator will help any founder, employer, or HR professional quickly work out the holiday entitlement for an employee.',
  blurb_text_2: 'Use the holiday entitlement calculator to work out:',
  blurb_items: ['Pro-rated annual leave entitlements for part time staff.', 'Pro-rated holiday allowances for team members beginning or ending their employment in the middle of the year.'],
  blurb_text_3: 'If you need to work out payment in lieu of notice for someone leaving their job, use the holiday pay calculator instead.',
};

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
              <HolidayCalculator
                uid={uid}
                title={widgetConfig.title}
                working_days_label={widgetConfig.working_days_label}
                working_week_label={widgetConfig.working_week_label}
                allowance_label={widgetConfig.allowance_label}
                has_start_date_label={widgetConfig.has_start_date_label}
                has_start_date_hint={widgetConfig.has_start_date_hint}
                has_end_date_label={widgetConfig.has_end_date_label}
                has_end_date_hint={widgetConfig.has_end_date_hint}
                blurb_title={widgetConfig.blurb_title}
                blurb_text_1={widgetConfig.blurb_text_1}
                blurb_text_2={widgetConfig.blurb_text_2}
                blurb_items={widgetConfig.blurb_items}
                blurb_text_3={widgetConfig.blurb_text_3}
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
