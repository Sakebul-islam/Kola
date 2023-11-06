import { createBrowserRouter } from 'react-router-dom';

import Root from '../components/Root';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
