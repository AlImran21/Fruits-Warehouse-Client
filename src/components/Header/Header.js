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
        <div>
            <nav className='header'>
                <div>
                    <Link className='logo' to='/'>
                        <img height={'30px'} src={Logo} alt="" />
                        <h6 className='mt-3'>Fruit's Warehouse</h6>
                    </Link>
                </div>
                <div className='d-flex'>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    {
                        user ?
                            <button onClick={handleSignOut} className='sign-out-button'>Sign Out</button>
                            :
                            <CustomLink to='/login'>Login</CustomLink>
                    }
                </div>
            </nav>
        </div>

    );
};

export default Header;

/* 
 
*/