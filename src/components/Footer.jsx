'use client';

import { Footer as Foot } from 'flowbite-react';

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import kola from '../assets/images/logo.png';

const Footer = () => {
  return (
    <Foot>
      <div className='w-full'>
        <div className='grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
          <div>
            <Link to={'/'}>
              <img src={kola} alt='kola' title='kola' />
            </Link>
          </div>
          <div>
            <Foot.Title title='Company' />
            <Foot.LinkGroup col>
              <Link to='#'>About</Link>
              <Link to='#'>Careers</Link>
              <Link to='#'>Brand Center</Link>
              <Link to='#'>Blog</Link>
            </Foot.LinkGroup>
          </div>
          <div>
            <Foot.Title title='help center' />
            <Foot.LinkGroup col>
              <Link to='https://discord.com/' target='_blank'>
                Discord Server
              </Link>
              <Link to='https://twitter.com/' target='_blank'>
                Twitter
              </Link>
              <Link to='https://www.facebook.com/' target='_blank'>
                Facebook
              </Link>
              <Link to='#'>
                Contsct Us
              </Link>
            </Foot.LinkGroup>
          </div>
          <div>
            <Foot.Title title='download App' />
            <Foot.LinkGroup col>
              <Link to='https://www.apple.com/app-store/' target='_blank'>
                iOS
              </Link>
              <Link to='https://play.google.com/' target='_blank'>
                Android
              </Link>
              <Link to='https://apps.microsoft.com/' target='_blank'>
                Windows
              </Link>
              <Link
                to='https://apps.apple.com/us/genre/mac/id39'
                target='_blank'
              >
                MacOS
              </Link>
            </Foot.LinkGroup>
          </div>
        </div>
        <div className='w-full bg-gray-600 px-4 py-6 sm:flex sm:items-center sm:justify-between'>
          <Link to='/' className='text-gray-300' title='Flowbite™'>
            &copy; 2022 Flowbite™
          </Link>
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Link
              to='https://www.facebook.com/'
              target='_blank'
              className='text-white'
            >
              <BsFacebook />
            </Link>
            <Link
              to='https://www.instagram.com/'
              target='_blank'
              className='text-white'
            >
              <BsInstagram />
            </Link>
            <Link
              to='https://twitter.com/'
              target='_blank'
              className='text-white'
            >
              <BsTwitter />
            </Link>
            <Link
              to='https://github.com/'
              target='_blank'
              className='text-white'
            >
              <BsGithub />
            </Link>
            <Link
              to='https://dribbble.com/'
              target='_blank'
              className='text-white'
            >
              <BsDribbble />
            </Link>
          </div>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
