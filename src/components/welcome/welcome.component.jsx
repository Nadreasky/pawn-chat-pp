import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PawnLogo } from '../../assets/images/pawn.svg';

import './welcome.styles.scss';

const Welcome = () => (
  <div className='welcome'>
    <PawnLogo className='logo' />
    <h1 className='title'>Welcome to PAWN chat</h1>
    <p className='description'>Just a pet project of Nadreak</p>
    <div className='authorize-section'>
      <Link to='/signin' className='link'>SIGN IN</Link>
      <Link to='/signup' className='link'>SIGN UP</Link>
    </div>
  </div>
);

export default Welcome;