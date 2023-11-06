import { Link, useRouteError } from 'react-router-dom';

import { FcHome } from 'react-icons/fc';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div
      id='error-page'
      className='w-full h-screen flex flex-col justify-center items-center bg-gray-300 space-y-7'
    >
      <h1 className='text-5xl font-bold -mb-3 text-red-600'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <ul className='text-center space-y-1'>
        <li>{error.error.message}</li>
        <li className='text-2xl font-extrabold'>
          <span className='text-red-600'>{error.status}&nbsp;</span>
          Page {error.statusText}
        </li>
      </ul>
      <Link
        to={'/'}
        className='px-12 py-2 bg-slate-500 rounded text-2xl font-bold'
      >
        <FcHome className='text-6xl' />
      </Link>
    </div>
  );
};

export default ErrorPage;
