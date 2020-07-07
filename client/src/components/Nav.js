import React from 'react';
import { Link } from 'react-router-dom';

// Import styling
import '../App.scss';

export const Nav = () => {
  return (
    <nav className='nav-links'>
      <Link to='/'>Home</Link>
      <Link to='/lifecycle'>Lifecycle</Link>
      <Link to='/timer'>Timer</Link>
      <Link to='/fetch'>Fetch</Link>
      <Link to='/memo'>Memo</Link>
      <Link to='/measure'>Measure</Link>
      <Link to='/custom'>Custom Fetch</Link>
    </nav>
  );
};

export default Nav;
