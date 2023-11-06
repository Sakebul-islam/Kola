'use client';

import { Carousel } from 'flowbite-react';
import slide1 from '../assets/images/slider/slide1.png';
import slide2 from '../assets/images/slider/slide2.png';
import slide3 from '../assets/images/slider/slide3.png';
import slide4 from '../assets/images/slider/slide4.png';
import slide5 from '../assets/images/slider/slide5.png';
import slide6 from '../assets/images/slider/slide6.png';
import slide7 from '../assets/images/slider/slide7.png';
import slide8 from '../assets/images/slider/slide8.png';

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
        <div className='bg-[#86ba09] h-full w-full flex justify-center items-center'>
          <img src={slide4} className='w-2/4' alt='...' />
        </div>
        <div className='bg-[#f16014] h-full w-full flex justify-center items-center'>
          <img src={slide5} className='w-2/4' alt='...' />
        </div>
        <div className='bg-[#572725] h-full w-full flex justify-center items-center'>
          <img src={slide6} className='w-2/4' alt='...' />
        </div>
        <div className='bg-[#5e9407] h-full w-full flex justify-center items-center'>
          <img src={slide7} className='w-2/4' alt='...' />
        </div>
        <div className='bg-[#ecc192] h-full w-full flex justify-center items-center'>
          <img src={slide8} className='w-2/4' alt='...' />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
