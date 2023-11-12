import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyFoodRequest = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [deleteFoodId, setDeleteFoodId] = useState('');

  const getFoods = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/user/request?userEmail=${user?.email}`
    );
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ['getFoodStatus'],
    queryFn: getFoods,
  });
  const requestedFood = data?.data;

  const { mutate } = useMutation({
    mutationKey: ['getFoodStatus'],
    mutationFn: async () => {
      return axios.delete(
        `http://localhost:5000/api/v1/user/request/${deleteFoodId}`
      );
    },
    onSuccess: () => {
      toast.success('Request Delete Successfully');
      queryClient.invalidateQueries({ queryKey: ['getFoodStatus'] });
    },
  });
  console.log(requestedFood);

  const handleRemoveRequest = (food) => {
    if (food.foodStatus === 'pending') {
      setDeleteFoodId(food?._id);
      mutate();
    }
    toast.error("Food already Delivered, Request can't be Cancelable");
  };
  return (
    <>
      <Helmet>
        <title>Kσʅα | Manage Food Request</title>
      </Helmet>
      <div className='p-4 sm:p-12 py-14 bg-neutral-100 sm:w-4/5 md:w-4/6 lg:w-2/4 mx-auto'>
        <h2 className='text-center font-bold text-4xl mb-10'>
          Update Food Status
        </h2>
        {requestedFood?.length ? (
          <div className='space-y-6'>
            <ul className='grid grid-cols-1 gap-12'>
              {requestedFood?.map((food) => (
                <div key={food?._id} className='space-y-4'>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Donar Name
                    </span>
                    :<span>&nbsp;{food?.donatorName}</span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Pickup Location
                    </span>
                    :<span>&nbsp;{food?.pickupLocation}</span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Donation Amount
                    </span>
                    :<span>&nbsp;${food?.donationMoney}</span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Request Time & Date
                    </span>
                    :
                    <span>
                      &nbsp;
                      {DateTime.fromISO('2023-11-12T12:10', { zone: 'utc' })
                        .setZone('Asia/Dhaka')
                        .toLocaleString({
                          ...DateTime.DATETIME_SHORT,
                          hour12: true,
                        })}
                    </span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>Status</span>:
                    <span className='capitalize'>&nbsp;{food?.foodStatus}</span>
                    <span
                      className={`ml-5 w-2 h-2 inline-block rounded-full ${
                        food?.foodStatus === 'pending'
                          ? 'bg-red-500'
                          : 'bg-lime-500'
                      }`}
                    ></span>
                  </li>
                  <li className='text-center select-none'>
                    <button
                      className='mt-6 rounded-none border-2 border-lime-500 bg-duration-200 bg-lime-500 font-bold hover:bg-transparent text-white hover:text-lime-500 focus:ring-2 focus:ring-lime-300 p-3'
                      onClick={() => handleRemoveRequest(food)}
                    >
                      Cancel Request
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <h3 className='text-3xl text-center font-bold text-lime-400'>
            No Request Found
          </h3>
        )}
      </div>
    </>
  );
};

export default MyFoodRequest;