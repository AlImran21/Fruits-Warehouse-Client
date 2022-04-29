import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer>
                <h6>&copy;<span>{year}.Fruit's Warehouse.All Rights Reserved</span></h6>
            </footer>
        </div>
    );
};

export default Footer;