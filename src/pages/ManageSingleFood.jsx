import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { format } from 'date-fns';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageSingleFood = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { id: foodId } = useParams();
  const queryClient = useQueryClient();
  const [updateFoodId, setUpdateFoodId] = useState('');

  const getFoods = async () => {
    const res = await axios.get(
      `/api/v1/user/request?userEmail=${user?.email}&foodId=${foodId}`
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
    mutationFn: async (updateStatus) => {
      return axios.patch(`/api/v1/user/request/${updateFoodId}`, updateStatus);
    },
    onSuccess: () => {
      toast.success('Status Update Successfully');
      queryClient.invalidateQueries({ queryKey: ['getFoodStatus'] });
    },
  });

  const handleUpdateFoodStatus = (foodInfo) => {
    if (foodInfo && foodInfo.foodStatus === 'pending') {
      setUpdateFoodId(foodInfo?._id);
      mutate({ foodStatus: 'delivered' });
    }
    if (foodInfo && foodInfo.foodStatus === 'delivered') {
      setUpdateFoodId(foodInfo?._id);
      mutate({ foodStatus: 'pending' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Kσʅα | Manage Single Food </title>
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
                  <li className='flex flex-col'>
                    <div className='mx-auto'>
                      <img
                        src={food?.requestPersonPhoto}
                        alt=''
                        className='w-[200px] h-[200px]'
                      />
                    </div>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Requester Name
                    </span>
                    :<span>&nbsp;{food?.requestPersonName}</span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Requester Email
                    </span>
                    :<span>&nbsp;{food?.requestPersonEmail}</span>
                  </li>
                  <li className=''>
                    <span className='inline-block min-w-[170px]'>
                      Request Time & Date
                    </span>
                    :
                    <span>
                      &nbsp;
                      {format(
                        new Date(food?.requestDate),
                        'MM/dd/yyyy hh:mm a'
                      )}
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
                      onClick={() => handleUpdateFoodStatus(food)}
                    >
                      Update Status
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <h3 className='text-3xl text-center font-bold text-lime-400'>
            No Food Request
          </h3>
        )}
      </div>
    </>
  );
};

export default ManageSingleFood;
