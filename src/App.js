import './App.scss';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './components/loading/LoadingScreen';
import HomePage from './pages/HomePage';

import ToTop from './components/to-top/ToTop';
import Footer from './template-parts/footer/Footer';
import './App.scss';

const ProductPage = lazy(() => import('./pages/ProductPage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className='App'>
          <HomePage />
          <ProductPage />
          <ToTop />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
