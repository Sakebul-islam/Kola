import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AvailableFoods from '../pages/AvailableFoods';
import ViewDetails from '../pages/ViewDetails';
import AddFood from '../pages/AddFood';
import ManageMyFood from '../pages/ManageMyFood';
import EditFood from '../pages/EditFood';
import ManageSingleFood from '../pages/ManageSingleFood';

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
        path: 'food/:id',
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-food',
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-my-food',
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage/:id',
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-my-food/edit/:id',
        element: (
          <PrivateRoute>
            <EditFood />
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
