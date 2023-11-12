'use client';
import { Card } from 'flowbite-react';
import { Avatar } from 'flowbite-react';

import './FoodCard.css';

import formatDate from '../../utils/formatDate ';
import { useNavigate } from 'react-router';

const FoodCard = ({ food }) => {
  const navigate = useNavigate();
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

  const handleViewDetails = () => {
    navigate(`/food/${_id}`);
  };
  return (
    <Card
      className='w-full !rounded-[0px]'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc={foodImage}
      title={foodName}
    >
      <h5
        className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate capitalize'
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
        <span className='font-normal'>{formatDate(expiredDateTime)}</span>
      </h3>
      <h3 className='text-sm font-semibold'>
        Additional Notes :&nbsp;
        <span className='font-normal'>{additionalNotes}</span>
      </h3>
      <div className='flex justify-center items-center mt-4'>
        <button
          className='w-full sm:w-4/5 md:w-4/12 lg:w-4/5 rounded-sm bg-lime-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-700 scale-100 hover:scale-95 active:scale-95 duration-200'
          onClick={handleViewDetails}
        >
          View Detail
        </button>
      </div>
    </Card>
  );
};

export default FoodCard;
