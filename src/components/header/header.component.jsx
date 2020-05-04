import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/pawn.svg';


const Header = () => (
  <nav className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
      <span className='title'>PAWN CHAT</span>
    </Link>
    <ul className='options'>
      <li className='option'>
        <Link to='/forfun'>FOR FUN</Link>
      </li>
      <li className='option'>
        SIGN OUT
      </li>
    </ul>
  </nav>
);

export default Header;