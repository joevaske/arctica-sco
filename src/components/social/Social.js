import React from 'react';
import behance from '../../images/social/Behance.png';
import linkedin from '../../images/social/LinkedIN.png';
import instagram from '../../images/social/Instagram.png';
import facebook from '../../images/social/Facebook.png';
import './Social.scss';

const Social = () => {
  return (
    <div className='social'>
      <img src={behance} alt='Artica Behance' />
      <img src={linkedin} alt='Artica LinkedIn' />
      <img src={instagram} alt='Artica Instagram' />
      <img src={facebook} alt='Artica Facebook' />
    </div>
  );
};

export default Social;
