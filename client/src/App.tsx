import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FallBack as Offline, ScreenLoader } from './components/browser/dom-states/index';
import Search from './pages/search/Search';
import Auth from './pages/auth/Auth';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 99999);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const AppContainer = () => {
    return (
      <>
        <Routes>
          <Route path={'/search'} element={<Search />} />
          <Route path={'/auth'} element={<Auth />} />
        </Routes>
      </>
    );
  };
  return (
    <>
      {isLoading && <ScreenLoader />}
      {!isLoading && isOnline && <AppContainer />}
      {!isLoading && !isOnline && <Offline />}
    </>
  );
};
export default App;
