import FoodCard from './FoodCard/FoodCard';

const FeaturedFoods = () => {
  return (
    <div className='my-14 p-4'>
      <h2 className='text-center font-bold text-4xl mb-10'>Featured Foods</h2>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default FeaturedFoods;
