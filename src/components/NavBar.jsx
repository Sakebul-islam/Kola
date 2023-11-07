'use client';

import { Navbar } from 'flowbite-react';

import kola from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Manus from './Manus';
import { TfiMenu } from 'react-icons/tfi';
import { useState } from 'react';

import UserData from '../components/UserData';
const NavBar = () => {
  const [droyer, setDroyer] = useState(false);

  const handleDroyer = () => {
    setDroyer(!droyer);
  };

  return (
    <Navbar fluid rounded className='shadow-md overflow-hidden'>
      <NavLink to='/' className='w-auto'>
        <img src={kola} className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
      </NavLink>
      <Manus droyer={droyer} handleDroyer={handleDroyer} />
      <div
        className={`lg:hidden ${
          droyer ? 'translate-x-0' : '-translate-x-full'
        } absolute w-full h-full top-[60px] left-0 bg-neutral-100 opacity-50 z-[2]`}
        onClick={handleDroyer}
      ></div>
      <div className='flex justify-center items-center gap-4'>
        <UserData />
        <div onClick={handleDroyer} className='lg:hidden'>
          <TfiMenu className='text-2xl cursor-pointer select-none' />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
