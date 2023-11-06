'use client';

import { Carousel } from 'flowbite-react';
import slide1 from '../assets/images/slider/slide1.png';
import slide2 from '../assets/images/slider/slide2.png';
import slide3 from '../assets/images/slider/slide3.png';

const Slider = () => {
  return (
    <div className='h-64 sm:h-72 md:h-96 xl:!h-[550px]'>
      <Carousel className='rounded-none'>
        <div className='bg-[#86ba09] h-full w-full flex justify-center items-center'>
          <img src={slide1} className='w-2/4' alt='...' />
        </div>
        <div className='bg-[#1d232a] h-full w-full flex justify-center items-center'>
          <img src={slide2} className='w-2/4' alt='...' />
        </div>

        <div className='bg-[#d08f04] h-full w-full flex justify-center items-center'>
          <img src={slide3} className='w-2/4' alt='...' />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
