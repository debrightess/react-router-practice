import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <h4>Page Not Found</h4>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Error;
