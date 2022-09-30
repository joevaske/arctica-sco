import React from 'react';
import Hero from '../components/hero/Hero';
import Logo from '../components/logo/Logo';
import MainSidebar from '../template-parts/MainSidebar/MainSidebar';
import './HomePage.scss';

const HomePage = () => {
  const color = '#000';
  const pageNumber = '01';
  const link = '#product';
  return (
    <div className='home-page' id='home'>
      <Logo color={color} />
      <MainSidebar pageNumber={pageNumber} color={color} link={link} />
      <Hero />
    </div>
  );
};

export default HomePage;
