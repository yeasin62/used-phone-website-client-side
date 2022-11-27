import React from 'react';
import Categories from './Categories/Categories';
import HomeBanner from './HomeBanner/HomeBanner';
import Promo from './Promo/Promo';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <Promo></Promo>
        </div>
    );
};

export default Home;