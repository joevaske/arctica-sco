import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logos/Logo-Black.png';
import './Logo.scss';

const Logo = ({ color }) => {
  return (
    <div className='logo'>
      <Link to='/#home' className={color === '#fff' ? 'white' : 'black'}>
        <img src={logo} alt='Arctica Logo' />
      </Link>
    </div>
  );
};

export default Logo;
