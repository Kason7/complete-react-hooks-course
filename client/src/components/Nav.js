import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/lifecycle'>Lifecycle</Link>
      <Link to='/timer'>Timer</Link>
      <Link to='/fetch'>Fetch</Link>
      <Link to='/memo'>Memo</Link>
      <Link to='/measure'>Measure</Link>
    </nav>
  );
};

export default Nav;
