import React from 'react';
import Banner2 from '../../images/banner2.webp';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className='container d-flex justify-content-between py-5 about-us-container'>
            <div className='about-us-image'>
                <img src={Banner2} alt="" />
            </div>
            <div className='about-text'>
                <h6>About Us</h6>
                <h2>We Provide You the <br /> Best Experience</h2>
                <p>Planning, designing, and building a modern <br /> warehouse presents a major problem for <br /> fruit and vegetable wholesalers. Decisions made <br /> prior to construction can have a lasting effect <br /> on costs and on efficiency of operations.</p>
                <p>The Agricultural Marketing Service undertook <br /> an engineering research program dealing <br /> with these problems.</p>
                <button className='about-read-more-button'>Read More</button>
            </div>
        </div>
    );
};

export default AboutUs;