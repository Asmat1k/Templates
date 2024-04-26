import { type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../../pages/home';
import { DefaultLayout } from '../../pages/layouts';

// Можно сделать не через объект
const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        path: '/'
      },
      {
        element: <div>About</div>,
        path: '/about'
      }
    ],
    element: <DefaultLayout />,
    errorElement: <div>Error element is here</div>
  }
]);

export const ReactRouterProvider: FC = () => <RouterProvider router={router} />;
