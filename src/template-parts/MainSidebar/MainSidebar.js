import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { HashLink as Link } from 'react-router-hash-link';
import scrollAnimation from '../../images/lotie-files/scroll-down.json';

import './MainSidebar.scss';

const MainSidebar = ({ pageNumber, color, link }) => {
  const anime = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: scrollAnimation,
    });
    return () => lottie.stop();
    // Logic goes here
  }, []);

  return (
    <div className='main-sidebar'>
      <div className='page-number'>
        <Link to={link} style={{ color: color }}>
          {pageNumber}
        </Link>
      </div>
      <div
        className='verical-line mobile-invisible'
        style={{ backgroundColor: color }}
      ></div>
      <div
        className='scroll-icon mobile-invisible'
        style={{ borderColor: color }}
      >
        <Link to={link}>
          <span
            className={color === '#fff' ? 'white' : 'black'}
            ref={anime}
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default MainSidebar;
