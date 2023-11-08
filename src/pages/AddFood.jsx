import { useMutation } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import convertDateFormat from '../utils/convertDateFormat';
import toast from 'react-hot-toast';
const AddFood = () => {
  const { user } = useAuth();

  const { mutate } = useMutation({
    mutationKey: ['addFood'],
    mutationFn: (foodInfo) => {
      return axios.post('http://localhost:5000/api/v1/foods', foodInfo);
    },
  });

  const handleAddFood = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Food Adding...');
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    const updatedExpiredDateTime = convertDateFormat(
      formDataObject.expiredDateTime
    );
    const updateFormDataObject = {
      ...formDataObject,
      expiredDateTime: updatedExpiredDateTime,
      foodStatus: 'available',
    };
    mutate(updateFormDataObject);
    toast.success('Food add Successfully', { id: toastId });
    e.target.reset();
  };

  return (
    <div className='p-4 py-14 bg-neutral-100 sm:w-4/5 md:w-4/6 lg:w-2/4 mx-auto'>
      <h2 className='text-center font-bold text-4xl mb-10'>Add Food</h2>
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
            required
          />
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label className='' htmlFor='expiredDateTime'>
            Expired Date
          </label>
          <input
            className='w-full focus:border-lime-500 ring-lime-400'
            type='datetime-local'
            id='expiredDateTime'
            name='expiredDateTime'
            required
          />
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label className='' htmlFor='additionalNotes'>
            Additional Notes
          </label>
          <textarea
            className='w-full focus-border-lime-500 ring-lime-400 resize-none h-28'
            id='additionalNotes'
            name='additionalNotes'
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
            Request Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
