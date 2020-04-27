import React from 'react';

import './spinner.styles.scss';

const Spinner = () => (
  <div className='spinner-container'>
    <div className="disk-spinner-wrapper"><div className="spinner">
      <div><div></div><div></div></div>
    </div></div>
  </div>
);

export default Spinner;