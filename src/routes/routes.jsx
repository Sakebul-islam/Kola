import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AvailableFoods from '../pages/AvailableFoods';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'available-foods',
        element: (
          <PrivateRoute>
            <AvailableFoods />,
          </PrivateRoute>
        ),
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
