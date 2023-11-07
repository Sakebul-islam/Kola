import axios from 'axios';
import FoodCard from './FoodCard/FoodCard';

import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const FeaturedFoods = () => {
  const navigate = useNavigate();
  const getFoods = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/foods?limit=6`);
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
    <div className='my-14 p-4 py-14 bg-neutral-100'>
      <h2 className='text-center font-bold text-4xl mb-10'>Featured Foods</h2>
      {isLoading ? (
        loader
      ) : (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
          {isLoading
            ? loader
            : foods.map((food) => <FoodCard key={food._id} food={food} />)}
        </div>
      )}
      <div className='flex justify-center items-center mt-12'>
        <button
          className='w-5/6 sm:w-3/12 px-4 py-3 md:py-4 text-center text-md md:text-lg font-bold text-white uppercase rounded-sm bg-lime-500 hover:bg-lime-600 focus:outline-none dark:bg-lime-500 dark:hover:bg-lime-600 transform transition-transform scale-100 hover:scale-95 active:scale-95 mt-4'
          onClick={handleShowDetails}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;
