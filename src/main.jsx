import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AuthProvider from './providers/AuthProvider';
import { RouterProvider } from 'react-router';
import routes from './Routes/routes';
import { Toaster } from 'react-hot-toast';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
