'use client';

import { Card } from 'flowbite-react';

import { Avatar } from 'flowbite-react';

import './FoodCard.css';

const FoodCard = () => {
  return (
    <Card
      className='w-full !rounded-none'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc='https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=640&q=75'
    >
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate'>
        Fruit Salad
      </h5>

      <Avatar
        img='https://www.flowbite-react.com/images/people/profile-picture-5.jpg'
        title='Jese Leos'
        className='justify-start items-start border-y py-1 border-lime-500 border-dashed cursor-pointer !rounded-none'
        rounded
        bordered
      >
        <div className='space-y-1 font-medium dark:text-white'>
          <div>Jese Leos</div>
        </div>
      </Avatar>
      <h3 className='text-sm font-semibold'>
        Food Quantity :&nbsp;<span className='font-normal'>4</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Pickup Location :&nbsp;
        <span className='font-normal'>1717 Willow Lane</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Expired Date/Time :&nbsp;
        <span className='font-normal'>2023-12-16 19:00:00</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Additional Notes :&nbsp;
        <span className='font-normal'>
          Delicious pizza with various toppings.
        </span>
      </h3>
      <button className='inline-flex justify-center items-center rounded-sm bg-lime-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-700 mt-4'>
        View Detail
      </button>
    </Card>
  );
};

export default FoodCard;
