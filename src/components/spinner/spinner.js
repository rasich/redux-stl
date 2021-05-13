import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './spinner.css';

const Spinner = () => {
    return (
      <div className="spinner">
        <CircularProgress className='' />
      </div>
    )
}

export default Spinner;