import { Avatar, Dropdown } from 'flowbite-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const UserData = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user?.displayName) {
      logOut();
    }
    navigate(`${user?.displayName ? '/' : '/signin'}`);
  };
  return (
    <div className='flex justify-center items-center gap-2'>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            alt='User settings'
            img={user?.photoURL}
            rounded
            title={user?.displayName}
          />
        }
      >
        <Dropdown.Header className='' title={user?.displayName}>
          <img src={user?.photoURL} alt='' className='h-36 w-48 bg-lime-300' />
        </Dropdown.Header>
        <Dropdown.Header>
          <span className='block text-sm'>
            {user?.displayName ? user?.displayName : 'User name'}
          </span>
          <span className='block truncate text-sm font-medium'>
            {user?.email ? user?.email : 'user@email.com'}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>
          {user?.displayName ? 'Sign out' : 'Sign In'}
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserData;
