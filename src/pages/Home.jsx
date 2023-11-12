import { Helmet } from 'react-helmet-async';
import AboutUs from '../components/AboutUs';
import FeaturedFoods from '../components/FeaturedFoods';
import MapSection from '../components/MapSection';
import Newsletter from '../components/Newsletter ';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kσʅα | HOME </title>
      </Helmet>
      <Slider />
      <AboutUs />
      <FeaturedFoods />
      <Newsletter />
      <MapSection />
    </>
  );
};

export default Home;
