import { useState } from 'react';
import newsletterBg from '../assets/images/bgNewsletter.jpg';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleRemove = () => {
    setEmail('');
  };

  return (
    <div
      className='h-[500px] gap-4 bg-no-repeat flex flex-col justify-center items-center bg-cover'
      style={{ backgroundImage: `url(${newsletterBg})` }}
    >
      <h1 className='text-center text-4xl font-bold text-white'>
        Get Notified Of any Updates!
      </h1>
      <p className='text-white w-4/5 lg:w-1/4 text-center'>
        Subscribe To Our Newsletter To Be Notified About Promotion
      </p>
      <div className='w-11/12 sm:w-2/4 flex justify-center relative'>
        <input
          type='text'
          placeholder='Your email address...'
          className='border-2 w-full border-lime-500 rounded-full px-4'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='bg-lime-500 py-2 duration-200 uppercase font-bold border-2 border-lime-500 text-white hover:text-lime-500 hover:bg-white px-7 rounded-full absolute top-2/4 right-0 -translate-y-2/4'
          onClick={handleRemove}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
