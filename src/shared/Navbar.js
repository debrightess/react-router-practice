import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <button>
        <Link to='/'>Home</Link>
      </button>
      <button>
        <Link to='/about'>About</Link>
      </button>
      <button>
        <Link to='/contact'>Contact</Link>
      </button>
    </nav>
  );
};

export default Navbar;
