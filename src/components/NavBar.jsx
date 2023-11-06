'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import kola from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Manus from './Manus';

const NavBar = () => {
  return (
    <Navbar fluid rounded className='shadow-md'>
      <NavLink to='/'>
        <img src={kola} className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
      </NavLink>
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Manus />
    </Navbar>
  );
};

export default NavBar;
