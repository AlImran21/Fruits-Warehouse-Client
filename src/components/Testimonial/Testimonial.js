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
            <div className='container d-flex justify-content-around py-4'>
                <div className='testimonials-card1'>
                    <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft}></FontAwesomeIcon>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit Voluptates qui ab, esse <br /> delectus, ipsa quam perferendis blanditiis tempore <br /> incidunt, quo culpa iusto illum suscipit <br /> laborum natus nihil unde sed nisi! <br /> Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Reiciendis corporis quisquam, cupiditate <br /> eum optio deleniti dolores animi officia.</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit Voluptates qui ab, esse <br /> delectus, ipsa quam perferendis blanditiis tempore <br /> incidunt, quo culpa iusto illum suscipit <br /> laborum natus nihil unde sed nisi! <br /> Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Reiciendis corporis quisquam, cupiditate <br /> eum optio deleniti dolores animi officia.</p>
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