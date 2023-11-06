import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center bg-neutral-200'>
        <span className='loading loading-bars loading-lg'></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={location.pathname} />;
};

export default PrivateRoute;
