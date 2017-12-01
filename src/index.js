import React from 'react';
import ReactDOM from 'react-dom';

import uniqueid from 'uniqueid';

// import './index.css';
import App from './HolidayCalculator/HolidayCalculator';

const CharlieHRConfig = {
  selector: '#root',
  uid: uniqueid({ prefix: 'widget_id_' }),
  title: 'Default Widget',
  working_days_label: 'working days',
  working_week_label: 'working week',
  allowance_label: 'allowance',
  has_start_date_label: 'has start date',
  has_start_date_hint: 'has start date hint',
  has_end_date_label: 'has end date',
  has_end_date_hint: 'has end date hint',
  blurb_title: 'blurb title',
  blurb_text_1: 'text 1',
  blurb_text_2: 'text 2',
  blurb_items: ['text items', 'text items 2'],
  blurb_text_3: 'text 3',
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
