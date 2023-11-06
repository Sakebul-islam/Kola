import { createBrowserRouter } from 'react-router-dom';

import Root from '../components/Root';
import ErrorPage from '../pages/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
