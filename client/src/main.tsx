import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ScreenLoader, FallBack as Offline } from './components/browser/dom-states';
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import Wrappers from './wrappers/Wrappers';
import { UsePageLoading, useOnlineStatus } from './hooks/index';
import App from './App';
import './globals.css';
import './globals.scss';

const RootLayout = () => {
  const isLoading = UsePageLoading();
  const isOnline = useOnlineStatus();

  return (
    <>
      {isLoading && <ScreenLoader />}
      {!isLoading && isOnline && (
        <React.StrictMode>
          <ErrorHandlerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ErrorHandlerProvider>
        </React.StrictMode>
      )}
      {!isLoading && !isOnline && <Offline />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Wrappers>
    <RootLayout />
  </Wrappers>,
);
