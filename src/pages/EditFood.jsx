import { useLocation, useNavigate, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const EditFood = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getFoods = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods/${id}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  });
  const food = data?.data;

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const { mutate } = useMutation({
    mutationKey: ['addFood'],
    mutationFn: (foodInfo) => {
      return axios.put(`/api/v1/foods/${id}`, foodInfo);
    },
  });
  const handleAddFood = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Food Adding...');
    const updatedInco = {
      foodName: e.target.foodName.value,
      foodImage: e.target.foodImage.value,
      foodQuantity: e.target.foodQuantity.value,
      pickupLocation: e.target.pickupLocation.value,
      expiredDateTime: food?.expiredDateTime,
      additionalNotes: e.target.additionalNotes.value,
      donatorName: e.target.donatorName.value,
      donatorImage: e.target.donatorImage.value,
      donatorEmail: e.target.donatorEmail.value,
    };
    mutate(updatedInco);
    navigate(location.state);
    toast.success('Food add Successfully', { id: toastId });
  };

  return (
    <>
      <Helmet>
        <title>Kσʅα | Edit Food </title>
      </Helmet>
      <div className='p-4 py-14 bg-neutral-100 sm:w-4/5 md:w-4/6 lg:w-2/4 mx-auto'>
        <h2 className='text-center font-bold text-4xl mb-10'>
          Update Food Info
        </h2>
        <form className='space-y-6' onSubmit={handleAddFood}>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='foodName'>
              Food Name
            </label>
            <input
              className='w-full focus:border-lime-500 ring-lime-400'
              type='text'
              id='foodName'
              name='foodName'
              defaultValue={food?.foodName}
              required
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
              name='foodImage'
              defaultValue={food?.foodImage}
              required
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='foodQuantity'>
              Food Quantity (Only Number)
            </label>
            <input
              className='w-full focus:border-lime-500 ring-lime-400'
              type='number'
              id='foodQuantity'
              name='foodQuantity'
              defaultValue={food?.foodQuantity}
              required
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
              name='pickupLocation'
              defaultValue={food?.pickupLocation}
              required
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='expiredDateTime'>
              Expired Date
            </label>
            {isLoading ? (
              ''
            ) : (
              <input
                className='w-full focus:border-lime-500 ring-lime-400'
                type='date'
                id='expiredDateTime'
                name='expiredDateTime'
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
              className='w-full focus-border-lime-500 ring-lime-400 resize-none h-28'
              id='additionalNotes'
              name='additionalNotes'
              defaultValue={food?.additionalNotes}
              required
            ></textarea>
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='donatorName'>
              Donator Name
            </label>
            <input
              className='w-full focus-border-lime-500 ring-lime-400'
              type='text'
              id='donatorName'
              name='donatorName'
              defaultValue={user?.displayName}
              readOnly
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='donatorImage'>
              Donator Image
            </label>
            <input
              className='w-full focus-border-lime-500 ring-lime-400'
              type='text'
              id='donatorImage'
              name='donatorImage'
              defaultValue={user?.photoURL}
              readOnly
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='' htmlFor='donatorEmail'>
              Donator Email
            </label>
            <input
              className='w-full focus-border-lime-500 ring-lime-400'
              type='text'
              id='donatorEmail'
              name='donatorEmail'
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div>
            <button className='mt-6 rounded-none border-2 border-lime-500 bg-duration-200 bg-lime-500 font-bold hover:bg-transparent text-white hover:text-lime-500 focus:ring-2 focus:ring-lime-300 p-3'>
              Update Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditFood;
