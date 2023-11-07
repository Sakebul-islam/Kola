'use client';

import { Card } from 'flowbite-react';

import { Avatar } from 'flowbite-react';

import './FoodCard.css';

const FoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    donatorName,
    donatorImage,
    expiredDateTime,
    pickupLocation,
    additionalNotes,
  } = food;
  return (
    <Card
      className='w-full !rounded-none'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc={foodImage}
      title={foodName}
    >
      <h5
        className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate'
        title={foodName}
      >
        {foodName}
      </h5>

      <Avatar
        img={donatorImage}
        title={donatorName}
        className='justify-start items-start border-y py-1 border-lime-500 border-dashed cursor-pointer !rounded-none'
        rounded
        bordered
      >
        <div className='space-y-1 font-medium dark:text-white'>
          <div>{donatorName}</div>
        </div>
      </Avatar>
      <h3 className='text-sm font-semibold'>
        Food Quantity :&nbsp;<span className='font-normal'>{foodQuantity}</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Pickup Location :&nbsp;
        <span className='font-normal'>{pickupLocation}</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Expired Date/Time :&nbsp;
        <span className='font-normal'>{expiredDateTime}</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Additional Notes :&nbsp;
        <span className='font-normal'>{additionalNotes}</span>
      </h3>
      <button className='inline-flex justify-center items-center rounded-sm bg-lime-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-700 mt-4'>
        View Detail
      </button>
    </Card>
  );
};

export default FoodCard;
