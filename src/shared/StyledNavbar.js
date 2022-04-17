import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav>
      <button>
        <NavLink to='/'>Home</NavLink>
      </button>
      <button>
        <NavLink to='/about'>About</NavLink>
      </button>
      <button>
        <NavLink to='/contact'>Contact</NavLink>
      </button>
    </nav>
  );
};

export default StyledNavbar;
