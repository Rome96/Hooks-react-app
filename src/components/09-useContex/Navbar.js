import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
    <Link to='/' className='navbar-brand'> useContext</Link>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div className='navbar-nav'>
        <NavLink exact activeClassName='Active' to='/' className='nav-link'> Home </NavLink>
        <NavLink exact activeClassName='Active' to='/login' className='nav-link'> Login </NavLink>
        <NavLink exact activeClassName='Active' to='/about' className='nav-link'> About </NavLink>
      </div>
    </div>
  </nav>
};

export default Navbar;