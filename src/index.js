import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Root from './Root';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter  basename="/">
            <Routes>
              <Route path='/*' element={<Root />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);