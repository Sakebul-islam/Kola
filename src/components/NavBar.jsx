'use client';

import {  Dropdown, Navbar } from 'flowbite-react';

import kola from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Manus from './Manus';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar fluid rounded className='shadow-md'>
      <NavLink to='/' className='md:w-14 lg:w-auto'>
        <img src={kola} className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
      </NavLink>
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={<FaRegUserCircle className='text-3xl'/>}
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
