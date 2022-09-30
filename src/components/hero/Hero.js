import React from 'react';
//import heroImage from '../../images/hero/Hero-Image.png';
import heroImage from '../../images/hero/Hero-Image.webp';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1>
          We are Artika Studio{' '}
          <span>
            Branding &#38; <br />
            Design Agency{' '}
          </span>
        </h1>
        <h2>
          We blend creative passion, strategic insight and a firm belief in the
          power of extraordinary designs.
        </h2>
      </div>
      <div className='hero__img'>
        <img src={heroImage} alt='Arctica Studo' />
      </div>
    </div>
  );
};

export default Hero;
