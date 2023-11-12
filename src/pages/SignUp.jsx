'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { createUser, updateProfileInfo } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    const userData = {
      displayName: name,
      photoURL,
    };

    const toastID = toast.loading('User Creating...');
    if (email) {
      setFormData((prevData) => ({
        ...prevData,
        email,
      }));
    } else if (password) {
      setFormData((prevData) => ({
        ...prevData,
        password,
      }));
    }
    createUser(email, password)
      .then((userCredential) => {
        updateProfileInfo(userData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log({ displayName: name, photoURL });
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    e.target.photo.value = '';
    navigate('/');
    toast.success('User Create Successfully', { id: toastID });
  };

  return (
    <>
      <Helmet>
        <title>Kσʅα | Sign Up </title>
      </Helmet>
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
    </>
  );
};

export default SignUp;
