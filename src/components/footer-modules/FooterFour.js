import React from 'react';
import Copyrights from '../copyrights/Copyrights';
import Social from '../social/Social';
import './FooterFour.scss';

const FooterFour = () => {
  return (
    <div className='footer-four'>
      <Social />
      <Copyrights />
    </div>
  );
};

export default FooterFour;
