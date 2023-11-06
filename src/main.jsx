import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AuthProvider from './providers/AuthProvider';
import { RouterProvider } from 'react-router';
import routes from './Routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
