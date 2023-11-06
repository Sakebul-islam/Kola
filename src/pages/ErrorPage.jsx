import { Link, useRouteError } from 'react-router-dom';

import err404 from '../assets/images/404.svg';

import { FcHome } from 'react-icons/fc';
import { useEffect } from 'react';
const ErrorPage = () => {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div
      id='error-page'
      className='w-full min-h-screen flex flex-col justify-center items-center bg-gray-300 space-y-7'
    >
      <figure className='w-full sm:w-1/3'>
        <img src={err404} alt='Error 404' />
      </figure>
      <Link
        to={'/'}
        className='px-12 py-2 bg-lime-500 rounded text-2xl font-bold'
      >
        <FcHome className='text-6xl' />
      </Link>
    </div>
  );
};

export default ErrorPage;
