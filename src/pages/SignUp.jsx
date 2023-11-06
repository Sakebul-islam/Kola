'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

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

    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    e.target.photo.value = '';
  };

  return (
    <div className='flex justify-center items-center min-h-screen h-auto py-10 px-2 mx-auto w-full md:w-5/6 lg:w-2/6'>
      <Card className='w-full'>
        <h1 className='text-center font-bold text-3xl'>SignUp Form</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSignUp}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Your Name' />
            </div>
            <TextInput
              id='name'
              type='text'
              name='name'
              placeholder='Your Name'
              required
            />
          </div>
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
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='photo' value='Photo URL' />
            </div>
            <TextInput id='photo' type='text' name='PhotoURL' required />
          </div>
          <Button type='submit' className='bg-lime-600 hover:!bg-lime-700'>
            Submit
          </Button>
        </form>
        <p className='text-center py-4 block'>
          Login your account&nbsp;&nbsp;
          <Link to='/signin' className='font-bold text-blue-600'>
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;
