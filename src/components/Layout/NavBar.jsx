import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const { user, logoutUser } = useAuth();
  console.log(user);
  return (
    <>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          `btn rounded-sm text-black bg-white border-0 hover:bg-orange-600 hover:text-white ${
            isActive && '!bg-red-500 !text-white'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to='/services'
        className={({ isActive }) =>
          `btn rounded-sm text-black bg-white border-0 hover:bg-orange-600 hover:text-white ${
            isActive && '!bg-red-500 !text-white'
          }`
        }
      >
        Services
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) =>
          `btn rounded-sm text-black bg-white border-0 hover:bg-orange-600 hover:text-white ${
            isActive && '!bg-red-500 !text-white'
          }`
        }
      >
        Contact
      </NavLink>
      {user?.email ? (
        <button
          className='btn rounded-sm text-black bg-white border-0 hover:bg-orange-600 hover:text-white'
          onClick={logoutUser}
        >
          Logout
        </button>
      ) : (
        <NavLink
          to={`/login`}
          className={({ isActive }) =>
            `btn rounded-sm text-black bg-white border-0 hover:bg-orange-600 hover:text-white ${
              isActive && '!bg-red-500 !text-white'
            }`
          }
        >
          Login
        </NavLink>
      )}
    </>
  );
};

export default NavBar;
