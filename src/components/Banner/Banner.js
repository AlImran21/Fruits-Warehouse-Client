import React from 'react';
import Banner1 from '../../images/banner1.webp';
import './Banner.css'


const Banner = () => {
    return (
        <div className='container d-flex justify-content-between py-5 banner-container'>
            <div className='banner-text'>
                <h6>Welcome To our Fruit's Warehouse</h6>
                <h1>Shop Online For <br /> Fresh Fruit's</h1>
                <p className='text-muted'>A fruit warehouse may have hermetically <br /> sealed or open chambers. <br /> In the latter type of chamber the fruit is packaged <br /> in cartons, sacks, or boxes. Fruit warehouses <br /> may be used for only one type of fruit <br /> (pip, drupe, grapes, citrus). Most, however, <br /> are used for various different types of fruit.</p>
                <button className='shop-now-button'>Shop Now</button>
                <button className='read-more-button'>Read More</button>
            </div>
            <div className='banner-image'>
                <img src={Banner1} alt="" />

            </div>
        </div>
    );
};

export default Banner;