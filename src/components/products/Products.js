import React from 'react';
import productOne from '../../images/visuals/Mobile-1.png';
import productTwo from '../../images/visuals/Mobile-2.png';
import productThree from '../../images/visuals/Mobile-3.png';
import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      <img className='render-1' src={productOne} alt='Mobile One' />
      <img className='render-2' src={productTwo} alt='Mobile Two' />
      <img className='render-3' src={productThree} alt='Mobile Three' />
    </div>
  );
};

export default Products;
