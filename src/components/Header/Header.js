import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import Logo from '../../images/logo.webp';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='logo'>
                    <img src={Logo} alt="" />
                    <h6 className='mt-3'>Fruit's Warehouse</h6>
                </div>
                <div className='d-flex'>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    <CustomLink to='/login'>Login</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;