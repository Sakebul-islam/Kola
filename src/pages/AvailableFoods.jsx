import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import FoodCard from '../components/FoodCard/FoodCard';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import capitalize from '../utils/capitalize';
import { Helmet } from 'react-helmet-async';

const AvailableFoods = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [search, setSearch] = useState(false);

  const getFoods = async () => {
    const res =
      await axios.get(`http://localhost:5000/api/v1/foods?foodName=${capitalize(
        searchQuery
      )}&sortField=expiredDateTime&sortOrder=${sortOrder}
    `);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['foods', sortOrder, searchQuery, search],
    queryFn: getFoods,
  });

  const foods = data?.data;

  const loader = (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <div className='w-16 h-16 border-t-[6px] border-lime-500 border-solid rounded-full animate-spin'></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Kσʅα | Available Foods </title>
      </Helmet>
      <div className='p-4 py-14 bg-neutral-100'>
        <h2 className='text-center font-bold text-4xl mb-10'>
          All Available Foods
        </h2>
        <div className='mb-12 flex justify-center items-center'>
          <div className='flex-[2]'>
            <select
              name='category'
              id='category'
              className='w-full border-r-transparent rounded-l-md'
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value='desc'>Expiry Date (After)</option>
              <option value='asc'>Nearest Expiry Date</option>
            </select>
          </div>
          <div className='flex-[7]'>
            <label htmlFor='search'></label>
            <input
              id='search'
              name='search'
              type='text'
              placeholder='Search Food...'
              className='w-full border-r-0'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className='bg-lime-500 text-2xl px-3 py-[10px] rounded-r-md'
            onClick={() => setSearch(!search)}
          >
            <ImSearch className='text-white' />
          </button>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default AvailableFoods;
