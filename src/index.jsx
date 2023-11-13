import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { Dukhnich } from './pages/Dukhnich';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Chuiko } from './pages/Chuiko'

import './global.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/dukhnich',
        element: <Dukhnich />,
      },
      {
        path: '/chuiko',
        element: <Chuiko />,
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);