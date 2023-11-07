import axios from 'axios';
import FoodCard from './FoodCard/FoodCard';

import { useQuery } from '@tanstack/react-query';

const FeaturedFoods = () => {
  const getFoods = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  });

  const foods = data?.data;

  const loader = (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <div className='w-16 h-16 border-t-[6px] border-lime-500 border-solid rounded-full animate-spin'></div>
    </div>
  );

  return (
    <div className='my-14 p-4'>
      <h2 className='text-center font-bold text-4xl mb-10'>Featured Foods</h2>
      {isLoading ? (
        loader
      ) : (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {isLoading
            ? loader
            : foods.map((food) => <FoodCard key={food._id} food={food} />)}
        </div>
      )}
    </div>
  );
};

export default FeaturedFoods;
