import React from 'react';
import AdvertisedItems from '../Advertisements/AdvertisedItems';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import InfoCards from '../InfoCards/InfoCards';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Categories></Categories>
            <InfoCards></InfoCards>
            <AdvertisedItems></AdvertisedItems>
            <Brands></Brands>
        </div>
    );
};

export default Home;