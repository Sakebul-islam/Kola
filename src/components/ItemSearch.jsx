// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
// import Capitalize from '../utils/Capitalize';

// const ItemSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const getFoods = async () => {
//     const res =
//       await axios.get(`https://kola-server.vercel.app/api/v1/foods?foodName=${searchQuery}&sortField=expiredDateTime&sortOrder=${sortOrder}
//     `);
//     return res;
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ['foods', sortOrder, searchQuery],
//     queryFn: getFoods,
//   });

//   return (
//     <div className='mb-12 flex justify-center items-center'>
//       <div className='flex-[2]'>
//         <select
//           name='category'
//           id='category'
//           className='w-full border-r-transparent rounded-l-md'
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value='asc'>A to Z</option>
//           <option value='desc'>Z to A</option>
//         </select>
//       </div>
//       <div className='flex-[7]'>
//         <label htmlFor='search'></label>
//         <input
//           id='search'
//           name='search'
//           type='text'
//           placeholder='Search Food...'
//           className='w-full border-r-0'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(Capitalize(e.target.value))}
//         />
//       </div>
//       <button className='bg-lime-500 text-2xl px-3 py-[10px] rounded-r-md'>
//         <ImSearch className='text-white' />
//       </button>
//     </div>
//   );
// };

// export default ItemSearch;
