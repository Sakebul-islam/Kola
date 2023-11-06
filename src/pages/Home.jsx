import AboutUs from '../components/AboutUs';
import FeaturedFoods from '../components/FeaturedFoods';
import Newsletter from '../components/Newsletter ';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs/>
      <FeaturedFoods />
      <Newsletter />
    </>
  );
};

export default Home;
