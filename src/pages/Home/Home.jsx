import React from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct';
import Categories from '../../components/Categories/Categories';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type="featured" />
      <Categories />
      <FeaturedProduct type="trending" />
      <Contacts />
    </div>
  );
};

export default Home;
