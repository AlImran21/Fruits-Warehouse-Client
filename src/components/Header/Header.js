import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <nav className='header'>
            <div>
                <Link className='d-flex align-items-center logo' to='/'>
                    <img height={'30px'} src={Logo} alt="" />
                    <h6 className='ms-1 mt-2'>Fruit's Warehouse</h6>
                </Link>
            </div>
            <div className='d-flex align-items-center'>
                <CustomLink to='/'>Home</CustomLink>
                {
                    user &&
                    <>
                        <CustomLink to='/addItem'>Add</CustomLink>
                        <CustomLink to='/manageItems'>Manage</CustomLink>
                        <CustomLink to='/myItem'>Items</CustomLink>
                    </>
                }
                <CustomLink to='/blogs'>Blogs</CustomLink>
                {
                    user ?
                        <button onClick={handleSignOut} className='sign-out-button'>Sign Out</button>
                        :
                        <CustomLink className='login-link' to='/login'>Login</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;

/* 
 
*/