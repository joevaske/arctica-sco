import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogoWhite from '../../images/logos/Logo-White.png';
import sorgerLogo from '../../images/logos/Logo-Sorger.png';
import './FooterOne.scss';

const FooterOne = () => {
  return (
    <div className='footer-one'>
      <Link to='#home'>
        <img
          className='footer-one__logo'
          src={footerLogoWhite}
          alt='Arctica Logo'
        />
      </Link>
      <h3>Division of </h3>
      <a href='https://sorger.co/' target='_blank' rel='noreferrer'>
        <img
          className='footer-one__logo-sorger'
          src={sorgerLogo}
          alt=' Division of Sorger&#38;Co'
        />
      </a>
    </div>
  );
};

export default FooterOne;
