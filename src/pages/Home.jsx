import AboutUs from '../components/AboutUs';
import FeaturedFoods from '../components/FeaturedFoods';
import MapSection from '../components/MapSection';
import Newsletter from '../components/Newsletter ';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs />
      <FeaturedFoods />
      <Newsletter />
      <MapSection />
    </>
  );
};

export default Home;
