'use client';

import { Avatar, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router';
import formatDate from '../utils/formatDate ';
import useAuth from '../hooks/useAuth';

const ViewDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const currentDate = new Date().toISOString().split('T')[0];

  const getFoods = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods/${id}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  });

  const food = data?.data;

  const [additionalNotes, setAdditionalNotes] = useState(food?.additionalNotes);
  const [donationMoney, setDonationMoney] = useState(food?.donationMoney);

  useEffect(() => {
    if (food) {
      setAdditionalNotes(food.additionalNotes || '');
      setDonationMoney(food.donationMoney || 0);
    }
  }, [food]);

  const formattedDate = (expiredDateTime) => {
    const dateObject = new Date(expiredDateTime);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const requestData = {
    foodName: food?.foodName,
    foodImage: food?.foodImage,
    foodId: food?._id,
    donatorEmail: food?.donatorEmail,
    donatorName: food?.donatorName,
    requestPersonEmail: user?.email,
    currentDate,
    pickupLocation: food?.pickupLocation,
    expiredDateTime: food?.expiredDateTime,
    additionalNotes,
    donationMoney: Number(donationMoney),
  };
  const { mutate } = useMutation({
    mutationKey: ['request'],
    mutationFn: (request) => {
      return axios.post('http://localhost:5000/api/v1/user/request', request);
    },
  });

  const handleRequest = () => {
    setOpenModal(false);
    mutate(requestData);
  };

  const handleChangeNodes = (e) => {
    const newNotes = e.target.value;
    setAdditionalNotes(newNotes);
  };
  const handleDonationMoney = (e) => {
    const newDonation = e.target.value;
    setDonationMoney(newDonation);
  };

  return (
    <div className='my-12 px-4 flex flex-col lg:flex-row gap-6 justify-between items-start h-full'>
      <figure className='flex-1' title={food?.foodName}>
        <img src={food?.foodImage} alt={food?.foodName} />
      </figure>
      <div className='w-full flex-1 flex flex-col gap-6 lg:gap-16'>
        <div className='space-y-2'>
          <h2 className='text-lg md:text-3xl xl:text-4xl font-bold'>
            Food Name :&nbsp;
            <span className='font-medium'>{food?.foodName}</span>
          </h2>
          <h2 className='text-lg md:text-2xl font-bold'>
            Food Quantity :&nbsp;
            <span className='font-medium'>{food?.foodQuantity}&nbsp;item</span>
          </h2>
          <h2 className='text-lg md:text-xl font-bold'>
            Expired Date/Time : &nbsp;
            <span className='font-medium'>
              {formatDate(food?.expiredDateTime)}
            </span>
          </h2>
        </div>
        <div className=''>
          <Avatar
            img={food?.donatorImage}
            rounded
            className='border-y border-lime-500 border-dashed flex justify-start my-3 py-2 lg:w-2/4'
          >
            <div className='space-y-1 font-medium dark:text-white'>
              <div>{food?.donatorName}</div>
            </div>
          </Avatar>
          <div>
            <button
              className='mt-6 rounded-none border-2 border-lime-500 bg-duration-200 bg-lime-500 font-bold hover:bg-transparent text-white hover:text-lime-500 focus:ring-2 focus:ring-lime-300 p-3'
              onClick={() => setOpenModal(true)}
            >
              Request Food
            </button>
            <Modal
              dismissible
              show={openModal}
              size='md'
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <form className='space-y-6'>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='foodName'>
                      Food Name
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='text'
                      id='foodName'
                      defaultValue={food?.foodName}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='foodImage'>
                      Food Image
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='text'
                      id='foodImage'
                      defaultValue={food?.foodImage}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='_id'>
                      Food ID
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='text'
                      id='_id'
                      defaultValue={food?._id}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='donatorEmail'>
                      Donator Email
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='email'
                      id='donatorEmail'
                      defaultValue={food?.donatorEmail}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='donatorName'>
                      Donator Name
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='text'
                      id='donatorName'
                      defaultValue={food?.donatorName}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='userEmail'>
                      User Email
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='email'
                      id='userEmail'
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='requestDate'>
                      Request Date
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='date'
                      id='requestDate'
                      defaultValue={currentDate}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='pickupLocation'>
                      Pickup Location
                    </label>
                    <input
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='text'
                      id='pickupLocation'
                      defaultValue={food?.pickupLocation}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='expiredDateTime'>
                      Expired Date
                    </label>
                    {isLoading && (
                      <input
                        className='w-full focus:border-lime-500 ring-lime-400'
                        type='date'
                        id='expiredDateTime'
                        defaultValue={formattedDate(food?.expiredDateTime)}
                        readOnly
                      />
                    )}
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='additionalNotes'>
                      Additional Notes
                    </label>
                    <textarea
                      name='additionalNotes'
                      id='additionalNotes'
                      className='w-full focus:border-lime-500 ring-lime-400 resize-none h-28'
                      value={food?.additionalNotes}
                      onChange={handleChangeNodes}
                    ></textarea>
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='' htmlFor='donationMoney'>
                      Donation Money (Number Only)
                    </label>
                    <input
                      name='donationMoney'
                      className='w-full focus:border-lime-500 ring-lime-400'
                      type='number'
                      id='donationMoney'
                      value={donationMoney}
                      onChange={handleDonationMoney}
                      required
                    />
                  </div>
                </form>
                <button
                  className='mt-6 rounded-none border-2 border-lime-500 bg-duration-200 bg-lime-500 font-bold hover:bg-transparent text-white hover:text-lime-500 focus:ring-2 focus:ring-lime-300 p-3'
                  onClick={handleRequest}
                >
                  Request Food
                </button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
