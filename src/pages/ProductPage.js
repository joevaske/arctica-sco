import React from 'react';
import Logo from '../components/logo/Logo';
import MainSidebar from '../template-parts/MainSidebar/MainSidebar';
import Products from '../components/products/Products';

import './ProductPage.scss';

const ProductPage = () => {
  const color = '#fff';
  const pageNumber = '02';
  const link = '#footer';
  return (
    <div className='product-page' id='product'>
      <Logo color={color} />
      <MainSidebar pageNumber={pageNumber} color={color} link={link} />
      <Products />
    </div>
  );
};

export default ProductPage;
