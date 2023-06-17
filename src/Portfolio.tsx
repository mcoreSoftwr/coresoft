import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/routers/AppRouter';

export const Portfolio: React.FC = () => {
  return (
    <>
      <BrowserRouter><AppRouter /></BrowserRouter>

    </>
  );
};
