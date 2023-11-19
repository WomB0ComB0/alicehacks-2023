import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/browser/dom-states';
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import Wrappers from './wrappers/Wrappers';
import App from './App';
import './globals.css';
import './globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorHandlerProvider>
      <Router>
        <Wrappers>
            <Routes>
              <Route path={'/'} element={<App />} />
              <Route path={'/*'} element={<NotFound />} />
            </Routes>
        </Wrappers>
      </Router>
    </ErrorHandlerProvider>
  </React.StrictMode>,
);
