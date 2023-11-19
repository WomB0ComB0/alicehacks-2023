import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/browser/dom-states/index';
import Search from './pages/search/Search';
import Auth from './pages/auth/Auth';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Header />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
