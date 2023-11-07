import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router';

import FoodCard from '../components/FoodCard/FoodCard'

const AvailableFoods = () => {
  const navigate = useNavigate();
  const getFoods = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  });

  const foods = data?.data;

  const handleShowDetails = () => {
    navigate('/available-foods');
  };

  const loader = (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <div className='w-16 h-16 border-t-[6px] border-lime-500 border-solid rounded-full animate-spin'></div>
    </div>
  );

  return (
    <div className='p-4 py-14 bg-neutral-100'>
      <h2 className='text-center font-bold text-4xl mb-10'>All Available Foods</h2>
      {isLoading ? (
        loader
      ) : (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
          {isLoading
            ? loader
            : foods.map((food) => <FoodCard key={food._id} food={food} />)}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
