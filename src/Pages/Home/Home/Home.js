import React from 'react';
import Banner from '../Banner/Banner';
import Best from '../Best/Best';
import Cards from '../Cards/Cards';
import Offer from '../Offer/Offer';
import Comment from '../Comment/Comment';
import Reviews from '../../Reviews/Reviews';
import OurTeam from '../OurTeam/OurTeam';







const Home = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <Reviews></Reviews>
            <Offer/>
           <OurTeam></OurTeam>
            <Best/>
        
            <Comment/>
        </div>
    );
};

export default Home;