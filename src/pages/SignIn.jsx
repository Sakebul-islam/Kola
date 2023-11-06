'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {FcGoogle} from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email) {
      setFormData((prevData) => ({
        ...prevData,
        email,
      }));
    }
    if (password) {
      setFormData((prevData) => ({
        ...prevData,
        password,
      }));
    }
  };

  console.log(formData);
  return (
    <div className='flex justify-center items-center min-h-screen h-auto py-10 px-2 mx-auto w-full md:w-5/6 lg:w-2/6'>
      <Card className='w-full'>
        <h1 className='text-center font-bold text-3xl'>LogIn Form</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSignIn}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email1' value='Your Email' />
            </div>
            <TextInput
              id='email1'
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password1' value='Your Password' />
            </div>
            <TextInput
              id='password1'
              type='password'
              name='password'
              required
            />
          </div>
          <Button type='submit' className='bg-lime-600 hover:!bg-lime-700'>
            Submit
          </Button>
        </form>
        <div>
          <p className='text-center py-4 block'>
            Create a new account&nbsp;&nbsp;
            <Link to='/signup' className='font-bold text-blue-600'>
              Sign Up
            </Link>
          </p>
          <div className='border-t border-gray-300 text-center'></div>
          <div className='py-4 text-center flex justify-center items-center gap-5'>
            <FcGoogle className='text-3xl cursor-pointer' />
            <FaGithub className='text-3xl cursor-pointer' />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
