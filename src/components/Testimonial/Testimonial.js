import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Testimonial.css'



const Testimonial = () => {
    return (
        <div className='testimonial-container py-5'>
            <div className='testimonials-text'>
                <h6>Testimonials</h6>
                <h2>What Our Customers Saying</h2>
            </div>
            <div className='container d-flex justify-content-around py-4 testimonial-card-container'>
                <div className='testimonials-card1'>
                    <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft}></FontAwesomeIcon>
                    <p>Some farmers, such as cash grain farmers or <br /> dairy farmers, have large, well-established <br /> markets. They can use existing <br /> organizations to perform the marketing <br /> function for them, or they can band <br /> together, form a cooperative, and market <br /> their products jointly.</p>
                    <p> Small-scale fruit and vegetable growers <br /> generally have more difficulty finding <br /> established markets; <br /> therefore, they usually develop marketing <br /> systems tailored to their unique situations.</p>
                    <div className='icon-container'>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                    </div>
                    <div className='pt-2'>
                        <span className='me-2 customer1-name'>Brandon Smith</span>
                        <span className='customer-job-title1'>Ceo, BSE</span>
                    </div>
                </div>
                <div className='testimonials-card2'>
                    <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft}></FontAwesomeIcon>
                    <p>You may wish to process your own fruits <br /> and vegetables. This is how many of today's <br /> processors entered the business decades ago. <br /> If you are considering a processing operation, <br /> contact your state Department of Agriculture <br /> to learn more about food regulations <br /></p>
                    <p>pertaining to the processing, packaging, <br /> and labeling of your product. <br /> It will probably be impossible for <br /> you to process and market produce <br /> at costs as low as those <br /> incurred by larger processors.<br /></p>
                    <div className='icon-container'>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                    </div>
                    <div className='pt-2'>
                        <span className='me-2 customer2-name'>Alex Hales</span>
                        <span className='customer-job-title2'>Manager, HWD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;