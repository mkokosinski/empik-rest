import React from 'react';
import PropTypes from 'prop-types';

import './errorPage.scss';

const ErrorPage = ({ error }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className='errorPage'>
      <div>Ups, We have a problem:</div>

      <div>{error}</div>

      <button onClick={refreshPage}>Try Again</button>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.string,
};

export default ErrorPage;
