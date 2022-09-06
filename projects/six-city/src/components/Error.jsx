import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return(
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Назад тебе</Link>
    </>
  )
};

export default Error;
