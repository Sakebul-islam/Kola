import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Manus = ({ droyer, handleDroyer }) => {
  const { user } = useAuth();
  return (
    <ul
      className={`absolute gap-3 lg:flex lg:justify-end lg:items-center bg-neutral-200 lg:bg-transparent lg:static top-[60px] w-10/12 lg:w-min duration-100 h-full p-4 text-xl lg:gap z-10 ${
        droyer ? 'left-0' : '-left-full'
      }`}
    >
      <li className='block lg:inline-block'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
              isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
            }`
          }
          onClick={() => handleDroyer(!droyer)}
        >
          Home
        </NavLink>
      </li>
      <li className='block lg:inline-block'>
        <NavLink
          to='/available-foods'
          className={({ isActive }) =>
            `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
              isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
            }`
          }
          onClick={() => handleDroyer(!droyer)}
        >
          Available Foods
        </NavLink>
      </li>
      <li className='block lg:inline-block'>
        <NavLink
          to='/addfood'
          className={({ isActive }) =>
            `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
              isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
            }`
          }
          onClick={() => handleDroyer(!droyer)}
        >
          Add Food
        </NavLink>
      </li>
      <li className='block lg:inline-block'>
        <NavLink
          to='/managemyfood'
          className={({ isActive }) =>
            `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
              isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
            }`
          }
          onClick={() => handleDroyer(!droyer)}
        >
          Manage My Foods
        </NavLink>
      </li>
      <li className='block lg:inline-block'>
        <NavLink
          to='myfoodrequest'
          className={({ isActive }) =>
            `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
              isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
            }`
          }
          onClick={() => handleDroyer(!droyer)}
        >
          My Food Request
        </NavLink>
      </li>
      {user?.displayName ? (
        ''
      ) : (
        <li className='block lg:inline-block'>
          <NavLink
            to='/signin'
            className={({ isActive }) =>
              `duration-200 lg:whitespace-pre block hover:bg-lime-500 hover:text-white px-2 py-1 rounded-sm ${
                isActive ? 'bg-lime-500 text-white hover:!text-black' : ''
              }`
            }
            onClick={() => handleDroyer(!droyer)}
          >
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Manus;
