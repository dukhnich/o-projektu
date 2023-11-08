import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { Dukhnich } from './pages/Dukhnich';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './global.css';

const router = createBrowserRouter([
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
        path: 'dukhnich',
        element: <Dukhnich />,
      },
      {
        path: 'chijko',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <ErrorPage />
      },
      // {
      //   path: 'centers/:id',
      //   element: <CenterDetails />,
      // },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);