import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='errorPage'>
      <div>404 Page not found!</div>

      <button onClick={goToHomePage}>Go to main page</button>
    </div>
  );
};

export default Page404;
