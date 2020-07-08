import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styling
import '../App.scss';

const activeNavStyle = {
  color: 'green',
};

export const Nav = () => {
  return (
    <nav className='nav-links'>
      <NavLink activeStyle={activeNavStyle} exact to='/'>
        Home
      </NavLink>
      <NavLink activeStyle={activeNavStyle} exact to='/lifecycle'>
        Lifecycle
      </NavLink>
      <NavLink activeStyle={activeNavStyle} exact to='/timer'>
        Timer
      </NavLink>
      <NavLink activeStyle={activeNavStyle} exact to='/fetch'>
        Fetch
      </NavLink>
      <NavLink activeClassName='active-nav-styling' exact to='/memo'>
        Memo
      </NavLink>
      <NavLink activeClassName='active-nav-styling' exact to='/measure'>
        Measure
      </NavLink>
      <NavLink activeClassName='active-nav-styling' exact to='/custom'>
        Custom Fetch
      </NavLink>
      <NavLink activeClassName='active-nav-styling' exact to='/about'>
        About
      </NavLink>
      <NavLink
        activeClassName='active-nav-styling'
        exact
        to='/user/Kasper/Sonne'
      >
        User: Kasper Sonne
      </NavLink>
    </nav>
  );
};

export default Nav;
