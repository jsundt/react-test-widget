import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

// import './index.css';
import App from './HolidayCalculator/HolidayCalculator';

const CharlieHRConfig = {
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

ReactDOM.render(
  <App
    uid={CharlieHRConfig.uid}
    title={CharlieHRConfig.title}
    working_days_label={CharlieHRConfig.working_days_label}
    working_week_label={CharlieHRConfig.working_week_label}
    allowance_label={CharlieHRConfig.allowance_label}
    has_start_date_label={CharlieHRConfig.has_start_date_label}
    has_start_date_hint={CharlieHRConfig.has_start_date_hint}
    has_end_date_label={CharlieHRConfig.has_end_date_label}
    has_end_date_hint={CharlieHRConfig.has_end_date_hint}
    blurb_title={CharlieHRConfig.blurb_title}
    blurb_text_1={CharlieHRConfig.blurb_text_1}
    blurb_text_2={CharlieHRConfig.blurb_text_2}
    blurb_items={CharlieHRConfig.blurb_items}
    blurb_text_3={CharlieHRConfig.blurb_text_3}
  />,
  document.querySelector(CharlieHRConfig.selector),
);
